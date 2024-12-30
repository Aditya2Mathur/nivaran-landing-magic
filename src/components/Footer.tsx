import { FaFacebook, FaXTwitter , FaLinkedinIn , FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#111828] text-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nivaran AI</h3>
            <p className="text-gray-400 mb-4">
              Transforming healthcare through artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaLinkedinIn className="w-5 h-5" /> 
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/terms-conditions" className="text-gray-400 hover:text-primary transition-colors">Terms and Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">AI Consultation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Health Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">24/7 Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Nivaran AI Healthcare Incorporation</li>
              <li>E-City, 560100</li>
              <a href="mailto:shashank@healthnivaran.in"> <li >shashank@healthnivaran.in</li></a>
              <a href="tel:+919305872476"><li>+91 93058 72476</li></a>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Nivaran. All rights reserved. Made in India, for the world.</p>
          <p className="text-center mt-5 text-sm text-gray-500">Disclaimer: Nivaran is a health information platform and its responses don't constitute medical advice. Always consult with a licensed medical professional near you before making any changes.</p>
        </div>
      </div>
    </footer>
  );
};