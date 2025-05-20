
import { PenTool, Share2, Code } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "UI/UX Prototyping",
      description: "Creating intuitive and engaging user interfaces with a focus on exceptional user experience.",
      icon: PenTool
    },
    {
      title: "SEO & Digital Marketing",
      description: "Optimizing online presence through effective SEO strategies and comprehensive digital marketing approaches.",
      icon: Share2
    },
    {
      title: "Front-end Development",
      description: "Building responsive and interactive web interfaces using modern technologies and best practices.",
      icon: Code
    }
  ];

  return (
    <section className="py-20 bg-portfolio-dark text-portfolio-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-2">WHAT I CAN DO</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto"></div>
          <p className="text-portfolio-gray mt-6 max-w-2xl mx-auto">
            My expertise spans multiple domains, allowing me to offer versatile solutions that combine technical knowledge with creative thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-portfolio-darkgray p-8 rounded-lg hover:bg-portfolio-darkgray/80 transition-colors group relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-portfolio-orange opacity-10 rounded-full group-hover:scale-150 transition-transform"></div>
              
              <div className="w-16 h-16 bg-portfolio-dark rounded-lg flex items-center justify-center mb-6 relative z-10 group-hover:bg-portfolio-orange transition-colors">
                <service.icon className="text-portfolio-orange group-hover:text-portfolio-white transition-colors" size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-portfolio-gray">{service.description}</p>
              
              <div className="mt-6">
                <a 
                  href="#portfolio" 
                  className="text-portfolio-orange hover:text-portfolio-lightorange transition-colors flex items-center gap-1 text-sm font-medium"
                >
                  View Related Work
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
