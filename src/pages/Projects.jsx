import { FiExternalLink, FiGithub, FiFolder, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "React", "Vue.js", "Node.js"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(p => p.tags.some(tag => tag.includes(filter)));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-14">
        <p className="tracking-wide mb-2 text-cyan-600 dark:text-accent">
          PROJECTS
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Selected Work
        </h1>

        <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-8">
          A curated collection of products and systems I’ve built.
        </p>

        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition
                ${filter === cat
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-[#111216] dark:text-gray-400 dark:hover:bg-[#1F2937]"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8 mb-20"
      >
        {filteredProjects.map((p, i) => (
          <motion.div
            key={p.slug} // Use slug as key for better stability
            variants={item}
            className="
              rounded-xl p-6 transition-all
              bg-white border border-gray-200 hover:border-cyan-300
              dark:bg-[#111216] dark:border-border dark:hover:border-accent/40
            "
          >
            <div className="flex items-start justify-between mb-4">
              <div className="
                p-3 rounded-lg
                bg-gray-100 border border-gray-200 text-cyan-600
                dark:bg-[#0B0B0D] dark:border-border dark:text-accent
              ">
                <FiFolder size={22} />
              </div>

              <div className="flex gap-3">
                {p.github && p.github !== "#" && (
                  <a
                    href={p.github}
                    aria-label="GitHub"
                    className="transition text-gray-500 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-accent"
                  >
                    <FiGithub />
                  </a>
                )}

                {p.live && p.live !== "#" && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    className="transition text-gray-500 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-accent"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {p.title}
            </h3>

            <p className="mb-5 leading-relaxed text-gray-600 dark:text-gray-400">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="
                    px-3 py-1 text-xs rounded-lg
                    bg-gray-100 border border-gray-200 text-gray-700
                    dark:bg-[#0B0B0D] dark:border-border dark:text-gray-300
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {p.caseStudy && (
              <Link
                to={`/projects/${p.slug}`}
                className="
                  inline-flex items-center gap-1 text-sm
                  text-cyan-600 hover:text-cyan-700
                  dark:text-accent dark:hover:text-accent
                "
              >
                View Case Study
                <FiChevronRight />
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="text-center py-10">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          Have a project in mind?
        </h3>

        <p className="max-w-xl mx-auto mb-6 text-gray-600 dark:text-gray-400">
          I’m always open to meaningful work and collaborations.
        </p>

        <a
          href="/contact"
          className="
            inline-flex items-center gap-2 px-7 py-3 rounded-lg font-medium transition
            bg-gray-900 text-white hover:bg-gray-800
            dark:bg-white dark:text-black dark:hover:bg-gray-200
          "
        >
          Let’s Connect
          <FiChevronRight />
        </a>
      </div>
    </div>
  );
}
