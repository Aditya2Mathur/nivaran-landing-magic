import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <section>
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
