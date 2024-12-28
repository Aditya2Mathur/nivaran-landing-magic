import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-[100]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary hover:opacity-80 transition-all duration-200">
                Nivaran
              </span>
            </Link>
          </div>
          
          <nav className={`${
            isMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
            } md:opacity-100 md:translate-y-0 md:pointer-events-auto
            transition-all duration-300 ease-out
            absolute md:relative top-16 md:top-0 left-0 right-0 
            bg-white/95 md:bg-transparent p-8 md:p-0 
            rounded-3xl md:rounded-none shadow-xl md:shadow-none
            mt-2 md:mt-0 mx-4 md:mx-0 border md:border-0`}>
            <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                Contact
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                Blog
              </Link>
              <Button asChild className="md:ml-4 rounded-full hover:opacity-90 transition-all duration-200 font-medium">
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>
          </nav>
          
          <button 
            className="md:hidden p-2.5 hover:bg-gray-100 rounded-full transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};
