import ProductHeroSection from "../components/Product/ProductHeroSection";
import ProductServicesSection from "../components/Product/ProductServicesSection";
import ProductVideoSection from "../components/Product/ProductVideoSection";
import ProductFeaturesSection from "../components/Product/ProductFeaturesSection";
import ProductCtaBanner from "../components/Product/ProductCtaBanner";
import FeaturesSection from "@/components/Home/FeaturesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import ProductFAQSection from "@/components/Product/ProductFAQSection";

export default function ProductOverview() {
  return (
    <>
      <ProductHeroSection />
      <ProductServicesSection />
      <ProductCtaBanner />
      <FeaturesSection/>
      <TestimonialsSection />
      <ProductFAQSection/>
    </>
  );
}
