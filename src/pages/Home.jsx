import { Link } from "react-router-dom";
import { FiChevronRight, FiDownload, FiCode, FiDatabase, FiLayers, FiExternalLink } from "react-icons/fi";
import logo from "../assets/logo.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SpotlightCard from "../components/SpotlightCard";
import Tilt from "../components/Tilt";
import TechGravity from "../components/TechGravity";
import SEO from "../components/SEO";
import ParticleBackground from "../components/ParticleBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Typewriter = ({ words, delay = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[index];

    const handleType = () => {
      setText(prev =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
        setTypingSpeed(100);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words, delay, typingSpeed]);

  return (
    <span className="inline-block border-r-2 border-cyan-600 dark:border-cyan-400 pr-1 animate-pulse">
      {text}
    </span>
  );
};

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal text elements nicely using GSAP
      gsap.from(".hero-text-anim", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });

      // Scroll Reveal Animations
      gsap.utils.toArray('.reveal-up').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-hidden">
      <SEO
        title="Home"
        description="Khushnawaj - Full Stack Developer specializing in high-performance web applications and beautiful interfaces."
      />

      {/* HERO */}
      <section ref={heroRef} className="min-h-[90vh] flex items-center px-6 pt-20 relative overflow-hidden bg-white/50 dark:bg-[#09090b]/50">
        
        {/* TS Particles Background */}
        <ParticleBackground />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-800/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">

          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p className="hero-text-anim text-cyan-600 dark:text-cyan-400 tracking-widest text-sm font-bold uppercase mb-4">
              Full Stack Engineer & Designer
            </p>

            <h1 className="hero-text-anim text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-2 text-gray-900 dark:text-white leading-[1.1]">
              Khushnawaj
            </h1>
            <h2 className="hero-text-anim text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-gray-700 dark:text-gray-300">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Digital</span> Experiences
            </h2>

            <div className="hero-text-anim text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
              I build <b className="font-semibold text-gray-900 dark:text-white">high-performance systems</b> and <b className="font-semibold text-gray-900 dark:text-white">beautiful interfaces</b> that scale gracefully.
            </div>

            {/* CTA BUTTONS - Nested inside Left Column */}
            <div className="hero-text-anim flex flex-col sm:flex-row gap-5">
              <a
                href="/projects"
                className="
                  px-8 py-3.5 rounded-full font-bold transition text-center shadow-[0_0_30px_rgba(8,145,178,0.2)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)]
                  bg-gray-900 text-white hover:bg-gray-800
                  dark:bg-white dark:text-black dark:hover:bg-gray-200
                "
              >
                View Selected Work
              </a>

              <a
                href="/resume"
                className="
                  px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition font-bold
                  border border-gray-300 text-gray-700 hover:text-cyan-600 hover:border-cyan-400 bg-white/50 backdrop-blur-sm
                  dark:border-white/10 dark:text-gray-200 dark:hover:text-cyan-400 dark:hover:border-cyan-500/50 dark:bg-black/20
                "
              >
                <FiDownload />
                Resume
              </a>
            </div>
          </div>


          {/* RIGHT */}
          <motion.div
            className="flex justify-center md:justify-end items-center w-full h-full min-h-[400px] relative cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Restored Hero Profile Image */}
            <div className="relative z-20">
              <Tilt>
                <div className="relative rounded-3xl p-2 bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-cyan-500/50 dark:to-blue-600/50">
                  <img
                    src={logo}
                    alt="Khushnawaj"
                    className="
                      h-64 w-64 md:h-80 md:w-80 object-cover rounded-2xl shadow-[0_0_50px_rgba(8,145,178,0.3)] dark:shadow-[0_0_50px_rgba(8,145,178,0.2)]
                      border border-white/50 dark:border-black/50
                      bg-white dark:bg-[#09090b]
                    "
                  />
                </div>
              </Tilt>
            </div>
          </motion.div>

        </div>
      </section>

      {/* TECH GRAVITY SANDBOX */}
      <TechGravity />

      {/* FEATURED PROJECT: NEXUS360 */}
      <section className="max-w-6xl mx-auto px-6 py-32 reveal-up">
        <div className="flex flex-col md:flex-row items-center gap-16">

          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Latest Masterpiece
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
              Nexus360 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">ERP</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              An enterprise-grade, microservice-based ERP system featuring Multi-Tenancy, Role-Based Access Control, an API Gateway, and highly automated workflows.
            </p>

            <ul className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
              <li className="flex items-center gap-2"><span className="text-cyan-500">◆</span> TurboRepo Architecture</li>
              <li className="flex items-center gap-2"><span className="text-cyan-500">◆</span> NestJS Microservices</li>
              <li className="flex items-center gap-2"><span className="text-cyan-500">◆</span> Next.js Admin Panel</li>
              <li className="flex items-center gap-2"><span className="text-cyan-500">◆</span> API Gateway & Redis</li>
            </ul>

            <div className="pt-6 flex flex-wrap gap-4">
              <Link
                to="/projects/nexus360"
                className="
                  px-8 py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold 
                  hover:-translate-y-1 transition duration-300 shadow-[0_0_20px_rgba(8,145,178,0.2)] hover:shadow-[0_0_20px_rgba(8,145,178,0.5)] inline-flex items-center gap-2
                "
              >
                Explore Architecture <FiChevronRight />
              </Link>

              <a
                href="https://github.com/khushnawaj/nexus360"
                target="_blank"
                rel="noopener noreferrer"
                className="
                   px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-bold 
                   hover:text-blue-600 hover:border-blue-400 transition inline-flex items-center gap-2
                   dark:border-white/10 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:border-blue-500/50
                   bg-white/50 dark:bg-black/20 backdrop-blur-sm hover:-translate-y-1 duration-300
                 "
              >
                <FiCode /> Source Code
              </a>
            </div>
          </div>

          <div className="flex-1 w-full relative group">
            {/* Abstract ERP Dashboard Preview */}
            <Link
              to="/projects/nexus360"
              className="
               aspect-video rounded-2xl overflow-hidden 
               bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] 
               dark:from-[#111216] dark:to-[#09090b]
               border border-gray-200 dark:border-white/10
               flex flex-col relative group hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-500 shadow-2xl block
             ">

              {/* Server / Microservice Status Badge */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                All Services Operational
              </div>

              {/* Mock Dashboard UI */}
              <div className="w-full h-12 bg-white/50 dark:bg-black/40 border-b border-gray-200 dark:border-white/5 flex items-center px-4 gap-2 backdrop-blur-md relative z-10">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 h-4 w-32 bg-gray-200 dark:bg-white/10 rounded-full"></div>
              </div>

              <div className="flex-1 p-6 relative flex flex-col gap-4">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.02]" />
                
                {/* Dashboard Stats Row */}
                <div className="grid grid-cols-3 gap-4 relative z-10">
                  <div className="h-20 bg-white/70 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 p-4 flex flex-col justify-between shadow-sm">
                    <div className="h-2 w-16 bg-blue-500/50 rounded-full"></div>
                    <div className="h-6 w-12 bg-gray-800 dark:bg-white/80 rounded-md"></div>
                  </div>
                  <div className="h-20 bg-white/70 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 p-4 flex flex-col justify-between shadow-sm">
                    <div className="h-2 w-20 bg-cyan-500/50 rounded-full"></div>
                    <div className="h-6 w-16 bg-gray-800 dark:bg-white/80 rounded-md"></div>
                  </div>
                  <div className="h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 flex flex-col justify-between shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <div className="h-2 w-12 bg-white/50 rounded-full"></div>
                    <div className="h-6 w-10 bg-white rounded-md"></div>
                  </div>
                </div>

                {/* Dashboard Chart Mock */}
                <div className="flex-1 bg-white/70 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 p-4 relative z-10 shadow-sm overflow-hidden flex flex-col">
                  <div className="h-3 w-32 bg-gray-300 dark:bg-white/20 rounded-full mb-4"></div>
                  <div className="flex-1 flex items-end gap-2">
                    {[40, 70, 45, 90, 65, 100, 80].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/20 to-cyan-400/80 rounded-t-sm" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>

                {/* Microservice Flow Mock */}
                <div className="absolute right-6 bottom-6 w-32 h-32 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-2xl z-0"></div>
              </div>

            </Link>
          </div>

        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="bg-gray-50 dark:bg-[#0e0e10] py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="reveal-up text-4xl md:text-5xl font-black mb-12 text-gray-900 dark:text-white text-center">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCode size={22} />,
                title: "Backend Engineering",
                desc: "Designing stable APIs, authentication, RBAC, integrations & backend logic."
              },
              {
                icon: <FiDatabase size={22} />,
                title: "Database Architecture",
                desc: "MongoDB & SQL schema planning, optimization & performance tuning."
              },
              {
                icon: <FiLayers size={22} />,
                title: "Frontend & Systems",
                desc: "Clean React/Vue applications with maintainable architecture."
              }
            ].map((item, i) => (
              <div key={i} className="reveal-up">
                <SpotlightCard className="p-8 h-full bg-white dark:bg-[#111216] border border-gray-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-cyan-600 dark:text-cyan-400 mb-6 bg-cyan-50 dark:bg-cyan-900/20 w-14 h-14 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center reveal-up">
        <div className="
            relative rounded-3xl p-16 overflow-hidden
            bg-white border border-gray-200 shadow-2xl
            dark:bg-[#111216] dark:border-white/10
          "
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-40 bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 dark:text-white relative z-10">
            Let's build something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">extraordinary</span>
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            If you have a project, opportunity or just want to connect, feel free to reach out.
          </p>

          <a
            href="/contact"
            className="
              relative z-10 px-10 py-4 text-lg rounded-full font-bold inline-flex items-center gap-3 transition shadow-[0_0_40px_rgba(8,145,178,0.3)] hover:shadow-[0_0_40px_rgba(8,145,178,0.6)] hover:-translate-y-1
              bg-gray-900 text-white hover:bg-gray-800
              dark:bg-white dark:text-black dark:hover:bg-gray-200
            "
          >
            Start a Conversation
            <FiChevronRight size={20} />
          </a>

        </div>
      </section>

    </main >
  );
}
