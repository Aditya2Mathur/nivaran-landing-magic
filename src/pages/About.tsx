import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 animate-fade-up">About Nivaran AI</h1>
            
            <div className="prose prose-lg max-w-none animate-fade-up">
              <p className="text-gray-600 mb-6">
                Nivaran AI is revolutionizing healthcare through artificial intelligence. Our mission is to make quality healthcare accessible to everyone through innovative technology solutions.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To transform healthcare delivery by leveraging artificial intelligence, making it more accessible, efficient, and personalized for everyone.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                A world where quality healthcare is accessible to all, powered by intelligent technology that understands and adapts to individual needs.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Values</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-4">
                <li>Innovation in Healthcare</li>
                <li>Patient-Centric Approach</li>
                <li>Accessibility & Inclusion</li>
                <li>Data Privacy & Security</li>
                <li>Continuous Learning & Improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;