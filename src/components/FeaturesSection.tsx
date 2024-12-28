import { Brain, Calendar, HeartPulse, Stethoscope, Clock, MessageSquare } from "lucide-react";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-gradient-to-l from-[#fff] via-[#9ac9ff] to-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-black"
          >
            Specialised Features at Your Fingertips
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-00"
          >
            Transform your healthcare journey with our comprehensive suite of features
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={feature.title}
              className="p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-colors bg-white/80"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};