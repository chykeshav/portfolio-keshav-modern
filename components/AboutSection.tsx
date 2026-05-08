"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "7+" },
  { label: "Years Coding", value: "3+" },
  { label: "Certifications", value: "3" },
  { label: "Internships", value: "3" },
];

const highlights = [
  { icon: Briefcase, text: "Trainee Software Engineer @ Suraj Informatics Pvt. Ltd." },
  { icon: GraduationCap, text: "B.E. Computer Science — Theem College of Engineering" },
  { icon: MapPin, text: "Kalyan, Maharashtra, India" },
  { icon: Code2, text: "Java • Spring Boot • REST APIs • PostgreSQL" },
];

const AboutSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            About Me
          </h2>
          <p className="text-gray-400 mt-3 text-lg">The person behind the code</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Photo */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 blur-lg opacity-40 scale-110" />
              <img
                src="/keshav-photo.jpg"
                alt="Keshav Chaudhary"
                className="relative w-52 h-52 rounded-full object-cover border-4 border-teal-500/50 shadow-2xl"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-teal-500/40 transition-all duration-300"
                >
                  <p className="text-3xl font-bold text-teal-400">{stat.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Bio */}
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Hi, I&apos;m <span className="text-white font-semibold">Keshav Chaudhary</span> — a passionate
                Backend Developer who loves building scalable, real-world systems using{" "}
                <span className="text-teal-400 font-medium">Java & Spring Boot</span>.
              </p>
              <p>
                Currently working as a <span className="text-white font-medium">Trainee Software Engineer</span> at
                Suraj Informatics, where I&apos;ve contributed to enterprise-grade projects like Port Management
                Systems, Employee Trackers, and Fitness Platforms.
              </p>
              <p>
                I believe in writing clean, maintainable code and building systems that solve{" "}
                <span className="text-teal-400 font-medium">real business problems</span>. Always learning, always building.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mt-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-teal-500/40 transition-all duration-300"
                >
                  <item.icon size={18} className="text-teal-400 shrink-0" />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
