import dynamic from "next/dynamic";
import Head from "next/head";
import HeroSection from "../components/Home/HeroSection";
import FeatureCardsSection from "../components/Home/FeatureCardsSection";
import FeaturesSection from "../components/Home/FeaturesSection";

// Lazy load below-the-fold components
const IndustriesSection = dynamic(() => import("../components/Home/IndustriesSection"), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const CRMIntegration = dynamic(() => import("../components/Home/CRMIntegration"), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const TrustSection = dynamic(() => import("../components/Home/TrustSection"), {
  loading: () => <div style={{ minHeight: '300px' }} />,
});
const TestimonialsSection = dynamic(() => import("../components/Home/TestimonialsSection"), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const FAQSection = dynamic(() => import("../components/Home/FAQSection"), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Platform for Data Analytics | Agentic Analytics</title>
      </Head>
      <HeroSection />
      <FeatureCardsSection />
      <FeaturesSection />
      <TrustSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
