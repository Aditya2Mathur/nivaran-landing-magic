import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { SpecializedServices } from "@/components/SpecializedServices";
import  HealthAssistant  from "@/components/HealthAssistant";
import { BlogSection } from "@/components/BlogSection";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Helmet>
        <title>Nivaran - Your Personal AI Health Assistant</title>
        <meta name="description" content="Nivaran AI is your personal health assistant powered by artificial intelligence. Get accurate health information, book appointments, and more." />
        <meta name="keywords" content="Nivaran AI, health assistant, AI healthcare, book appointments, health information, medical AI" />
        <meta property="og:title" content="Nivaran - Your Personal AI Health Assistant" />
        <meta property="og:description" content="Nivaran AI is your personal health assistant powered by artificial intelligence. Get accurate health information, book appointments, and more." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://nivaran.ai" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nivaran - Your Personal AI Health Assistant" />
        <meta name="twitter:description" content="Nivaran AI is your personal health assistant powered by artificial intelligence. Get accurate health information, book appointments, and more." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://nivaran.ai" />
      </Helmet>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PartnersSection />
      <SpecializedServices />
      <HealthAssistant />
      <BlogSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;