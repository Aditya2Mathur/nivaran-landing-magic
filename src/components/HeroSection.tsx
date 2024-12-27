import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const partnerCards = [
  {
    title: "24/7 AI Assistance",
    description: "Get instant AI-powered healthcare support",
    logo: "/lovable-uploads/7c50b190-612b-4cd3-954f-ee18276573e9.png",
    plan: "Plan Match for BloomTech"
  },
  {
    title: "SB Diagnostics",
    description: "Smart Healthcare Rating",
    logo: "/lovable-uploads/7c50b190-612b-4cd3-954f-ee18276573e9.png",
    plan: "Plan Match for BloomTech"
  },
  {
    title: "Satyanand Hospital",
    description: "SIMA Clinical Plan",
    logo: "/lovable-uploads/7c50b190-612b-4cd3-954f-ee18276573e9.png",
    plan: "Plan Match for BloomTech"
  }
];

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-100 via-purple-50 to-white min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Personal AI<br />
            Health Assistant
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Use AI to find and manage the best health coverage for your business needs and budget.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">Book Appointment</Button>
            <Button variant="outline" size="lg">Chat with Nivaran</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {partnerCards.map((card, index) => (
            <div
              key={card.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <img src={card.logo} alt={card.title} className="w-12 h-12 rounded-lg" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                  <p className="text-primary text-sm">{card.plan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-2xl -z-10" />
    </section>
  );
};