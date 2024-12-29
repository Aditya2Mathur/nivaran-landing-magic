import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store submission in Supabase
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            status: 'new'
          }
        ]);

      if (dbError) throw dbError;

      // Send emails using edge function
      const { error: emailError } = await supabase.functions.invoke('contact-form', {
        body: formData
      });

      if (emailError) throw emailError;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });

      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-36 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">Have questions? We're here to help you 24/7</p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-full flex flex-col"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg flex-grow">
              <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input 
                    placeholder="Full Name" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-gray-50 border-0" 
                    required
                  />
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    className="bg-gray-50 border-0" 
                    required
                  />
                </div>
                <Input 
                  placeholder="Subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-50 border-0" 
                  required
                />
                <Textarea 
                  placeholder="Message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex-grow bg-gray-50 border-0 min-h-[120px]" 
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full mx-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 h-full flex flex-col justify-between"
          >
            <div className="bg-white/65 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Office Address</h3>
              <p className="text-gray-600">
                Nivaran AI Healthcare Incorporation<br />
                E-City, 560100<br />
                Bangalore, Karnataka, India
              </p>
            </div>
            
            <div className="bg-white/65 p-6 rounded-xl shadow-sm">
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
                  <a href="mailto:shashank@healthnivaran.in" className="text-gray-600 hover:text-primary transition-colors">
                    shashank@healthnivaran.in
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/65 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-gray-600">
                  24/7 AI Support<br />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blob animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
        <div className="blob blob-pink"></div>
      </div>
    </section>
  );
};