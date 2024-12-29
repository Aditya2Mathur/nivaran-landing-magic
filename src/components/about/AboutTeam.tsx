
// AboutFounder.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AboutFounders = () => {
  const founderStats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Healthcare Projects', value: '100+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Satisfied Clients', value: '10k+' },
  ];

  const achievements = [
    {
      year: '2020',
      title: 'Healthcare Innovation Award',
      organization: 'Digital Health Academy'
    },
    {
      year: '2021',
      title: 'Top 40 Under 40',
      organization: 'Business Today'
    },
    {
      year: '2022',
      title: 'Excellence in Healthcare',
      organization: 'Tech Innovation Summit'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
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
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/images/blogs/blog-1.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats Grid */}
              <div className="absolute -right-8 -bottom-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="grid grid-cols-2 gap-4">
                  {founderStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
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
            {/* Section Title */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Making Healthcare
                <span className="block text-blue-600">Accessible to All</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Dr. Sarah Mitchell, founder of Nivaran, has dedicated her career to revolutionizing healthcare accessibility through technology.
              </p>
            </div>

            {/* Founder's Quote */}
            <div className="relative">
              <Quote className="absolute -left-4 -top-4 h-8 w-8 text-blue-200" />
              <blockquote className="pl-8 pt-6 italic text-gray-700">
                "Our mission goes beyond providing healthcare solutions. We're building a future where quality healthcare is a right, not a privilege. Through AI and technology, we're making this vision a reality."
              </blockquote>
              <p className="mt-4 pl-8 font-semibold text-gray-900">Dr. Sarah Mitchell</p>
              <p className="pl-8 text-sm text-gray-600">Founder & CEO, Nivaran Health</p>
            </div>

            {/* Achievements */}
            <div className="space-y-4 pt-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-blue-50 px-3 py-1 rounded-full text-blue-600 font-medium">
                      {achievement.year}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{achievement.title}</div>
                      <div className="text-sm text-gray-600">{achievement.organization}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button
                className="group text-lg px-8 py-6 rounded-full bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300"
              >
                Meet the Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Founder's Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-blue-50 rounded-3xl p-8 sm:p-12"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Founder's Vision</h3>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                "When I started Nivaran, I saw a healthcare system that was increasingly complex and disconnected. Many struggled to navigate insurance, find the right specialists, and access quality care. I knew technology could bridge these gaps.
              </p>
              <p>
                Our AI-powered platform isn't just about convenience – it's about creating a healthcare ecosystem that understands and adapts to each person's unique needs. We're combining human expertise with artificial intelligence to make healthcare more intuitive, accessible, and effective.
              </p>
              <p>
                Looking ahead, we're committed to pushing the boundaries of what's possible in healthcare. Whether it's leveraging advanced AI for early disease detection or creating more personalized treatment plans, our goal remains the same: making quality healthcare accessible to everyone."
              </p>
            </div>
            <p className="text-blue-600 font-semibold pt-4">Dr. Sarah Mitchell</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFounders;
