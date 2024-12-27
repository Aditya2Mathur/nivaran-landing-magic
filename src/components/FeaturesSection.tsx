import { Brain, Calendar, HeartPulse, Stethoscope, Clock, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Health Q&A",
    description: "Get accurate, reassuring answers to your health questions—without the fear or confusion of endless searches."
  },
  {
    icon: Stethoscope,
    title: "Virtual Symptom Checker",
    description: "Analyze symptoms visually for faster, more accurate health assessments and relief."
  },
  {
    icon: HeartPulse,
    title: "Lab Report Analysis",
    description: "Decode your lab results and prescriptions for actionable, easy-to-understand insights."
  },
  {
    icon: MessageSquare,
    title: "Mental Health Support",
    description: "Empathetic support for you through stress, anxiety, and emotional challenges."
  },
  {
    icon: Calendar,
    title: "Easy Appointment Booking",
    description: "Schedule appointments with top hospitals seamlessly through our integrated booking system."
  },
  {
    icon: Clock,
    title: "24/7 AI Assistant",
    description: "Round-the-clock access to our AI health assistant for immediate support and guidance."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Specialised Features at Your Fingertips</h2>
          <p className="text-gray-600">Transform your healthcare journey with our comprehensive suite of features</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};