
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return <section id="home" className="relative bg-portfolio-dark text-portfolio-white min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-20 h-20 rounded-full border-2 border-portfolio-orange opacity-20"></div>
        <div className="absolute bottom-20 right-40 w-40 h-40 rounded-full border-2 border-portfolio-orange opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-portfolio-orange rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 relative">
            {/* Profile Image with orange shape background */}
            <div className="relative inline-block">
              {/* Orange shape */}
              <div className="absolute -z-10 top-1/4 -left-8 w-64 h-64 rounded-full bg-portfolio-orange opacity-80"></div>
              
              {/* Profile Image - circular */}
              <div className="relative z-10 shadow-xl overflow-hidden">
                <Avatar className="w-72 h-72 border-4 border-portfolio-white">
                  <AvatarImage 
                    src="/lovable-uploads/d076a064-7aef-4dc0-81b4-10eaf8b1ab62.png" 
                    alt="Vidhya Savaliya"
                    className="object-cover mix-blend-multiply"
                    style={{ 
                      background: 'transparent',
                      isolation: 'isolate'
                    }}
                  />
                </Avatar>
              </div>
              
              {/* Decorative light bulb icons */}
              <div className="absolute -top-6 -right-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="md:order-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'M <span className="text-portfolio-orange">Vidhya Savaliya</span><br />
              
            </h1>
            
            <p className="mt-8 text-lg text-portfolio-gray max-w-lg">
              Hi, I'm Vidhya Savaliya — a passionate B.Tech IT student with a flair for digital marketing, UI/UX design, and creative problem-solving through technology.
            </p>
            
            <div className="mt-10">
              <Button className="bg-portfolio-orange hover:bg-portfolio-lightorange text-white px-6 py-6 rounded-md flex items-center gap-2">
                Explore My Work
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
