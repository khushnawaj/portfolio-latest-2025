import { Link } from "react-router-dom";
import { FiChevronRight, FiDownload, FiCode, FiDatabase, FiLayers, FiExternalLink } from "react-icons/fi";
import profileImg from "../assets/profile.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SpotlightCard from "../components/SpotlightCard";
import TechMarquee from "../components/TechMarquee";
import SEO from "../components/SEO";
import ParticleBackground from "../components/ParticleBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OptimizedImage from "../components/OptimizedImage";

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
      <section ref={heroRef} className="min-h-[90vh] flex items-center px-4 md:px-6 pt-20 relative overflow-hidden bg-white/50 dark:bg-[#09090b]/50">
        
        {/* TS Particles Background */}
        <ParticleBackground />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-800/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">

          {/* LEFT: Information & CTA */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-2xl py-8">
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

            {/* CTA BUTTONS */}
            <div className="hero-text-anim flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/projects"
                className="
                  px-6 py-3 rounded-xl font-bold transition-all duration-300 text-center text-sm md:text-base
                  bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                  hover:shadow-[0_0_25px_rgba(8,145,178,0.5)] active:scale-95
                "
              >
                View Work
              </Link>

              <a
                href="/resume"
                className="
                  px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-bold text-sm md:text-base
                  bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md
                  text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10
                  active:scale-95
                "
              >
                <FiDownload />
                Resume
              </a>
            </div>
          </div>


          {/* RIGHT */}
          <motion.div
            className="flex justify-center md:justify-end items-center w-full h-full relative cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Refined Hero Profile Image (Tilt removed for stability) */}
            <div className="relative z-20">
              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-cyan-500/50 dark:to-blue-600/50">
                <OptimizedImage
                  src={profileImg}
                  alt="Khushnawaj"
                  className="
                    h-64 w-64 md:h-80 md:w-80 rounded-2xl shadow-[0_0_50px_rgba(8,145,178,0.3)] dark:shadow-[0_0_50px_rgba(8,145,178,0.2)]
                    border border-white/50 dark:border-black/50
                    bg-white dark:bg-[#09090b]
                  "
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* TECH MARQUEE */}
      <TechMarquee />

      {/* FEATURED PROJECT: NEXUS360 */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-32 reveal-up">
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

            <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/projects/nexus360"
                className="
                  px-6 py-3 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black font-bold text-sm
                  hover:-translate-y-1 transition-all duration-300 shadow-md active:scale-95 inline-flex items-center gap-2
                "
              >
                Architecture <FiChevronRight />
              </Link>

              <a
                href="https://github.com/khushnawaj/nexus360"
                target="_blank"
                rel="noopener noreferrer"
                className="
                   px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 font-bold text-sm
                   bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:-translate-y-1 active:scale-95 transition-all
                 "
              >
                <FiCode /> Code
              </a>
            </div>
          </div>

          <div className="flex-1 w-full flex flex-col justify-center items-center md:items-end">
            <div className="
              relative rounded-3xl p-10 md:p-14 overflow-hidden
              bg-white border border-gray-100 shadow-2xl
              dark:bg-[#111216] dark:border-white/5
              text-center md:text-right w-full max-w-lg
            ">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-gray-200 dark:text-white/5 mb-6">
                  NEXUS
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-cyan-500" />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <span>Performance</span>
                    <span>99.9%</span>
                  </div>
                </div>
                
                <div className="mt-12 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                    <div className="text-xs text-gray-500 uppercase mb-1">Microservices</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">Active</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                    <div className="text-xs text-gray-500 uppercase mb-1">Tenants</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">Scalable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="bg-gray-50 dark:bg-[#0e0e10] py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="reveal-up text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Expertise</span>
            </h2>
            <p className="reveal-up text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized technical skills focused on building secure, scalable, and high-performance digital products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCode size={22} />,
                title: "Backend Engineering",
                desc: "Designing stable APIs, microservice orchestration, RBAC, and complex business logic migrations."
              },
              {
                icon: <FiDatabase size={22} />,
                title: "Data Architecture",
                desc: "Strategic database design with MongoDB & SQL, focused on query optimization and data integrity."
              },
              {
                icon: <FiLayers size={22} />,
                title: "Full-Stack Systems",
                desc: "Developing end-to-end applications using modern monorepo architectures like TurboRepo."
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

      {/* WORK METHODOLOGY */}
      <section className="py-32 bg-white dark:bg-[#09090b]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <p className="text-cyan-600 dark:text-cyan-400 font-bold tracking-widest text-sm uppercase mb-4">The Process</p>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 dark:text-white leading-tight">
                From Concept to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Production</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Strategy & Planning", desc: "Understanding the business logic and user requirements to architect a scalable roadmap." },
                  { step: "02", title: "Architecture & Design", desc: "Defining the tech stack, database schemas, and building out the UI/UX foundation." },
                  { step: "03", title: "Development & Testing", desc: "Iterative coding cycles with continuous integration and rigorous automated testing." },
                  { step: "04", title: "Deployment & Scaling", desc: "Launching to production with monitoring systems to ensure 99.9% availability." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-6">
                    <span className="text-xl md:text-2xl font-black text-gray-200 dark:text-white/10 shrink-0">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1.5">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-gray-100 dark:border-white/5 p-12 flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="w-24 h-24 rounded-2xl bg-white dark:bg-white/5 shadow-xl flex items-center justify-center animate-bounce [animation-delay:-0.5s]">
                    <FiCode className="text-3xl text-cyan-500" />
                  </div>
                  <div className="w-24 h-24 rounded-2xl bg-white dark:bg-white/5 shadow-xl flex items-center justify-center animate-bounce [animation-delay:-0.2s] mt-12">
                    <FiDatabase className="text-3xl text-blue-500" />
                  </div>
                  <div className="w-24 h-24 rounded-2xl bg-white dark:bg-white/5 shadow-xl flex items-center justify-center animate-bounce [animation-delay:-0.8s] -mt-12">
                     <FiLayers className="text-3xl text-purple-500" />
                  </div>
                  <div className="w-24 h-24 rounded-2xl bg-white dark:bg-white/5 shadow-xl flex items-center justify-center animate-bounce">
                     <FiExternalLink className="text-3xl text-emerald-500" />
                  </div>
                </div>
                {/* Decorative particles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.1)_0%,transparent_70%)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-32 reveal-up">
        <div className="
            relative rounded-3xl p-8 md:p-16 overflow-hidden
            bg-white border border-gray-200 shadow-2xl
            dark:bg-[#111216] dark:border-white/10
            flex flex-col items-center text-center
          "
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-40 bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white relative z-10 leading-tight">
            Let's build something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">extraordinary</span>
          </h2>

          <p className="mb-8 max-w-xl mx-auto text-gray-600 dark:text-gray-400 relative z-10">
            I am currently available for new opportunities and collaborations. If you have a project in mind, let's talk.
          </p>

          <a
            href="/contact"
            className="
              relative z-10 px-8 py-3 text-base rounded-xl font-bold inline-flex items-center justify-center gap-3 transition-all duration-300 shadow-lg active:scale-95 w-full sm:w-auto
              bg-gradient-to-r from-cyan-600 to-blue-700 text-white
            "
          >
            Start a Conversation
            <FiChevronRight size={18} />
          </a>

        </div>
      </section>

    </main >
  );
}
