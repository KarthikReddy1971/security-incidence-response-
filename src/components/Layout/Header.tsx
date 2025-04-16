
import { Bell, Menu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">SecureResponse</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium ${isActive("/") ? "text-primary" : "hover:text-primary"}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/incidents" 
              className={`px-3 py-2 text-sm font-medium ${isActive("/incidents") ? "text-primary" : "hover:text-primary"}`}
            >
              Incidents
            </Link>
            <Link 
              to="/reports" 
              className={`px-3 py-2 text-sm font-medium ${isActive("/reports") ? "text-primary" : "hover:text-primary"}`}
            >
              Reports
            </Link>
            <Link 
              to="/settings" 
              className={`px-3 py-2 text-sm font-medium ${isActive("/settings") ? "text-primary" : "hover:text-primary"}`}
            >
              Settings
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-security-high"></span>
            </Button>
            <Button variant="outline" className="hidden md:inline-flex">
              Log In
            </Button>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 pb-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium ${isActive("/") ? "text-primary" : "hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/incidents" 
                className={`px-3 py-2 text-sm font-medium ${isActive("/incidents") ? "text-primary" : "hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Incidents
              </Link>
              <Link 
                to="/reports" 
                className={`px-3 py-2 text-sm font-medium ${isActive("/reports") ? "text-primary" : "hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Reports
              </Link>
              <Link 
                to="/settings" 
                className={`px-3 py-2 text-sm font-medium ${isActive("/settings") ? "text-primary" : "hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Settings
              </Link>
              <Button variant="outline" className="mt-2">
                Log In
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
