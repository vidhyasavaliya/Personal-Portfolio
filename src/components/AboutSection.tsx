
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-darkgray text-portfolio-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-2">ABOUT ME</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative inline-block">
              {/* Background pattern */}
              <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full bg-portfolio-orange opacity-20"></div>
              
              {/* Profile Image (placeholder) */}
              <div className="w-full h-96 relative z-10 border-2 border-portfolio-orange shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-portfolio-gray/20 flex items-center justify-center">
                  <p className="text-portfolio-white text-sm font-medium">About Image</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">HELLO</h3>
            <h2 className="text-4xl font-bold mb-6">I'M <span className="text-portfolio-orange">VIDHYA</span></h2>
            
            <p className="text-portfolio-gray mb-6">
              I am a dedicated and enthusiastic B.Tech final year student with a strong interest in digital marketing and a passion for using technology to solve real-world problems. I am eager to explore areas such as SEO, content creation, and marketing analytics, and I am committed to continuous learning and professional growth. I bring a positive attitude, strong communication skills, and a readiness to contribute to a dynamic team.
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-portfolio-orange">Education:</h4>
              <p className="text-portfolio-gray">
                Final year B.Tech student in Information Technology at Madhuben & Bhanubhai Patel Institute of Technology, Anand.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-portfolio-orange rounded-full"></div>
                  <p className="text-portfolio-white font-medium">Email:</p>
                </div>
                <p className="text-portfolio-gray ml-4">vidhyasavaliya77@gmail.com</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-portfolio-orange rounded-full"></div>
                  <p className="text-portfolio-white font-medium">Location:</p>
                </div>
                <p className="text-portfolio-gray ml-4">Surat, Gujarat</p>
              </div>
            </div>
            
            <a 
              href="https://drive.google.com/file/d/1I0JZD9gwE1Ll9tWCCEhOvg3Or7qO6wXD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-portfolio-orange hover:bg-portfolio-lightorange text-white px-6 py-6 rounded-md">
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
