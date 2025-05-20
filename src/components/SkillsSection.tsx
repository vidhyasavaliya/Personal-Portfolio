
import { useState, useEffect } from "react";
import { 
  Code, FileCode, FileJson, FileType, 
  PencilRuler, Figma, Palette, 
  Share2, MessageSquareText, Mail, LineChart
} from "lucide-react";

const SkillsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const programmingSkills = [
    { name: "HTML", icon: <FileCode size={36} /> },
    { name: "CSS", icon: <FileType size={36} /> },
    { name: "Python", icon: <Code size={36} /> },
    { name: "C/C++", icon: <FileJson size={36} /> },
  ];

  const uiUxSkills = [
    { name: "Figma", icon: <Figma size={36} /> },
    { name: "Adobe Photoshop", icon: <PencilRuler size={36} /> },
    { name: "Adobe Illustrator", icon: <Palette size={36} /> },
  ];

  const marketingSkills = [
    { name: "SEO", icon: <LineChart size={36} /> },
    { name: "Social Media", icon: <Share2 size={36} /> },
    { name: "Email Marketing", icon: <Mail size={36} /> },
    { name: "Analytics", icon: <MessageSquareText size={36} /> },
  ];

  const SkillCard = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-portfolio-darkgray rounded-lg hover:border hover:border-portfolio-orange/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="text-portfolio-orange mb-4">
        {icon}
      </div>
      <p className="text-portfolio-white text-center font-medium">{name}</p>
    </div>
  );

  const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; icon: React.ReactNode }[] }) => (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-6 text-portfolio-orange text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-portfolio-dark text-portfolio-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-2">MY SKILLS</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <SkillCategory title="PROGRAMMING LANGUAGES" skills={programmingSkills} />
          <SkillCategory title="UI/UX TOOLS" skills={uiUxSkills} />
          <SkillCategory title="DIGITAL MARKETING" skills={marketingSkills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
