import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export const AboutHero = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  return (
    <section className="pt-32 pb-16 px-4 relative overflow-hidden h-screen">
      <div className="container mx-auto text-center relative z-10 pt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl mx-auto"
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
          className="relative h-[300px] sm:h-[300px] md:h-[600px] rounded-2xl overflow-hidden mb-1 justify-center align-center"
        >
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.button
              whileHover={{
          scale: 1.15, // Slightly larger on hover
          boxShadow:
            "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(0, 136, 255, 0.5)", // Glow effect on hover
          backgroundColor: "#EEF2FF", // Light background
              }}
              animate={{
          boxShadow: [
            "0 0 10px rgba(0, 136, 255, 0.3)",
            "0 0 20px rgba(0, 136, 255, 0.6)",
            "0 0 10px rgba(0, 136, 255, 0.3)",
          ], // Pulsating glow
              }}
              transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
          },
          scale: { type: "spring", stiffness: 100 },
          backgroundColor: { duration: 0.3 },
              }}
              onClick={() => setIsVideoVisible(true)}
              className="flex items-center justify-center gap-2 p-4 sm:p-6 text-sm sm:text-base rounded-full w-12 h-12 sm:w-16 sm:h-16 bg-white border border-gray-300 cursor-pointer"
              style={{
          outline: "none",
          position: "relative",
              }}
            >
              <FaPlay className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500" />
            </motion.button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
            alt="Advanced Healthcare Technology at Nivaran AI"
            className="w-full h-full object-cover z-0"
          />
        </motion.div>
      </div>

      <div className="blob blob-purple"></div>
      <div className="blob blob-blue"></div>
      <div className="blob blob-pink"></div>

      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <AnimatePresence>
        {isVideoVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed inset-0 bg-white/75 backdrop-blur-md flex items-center justify-center z-[9999] pointer-events-auto"
          >
    
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-3xl mx-4"
            >
               <button
              onClick={() => setIsVideoVisible(false)}
              className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 bg-white/80 rounded-full z-10"
             >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
              <div className="flex justify-center items-center h-full w-full">
                <div className="relative w-full max-w-4xl aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-[30rem] rounded-lg justify-center items-center"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
