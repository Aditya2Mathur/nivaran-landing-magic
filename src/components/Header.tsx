import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/8e78ff75-e716-440c-b93e-6289a4353dee.png" alt="Nivaran Logo" className="h-8" />
              <span className="text-xl font-bold text-primary">Nivaran</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-primary transition-colors">Overview</a>
            <a href="/solution" className="text-gray-600 hover:text-primary transition-colors">Solution</a>
            <a href="/plans" className="text-gray-600 hover:text-primary transition-colors">Plans</a>
            <a href="/referrals" className="text-gray-600 hover:text-primary transition-colors">Referrals</a>
            <Button>Book Appointment</Button>
          </nav>
          
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};