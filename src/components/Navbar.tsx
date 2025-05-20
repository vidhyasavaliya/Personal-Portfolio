
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-portfolio-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-portfolio-white font-bold text-2xl flex items-center">
            
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-portfolio-white hover:text-portfolio-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-portfolio-orange hover:bg-portfolio-lightorange text-white font-medium rounded-md">
              <a href="#contact">Let's Talk</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-portfolio-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="mt-4 py-4 md:hidden flex flex-col items-center space-y-4 bg-portfolio-darkgray rounded-lg animate-fade-in">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-portfolio-white hover:text-portfolio-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-portfolio-orange hover:bg-portfolio-lightorange text-white font-medium rounded-md w-full mt-2"
              onClick={() => setIsOpen(false)}
            >
              <a href="#contact" className="w-full">Let's Talk</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
