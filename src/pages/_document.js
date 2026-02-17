import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-K3KT9HGS');`,
          }}
        />

        {/* --- Google Analytics 4 (New) --- */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W2H11YE46C"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W2H11YE46C');
            `,
          }}
        />
        

        {/* Primary Meta Tags */}
        <meta name="title" content="AI Platform for Data Analytics | Agentic Analytics" />
        <meta 
          name="description" 
          content="AI data analytics across the full data value chain. Sia connects sources, runs analysis with AI agents, builds models, and deploys workflows through chat." 
        />
        <meta name="keywords" content="AI analytics, data analytics platform, agentic AI, AI agents, data workflows, business intelligence, automated analytics" />
        <meta name="author" content="Sia Analytics" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Platform for Data Analytics | Agentic Analytics" />
        <meta 
          property="og:description" 
          content="AI data analytics across the full data value chain. Sia connects sources, runs analysis with AI agents, builds models, and deploys workflows through chat." 
        />
        <meta property="og:image" content="/images/hero-dashboard.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="AI Platform for Data Analytics | Agentic Analytics" />
        <meta 
          property="twitter:description" 
          content="AI data analytics across the full data value chain. Sia connects sources, runs analysis with AI agents, builds models, and deploys workflows through chat." 
        />
        <meta property="twitter:image" content="/images/hero-dashboard.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K3KT9HGS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
