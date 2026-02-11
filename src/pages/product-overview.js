import ProductHeroSection from "../components/Product/ProductHeroSection";
import ProductServicesSection from "../components/Product/ProductServicesSection";
import ProductVideoSection from "../components/Product/ProductVideoSection";
import ProductFeaturesSection from "../components/Product/ProductFeaturesSection";
import ProductCtaBanner from "../components/Product/ProductCtaBanner";
import FeaturesSection from "@/components/Product/ProductUSPs";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import ProductFAQSection from "@/components/Product/ProductFAQSection";
import ProductUSPs from "@/components/Product/ProductUSPs";

export default function ProductOverview() {
  return (
    <>
      <ProductHeroSection />
      <ProductServicesSection />
      <ProductCtaBanner />
      <ProductUSPs />
      <TestimonialsSection />
      <ProductFAQSection/>
    </>
  );
}
