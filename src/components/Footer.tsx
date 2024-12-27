import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-primary">Nivaran</span>
            </a>
            <p className="text-gray-600 mb-4">
              Your trusted AI-powered healthcare assistant, available 24/7 for all your health needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-primary">Careers</a></li>
              <li><a href="/press" className="text-gray-600 hover:text-primary">Press</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-primary">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-600 hover:text-primary">Help Center</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact Us</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Singapore Office</li>
              <li className="text-gray-600">123 Healthcare Avenue</li>
              <li className="text-gray-600">contact@nivaran.com</li>
              <li className="text-gray-600">+65 7483 1750</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Nivaran AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};