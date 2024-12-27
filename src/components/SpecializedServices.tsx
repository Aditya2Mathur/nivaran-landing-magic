import { Button } from "@/components/ui/button";
import { Heart, Eye, Microscope, Ambulance } from "lucide-react";
export const SpecializedServices = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Cardiology",
      description: "Comprehensive heart care services including ECG, stress tests, and consultations with expert cardiologists.",
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Ophthalmology",
      description: "Complete eye care services including vision tests, glaucoma treatment, and cataract surgery.",
    },
    {
      icon: <Microscope className="w-8 h-8 text-primary" />,
      title: "Diagnostics",
      description: "State-of-the-art laboratory testing and imaging services including X-rays, MRI, and blood work.",
    },
    {
      icon: <Ambulance className="w-8 h-8 text-primary" />,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response teams and advanced life support.",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Specialized Healthcare Services</h2>
          <p className="text-gray-600">Comprehensive medical services tailored to your needs</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="link" className="p-0">
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">Book a Service</Button>
        </div>
      </div>
    </section>
  );
};