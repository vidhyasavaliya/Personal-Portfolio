
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Crop Recommendation System",
      category: "",
      description: "Built a supervised machine learning model to recommend suitable crops based on N, P, K, humidity, and rainfall. Used Random Forest algorithm and evaluated results using a confusion matrix.",
      image: "/placeholder.svg",
      link: "https://github.com/vidhyasavaliya/Crop-Recommendation-System"
    },
    {
      title: "Tic Tac Toe",
      category: "",
      description: "Developed a simple interactive Tic Tac Toe game using HTML, CSS, and JavaScript. The game allows two players to play in turns with dynamic UI updates, win condition logic, and real-time game state handling. Designed with a responsive layout and clean visuals to enhance the user experience. This project demonstrates fundamental front-end development skills and DOM manipulation.",
      image: "/placeholder.svg",
      link: "https://github.com/vidhyasavaliya/Tic-Tac-Toe"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-portfolio-darkgray text-portfolio-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-2">PROJECTS</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto"></div>
          <p className="text-portfolio-gray mt-6 max-w-2xl mx-auto">
            Explore my latest projects and creative works showcasing my skills in technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-portfolio-dark rounded-lg overflow-hidden transform transition-all hover:-translate-y-2">
              {/* Project Image */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-portfolio-gray/20 flex items-center justify-center">
                  <p className="text-portfolio-white text-sm font-medium">{project.title} Image</p>
                </div>
                <div className="absolute inset-0 bg-portfolio-orange/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-portfolio-orange text-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-portfolio-orange text-sm font-medium">{project.category}</span>
                  <div className="w-8 h-8 rounded-full bg-portfolio-orange/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ArrowRight size={14} className="text-portfolio-orange" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-portfolio-gray text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/vidhyasavaliya" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-portfolio-orange border-b border-portfolio-orange hover:text-portfolio-lightorange transition-colors"
          >
            View All Projects <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
