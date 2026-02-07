export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, helpType, companyName, message, newsletter } = req.body;

    // Debug logging
    console.log('Received form data:', { fullName, email, phone, helpType, companyName, message, newsletter });

    // Validate required fields with detailed error messages
    const missingFields = [];
    if (!fullName || fullName.trim() === '') missingFields.push('fullName');
    if (!email || email.trim() === '') missingFields.push('email');
    if (!phone || phone.trim() === '') missingFields.push('phone');
    if (!helpType || helpType.trim() === '' || helpType === 'How can we help') missingFields.push('helpType');
    if (!companyName || companyName.trim() === '') missingFields.push('companyName');
    if (!message || message.trim() === '') missingFields.push('message');

    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: 'Missing required fields: ' + missingFields.join(', '),
        missingFields: missingFields
      });
    }

    // Get HubSpot API token from environment variables
    const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
    
    // Debug: Check if token is loaded (log only first/last few chars for security)
    console.log('Token loaded:', hubspotToken ? `${hubspotToken.substring(0, 4)}...${hubspotToken.substring(hubspotToken.length - 4)}` : 'NOT FOUND');
    
    if (!hubspotToken) {
      console.error('HUBSPOT_ACCESS_TOKEN is not configured');
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact support.' 
      });
    }

    // Split full name into first name and last name
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';

    // Prepare HubSpot lead properties
    // Map form fields to HubSpot standard properties
    const hubspotProperties = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: phone,
      company: companyName,
      // Custom property - you may need to create this in HubSpot
      help_type: helpType,
      // Store message in a note or custom property
      message: message,
      // Newsletter subscription flag
      newsletter_subscription: newsletter ? 'true' : 'false',
      // Lead-specific properties
      hs_lead_status: 'NEW',
    };

    // Make request to HubSpot Lead API
    const hubspotResponse = await fetch(
      'https://api.hubapi.com/crm/v3/objects/leads',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${hubspotToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: hubspotProperties,
        }),
      }
    );

    const responseData = await hubspotResponse.json();

    // Check if the request was successful
    if (!hubspotResponse.ok) {
      console.error('HubSpot API Error:', responseData);
      
      // Handle specific HubSpot errors
      if (hubspotResponse.status === 409) {
        // Lead already exists
        return res.status(409).json({ 
          error: 'A lead with this email already exists',
          details: responseData
        });
      }
      
      return res.status(hubspotResponse.status).json({ 
        error: 'Failed to create lead in HubSpot',
        details: responseData.message || 'Unknown error'
      });
    }

    // Successfully created lead
    return res.status(201).json({ 
      success: true,
      message: 'Lead created successfully in HubSpot',
      leadId: responseData.id,
      data: responseData
    });

  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}
