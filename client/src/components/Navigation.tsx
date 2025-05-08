import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Samuel Mbah <span className="text-foreground">/ UX Designer</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link 
                href="/projects" 
                className={`text-foreground hover:text-primary transition-colors ${location === '/projects' ? 'text-primary font-medium' : ''}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`text-foreground hover:text-primary transition-colors ${location === '/about' ? 'text-primary font-medium' : ''}`}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link 
                href="/skills" 
                className={`text-foreground hover:text-primary transition-colors ${location === '/skills' ? 'text-primary font-medium' : ''}`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`text-foreground hover:text-primary transition-colors ${location === '/contact' ? 'text-primary font-medium' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-in slide-in-from-top">
          <ul className="container mx-auto px-4 py-3 space-y-2">
            <li>
              <Link 
                href="/projects" 
                className={`block py-2 text-foreground hover:text-primary transition-colors ${location === '/projects' ? 'text-primary font-medium' : ''}`}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`block py-2 text-foreground hover:text-primary transition-colors ${location === '/about' ? 'text-primary font-medium' : ''}`}
                onClick={handleLinkClick}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link 
                href="/skills" 
                className={`block py-2 text-foreground hover:text-primary transition-colors ${location === '/skills' ? 'text-primary font-medium' : ''}`}
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`block py-2 text-foreground hover:text-primary transition-colors ${location === '/contact' ? 'text-primary font-medium' : ''}`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
