import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we're scrolling up or down
      if (currentScrollY > lastScrollY.current + 10) {
        setVisible(false); // Hide when scrolling down
      } else if (currentScrollY < lastScrollY.current - 10) {
        setVisible(true); // Show when scrolling up
      }
      
      // Set the scrolled state for shadow
      setScrolled(currentScrollY > 10);
      
      // Update the last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
    <header 
      className={`fixed left-0 right-0 bg-white z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      } ${
        visible ? 'top-0' : '-top-full'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Title/Brand section */}
        <div className="py-3 border-b border-gray-100">
          <Link href="/" className="block text-center md:text-left text-xl font-bold text-primary">
            Samuel Mbah 
            <span className="block mt-1 text-sm md:text-base font-medium text-gray-600">
              UX Designer | UX Researcher | ML Engineer | AI Developer
            </span>
          </Link>
        </div>
        
        {/* Navigation section */}
        <div className="py-3 flex justify-between items-center">
          <div className="w-10 md:hidden"></div> {/* Mobile spacer */}
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block mx-auto">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className={`text-foreground hover:text-primary transition-colors ${location === '/' ? 'text-primary font-medium' : ''}`}
                >
                  Home
                </Link>
              </li>
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
                  href="/data-science" 
                  className={`text-foreground hover:text-primary transition-colors ${location === '/data-science' ? 'text-primary font-medium' : ''}`}
                >
                  Data Science
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
          
          <div className="w-10 md:hidden"></div> {/* Mobile spacer for balance */}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-in slide-in-from-top">
          <ul className="container mx-auto px-4 py-3 space-y-2">
            <li>
              <Link 
                href="/" 
                className={`block py-2 text-foreground hover:text-primary transition-colors ${location === '/' ? 'text-primary font-medium' : ''}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
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
                href="/data-science" 
                className={`block py-2 text-foreground hover:text-primary transition-colors ${location === '/data-science' ? 'text-primary font-medium' : ''}`}
                onClick={handleLinkClick}
              >
                Data Science
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
