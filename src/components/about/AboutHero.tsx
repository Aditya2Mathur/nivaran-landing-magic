import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AboutHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About Nivaran AI
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Pioneering the Future of Healthcare Through Artificial Intelligence
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12"
        >
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop" 
            alt="Advanced Healthcare Technology at Nivaran AI" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/contact">Get Started Today</Link>
        </Button>
      </div>
      
      <div className="blob blob-purple"></div>
      <div className="blob blob-blue"></div>
      <div className="blob blob-pink"></div>
      
      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </section>
  );
};