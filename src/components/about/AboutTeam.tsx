// AboutFounder.jsx
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Img } from 'react-image';

export const AboutFounders = () => {
  // Previous data structures remain the same
  const founderStats = [
    { label: "Years Experience", value: "3+" },
    { label: "Healthcare Projects", value: "8+" },
    { label: "Team Members", value: "5+" },
    { label: "Satisfied Clients", value: "5k+" },
  ];

  const achievements = [
    {
      year: "2021",
      title: "Full-stack Developer",
      organization: "Maven Consultant and Construction Pvt. Ltd",
    },
    {
      year: "2022",
      title: "Full-stack Developer",
      organization: "PlanEasy",
    },
    {
      year: "2023",
      title: "Tech lead",
      organization: "Growth4x",
    },
  ];

  // Animation variants for the blobs
  const blobVariants = {
    initial: {
      scale: 0.8,
      opacity: 0.8,
    },
    animate: {
      scale: [0.8, 1.1, 0.8],
      opacity: [0.8, 0.6, 0.8],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-90" />

        {/* Animated Blobs */}
        <motion.div
          variants={blobVariants}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-3xl"
          style={{ transform: "translate(-50%, -50%)" }}
        />

        <motion.div
          variants={blobVariants}
          initial="initial"
          animate="animate"
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-blue-200/30 to-purple-200/30 blur-3xl"
          style={{ transform: "translate(50%, 50%)" }}
          transition={{ delay: 1 }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl"
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-l from-purple-400/10 to-blue-400/10 blur-xl"
          />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
          style={{
            maskImage:
              "radial-gradient(circle at center, transparent 50%, black 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Founder Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur-lg opacity-60" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-100 p-1">
              <Img
                src="/founder.jpg"
                alt="Founder of the company"
                className="w-full h-full object-cover rounded-xl"
                loader={<div>Loading...</div>}
              />
              </div>

              {/* Stats Grid with enhanced styling */}
              <div className="absolute -right-8 -bottom-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 max-w-xs border border-white/20"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {founderStats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="text-center group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 mt-1 group-hover:text-blue-600 transition-colors">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Title with enhanced styling */}
            <div className="space-y-4">
              <motion.h2
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
                  Making Healthcare
                </span>
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Accessible to All
                </span>
              </motion.h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Mr. Shashank Dixit, founder of Nivaran, has dedicated her career
                to revolutionizing healthcare accessibility through technology.
              </p>
            </div>

            {/* Enhanced Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg"
            >
              <Quote className="absolute -left-4 -top-4 h-8 w-8 text-blue-400 opacity-50" />
              <blockquote className="pl-8 pt-6 italic text-gray-700">
                "Our mission goes beyond providing healthcare solutions. We're
                building a future where quality healthcare is a right, not a
                privilege. Through AI and technology, we're making this vision a
                reality."
              </blockquote>
              <p className="mt-4 pl-8 font-semibold text-gray-900">
                Mr. Shashank Dixit
              </p>
              <p className="pl-8 text-sm text-gray-600">
                Founder & CEO, Nivaran Health
              </p>
            </motion.div>

            {/* Enhanced Achievements Section */}
            {/* <div className="space-y-4 pt-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/20"
                  >
                    <div className="bg-gradient-to-r border border-blue-400 px-3 py-1 rounded-full text-black font-medium">
                      {achievement.year}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{achievement.title}</div>
                      <div className="text-sm text-gray-600">{achievement.organization}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* Enhanced CTA */}
            <div className="pt-6">
              <Button className="group text-lg px-8 py-6 rounded-full bg-gradient-to-r bg-gray-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                Meet the Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Founder's Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl opacity-50" />
          <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20 shadow-lg">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Founder's Vision
              </h3>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  "When I started Nivaran, I saw a healthcare system that was
                  increasingly complex and disconnected. Many struggled to
                  navigate insurance, find the right specialists, and access
                  quality care. I knew technology could bridge these gaps.
                </p>
                <p>
                  Our AI-powered platform isn't just about convenience – it's
                  about creating a healthcare ecosystem that understands and
                  adapts to each person's unique needs. We're combining human
                  expertise with artificial intelligence to make healthcare more
                  intuitive, accessible, and effective.
                </p>
                <p>
                  Looking ahead, we're committed to pushing the boundaries of
                  what's possible in healthcare. Whether it's leveraging
                  advanced AI for early disease detection or creating more
                  personalized treatment plans, our goal remains the same:
                  making quality healthcare accessible to everyone."
                </p>
              </div>
              <p className="text-blue-600 font-semibold pt-4">
                Mr. Shashank Dixit
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFounders;
