import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiCalendar, FiCode } from "react-icons/fi";

// PROJECT META
const projectData = {
  scentiva: {
    title: "Scentiva - E-Commerce Platform",
    description:
      "Production-ready e-commerce platform with admin control, secure payments, authentication and scalable deployment.",
    live: "https://scentiva-lac.vercel.app/",
    github: "#",
    featured: true,
    date: "Dec 2024",
    tech: [
      "React.js","Node.js","Express","MongoDB","JWT","Razorpay","Cloudinary","Vercel"
    ],
  },
  elearning: {
    title: "E-Learning Platform",
    description:
      "Full-featured course platform supporting live sessions, content uploads, and dashboards.",
    live: "#",
    github: "#",
    featured: true,
    date: "Nov 2024",
    tech: ["Vue.js","Node.js","Express","MongoDB"],
  },
  task: {
    title: "Task Management System",
    description:
      "Collaborative real-time task management with RBAC & notifications.",
    live: "#",
    github: "#",
    featured: false,
    date: "Oct 2024",
    tech: ["React","Node.js","Socket.io","PostgreSQL"],
  },
  weather: {
    title: "Weather Dashboard",
    description:
      "Modern weather monitoring dashboard with location & forecast support.",
    live: "#",
    github: "#",
    featured: false,
    date: "Sep 2024",
    tech: ["React","Tailwind","OpenWeather API"],
  },
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectData[slug];

  const [gallery, setGallery] = useState([]);
  const [exists, setExists] = useState(true);

  if (!project)
    return (
      <div className="pt-28 px-6 text-gray-700 dark:text-gray-300">
        Project not found.
      </div>
    );

  useEffect(() => {
    const all = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp}", { eager: true });

    const imgs = Object.entries(all)
      .filter(([p]) => p.includes(`/assets/${slug}/`))
      .map(([p, m]) => ({ src: m.default, name: p.split("/").pop() }))
      .sort((a, b) => parseInt(a.name) - parseInt(b.name))
      .map(i => i.src);

    if (!imgs.length) setExists(false);
    else {
      setGallery(imgs);
      setExists(true);
    }
  }, [slug]);

  // Coming soon state
  if (!exists) {
    return (
      <div className="pt-28 px-6 max-w-4xl mx-auto">
        <div className="
          text-center rounded-2xl p-14
          bg-gray-50 border border-gray-200
          dark:bg-[#111216] dark:border-[#1F2937]
        ">
          <div className="text-5xl mb-4">🚧</div>
          <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            Case Study Coming Soon
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            This project case study is currently being prepared.
          </p>
          <a
            href="/projects"
            className="
              px-7 py-3 rounded-lg font-medium transition
              bg-gray-900 text-white hover:bg-gray-800
              dark:bg-white dark:text-black dark:hover:bg-gray-200
            "
          >
            Back to Projects
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="mb-12">
        <a
          href="/projects"
          className="text-sm transition
          text-gray-600 hover:text-cyan-600
          dark:text-gray-400 dark:hover:text-accent"
        >
          ← Back to Projects
        </a>

        <div className="flex items-center gap-3 mt-6 mb-3">
          {project.featured && (
            <span
              className="
                px-3 py-1 rounded-lg text-sm
                bg-gray-100 border border-gray-200 text-cyan-600
                dark:bg-[#0B0B0D] dark:border-[#1F2937] dark:text-accent
              "
            >
              Featured
            </span>
          )}

          <span className="text-sm flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <FiCalendar /> {project.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          {project.title}
        </h1>

        <p className="text-lg max-w-3xl text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
      </div>

      {/* GALLERY */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {gallery.map((src, i) => (
          <div
            key={i}
            className="
              rounded-xl overflow-hidden
              bg-gray-100 border border-gray-200
              dark:bg-[#0B0B0D] dark:border-[#1F2937]
            "
          >
            <img src={src} alt={`Screenshot ${i}`} className="w-full h-72 object-cover" />
          </div>
        ))}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-wrap gap-4 mb-14">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-7 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition
              bg-gray-900 text-white hover:bg-gray-800
              dark:bg-white dark:text-black dark:hover:bg-gray-200
            "
          >
            <FiExternalLink /> Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            className="
              px-7 py-3 rounded-lg inline-flex items-center gap-2 transition
              border border-gray-300 text-gray-700 hover:text-cyan-600 hover:border-cyan-300
              dark:border-[#1F2937] dark:text-gray-200 dark:hover:text-accent dark:hover:border-accent
            "
          >
            <FiGithub /> Source Code
          </a>
        )}
      </div>

      {/* TECH STACK */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
          <FiCode /> Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.tech.map((t, i) => (
            <div
              key={i}
              className="
                rounded-lg p-4 text-center
                bg-gray-50 border border-gray-200
                dark:bg-[#111216] dark:border-[#1F2937]
              "
            >
              <span className="text-gray-800 dark:text-gray-200">{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      {[
        {
          title: "Problem & Context",
          content:
            "Most small businesses struggle to set up secure and scalable online platforms. They need a solution that supports real-world user traffic, secure payments and a simple admin workflow without requiring a large tech team."
        },
        {
          title: "Solution Overview",
          content:
            "I engineered a full-stack web application designed for real-world deployments. The platform includes authentication, admin dashboards, order tracking, payment processing and secure API-based communication across services.\n\nThe architecture focuses on scalability, modularity and long-term maintainability."
        },
        {
          title: "System Architecture",
          list: [
            "Frontend served as a statically optimised SPA",
            "Backend REST API with token-based authentication",
            "Secure database with schema-driven access",
            "Cloud storage for media uploads",
            "Integration with third-party payment gateway",
            "Environment-based deployment configurations"
          ]
        },
        {
          title: "Key Outcomes",
          list: [
            "Designed & deployed a production-grade system",
            "Implemented secure authentication flow",
            "Built a scalable backend API",
            "Delivered clean, intuitive user experience",
            "Improved development speed using modular architecture"
          ]
        }
      ].map((sec, i) => (
        <div className="mb-16" key={i}>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {sec.title}
          </h2>

          <div className="
            rounded-2xl p-8
            bg-gray-50 border border-gray-200
            dark:bg-[#111216] dark:border-[#1F2937]
          ">
            {sec.content && (
              <p className="leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">
                {sec.content}
              </p>
            )}

            {sec.list && (
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {sec.list.map((l, k) => (
                  <li key={k}>• {l}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}

    </div>
  );
}
