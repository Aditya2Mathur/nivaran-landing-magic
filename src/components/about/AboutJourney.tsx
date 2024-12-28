import { motion } from "framer-motion";

export const AboutJourney = () => {
  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "Nivaran AI was established with a vision to revolutionize healthcare through artificial intelligence."
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Successfully launched our first AI-powered diagnostic tools, marking a significant milestone in healthcare technology."
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Extended our services to multiple countries, helping healthcare providers worldwide leverage AI for better patient care."
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized globally for our breakthrough healthcare technology and commitment to innovation."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Journey
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center gap-8 mb-8"
            >
              <div className="w-24 text-xl font-bold text-primary">{milestone.year}</div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};