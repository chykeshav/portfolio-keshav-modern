"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  issuer: string;
  verifyLink?: string;
  date: string;
  imageUrl?: string;
}

const categories = ["Programming", "Cloud", "All"];

const CertificationsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      title: "C++ for Everyone: Programming Fundamentals",
      description:
        "Completed foundational C++ programming course covering data types, control flow, functions, arrays, and object-oriented programming basics.",
      technologies: ["C++", "OOP", "Data Structures", "Algorithms"],
      category: "Programming",
      issuer: "Online Certification",
      date: "2023",
    },
    {
      title: "Core Python for Everyone",
      description:
        "Completed Python programming fundamentals covering variables, loops, functions, modules, and file handling with hands-on projects.",
      technologies: ["Python", "Functions", "Modules", "File Handling"],
      category: "Programming",
      issuer: "Online Certification",
      date: "2023",
    },
    {
      title: "AWS Academy Graduate – Data Engineering",
      description:
        "AWS Academy Data Engineering certification covering cloud data storage, processing pipelines, ETL workflows and AWS services like S3, Glue, and Redshift.",
      technologies: ["AWS", "S3", "Glue", "Redshift", "ETL", "Data Pipelines"],
      category: "Cloud",
      issuer: "AWS Academy",
      date: "2024",
    },
  ];

  const categoryFilteredCertifications =
    activeCategory === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  React.useEffect(() => {
    if (!selectedCertification && categoryFilteredCertifications.length > 0) {
      setSelectedCertification(categoryFilteredCertifications[0]);
    }
  }, [activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const certsInCategory =
      category === "All"
        ? certifications
        : certifications.filter((cert) => cert.category === category);
    if (certsInCategory.length > 0) {
      setSelectedCertification(certsInCategory[0]);
    } else {
      setSelectedCertification(null);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-b from-[#1E1E1E] to-[#121212] rounded-lg">
          {/* Header */}
          <div className="p-4 flex flex-wrap items-center justify-between border-b border-[#333]">
            <h2 className="text-2xl font-bold">Certifications</h2>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-3 py-1 rounded-md text-sm transition-colors
                            ${
                              activeCategory === category
                                ? "bg-gradient-to-r from-teal-500 to-teal-700 text-white font-medium"
                                : "bg-[#222] text-gray-300 hover:text-white hover:bg-[#282828]"
                            }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="p-4 flex flex-wrap gap-3">
            {categoryFilteredCertifications.length > 0 ? (
              categoryFilteredCertifications.map((cert) => (
                <motion.button
                  key={cert.title}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md bg-[#1A1A1A] text-sm hover:bg-[#222] transition-colors border border-transparent
                  ${
                    selectedCertification?.title === cert.title
                      ? "border-teal-700 bg-[#222]"
                      : ""
                  }`}
                  onClick={() => setSelectedCertification(cert)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-6 h-6 rounded-full bg-teal-700 overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {cert.title.charAt(0)}
                    </span>
                  </div>
                  <span className="truncate max-w-[160px]">{cert.title}</span>
                </motion.button>
              ))
            ) : (
              <div className="w-full flex items-center justify-center h-32">
                <p className="text-gray-400">
                  No certifications found for this category.
                </p>
              </div>
            )}
          </div>

          {selectedCertification && (
            <motion.div
              className="p-6 border-t border-[#333] mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={`detail-${selectedCertification.title}`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-64 h-64 bg-[#333] rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-bold text-teal-500">
                    {selectedCertification.title.charAt(0)}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h1 className="text-3xl font-bold">
                      {selectedCertification.title}
                    </h1>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-xs text-gray-400">
                        Issuing Organization
                      </span>
                      <p className="text-white">
                        {selectedCertification.issuer}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">Date</span>
                      <p className="text-white">{selectedCertification.date}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">
                    {selectedCertification.description}
                  </p>

                  <div className="mb-4">
                    <h3 className="text-sm text-gray-400 mb-2">Topics Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertification.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-sm text-gray-200 px-3 py-1 bg-[#333] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedCertification.verifyLink && (
                      <motion.a
                        href={selectedCertification.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white px-4 py-2 rounded-full transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        Verify
                      </motion.a>
                    )}
                    <motion.button
                      className="flex items-center gap-2 bg-[#333] hover:bg-[#444] text-white px-4 py-2 rounded-full transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Certificate
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
