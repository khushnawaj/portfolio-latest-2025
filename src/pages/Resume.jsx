import { FiBriefcase, FiBook, FiCode, FiDatabase, FiServer, FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaVuejs,  } from "react-icons/fa";

import { SiExpress, SiTailwindcss, SiMysql, SiPostgresql } from "react-icons/si";
import { useState } from "react";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("experience");

  const experiences = [
    {
      role: "Full Stack Web Developer",
      company: "Life Layer Health Solutions Pvt Ltd",
      period: "Apr 2024 – Sep 2025s",
      location: "Gurugram, India",
      icon: <FiBriefcase className="text-neon" />,
      responsibilities: [
        "Developing and maintaining MERN/MEVN stack applications",
        "Designing RESTful APIs with Node.js & Express",
        "Database schema design and query optimization for MongoDB",
        "Implementing authentication and authorization systems",
        "Collaborating with frontend teams for seamless integration"
      ],
      tech: ["Node.js", "Express", "Vue.js", "MongoDB", "REST APIs"]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "SHUATS, Prayagraj",
      period: "2017 – 2021",
      icon: <FiBook className="text-neon" />,
      highlights: [
        "Specialized in Web Technologies",
        "Final Year Project: E-Commerce Platform"
      ]
    }
  ];

  const skills = {
    "Frontend": [
      { name: "React", icon: <FaReact />, level: 85 },
      { name: "Vue.js", icon: <FaVuejs />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 }
    ],
    "Backend": [
      { name: "Node.js", icon: <FaNodeJs />, level: 88 },
      { name: "Express", icon: <SiExpress />, level: 85 },
      { name: "REST APIs", icon: <FiCode />, level: 90 }
    ],
    "Databases": [
      { name: "MongoDB", icon: <FiDatabase />, level: 85 },
      { name: "MySQL", icon: <SiMysql />, level: 75 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 70 }
    ]
  };

  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-neon mb-3">
              <span className="text-sm font-medium">EXPERIENCE & SKILLS</span>
              <div className="w-12 h-0.5 bg-neon"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-neon">Resume</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Full Stack Developer with ~2 years of experience building scalable web applications
            </p>
          </div>
          
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-neon text-black font-semibold rounded-lg hover:bg-neon/90 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
          >
            <FiDownload />
            Download Resume
          </a>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-800">
          {["experience", "education", "skills"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 font-medium transition-all duration-300 relative ${
                activeSection === section
                  ? "text-neon"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neon"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Experience Section */}
        <section className={`transition-opacity duration-300 ${activeSection === "experience" ? "opacity-100" : "hidden"}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neon/10 border border-neon/20">
              <FiBriefcase className="text-neon" size={24} />
            </div>
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-panel/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-neon/40 hover:shadow-xl hover:shadow-neon/5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-neon font-medium">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon/10 text-neon rounded-full text-sm">
                      {exp.icon}
                      {exp.period}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-neon/10 text-neon rounded-lg border border-neon/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={`transition-opacity duration-300 ${activeSection === "education" ? "opacity-100" : "hidden"}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neon/10 border border-neon/20">
              <FiBook className="text-neon" size={24} />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-panel/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-neon/40 hover:shadow-xl hover:shadow-neon/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-lg bg-neon/10 border border-neon/20">
                    {edu.icon}
                  </div>
                  <span className="px-3 py-1 bg-neon/10 text-neon rounded-full text-sm">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{edu.degree}</h3>
                <p className="text-neon font-medium mb-6">{edu.institution}</p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Highlights</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-neon/5 to-cyan-500/5 border border-neon/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Additional Training</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Full Stack Development Bootcamp</p>
                    <p className="text-gray-400 text-sm">2023 - 2024</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">MongoDB Certification</p>
                    <p className="text-gray-400 text-sm">2024</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`transition-opacity duration-300 ${activeSection === "skills" ? "opacity-100" : "hidden"}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neon/10 border border-neon/20">
              <FiCode className="text-neon" size={24} />
            </div>
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-panel/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-neon/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-neon/10">
                    {category === "Frontend" ? <FiCode /> : 
                     category === "Backend" ? <FiServer /> : <FiDatabase />}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>

                <div className="space-y-6">
                  {skillList.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-neon">{skill.icon}</span>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-neon text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-neon to-cyan-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-neon/5 to-cyan-500/5 border border-neon/20 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6">
            Let's Work <span className="text-neon">Together</span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Interested in collaborating or have a project in mind? 
            I'm always open to discussing new opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-neon text-black font-semibold rounded-lg hover:bg-neon/90 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}