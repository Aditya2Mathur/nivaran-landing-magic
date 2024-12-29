import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { FaPlay } from "react-icons/fa"; // Import Play icon

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const y1 = useTransform(scrollY, [0, 600], [0, -100], { clamp: true });
  const y2 = useTransform(scrollY, [0, 600], [0, -150], { clamp: true });
  const opacity = useTransform(scrollY, [0, 400], [1, 0], { clamp: true });

  useEffect(() => {
    if (isVideoVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden isolate px-4 sm:px-0"
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
        <div className="blob blob-pink"></div>

        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </motion.div>

      <div className="container mx-auto relative">
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto space-y-8 sm:space-y-12"
        >
          <motion.h1
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-urbanist text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight"
          >
            <span className="text-3xl sm:text-4xl font-light tracking-wide bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent animate-fade-in pt-5">
              Your Personal <span className="">AI</span>
            </span>
            <br />
            <span className="block h-7"></span> {/* Add gap */}
            <span className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-gradient">
              Health Assistant
            </span>
          </motion.h1>

          <motion.p
            style={{ y: y1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 text-base sm:text-xl max-w-2xl mx-auto px-4 sm:px-0"
          >
            Use AI to find and manage the best health coverage for your business
            needs and budget.
          </motion.p>
          <div className="flex justify-center mt-8">
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
              className="flex items-center justify-center gap-2 p-6 sm:p-8 text-base sm:text-lg rounded-full w-16 h-16 sm:w-20 sm:h-20 bg-white border border-gray-300 cursor-pointer"
              style={{
                outline: "none",
                position: "relative",
              }}
            >
              <FaPlay className="w-6 h-6 text-blue-500" />
            </motion.button>
          </div>
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0 items-center mt-8 sm:mt-12"
          >
            <Button
              size="lg"
              className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full bg-gray-900 hover:bg-gray-800 w-full sm:w-auto"
              style={{ height: '56px', width: '100%', maxWidth: '200px' }}
            >
              Book Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full w-full sm:w-auto"
              style={{ height: '56px', width: '100%', maxWidth: '200px' }}
            >
              Chat with Nivaran
            </Button>
          </motion.div>

            <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
           className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8 mt-8 sm:mt-16 px-2 sm:px-0"
            >
            <div className="bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-full shadow-lg flex items-center gap-3 hover:bg-white/90 transition-all duration-200">
              <div className="bg-green-100 p-2.5 rounded-full">
              <span className="text-2xl">🏥</span>
              </div>
              <div className="text-left">
              <p className="font-semibold text-sm sm:text-base">
                Apollo Hospitals
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Premium Healthcare Partner
              </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-full shadow-lg flex items-center gap-3 hover:bg-white/90 transition-all duration-200">
              <div className="bg-purple-100 p-2.5 rounded-full">
              <span className="text-2xl">🤖</span>
              </div>
              <div className="text-left">
              <p className="font-semibold text-sm sm:text-base">
                Smart AI Analysis
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Personalized Health Insights
              </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-full shadow-lg flex items-center gap-3 hover:bg-white/90 transition-all duration-200">
              <div className="bg-blue-100 p-2.5 rounded-full">
              <span className="text-2xl">💊</span>
              </div>
              <div className="text-left">
              <p className="font-semibold text-sm sm:text-base">
                Pharmacy Network
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                24/7 Medicine Delivery
              </p>
              </div>
            </div>
            </motion.div>
        </motion.div>
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