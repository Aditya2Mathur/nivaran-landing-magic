import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SpecializedServices } from "@/components/SpecializedServices";
import { Testimonials } from "@/components/Testimonials";
import HealthAssistant from "@/components/HealthAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection/>
        <PartnersSection />
        <SpecializedServices />
        <HealthAssistant />
        <BlogSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;