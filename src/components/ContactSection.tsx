import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">Have questions? We're here to help you 24/7</p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full space-y-6 bg-white p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Full Name" className="bg-gray-50 border-0" />
                <Input type="email" placeholder="Email Address" className="bg-gray-50 border-0" />
              </div>
              <Input placeholder="Subject" className="bg-gray-50 border-0" />
              <Textarea placeholder="Message" className="h-32 bg-gray-50 border-0" />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Send Message
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Office Address</h3>
              <p className="text-gray-600">
                Nivaran AI Healthcare Incorporation<br />
                Stanza Living, E-City<br />
                560100, Bangalore, Karnataka, India
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+919305872476" className="text-gray-600 hover:text-primary transition-colors">
                    +91 93058 72476
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:support@health.nivaran.in" className="text-gray-600 hover:text-primary transition-colors">
                    support@health.nivaran.in
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-gray-600">
                  24/7 AI Support<br />
                  Office Hours: Mon - Sat 09:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};