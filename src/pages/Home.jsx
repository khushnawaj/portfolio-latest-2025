import { Link } from "react-router-dom";
import { FiChevronRight, FiDownload, FiCode, FiDatabase, FiLayers, FiExternalLink } from "react-icons/fi";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SpotlightCard from "../components/SpotlightCard";
import Tilt from "../components/Tilt";
import TechMarquee from "../components/TechMarquee";
import SEO from "../components/SEO";

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

  return (
    <main className="overflow-hidden">
      <SEO
        title="Home"
        description="Khushnawaj - Full Stack Developer specializing in high-performance web applications and beautiful interfaces."
      />

      {/* HERO */}
      <section className="min-h-[85vh] flex items-center px-6 pt-20 relative overflow-hidden">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-cyan-600 dark:text-accent tracking-widest text-sm font-semibold uppercase mb-4">
              Full Stack Developer
            </p>

            <h1 className="
              text-5xl md:text-7xl font-bold tracking-tight mb-6
              text-gray-900 dark:text-white
            ">
              Khushnawaj
            </h1>

            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
              I engineer <span className="text-gray-900 dark:text-white font-medium">high-performance systems</span> and <span className="text-gray-900 dark:text-white font-medium">beautiful interfaces</span> that scale.
            </div>

            {/* CTA BUTTONS - Nested inside Left Column */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/projects"
                className="
                  px-7 py-3 rounded-lg font-medium transition text-center
                  bg-gray-900 text-white hover:bg-gray-800
                  dark:bg-white dark:text-black dark:hover:bg-gray-200
                "
              >
                View Projects
              </a>

              <a
                href="/resume"
                className="
                  px-7 py-3 rounded-lg flex items-center justify-center gap-2 transition
                  border border-gray-300 text-gray-700 hover:text-cyan-600 hover:border-cyan-300
                  dark:border-border dark:text-gray-200 dark:hover:text-accent dark:hover:border-accent
                "
              >
                <FiDownload />
                Resume
              </a>
            </div>
          </motion.div>


          {/* RIGHT */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tilt>
              <img
                src={logo}
                alt="profile"
                className="
                  h-64 w-64 object-cover rounded-2xl shadow-xl
                  border border-gray-300 dark:border-border
                  relative z-20
                "
              />
            </Tilt>
          </motion.div>

        </div>
      </section>

      {/* TECH MARQUEE */}
      <TechMarquee />

      {/* FEATURED PROJECT: SCIPRT SHELF */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Latest Work
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              ScriptShelf
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              A developer-centric platform featuring a generic Redis-backed notification engine, gamification with XP/reputation, and an interactive typing game.
            </p>

            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">✓ Redis Notification System</li>
              <li className="flex items-center gap-2">✓ Gamification & XP</li>
              <li className="flex items-center gap-2">✓ Admin Console</li>
              <li className="flex items-center gap-2">✓ Typing Speed Game</li>
            </ul>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/projects/script-shelf"
                className="
                  px-6 py-2.5 rounded-lg bg-cyan-600 text-white font-medium 
                  hover:bg-cyan-700 transition inline-flex items-center gap-2 shadow-sm
                "
              >
                View Case Study <FiChevronRight />
              </Link>

              <a
                href="https://script-self-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                   px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium 
                   hover:text-cyan-600 hover:border-cyan-300 transition inline-flex items-center gap-2
                   dark:border-gray-700 dark:text-gray-300 dark:hover:text-accent dark:hover:border-accent
                   bg-white dark:bg-transparent
                 "
              >
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </div>

          <div className="flex-1 w-full relative group">
            {/* Abstract Code/Preview Placeholder since we don't have a screenshot yet */}
            {/* Live Profile Feature Card */}
            <a
              href="https://script-self-two.vercel.app/u/khush"
              target="_blank"
              rel="noopener noreferrer"
              className="
               aspect-video rounded-xl overflow-hidden 
               bg-gradient-to-br from-white to-gray-50 
               dark:from-[#111216] dark:to-[#0B0B0D]
               border border-gray-200 dark:border-[#1F2937]
               flex flex-col relative group hover:border-cyan-300 dark:hover:border-accent/40 transition-all duration-300 shadow-md cursor-pointer
             ">

              {/* Card Header / Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                  Live System
                </span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

                {/* Avatar Ring */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-[2px] shadow-lg">
                    <div className="w-full h-full rounded-full bg-white dark:bg-[#111216] flex items-center justify-center overflow-hidden">
                      <span className="text-2xl font-bold text-gray-800 dark:text-white">K</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-black border-2 border-white dark:border-[#111216] shadow-sm">
                    18
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Khushnawaj</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Full Stack Developer</p>

                {/* XP Bar */}
                <div className="w-full max-w-[200px] space-y-2 mb-6">
                  <div className="flex justify-between text-xs font-medium text-gray-600 dark:text-gray-400">
                    <span>XP Progress</span>
                    <span className="text-cyan-600 dark:text-accent">24,500 / 30,000</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 dark:bg-[#1F2937] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[82%]" />
                  </div>
                </div>

                <span
                  className="text-sm font-medium text-cyan-600 dark:text-accent hover:underline inline-flex items-center gap-1"
                >
                  View My Public Profile <FiExternalLink size={12} />
                </span>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="bg-gray-50 dark:bg-[#0e0e10] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-gray-900 dark:text-white"
          >
            Core Expertise
          </motion.h2>

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
              <SpotlightCard
                key={i}
                className="p-7 bg-white dark:bg-[#111216]"
              >
                <div className="text-cyan-600 dark:text-accent mb-4">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-2xl p-12
            bg-white border border-gray-200 shadow-sm
            dark:bg-[#111216] dark:border-border
          "
        >

          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Open to meaningful work & collaborations
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            If you have a project, opportunity or just want to connect, feel free to reach out.
          </p>

          <a
            href="/contact"
            className="
              px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition
              bg-gray-900 text-white hover:bg-gray-800
              dark:bg-white dark:text-black dark:hover:bg-gray-200
            "
          >
            Get in touch
            <FiChevronRight />
          </a>

        </motion.div>
      </section>

    </main >
  );
}
