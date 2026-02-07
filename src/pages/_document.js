import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
