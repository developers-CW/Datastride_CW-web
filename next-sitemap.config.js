/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourdomain.com', // Replace with your actual domain
  generateRobotsTxt: true, // Generate robots.txt file
  generateIndexSitemap: false, // Set to true if you have more than 5000 pages
  exclude: ['/api/*'], // Exclude API routes from sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/*'],
      },
    ],
    additionalSitemaps: [
      // Add additional sitemaps if needed
      // 'https://yourdomain.com/my-custom-sitemap.xml',
    ],
  },
  // Optional: Transform function to modify sitemap entries
  transform: async (config, path) => {
    // Set custom priority and changefreq for different pages
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/blog')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('/product') || path.includes('/about')) {
      priority = 0.9;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
