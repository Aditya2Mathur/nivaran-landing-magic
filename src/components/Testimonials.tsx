import { Star } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const testimonials = [
    {
      rating: 5.0,
      text: "As someone living in a rural area, Nivaran's instant medical guidance has been invaluable. It's like having a doctor on call.",
      author: "Aditi Verma",
      title: "Patient",
      location: "Bihar",
      image: "https://via.placeholder.com/150/FFB6C1/000000?text=Aditi", // Replace with actual image URL
    },
    {
      rating: 4.8,
      text: "Nivaran helped me understand my blood work results at 2 AM when I was anxious. Saved me an unnecessary ER visit!",
      author: "Rahul Mehta",
      title: "Healthcare Professional",
      location: "Mumbai",
      image: "https://via.placeholder.com/150/ADD8E6/000000?text=Rahul", // Replace with actual image URL
    },
    {
      rating: 4.9,
      text: "The way Nivaran interpreted my lab results and explained them in simple terms was amazing. No more Google anxiety!",
      author: "Sneha Rao",
      title: "Regular User",
      location: "Bangalore",
      image: "https://via.placeholder.com/150/90EE90/000000?text=Sneha", // Replace with actual image URL
    },
  ];

  const stats = [
    { value: "1.6M+", label: "Active Users" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support" },
    { value: "100K+", label: "Medical Reports Analyzed" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by over 1.6 million users across India for better health
            decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-tr from-white/45 to-gray-50 p-6 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all border-2 border-white"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(testimonial.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="font-semibold ml-2 text-gray-700">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-400"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <p className="text-sm text-blue-500">
                    {testimonial.location}
                  </p>
                </div>
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
              <h3 className="text-3xl font-extrabold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
