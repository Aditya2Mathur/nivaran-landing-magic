import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-up">
            <div className="flex items-center gap-1 mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-gray-600">4.84</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">23,649 Reviews</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Personal AI<br />
              Healthcare Assistant
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Get accurate information about health issues, big and small. Book appointments with top hospitals and get 24/7 AI assistance for your healthcare needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Book Appointment</Button>
              <Button variant="outline" size="lg">Chat with AI</Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold">1.6M+</h3>
                <p className="text-gray-600">Happy Users</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">98%</h3>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-gray-600">AI Support</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 animate-fade-in">
            <img 
              src="/lovable-uploads/e6ba0869-2b0d-4ab0-97cd-1dd823f5d3f4.png" 
              alt="Nivaran AI Dashboard" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};