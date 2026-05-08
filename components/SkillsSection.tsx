"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    emoji: "💻",
    color: "from-teal-500 to-teal-700",
    glow: "shadow-teal-500/20",
    border: "border-teal-500/40",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 65 },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    emoji: "⚙️",
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/40",
    skills: [
      { name: "Spring Boot", level: 88 },
      { name: "Spring MVC", level: 82 },
      { name: "Spring Data JPA", level: 80 },
      { name: "React", level: 70 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    emoji: "🗄️",
    color: "from-purple-500 to-purple-700",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/40",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Concepts",
    emoji: "🛠️",
    color: "from-orange-500 to-orange-700",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/40",
    skills: [
      { name: "Git", level: 85 },
      { name: "Postman", level: 88 },
      { name: "REST API", level: 90 },
      { name: "Microservices", level: 72 },
    ],
  },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("languages");
  const active = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Skills
          </h2>
          <p className="text-gray-400 mt-3 text-lg">Technologies I work with</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg ${cat.glow}`
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`bg-white/5 border ${active.border} rounded-2xl p-8 shadow-xl`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {active.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${active.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {["Java", "Spring Boot", "PostgreSQL", "Python", "REST API", "Git", "React", "JPA", "MySQL", "Postman", "AWS", "Microservices"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:border-teal-500/40 hover:text-teal-400 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;