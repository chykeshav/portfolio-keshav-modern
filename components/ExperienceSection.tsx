"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Trainee Software Engineer — Backend",
    company: "Suraj Informatics Pvt. Ltd.",
    duration: "May 2025 – Present",
    type: "Full-time",
    location: "Mumbai, Maharashtra",
    color: "from-teal-500 to-teal-700",
    accent: "teal",
    points: [
      "Contributed to multiple enterprise-grade Spring Boot projects including Port Management System, SIPL Tracker, Fitness Manager, and Diary Management Application.",
      "Designed and implemented REST APIs and service layers using Spring Boot and JPA.",
      "Developed modular entity mappings and optimized database design in PostgreSQL.",
      "Collaborated with frontend teams (React) for API integration and testing through Postman.",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST API", "JPA"],
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Internship Studio",
    duration: "May 2024 – Jul 2024",
    type: "Internship",
    location: "Remote",
    color: "from-blue-500 to-blue-700",
    accent: "blue",
    points: [
      "Built responsive UI with React and JavaScript, reducing load time by 20%.",
      "Mentored junior interns and ensured cross-browser compatibility.",
    ],
    tags: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "Canyfix",
    duration: "Jul 2024 – Aug 2024",
    type: "Internship",
    location: "Remote",
    color: "from-purple-500 to-purple-700",
    accent: "purple",
    points: [
      "Developed user interfaces using React Hooks and Redux.",
      "Implemented accessibility and responsive UI best practices.",
    ],
    tags: ["React", "Redux", "Hooks", "Accessibility"],
  },
];

const ExperienceSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Experience
          </h2>
          <p className="text-gray-400 mt-3 text-lg">Where I&apos;ve worked and what I&apos;ve built</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-blue-500/30 to-transparent hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className={`absolute left-3.5 top-6 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} shadow-lg hidden md:flex items-center justify-center`}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div
                  className={`bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    openId === exp.id ? "border-teal-500/40 shadow-lg shadow-teal-500/10" : "border-white/10 hover:border-white/20"
                  }`}
                  onClick={() => setOpenId(openId === exp.id ? null : exp.id)}
                >
                  {/* Header */}
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Briefcase size={20} className="text-white" />
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-lg leading-tight">{exp.role}</h3>
                        <p className="text-teal-400 font-medium mt-0.5">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="flex items-center gap-1 text-gray-400 text-sm">
                            <Calendar size={13} />
                            {exp.duration}
                          </span>
                          <span className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-full">
                            {exp.type}
                          </span>
                          <span className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-full">
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: openId === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 mt-1"
                    >
                      <ChevronDown size={20} className="text-gray-400" />
                    </motion.div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {openId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 border-t border-white/10 pt-4">
                          {/* Points */}
                          <ul className="space-y-2 mb-4">
                            {exp.points.map((point, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-2 text-gray-300 text-sm"
                              >
                                <span className="text-teal-400 mt-1 shrink-0">▸</span>
                                {point}
                              </motion.li>
                            ))}
                          </ul>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-20 text-white font-medium`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
