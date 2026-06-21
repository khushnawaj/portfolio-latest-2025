import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { FiExternalLink, FiGithub, FiCalendar, FiCode, FiX, FiChevronLeft, FiChevronRight, FiMaximize2, FiServer, FiDatabase, FiLayout, FiCpu } from "react-icons/fi";
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiRedis, SiSocketdotio, SiTailwindcss, 
  SiDjango, SiPostgresql, SiJsonwebtokens, SiRazorpay, SiVercel, SiCloudinary, SiStripe, 
  SiVuedotjs, SiNextdotjs, SiNestjs, SiTypescript, SiDocker, SiPython, SiVite, SiTurborepo 
} from "react-icons/si";
import { projectsData } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import OptimizedImage from "../components/OptimizedImage";
import {
  SyncUpVisualizer,
  BookLibraryVisualizer,
  TaskManagerVisualizer,
  CurrencyExchangeVisualizer,
  ArtWallVisualizer,
  ArticleBuilderVisualizer,
  TemplateBuilderVisualizer,
  ElectionCampaignVisualizer,
  ScentivaVisualizer,
  ELearningVisualizer,
  InventorySystemVisualizer,
  PortBlogsVisualizer
} from "../components/ProjectWidgets";

function NexusArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState("gateway");

  const nodes = {
    gateway: {
      name: "API Gateway",
      role: "Wildcard Tenant Router",
      desc: "Intercepts all incoming traffic (e.g., tenant.nexus360.com). Handles SSL termination, CORS headers, security policy enforcement, and forwards payloads to the microservice swarm.",
      tech: "NestJS / Express / Reverse Proxy",
      color: "border-cyan-500 text-cyan-600 dark:text-cyan-400 bg-cyan-500/5"
    },
    auth: {
      name: "Auth Service",
      role: "Identity & RBAC",
      desc: "Microservice verifying JSON Web Tokens (JWT). Performs Role-Based Access Control checks, permission mappings, and authenticates tenant isolation layers.",
      tech: "NestJS / Passport / JWT",
      color: "border-purple-500 text-purple-600 dark:text-purple-400 bg-purple-500/5"
    },
    erp: {
      name: "ERP Service",
      role: "Business Swarm Engine",
      desc: "Manages core processes: multi-tenant invoicing, client records, document indexing, and user workspaces. Highly scalable and decoupled from Auth.",
      tech: "NestJS / Prisma / Node.js",
      color: "border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-500/5"
    },
    cron: {
      name: "Cron / Invoice worker",
      role: "Automated Workflows",
      desc: "Autonomous background service querying databases for unpaid invoices. Dispatches automated PDF generation, triggers payment reminders, and sends transaction emails.",
      tech: "NestJS / Node-Cron / Nodemailer",
      color: "border-orange-500 text-orange-600 dark:text-orange-400 bg-orange-500/5"
    },
    redis: {
      name: "Redis Cache",
      role: "State & Rate Limit Store",
      desc: "In-memory database caching configuration rules, session statuses, rate limit quotas, and query responses to speed up API Gateway resolutions.",
      tech: "Redis / Redis Labs",
      color: "border-red-500 text-red-600 dark:text-red-400 bg-red-500/5"
    },
    postgres: {
      name: "PostgreSQL DB",
      role: "Relational Storage",
      desc: "Primary relational storage with row-level tenant separation constraints. Stores financial ledgers, audit logs, and account profiles with strict ACID guarantees.",
      tech: "PostgreSQL / Prisma Client",
      color: "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5"
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6">
      <div className="text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Interactive Monorepo Microservices Architecture
      </div>
      <p className="text-xs text-gray-400 text-center mb-8">Click a node to inspect its role and stack in the Nexus360 mesh.</p>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Node Visual Layout */}
        <div className="md:col-span-2 flex flex-col gap-6 relative">
          
          {/* Top Layer */}
          <div className="flex justify-center">
            <button
              onClick={() => setSelectedNode("gateway")}
              className={`px-4 py-3 rounded-xl border-2 font-mono text-sm transition-all duration-300 shadow-md ${selectedNode === "gateway" ? "ring-4 ring-cyan-500/20 scale-105" : ""} ${nodes.gateway.color}`}
            >
              {nodes.gateway.name}
            </button>
          </div>

          {/* Connective lines */}
          <div className="flex justify-center -my-2 h-4 w-full relative">
            <div className="w-0.5 h-full bg-cyan-500/30"></div>
          </div>

          {/* Middle Layer */}
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <button
              onClick={() => setSelectedNode("auth")}
              className={`w-full max-w-[140px] px-3 py-2.5 rounded-xl border-2 font-mono text-xs text-center transition-all duration-300 shadow-sm ${selectedNode === "auth" ? "ring-4 ring-purple-500/20 scale-105" : ""} ${nodes.auth.color}`}
            >
              {nodes.auth.name}
            </button>

            <button
              onClick={() => setSelectedNode("erp")}
              className={`w-full max-w-[140px] px-3 py-2.5 rounded-xl border-2 font-mono text-xs text-center transition-all duration-300 shadow-sm ${selectedNode === "erp" ? "ring-4 ring-blue-500/20 scale-105" : ""} ${nodes.erp.color}`}
            >
              {nodes.erp.name}
            </button>

            <button
              onClick={() => setSelectedNode("cron")}
              className={`w-full max-w-[140px] px-3 py-2.5 rounded-xl border-2 font-mono text-xs text-center transition-all duration-300 shadow-sm ${selectedNode === "cron" ? "ring-4 ring-orange-500/20 scale-105" : ""} ${nodes.cron.color}`}
            >
              {nodes.cron.name}
            </button>
          </div>

          {/* Connective lines */}
          <div className="flex justify-around px-8 -my-2 h-4 relative">
            <div className="w-0.5 h-full bg-purple-500/30"></div>
            <div className="w-0.5 h-full bg-blue-500/30"></div>
            <div className="w-0.5 h-full bg-orange-500/30"></div>
          </div>

          {/* Bottom Layer */}
          <div className="grid grid-cols-2 gap-8 justify-items-center px-6">
            <button
              onClick={() => setSelectedNode("redis")}
              className={`w-full max-w-[160px] px-4 py-2.5 rounded-xl border-2 font-mono text-xs text-center transition-all duration-300 shadow-sm ${selectedNode === "redis" ? "ring-4 ring-red-500/20 scale-105" : ""} ${nodes.redis.color}`}
            >
              {nodes.redis.name}
            </button>

            <button
              onClick={() => setSelectedNode("postgres")}
              className={`w-full max-w-[160px] px-4 py-2.5 rounded-xl border-2 font-mono text-xs text-center transition-all duration-300 shadow-sm ${selectedNode === "postgres" ? "ring-4 ring-emerald-500/20 scale-105" : ""} ${nodes.postgres.color}`}
            >
              {nodes.postgres.name}
            </button>
          </div>

        </div>

        {/* Details Card */}
        <div className="rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#111216] p-5 shadow-sm min-h-[220px] flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-500 uppercase tracking-widest font-mono mb-2 inline-block">
              {nodes[selectedNode].role}
            </span>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-mono">
              {nodes[selectedNode].name}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-4">
              {nodes[selectedNode].desc}
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 dark:border-white/5 text-[10px] font-bold text-cyan-600 dark:text-accent font-mono uppercase tracking-wide">
            Stack: {nodes[selectedNode].tech}
          </div>
        </div>

      </div>
    </div>
  );
}

function ScriptShelfVisualizer() {
  const [activeStep, setActiveStep] = useState(-1);
  const [simulating, setSimulating] = useState(false);
  const [liveLog, setLiveLog] = useState("");

  const steps = [
    { title: "Client Action", detail: "Developer publishes script or earns platform XP." },
    { title: "API Gateway", detail: "Express validates JWT security and updates database." },
    { title: "Redis Pub/Sub", detail: "Events channeled to notification broker instantly." },
    { title: "Socket Swarm", detail: "Socket.io routes payload to targeted websocket connections." },
    { title: "Recipient UI", detail: "Dynamic feedback: Notification bubbles pop & XP increment." }
  ];

  const runSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setActiveStep(0);
    setLiveLog("Publish transaction dispatched from Client...");

    const delays = [1000, 2200, 3400, 4600, 5800];
    const logs = [
      "Express API validating permissions and committing metadata to MongoDB...",
      "Database commit complete! Routing event details to Redis Pub/Sub stream...",
      "Redis channels matched: Broadcasting payload to active subscription instances...",
      "Socket.io handshake matched: Transmitting WS message to targeted user scoping...",
      "Simulated update complete: Notification bubble popped, XP count incremented (+50 XP)!"
    ];

    delays.forEach((delay, idx) => {
      setTimeout(() => {
        setActiveStep(idx);
        setLiveLog(logs[idx]);
        if (idx === delays.length - 1) {
          setSimulating(false);
        }
      }, delay);
    });
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-black/25 p-6 flex flex-col gap-6">
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center">
        Real-time Redis Notifications & Events Pipeline
      </div>
      <p className="text-xs text-gray-400 text-center -mt-3">Simulate the real-time event pipeline implemented in ScriptShelf.</p>

      {/* Steps Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl border text-center transition-all duration-500 relative flex flex-col justify-between min-h-[90px] ${
              activeStep === idx
                ? "bg-cyan-500/10 border-cyan-500 scale-105 shadow-md shadow-cyan-500/10"
                : activeStep > idx
                ? "bg-emerald-500/5 border-emerald-500/30 text-gray-500"
                : "bg-white dark:bg-[#111216] border-gray-250 dark:border-white/5 text-gray-600 dark:text-gray-400"
            }`}
          >
            <div className="text-xs font-mono font-bold mb-1.5 uppercase">
              {idx + 1}. {s.title}
            </div>
            <div className="text-[10px] leading-tight font-light opacity-80">
              {s.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Log Console Console */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0B0B0D]">
        <div className="font-mono text-xs text-gray-600 dark:text-cyan-500/90 w-full sm:w-[70%] min-h-[24px] flex items-center">
          {liveLog ? `[log]: ${liveLog}` : "Ready to simulate system transaction pipeline."}
        </div>
        
        <button
          onClick={runSimulation}
          disabled={simulating}
          className="
            w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-center whitespace-nowrap
            bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-50
            hover:shadow-md active:scale-95
          "
        >
          {simulating ? "Simulating..." : "Simulate Notification Event"}
        </button>
      </div>
    </div>
  );
}

// Helper function to map tech names to React Icons
const getTechIcon = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("react")) return <SiReact className="text-[#61DAFB] text-xl" />;
  if (t.includes("node")) return <SiNodedotjs className="text-[#339933] text-xl" />;
  if (t.includes("express")) return <SiExpress className="text-gray-800 dark:text-gray-200 text-xl" />;
  if (t.includes("mongo")) return <SiMongodb className="text-[#47A248] text-xl" />;
  if (t.includes("redis")) return <SiRedis className="text-[#DC382D] text-xl" />;
  if (t.includes("socket")) return <SiSocketdotio className="text-[#010101] dark:text-white text-xl" />;
  if (t.includes("tailwind")) return <SiTailwindcss className="text-[#06B6D4] text-xl" />;
  if (t.includes("django")) return <SiDjango className="text-[#092E20] dark:text-[#0BA550] text-xl" />;
  if (t.includes("postgres")) return <SiPostgresql className="text-[#4169E1] text-xl" />;
  if (t.includes("jwt")) return <SiJsonwebtokens className="text-[#000000] dark:text-white text-xl" />;
  if (t.includes("razorpay")) return <SiRazorpay className="text-[#02042B] dark:text-[#3395FF] text-xl" />;
  if (t.includes("vercel")) return <SiVercel className="text-[#000000] dark:text-white text-xl" />;
  if (t.includes("cloud")) return <SiCloudinary className="text-[#3448C5] text-xl" />;
  if (t.includes("stripe")) return <SiStripe className="text-[#008CDD] text-xl" />;
  if (t.includes("vue")) return <SiVuedotjs className="text-[#4FC08D] text-xl" />;
  if (t.includes("next")) return <SiNextdotjs className="text-[#000000] dark:text-white text-xl" />;
  if (t.includes("nest")) return <SiNestjs className="text-[#E0234E] text-xl" />;
  if (t.includes("type")) return <SiTypescript className="text-[#3178C6] text-xl" />;
  if (t.includes("docker")) return <SiDocker className="text-[#2496ED] text-xl" />;
  if (t.includes("python")) return <SiPython className="text-[#3776AB] text-xl" />;
  if (t.includes("vite")) return <SiVite className="text-[#646CFF] text-xl" />;
  if (t.includes("turbo")) return <SiTurborepo className="text-[#EF4444] text-xl" />;
  if (t.includes("api")) return <FiServer className="text-gray-500 dark:text-gray-400 text-xl" />;
  
  return <FiCpu className="text-gray-500 dark:text-gray-400 text-xl" />; // default fallback
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  const [gallery, setGallery] = useState([]);
  const [exists, setExists] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!project)
    return (
      <div className="pt-28 px-4 md:px-6 text-gray-700 dark:text-gray-300 font-medium text-center">
        <SEO title="Project Not Found" />
        Project not found.
        <br />
        <a href="/projects" className="text-cyan-600 underline mt-2 inline-block">Back to Projects</a>
      </div>
    );

  useEffect(() => {
    // Dynamic import for assets based on slug
    const all = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp}", { eager: true });

    // Filter images that match the project slug folder structure: active/assets/<slug>/1.png, etc.
    const imgs = Object.entries(all)
      .filter(([path]) => path.includes(`/assets/${slug}/`))
      .map(([path, module]) => ({ src: module.default, name: path.split("/").pop() })) // extract filename
      .sort((a, b) => parseInt(a.name) - parseInt(b.name)) // sort by number if filenames are 1.png, 2.png
      .map(i => i.src);

    if (!imgs.length) setExists(false);
    else {
      setGallery(imgs);
      setExists(true);
    }
  }, [slug]);

  // Lightbox Handlers
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = useCallback((e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % gallery.length);
  }, [gallery.length]);

  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  // Keyboard Navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  // Pre-check for "Coming Soon" only if details are absolutely missing
  if (!project.details) {
    return (
      <div className="pt-32 px-4 md:px-6 max-w-4xl mx-auto min-h-[70vh] flex items-center justify-center">
        <SEO title="Coming Soon" />
        <div className="
          relative w-full text-center rounded-3xl p-12 md:p-20 overflow-hidden
          bg-white border border-gray-100 shadow-2xl
          dark:bg-[#0B0B0D] dark:border-white/5
        ">
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-64 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 mb-8 text-4xl">
              🚧
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">
              Case Study <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Under Construction</span>
            </h1>
            
            <p className="mb-10 text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
              I'm currently documenting the architecture and outcomes for <b>{project.title}</b>. Check back shortly for the full breakdown.
            </p>
            
            <a
              href="/projects"
              className="
                inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold transition-all duration-300
                bg-gradient-to-r from-cyan-600 to-blue-700 text-white
                shadow-[0_10px_30px_rgba(8,145,178,0.3)] hover:shadow-[0_15px_40px_rgba(8,145,178,0.5)] 
                hover:-translate-y-1 active:scale-95
              "
            >
              Return to Catalog
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={project.title} description={project.description} />
      <div className="pt-28 px-4 md:px-6 max-w-6xl mx-auto">

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

        {/* GALLERY GRID */}
        {exists && gallery.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                layoutId={`image-${i}`}
                onClick={() => openLightbox(i)}
                className="
                  group relative rounded-xl overflow-hidden cursor-pointer
                  bg-gray-100 border border-gray-200
                  dark:bg-[#0B0B0D] dark:border-[#1F2937]
                "
                whileHover={{ y: -4 }}
              >
                <OptimizedImage
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full h-72"
                />

                {/* Overlay on Hover */}
                <div className="
                  absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 flex items-center justify-center z-20
                ">
                  <span className="text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                    <FiMaximize2 /> View Fullscreen
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-14">
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-3.5 rounded-xl font-bold inline-flex items-center gap-2 transition-all duration-300
                bg-gradient-to-r from-cyan-600 to-blue-700 text-white
                hover:shadow-[0_0_25px_rgba(8,145,178,0.4)] hover:-translate-y-1 active:scale-95
              "
            >
              <FiExternalLink /> Live Demo
            </a>
          )}

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all duration-300 font-bold
                bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md
                text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10 hover:border-cyan-400 dark:hover:border-accent/40
                hover:-translate-y-1 active:scale-95
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
                  rounded-xl p-4 text-center flex flex-col items-center justify-center gap-3
                  bg-white/40 border border-gray-250/60 dark:bg-[#111216]/50 dark:border-white/5 backdrop-blur-md
                  hover:-translate-y-1 hover:shadow-md hover:border-cyan-500/30 transition-all duration-300
                "
              >
                <div className="p-3 bg-white dark:bg-[#1A1A24] rounded-lg shadow-sm">
                  {getTechIcon(t)}
                </div>
                <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS CONTENT */}
        {project.details && (
          <>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Problem & Context</h2>
              <div className="rounded-2xl p-6 md:p-8 bg-white/40 border border-gray-250/60 dark:bg-[#111216]/50 dark:border-white/5 backdrop-blur-md">
                <p className="leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">{project.details.problem}</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Solution Overview</h2>
              <div className="rounded-2xl p-6 md:p-8 bg-white/40 border border-gray-250/60 dark:bg-[#111216]/50 dark:border-white/5 backdrop-blur-md">
                <p className="leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">{project.details.solution}</p>
              </div>
            </div>

            {project.details.architecture && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">System Architecture</h2>
                
                {project.slug === "syncup" && <SyncUpVisualizer />}
                {project.slug === "booklibrary" && <BookLibraryVisualizer />}
                {project.slug === "nexus360" && <NexusArchitectureDiagram />}
                {project.slug === "script-shelf" && <ScriptShelfVisualizer />}
                {project.slug === "task-manager" && <TaskManagerVisualizer />}
                {project.slug === "currency-xchange" && <CurrencyExchangeVisualizer />}
                {project.slug === "ArtWall" && <ArtWallVisualizer />}
                {project.slug === "article-builder" && <ArticleBuilderVisualizer />}
                {project.slug === "template-builder" && <TemplateBuilderVisualizer />}
                {project.slug === "election-campaign" && <ElectionCampaignVisualizer />}
                {project.slug === "scentiva" && <ScentivaVisualizer />}
                {project.slug === "elearning" && <ELearningVisualizer />}
                {project.slug === "inventory-system" && <InventorySystemVisualizer />}
                {project.slug === "port-blogs" && <PortBlogsVisualizer />}

                <div className="rounded-2xl p-6 md:p-8 bg-white/40 border border-gray-250/60 dark:bg-[#111216]/50 dark:border-white/5 backdrop-blur-md">
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {project.details.architecture.map((l, k) => <li key={k}>• {l}</li>)}
                  </ul>
                </div>
              </div>
            )}

            {project.details.outcomes && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Outcomes</h2>
                <div className="rounded-2xl p-6 md:p-8 bg-white/40 border border-gray-250/60 dark:bg-[#111216]/50 dark:border-white/5 backdrop-blur-md">
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {project.details.outcomes.map((l, k) => <li key={k}>• {l}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </>
        )}

      </div>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50"
            >
              <FiX size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50 hidden md:block"
            >
              <FiChevronLeft size={30} />
            </button>

            {/* Main Image */}
            <motion.img
              key={lightboxIndex}
              layoutId={`image-${lightboxIndex}`}
              src={gallery[lightboxIndex]}
              alt="Full screen view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50 hidden md:block"
            >
              <FiChevronRight size={30} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
              {lightboxIndex + 1} / {gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
