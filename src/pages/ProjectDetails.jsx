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

  if (!project) return <div className="pt-28 px-6 text-gray-300">Project not found.</div>;

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
        <div className="bg-[#111216] border border-[#1F2937] rounded-2xl p-14 text-center">
          <div className="text-5xl mb-4">🚧</div>
          <h1 className="text-3xl font-bold text-white mb-3">Case Study Coming Soon</h1>
          <p className="text-gray-400 mb-8">
            This project case study is currently being prepared.
          </p>
          <a
            href="/projects"
            className="px-7 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
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
        <a href="/projects" className="text-gray-400 hover:text-white transition text-sm">
          ← Back to Projects
        </a>

        <div className="flex items-center gap-3 mt-6 mb-3">
          {project.featured && (
            <span className="px-3 py-1 bg-[#0B0B0D] border border-[#1F2937] rounded-lg text-accent text-sm">
              Featured
            </span>
          )}

          <span className="text-gray-400 text-sm flex items-center gap-1">
            <FiCalendar /> {project.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {project.title}
        </h1>

        <p className="text-lg text-gray-300 max-w-3xl">
          {project.description}
        </p>
      </div>

      {/* GALLERY */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {gallery.map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-[#1F2937] bg-[#0B0B0D]">
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
            className="px-7 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition inline-flex items-center gap-2"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            className="px-7 py-3 border border-[#1F2937] text-gray-200 rounded-lg hover:border-accent transition inline-flex items-center gap-2"
          >
            <FiGithub /> Source Code
          </a>
        )}
      </div>

      {/* TECH STACK */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <FiCode /> Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.tech.map((t, i) => (
            <div
              key={i}
              className="bg-[#111216] border border-[#1F2937] rounded-lg p-4 text-center"
            >
              <span className="text-gray-200">{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Problem & Context</h2>

        <div className="bg-[#111216] border border-[#1F2937] rounded-2xl p-8">
          <p className="text-gray-300 leading-relaxed">
            Most small businesses struggle to set up secure and scalable online platforms.
            They need a solution that supports real-world user traffic, secure payments and 
            a simple admin workflow without requiring a large tech team.
          </p>
        </div>
      </div>

      {/* SOLUTION SECTION */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Solution Overview</h2>

        <div className="bg-[#111216] border border-[#1F2937] rounded-2xl p-8 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            I engineered a full-stack web application designed for real-world deployments.
            The platform includes authentication, admin dashboards, order tracking,
            payment processing and secure API-based communication across services.
          </p>

          <p className="text-gray-300 leading-relaxed">
            The architecture focuses on scalability, modularity and long-term maintainability.
          </p>
        </div>
      </div>

      {/* ARCHITECTURE SECTION */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">System Architecture</h2>

        <div className="bg-[#111216] border border-[#1F2937] rounded-2xl p-8">
          <ul className="space-y-3 text-gray-300">
            <li>• Frontend served as a statically optimised SPA</li>
            <li>• Backend REST API with token-based authentication</li>
            <li>• Secure database with schema-driven access</li>
            <li>• Cloud storage for media uploads</li>
            <li>• Integration with third-party payment gateway</li>
            <li>• Environment-based deployment configurations</li>
          </ul>
        </div>
      </div>

      {/* KEY RESULTS */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">Key Outcomes</h2>

        <div className="bg-[#111216] border border-[#1F2937] rounded-2xl p-8">
          <ul className="space-y-3 text-gray-300">
            <li>• Designed & deployed a production-grade system</li>
            <li>• Implemented secure authentication flow</li>
            <li>• Built a scalable backend API</li>
            <li>• Delivered clean, intuitive user experience</li>
            <li>• Improved development speed using modular architecture</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
