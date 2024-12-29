import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Satyanand Hospital",
    rating: 4.8,
    reviews: 5,
    address: "Near Vrindavan Gardens, Azizganj, Shahjahanpur",
    phone: "+91 87959 44222",
    image: "images/partners/satyanand-hospital.png"
  },
  {
    name: "SB Diagnostics",
    rating: 4.9,
    reviews: 5,
    address: "Sinzai, More, Kachcha Katra Rd, Shahjahanpur",
    phone: "+91 97214 86767",
    image: "images/partners/sb-diagnostics.png"
  },
  {
    name: "Jagmohan Lal Eye Hospital",
    rating: 5.0,
    reviews: 5,
    address: "Kachcha Katra More Rd, Sinzai, Shahjahanpur",
    phone: "+91 95065 45521",
    image: "images/partners/jagmohan-lal-eye-hospital.png"
  }
];

export const PartnersSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-gray-800"
          >
            Our Partner Hospitals & Clinics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600"
          >
            Book appointments with top healthcare facilities in your area
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={partner.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img 
                src={partner.image} 
                alt={partner.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{partner.name}</h3>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(partner.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({partner.rating}/5)</span>
                </div>
                
                <p className="text-gray-600 mb-2">{partner.address}</p>
                <p className="text-gray-600 mb-4">{partner.phone}</p>
                
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">Book Appointment</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};