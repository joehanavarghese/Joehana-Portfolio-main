import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { projects, Project } from '../data/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-black/20 rounded-lg overflow-hidden border border-terminal-dim/20 hover:border-terminal-accent/50 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img
          src={project.thumbnail}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-lg font-bold text-terminal-text mb-2 group-hover:text-terminal-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-terminal-dim group-hover:text-terminal-text transition-colors">
            {project.description}
          </p>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-4">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-terminal-background/50 text-terminal-accent border-terminal-accent/30 hover:border-terminal-accent"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-end gap-4 relative z-20">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-dim hover:text-terminal-accent transition-colors cursor-pointer"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-dim hover:text-terminal-accent transition-colors cursor-pointer"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-terminal-accent/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-terminal-accent/0 via-terminal-accent/5 to-terminal-accent/0" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  //const categories = ['all', 'Web Dev', 'AI', 'SaaS', 'Cloud'];
  const categories = ['all', 'Web Dev' ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        navigate('/');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-terminal-background text-terminal-text p-4 md:p-8">
      {/* Matrix-like background */}
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
      <div className="relative z-10 max-w-7xl mx-auto">
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

        <h1 className="text-4xl font-bold mb-8 animate-text-glow">Project Showcase</h1>

        {/* Category Filter */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? 'border-terminal-accent text-terminal-accent bg-terminal-accent/10'
                  : 'border-terminal-dim/20 text-terminal-dim hover:border-terminal-accent/50 hover:text-terminal-text'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
