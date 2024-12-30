import * as React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, Rocket, Mail, Building2, ArrowRight, Star, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <motion.div
    className="relative"
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, type: "spring" }}
  >
    <div className="w-28 h-28 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent" />
      <motion.span 
        key={value}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
      >
        {value}
      </motion.span>
    </div>
    <span className="text-gray-600 font-medium capitalize">{label}</span>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-purple-100 rounded-full scale-150 blur-xl opacity-50" />
      <Icon className="w-12 h-12 text-purple-600 relative z-10" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [email, setEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const launchDate = new Date(now + 30 * 24 * 60 * 60 * 1000).getTime();
      const distance = launchDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Add your subscription logic here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <main className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex justify-center mb-8"
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Rocket size={80} className="text-purple-600" />
            </motion.div>

            <h1 className="text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Something Amazing
              </span>
              <br />
              <span className="text-gray-800">is Coming Soon</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're crafting a revolutionary healthcare experience that will change 
              the way you think about wellness. Stay tuned!
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            className="flex justify-center space-x-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {Object.entries(timeLeft).map(([key, value]) => (
                <CountdownItem key={key} value={value} label={key} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Features Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FeatureCard
              icon={Shield}
              title="Secure Healthcare"
              description="Advanced security measures to protect your sensitive medical information"
            />
            <FeatureCard
              icon={Star}
              title="AI-Powered Care"
              description="Cutting-edge artificial intelligence for personalized healthcare solutions"
            />
            <FeatureCard
              icon={Timer}
              title="24/7 Support"
              description="Round-the-clock assistance for all your healthcare needs"
            />
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className="max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Get Notified When We Launch
              </h3>
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
                    >
                      Notify Me
                      <ArrowRight size={20} />
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 py-2"
                >
                  Thanks for subscribing! We'll keep you posted.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;