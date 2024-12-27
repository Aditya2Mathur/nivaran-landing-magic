import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">Have questions? We're here to help you 24/7</p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-40">
          <div className="w-full lg:w-1/2 animate-fade-up space-y-6">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Full Name" />
                <Input type="email" placeholder="Email Address" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Message" className="h-32" />
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 space-y-8 animate-fade-up">
            <div>
              <h3 className="text-xl font-semibold mb-4">Office Address</h3>
              <p className="text-gray-600">
                Nivaran AI Healthcare Incorporation<br />
                 Stanza Living, E-City<br />
                 560100, Bangalore, Karnataka, India
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+919305872476" className="text-gray-600">+91 93058 72476</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:support@health.nivaran.in" className="text-gray-600">support@health.nivaran.in</a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-gray-600">
                  24/7 AI Support<br />
                  Office Hours: Mon - Sat 09:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};