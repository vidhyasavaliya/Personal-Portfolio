
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "vidhyasavaliya77@gmail.com",
      link: "mailto:vidhyasavaliya77@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Surat, Gujarat, India",
      link: "https://maps.google.com/?q=Surat,Gujarat,India"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/vidhyasavaliya"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/vidhya-savaliya-92a724322/"
    },
    {
      icon: Instagram,
      title: "Instagram",
      link: "https://www.instagram.com/vidhuu_?igsh=cmt0M2x6OXE5NW9q"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-darkgray text-portfolio-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-2">CONTACT ME</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto"></div>
        </div>

        <div className="max-w-md mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's <span className="text-portfolio-orange">Connect</span></h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="flex items-start gap-4 group"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-10 h-10 rounded-full bg-portfolio-dark flex items-center justify-center group-hover:bg-portfolio-orange transition-colors">
                    <item.icon size={18} className="text-portfolio-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-portfolio-gray group-hover:text-portfolio-orange transition-colors">{item.details}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className="w-10 h-10 rounded-full bg-portfolio-dark flex items-center justify-center hover:bg-portfolio-orange transition-colors group"
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.icon size={18} className="text-portfolio-orange group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
