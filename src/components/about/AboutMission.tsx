import { motion } from "framer-motion";
import { Target, Heart, Brain, Globe } from "lucide-react";

export const AboutMission = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUpVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            At Nivaran AI, we envision a future where advanced artificial intelligence 
            seamlessly integrates with healthcare, making quality medical services 
            accessible and affordable for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUpVariants}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <Target className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To revolutionize healthcare through AI-powered solutions, making it more 
              accessible, accurate, and efficient for patients and healthcare providers alike.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUpVariants}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Leverage cutting-edge AI technology to enhance diagnostic accuracy</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Make healthcare accessible to communities worldwide</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};