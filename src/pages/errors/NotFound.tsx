import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-50 to-purple-50">
    <Header/>
    <motion.h1
      className="text-6xl font-bold mb-4 text-purple-600"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      404
    </motion.h1>
    <motion.p
      className="text-xl mb-8 text-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Page Not Found
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Link
        to="/"
        className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
      >
        Go back to Home
      </Link>
    </motion.div>
  </div>
);

export default NotFound;