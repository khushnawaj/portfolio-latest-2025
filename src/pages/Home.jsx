import { Link } from "react-router-dom";
import { FiChevronRight, FiDownload, FiCode, FiDatabase, FiLayers } from "react-icons/fi";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SpotlightCard from "../components/SpotlightCard";
import Tilt from "../components/Tilt";

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

      {/* HERO */}
      <section className="min-h-[75vh] flex items-center px-6 pt-28 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

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
                "
              />
            </Tilt>
          </motion.div>

        </div>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-6xl mx-auto px-6 py-20">

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
              className="p-7"
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
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-2xl p-12
            bg-gray-50 border border-gray-200
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

    </main>
  );
}
