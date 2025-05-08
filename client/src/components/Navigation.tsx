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
          Alex Morgan <span className="text-foreground">/ UX Designer</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#projects" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors"
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
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
              <a 
                href="#projects" 
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
