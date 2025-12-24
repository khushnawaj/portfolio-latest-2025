import { FiExternalLink, FiGithub, FiFolder, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "scentiva",
    title: "Scentiva E-Commerce",
    description:
      "Production-ready e-commerce platform with payments, admin panel, and cloud deployment.",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"],
    caseStudy: true,
    github: "#",
    live: "https://scentiva-lac.vercel.app/",
  },
  {
    slug: "election-campaign",
    title: "Election Campaign Web Application",
    description:
      "Secure election system with paid registration, candidate workflows, and real-time voting.",
    tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
    caseStudy: true,
    github: "#",
    live: "#",
  },
  {
    slug: "elearning",
    title: "E-Learning Platform",
    description:
      "Course management and live classes with teacher & student dashboards.",
    tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
    caseStudy: true,
    github: "#",
    live: "#",
  },
  {
    slug: "task-manager",
    title: "Task Management System",
    description:
      "Collaborative task management with real-time updates and team features.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    caseStudy: false,
    github: "#",
    live: "#",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Real-time weather app with forecast and location tracking.",
    tags: ["React", "API Integration", "Chart.js", "Tailwind"],
    caseStudy: false,
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 text-neon mb-3">
          <span className="text-sm font-medium">PORTFOLIO</span>
          <div className="w-12 h-0.5 bg-neon"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-neon">Projects</span>
        </h1>

        <p className="text-gray-400 max-w-2xl text-lg">
          Here are some of my recent work and side projects I've built
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-panel/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-neon/40 hover:shadow-xl hover:shadow-neon/5 transition-all duration-300 group"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              transform: hoveredProject === index ? "translateY(-8px)" : "translateY(0)",
              transition: "all 0.3s ease",
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-neon/10 border border-neon/20">
                <FiFolder className="text-neon" size={24} />
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-neon transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon transition-colors"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-neon/10 text-neon text-xs rounded-full border border-neon/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.caseStudy && (
              <Link
                to={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-neon font-medium text-sm group/btn"
              >
                View Case Study
                <FiChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Featured Project Highlight */}
      <div className="bg-gradient-to-r from-neon/5 to-cyan-500/5 border border-neon/20 rounded-2xl p-8 md:p-12 mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-neon rounded-full animate-pulse"></div>
          <span className="text-neon font-medium">Featured Project</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Scentiva E-Commerce</h2>

        <p className="text-gray-300 text-lg mb-8 max-w-3xl">
          A production-ready e-commerce platform built to handle real users,
          real payments, and real deployments with complete admin controls.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <span className="px-4 py-2 bg-neon/20 text-neon rounded-lg font-medium">
            REST APIs
          </span>
          <span className="px-4 py-2 bg-neon/20 text-neon rounded-lg font-medium">
            Payment Integration
          </span>
          <span className="px-4 py-2 bg-neon/20 text-neon rounded-lg font-medium">
            Admin Dashboard
          </span>
          <span className="px-4 py-2 bg-neon/20 text-neon rounded-lg font-medium">
            Cloud Deployment
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects/scentiva"
            className="px-6 py-3 bg-neon text-black font-semibold rounded-lg hover:bg-neon/90 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
          >
            View Case Study
          </Link>

          <a
            href="https://scentiva-lac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-neon text-neon font-semibold rounded-lg hover:bg-neon/10 transition-all duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          I'm always open to discussing new opportunities and interesting projects.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 border border-neon text-neon font-semibold rounded-lg hover:bg-neon/10 transition-all duration-300"
        >
          Let&apos;s Connect
          <FiChevronRight />
        </a>
      </div>
    </div>
  );
}
