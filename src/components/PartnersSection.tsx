import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  {
    name: "Satyanand Hospital",
    rating: 4.8,
    reviews: 5,
    address: "123 Healthcare Avenue, City",
    phone: "+91 1234567890",
    image: "/lovable-uploads/7c50b190-612b-4cd3-954f-ee18276573e9.png"
  },
  {
    name: "SB Diagnostics",
    rating: 4.9,
    reviews: 5,
    address: "456 Medical Plaza, City",
    phone: "+91 9876543210",
    image: "/lovable-uploads/7c50b190-612b-4cd3-954f-ee18276573e9.png"
  },
  {
    name: "Jagmohan Lal Eye Hospital",
    rating: 5.0,
    reviews: 5,
    address: "789 Eye Care Street, City",
    phone: "+91 8765432109",
    image: "/lovable-uploads/7c50b190-612b-4cd3-954f-ee18276573e9.png"
  }
];

export const PartnersSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Our Partner Hospitals & Clinics</h2>
          <p className="text-gray-600">Book appointments with top healthcare facilities in your area</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={partner.image} 
                alt={partner.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(partner.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({partner.rating}/5)</span>
                </div>
                
                <p className="text-gray-600 mb-2">{partner.address}</p>
                <p className="text-gray-600 mb-4">{partner.phone}</p>
                
                <Button className="w-full">Book Appointment</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};