import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="mt-20">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
