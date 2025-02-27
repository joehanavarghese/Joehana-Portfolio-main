import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";
import { 
  Terminal,
  Cpu,
  Code2,
  Briefcase,
  GraduationCap,
  ArrowLeft
} from "lucide-react";
import profileImage from '../assets/musicjoe1.svg';

const SKILLS = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "AWS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "TailwindCSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  }
];

const EXPERIENCE = [
  {
    title: "Software Developer",
    company: "Consalt",
    period: "Present",
    description: "• Redesigned and optimized report pages to improve performance and user experience\n• Developed a centralized reports system, fetching data from multiple APIs and creating an intuitive frontend for report management\n• Integrated AI-driven document processing, enabling automatic PDF summarization before downloads\n• Improved data integrity in role-based access control by refining database structures, enhancing backend queries, and updating frontend logic to ensure accurate role assignments"
  },
  {
    title: "Software Developer",
    company: "The Exalters Church",
    period: "May 2024 - Present",
    description: "• Developing Church Management System using Django and Docker\n• Implemented comprehensive features including user management, event scheduling, and donation management\n• Created accessible church website using HTML5, CSS3, JavaScript, and WordPress"
  },
  {
    title: "Web Developer",
    company: "Vision Media Website",
    period: "2023",
    description: "• Collaborated in a team of four to develop a commissioned customized HTML website\n• Structured and styled website using HTML and CSS for professional user experience"
  }
];

const EDUCATION = [
  {
    title: "Honours BSc. Computer Science",
    school: "Wilfrid Laurier University",
    period: "Sept 2020 - Present",
    description: "User Experience Design & Mathematics Minor\nGPA: 10.26/12\n\n• Deans Honour List from Laurier University in Faculty of Science\n\n• Laurier Synthetic Biotechnology Club | Executive Member\n\n• Artificial Intelligence Club | President\n\n• Google Student Developer Club | Executive Member"
  }
];

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        navigate('/');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-terminal-background text-terminal-text p-4 md:p-8">
      {/* Matrix-like background animation */}
      <div className="fixed inset-0 opacity-5 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-terminal-text animate-fall"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              fontSize: '12px'
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="my-2">
                {String.fromCharCode(33 + Math.floor(Math.random() * 93))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-terminal-text hover:text-terminal-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Terminal</span>
          </button>
          <div className="text-terminal-dim">(Press ESC to return)</div>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-terminal-accent/30">
              <div className="absolute inset-0 rounded-full bg-terminal-accent opacity-20 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover relative z-10 transform scale-[4.5] rounded-full translate-y-24"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4 animate-text-glow">Joehana Varghese</h1>
            <div className="text-xl text-terminal-accent mb-4">Full Stack Developer</div>
            <p className="text-terminal-text leading-relaxed mb-4">
              Hi! I'm currently a software developer at Consalt, passionate about building scalable web applications and backend systems. I'm always eager to learn, refine my skills, and push the boundaries of what's possible in software development.
            </p>

            <p className="text-terminal-text leading-relaxed mb-4">
              Currently, I'm working on a SaaS project integrating AI-powered report summarization, focused on extracting key insights and metrics from PDFs efficiently. My goal is to become a top-class software engineer, mastering both backend development and cloud infrastructure.
            </p>

            <p className="text-terminal-text leading-relaxed mb-4">
              But hey, it's not all code and commits! I have a deep love for football—both playing and watching, and I love working out. In my free time, I'm also a musician; I'm a self-taught pianist, guitarist and music director for my church. I'm always up for learning, building and tackling new challenges.
            </p>
            <div className="flex gap-4">
              {[Terminal, Cpu, Code2].map((Icon, index) => (
                <Icon
                  key={index}
                  className="w-6 h-6 text-terminal-accent hover:text-terminal-text transition-colors cursor-pointer animate-text-glow"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code2 className="w-6 h-6" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {SKILLS.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-all duration-300 transform hover:scale-110 group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mb-2 group-hover:animate-pulse"
                />
                <span className="text-sm text-terminal-dim group-hover:text-terminal-accent transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Experience
          </h2>
          <div className="space-y-6">
            {EXPERIENCE.map((exp, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors border border-terminal-dim/20"
              >
                <h3 className="text-xl font-bold text-terminal-accent">{exp.title}</h3>
                <div className="text-terminal-dim mb-2">{exp.company} | {exp.period}</div>
                <p className="text-sm whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Education
          </h2>
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors border border-terminal-dim/20"
              >
                <h3 className="text-xl font-bold text-terminal-accent">{edu.title}</h3>
                <div className="text-terminal-dim mb-2">{edu.school} | {edu.period}</div>
                <p className="text-sm whitespace-pre-line">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
