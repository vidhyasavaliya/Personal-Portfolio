
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-dark text-portfolio-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-portfolio-white font-bold text-2xl flex items-center">
              <span className="text-portfolio-orange">VS.</span>portfolio
            </a>
            <p className="text-portfolio-gray mt-2">B.Tech IT Student & UI/UX Enthusiast</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-portfolio-darkgray hover:bg-portfolio-orange transition-colors rounded-full flex items-center justify-center mb-4"
            >
              <ArrowUp size={18} />
            </button>
            <p className="text-portfolio-gray text-sm">
              &copy; {new Date().getFullYear()} Vidhya Savaliya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
