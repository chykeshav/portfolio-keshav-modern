"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubLink: string;
  liveLink?: string;
  imageUrl?: string;
}

const categories = [
  "All",
  "Backend",
  "Full Stack",
  "AI/ML",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { 
//       duration: 0.4,
//       ease: [0.25, 0.1, 0.25, 1],
//     }
//   }
// };

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const, // ✅ valid cubic-bezier
    },
  },
};

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  
  const projects: Project[] = [
    {
      title: "Port Management System",
      description: "Enterprise backend for cargo manifest handling, berth scheduling, and agent management. Built with Spring Boot and PostgreSQL for a real-world port operations client.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JPA", "REST API"],
      category: "Backend",
      githubLink: "https://github.com/chykeshav",
    },
    {
      title: "SIPL Tracker",
      description: "Employee attendance and leave tracking system with Excel report export capabilities. Designed for HR management at Suraj Informatics.",
      technologies: ["Spring Boot", "Java", "JPA", "PostgreSQL", "Apache POI"],
      category: "Backend",
      githubLink: "https://github.com/chykeshav",
    },
    {
      title: "Fitness Manager",
      description: "REST APIs for user management and fitness tracking with secure authentication. Includes user registration, workout logging, and progress tracking endpoints.",
      technologies: ["Spring Boot", "Java", "Spring Security", "PostgreSQL", "JWT"],
      category: "Backend",
      githubLink: "https://github.com/chykeshav",
    },
    {
      title: "Diary Management Application",
      description: "Entity-driven design for diary entries, groups and settings modules with full CRUD operations using Spring Boot and JPA.",
      technologies: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "REST API"],
      category: "Backend",
      githubLink: "https://github.com/chykeshav",
    },
    {
      title: "Satark – Anomaly Detection",
      description: "Real-time CCTV anomaly detection system using deep learning. Detects unusual activities in surveillance footage using a CNN-LSTM model trained on video data.",
      technologies: ["Python", "TensorFlow", "Keras", "CNN-LSTM", "OpenCV"],
      category: "AI/ML",
      githubLink: "https://github.com/chykeshav",
    },
    {
      title: "Indian Sign Language Detection",
      description: "AI-based sign language recognition model to assist speech and hearing-impaired users. Uses computer vision to translate hand gestures into readable text.",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Machine Learning"],
      category: "AI/ML",
      githubLink: "https://github.com/chykeshav",
    },
    {
      title: "Grievance Redressal Portal",
      description: "Full-stack portal to simplify grievance resolution for workers and employees. Built with React.js frontend and Node.js backend with a PostgreSQL database.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "REST API", "Tailwind CSS"],
      category: "Full Stack",
      githubLink: "https://github.com/chykeshav",
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleBackToList = () => {
    setShowDetails(false);
    setSelectedProject(null);
  };

  return (
    <section className="bg-black text-white min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1 bg-[#121212] rounded-lg p-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setShowDetails(false);
                      setSelectedProject(null);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-md text-sm transition-colors
                              ${activeCategory === category 
                                ? 'bg-gradient-to-r from-teal-500 to-teal-700 text-white font-medium' 
                                : 'text-gray-300 hover:text-white hover:bg-[#282828]'}`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3 bg-gradient-to-b from-[#1E1E1E] to-[#121212] rounded-lg">
            {showDetails && selectedProject ? (
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={handleBackToList}
                  className="flex items-center text-gray-400 hover:text-white mb-6"
                  whileHover={{ x: -4 }}
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Back to projects
                </motion.button>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-64 h-64 bg-[#333] rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl font-bold text-gray-300">{selectedProject.title.charAt(0)}</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="text-sm text-[#0F766E] font-medium">{selectedProject.category}</span>
                      <h1 className="text-4xl font-bold mt-1">{selectedProject.title}</h1>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="text-sm text-gray-200 px-3 py-1 bg-[#333] rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#333] hover:bg-[#444] text-white px-4 py-2 rounded-full transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        GitHub
                      </motion.a>
                      {selectedProject.liveLink && (
                        <motion.a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white px-4 py-2 rounded-full transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="p-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center text-xs text-gray-400 border-b border-[#282828] pb-2 px-4">
                  <div>#</div>
                  <div>PROJECT</div>
                  <div>TECHNOLOGIES</div>
                </div>
                
                {filteredProjects.map((project, index) => (
                  <motion.div 
                    key={project.title}
                    className="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 rounded-md hover:bg-[#282828] cursor-pointer transition-colors group"
                    onClick={() => {
                      setSelectedProject(project);
                      setShowDetails(true);
                    }}
                    variants={itemVariants}
                  >
                    <div className="text-gray-400 group-hover:text-white flex items-center justify-center w-6">
                      <span className="group-hover:hidden">{index + 1}</span>
                      <ChevronRight size={16} className="hidden group-hover:block text-[#0F766E]" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#333] rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <div className="text-lg font-bold text-gray-300">{project.title.charAt(0)}</div>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{project.title}</h3>
                        <p className="text-sm text-gray-400 line-clamp-1">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {project.technologies.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="text-xs text-gray-300 px-2 py-1 bg-[#333] rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="text-xs text-gray-300 px-2 py-1 bg-[#333] rounded-full">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
