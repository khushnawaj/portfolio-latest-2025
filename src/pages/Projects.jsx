import { FiExternalLink, FiGithub, FiFolder, FiChevronRight } from "react-icons/fi";
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
    title: "Election Campaign Platform",
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
      "Real-time weather tracking with forecast and clean UI.",
    tags: ["React", "API Integration", "Chart.js", "Tailwind"],
    caseStudy: false,
    github: "#",
    live: "#",
  },
];

export default function Projects() {

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-14">
        <p className="text-accent tracking-wide mb-2">PROJECTS</p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Selected Work
        </h1>

        <p className="text-gray-400 max-w-2xl">
          A curated collection of products and systems I’ve built.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#111216] border border-border rounded-xl p-6 transition-all hover:border-accent/40"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-[#0B0B0D] border border-border text-accent">
                <FiFolder size={22} />
              </div>

              <div className="flex gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    className="text-gray-400 hover:text-accent transition"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </a>
                )}

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {p.title}
            </h3>

            <p className="text-gray-400 mb-5 leading-relaxed">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-lg bg-[#0B0B0D] border border-border text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.caseStudy && (
              <Link
                to={`/projects/${p.slug}`}
                className="inline-flex items-center gap-1 text-accent text-sm"
              >
                View Case Study
                <FiChevronRight />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Highlight */}
      <div className="bg-[#111216] border border-border rounded-2xl p-10 mb-20">
        <p className="text-accent mb-3 font-medium">FEATURED CASE STUDY</p>

        <h2 className="text-3xl font-bold text-white mb-4">
          Scentiva E-Commerce
        </h2>

        <p className="text-gray-400 max-w-3xl mb-6">
          A production-grade e-commerce platform built with real-world payment flows,
          admin dashboards and scalable deployment architecture.
        </p>

        <div className="flex gap-3 flex-wrap mb-8">
          {["Payments", "REST APIs", "Admin Panel", "Cloud Deployments"].map((t, i) => (
            <span
              key={i}
              className="px-4 py-1.5 bg-[#0B0B0D] border border-border text-gray-300 rounded-lg text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            to="/projects/scentiva"
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition"
          >
            View Case Study
          </Link>

          <a
            href="https://scentiva-lac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-gray-200 rounded-lg hover:border-accent transition"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-10">
        <h3 className="text-2xl font-bold text-white mb-3">
          Have a project in mind?
        </h3>

        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          I’m always open to meaningful work and collaborations.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Let’s Connect
          <FiChevronRight />
        </a>
      </div>
    </div>
  );
}
