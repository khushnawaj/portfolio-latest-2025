import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiCalendar, FiCode } from "react-icons/fi";


// 🔥 Project Meta Data (add more here)
const projectData = {
  scentiva: {
    title: "Scentiva - E-Commerce Platform",
    description:
      "A production-ready e-commerce platform with full admin controls, payments, authentication, and cloud deployment.",
    live: "https://scentiva-lac.vercel.app/",
    github: "#",
    featured: true,
    date: "Dec 2024",
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Razorpay",
      "Cloudinary",
      "Vercel",
    ],
  },

  elearning: {
    title: "E-Learning Platform",
    description:
      "A full-featured course platform supporting live sessions, uploads, and dashboards.",
    live: "#",
    github: "#",
    featured: true,
    date: "Nov 2024",
    tech: ["Vue.js", "Node.js", "Express", "MongoDB"],
  },

  task: {
    title: "Task Management System",
    description:
      "Collaborative real-time task management app with role based access.",
    live: "#",
    github: "#",
    featured: false,
    date: "Oct 2024",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
  },

  weather: {
    title: "Weather Dashboard",
    description:
      "Modern weather monitoring dashboard with location & forecast support.",
    live: "#",
    github: "#",
    featured: false,
    date: "Sep 2024",
    tech: ["React", "Tailwind", "OpenWeather API"],
  },
};


export default function ProjectDetails() {
  const { slug } = useParams();

  const [gallery, setGallery] = useState([]);
  const [exists, setExists] = useState(true);

  const project = projectData[slug];

  // ❌ If slug not found in data
  if (!project) return <div className="pt-28 px-6">Project not found</div>;

  useEffect(() => {
    // Load ALL images once
    const allImages = import.meta.glob(
      "../assets/**/*.{png,jpg,jpeg,webp}",
      { eager: true }
    );

    // Filter only matching folder
    const filtered = Object.entries(allImages)
      .filter(([path]) => path.includes(`/assets/${slug}/`))
      .map(([path, mod]) => ({
        src: mod.default,
        name: path.split("/").pop(), // filename only
      }))
      .sort((a, b) => {
        // natural numeric sort
        const an = parseInt(a.name);
        const bn = parseInt(b.name);
        return an - bn;
      })
      .map((img) => img.src);

    if (filtered.length === 0) setExists(false);
    else {
      setGallery(filtered);
      setExists(true);
    }
  }, [slug]);


  // 🚧 Case study not ready
  if (!exists) {
    return (
      <div className="pt-28 px-6 max-w-4xl mx-auto">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🚧</div>
          <h1 className="text-3xl font-bold mb-4">Case Study Coming Soon</h1>
          <p className="text-gray-400 mb-8">
            This project case study is currently being prepared.
          </p>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neon text-neon rounded-lg hover:bg-neon/10 transition-all duration-300"
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
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          ← Back to Projects
        </a>

        <div className="flex items-center gap-3 mb-4">
          {project.featured && (
            <span className="px-3 py-1 bg-neon/20 text-neon rounded-full text-sm font-medium">
              Featured
            </span>
          )}

          <span className="text-gray-400 text-sm flex items-center gap-1">
            <FiCalendar size={14} />
            {project.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          {project.description}
        </p>
      </div>


      {/* 🔥 IMAGE GALLERY */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {gallery.map((src, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden border border-neon/20 hover:border-neon/40 transition group"
          >
            <img
              src={src}
              alt={`Screenshot ${i}`}
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>


      {/* LINKS */}
      <div className="flex flex-wrap gap-4 mb-12">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neon text-black font-semibold rounded-lg hover:bg-neon/90 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
          >
            <FiExternalLink />
            Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-white font-semibold rounded-lg hover:border-neon hover:bg-neon/10 transition-all duration-300"
          >
            <FiGithub />
            Source Code
          </a>
        )}
      </div>


      {/* TECH STACK */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiCode />
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.tech.map((t, i) => (
            <div
              key={i}
              className="bg-panel/50 border border-gray-800 rounded-lg p-4 text-center hover:border-neon/40 transition-colors"
            >
              <span className="text-white font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
