import React from "react";
import { motion } from "framer-motion";

const HealthAssistant: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-6 bg-gradient-to-b from-[#ffffff] to-[#9cacee21] px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Meet Your AI Health Assistant
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mt-4">
          24/7 personalized healthcare guidance powered by advanced AI
          technology.
        </p>
      </div>

      <div className="w-full md:w-4/5 flex flex-col md:flex-row gap-12 justify-center items-center">
        {/* Left Column: Feature Cards */}
        <div className="md:w-2/5 flex flex-col gap-6">
          {/* Feature Card 1 */}
          <motion.div
            className="flex items-start gap-4 bg-white shadow-lg p-6 rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="icon-1.svg"
              alt="Advanced AI Understanding Icon"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Advanced AI Understanding
              </h3>
              <p className="text-sm text-gray-600">
                Our AI understands complex medical queries and provides
                accurate, personalized responses based on verified medical
                knowledge.
              </p>
            </div>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            className="flex items-start gap-4 bg-white shadow-lg p-6 rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="icon-2.svg"
              alt="Medical Report Analysis Icon"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Medical Report Analysis
              </h3>
              <p className="text-sm text-gray-600">
                Upload your medical reports and get instant, easy-to-understand
                explanations and recommendations.
              </p>
            </div>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            className="flex items-start gap-4 bg-white shadow-lg p-6 rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="icon-3.svg"
              alt="Private & Secure Icon"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Private & Secure
              </h3>
              <p className="text-sm text-gray-600">
                Your health information is protected with enterprise-grade
                security and encryption.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Chat Section */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {/* Chat Section */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 max-w-sm mx-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="text-gray-800 text-sm">
              <p className="font-bold mb-2 text-xl">Nivaran AI Online 24/7</p>

              <div className="text-gray-800 text-sm">
                {/* AI Message (Left Aligned) */}
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg relative max-w-md text-gray-700">
                    <div className="absolute top-0 left-2 w-2.5 h-2.5 bg-gray-100 transform rotate-45 -translate-y-1/2"></div>
                    Hello! I’m your personal health assistant. How can I help
                    you today?
                  </div>
                </div>

                {/* User Message (Right Aligned, Smaller) */}
                <div className="flex justify-end mb-4">
                  <div className="bg-blue-100 p-4 rounded-lg relative max-w-xs text-gray-700">
                    <div className="absolute top-0 right-2 w-2.5 h-2.5 bg-blue-100 transform rotate-45 -translate-y-1/2"></div>
                    I have been experiencing headaches recently.
                  </div>
                </div>

                {/* AI Response (Left Aligned) */}
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg relative max-w-md text-gray-700">
                    <div className="absolute top-0 left-2 w-2.5 h-2.5 bg-gray-100 transform rotate-45 -translate-y-1/2"></div>
                    I’ll help you understand what might be causing your
                    headaches. Could you tell me more about when they occur and
                    their intensity?
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthAssistant;
