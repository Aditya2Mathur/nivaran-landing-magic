import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
       <Helmet>
        <title>Contact Us - Nivaran AI</title>
        <meta 
          name="description" 
          content="Get in touch with Nivaran AI for any inquiries, support, or feedback. We're here to help you with all your healthcare technology needs." 
        />
        <meta 
          name="keywords" 
          content="Nivaran AI contact, healthcare technology support, AI inquiries, medical innovation feedback" 
        />
        <meta 
          property="og:title" 
          content="Contact Us - Nivaran AI" 
        />
        <meta 
          property="og:description" 
          content="Get in touch with Nivaran AI for any inquiries, support, or feedback. We're here to help you with all your healthcare technology needs." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nivaran.ai/contact" />
      </Helmet>
      <Header />
      <section>
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
