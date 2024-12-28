import { Star } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const testimonials = [
    {
      rating: 5.0,
      text: "As someone living in a rural area, Nivaran's instant medical guidance has been invaluable. It's like having a doctor on call.",
      author: "Aditi Verma",
      title: "Patient",
      location: "Bihar"
    },
    {
      rating: 5.0,
      text: "Nivaran helped me understand my blood work results at 2 AM when I was anxious. Saved me an unnecessary ER visit!",
      author: "Rahul Mehta",
      title: "Healthcare Professional",
      location: "Mumbai"
    },
    {
      rating: 5.0,
      text: "The way Nivaran interpreted my lab results and explained them in simple terms was amazing. No more Google anxiety!",
      author: "Sneha Rao",
      title: "Regular User",
      location: "Bangalore"
    },
    {
      rating: 5.0,
      text: "The AI-powered health assistant is incredibly accurate. It's transformed how I manage my family's healthcare needs.",
      author: "Dr. Priya Kumar",
      title: "Medical Practitioner",
      location: "Delhi"
    },
    {
      rating: 5.0,
      text: "Being able to get instant medical guidance in multiple Indian languages is a game-changer for our community.",
      author: "Rajesh Patel",
      title: "Community Leader",
      location: "Gujarat"
    },
    {
      rating: 5.0,
      text: "The 24/7 availability and quick response time have made healthcare accessibility so much better for us.",
      author: "Maya Singh",
      title: "Healthcare Worker",
      location: "Pune"
    }
  ];

  const stats = [
    { value: "1.6M+", label: "Active Users" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support" },
    { value: "100K+", label: "Medical Reports Analyzed" }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600">Trusted by over 1.6 million users across India for better health decisions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="font-semibold ml-2">{testimonial.rating}</span>
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
                <p className="text-sm text-primary">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};