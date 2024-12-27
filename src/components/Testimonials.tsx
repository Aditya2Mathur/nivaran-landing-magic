import { Star } from "lucide-react";
export const Testimonials = () => {
  const testimonials = [
    {
      rating: 5.0,
      text: "As someone living in a rural area, Nivaran's instant medical guidance has been invaluable. It's like having a doctor on call.",
      author: "Aditi Verma",
      title: "Verified User"
    },
    {
      rating: 5.0,
      text: "Nivaran helped me understand my blood work results at 2 AM when I was anxious. Saved me an unnecessary ER visit!",
      author: "Rahul Mehta",
      title: "Verified User"
    },
    {
      rating: 5.0,
      text: "The way Nivaran interpreted my lab results and explained them in simple terms was amazing. No more Google anxiety!",
      author: "Sneha Rao",
      title: "Verified User"
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600">Trusted by over 1.6 million users for better health decisions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{testimonial.rating}</span>
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};