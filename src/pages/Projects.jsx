import { Link } from "react-router-dom";
import { FiSearch, FiCode, FiExternalLink, FiGithub, FiChevronRight, FiFilter } from "react-icons/fi";
import { useState, useEffect } from "react";
import { projectsData } from "../data/projects";
import SEO from "../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton, { ProjectSkeleton } from "../components/Skeleton";
import OptimizedImage from "../components/OptimizedImage";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for better UX demonstration
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", "React", "Vue.js", "Node.js"];

  // Filter logic
  const filtered = projectsData.filter(p => {
    const matchesFilter = filter === "All" || (p.category && p.category.includes(filter)) || (p.tech && p.tech.some(t => t.includes(filter)));
    const matchesSearch = (p.title && p.title.toLowerCase().includes(search.toLowerCase())) || 
                          (p.description && p.description.toLowerCase().includes(search.toLowerCase())) ||
                          (p.tech && p.tech.some(t => t.toLowerCase().includes(search.toLowerCase())));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-28 px-4 md:px-6 max-w-6xl mx-auto">
      <SEO title="Projects" description="Explore my curated collection of web applications and system architectures." />

      {/* Header */}
      <div className="mb-14">
        <p className="tracking-wide mb-2 text-cyan-600 dark:text-accent">
          PROJECTS
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Selected Work
        </h1>

        <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-8">
          A curated collection of products and systems I’ve built.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
                <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                    px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300
                    ${filter === cat
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-cyan-400 dark:hover:border-accent/40"
                    }
                    active:scale-95
                `}
                >
                {cat}
                </button>
            ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 group">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search projects..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-cyan-500 dark:focus:border-accent transition-all text-sm"
                />
            </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <AnimatePresence mode="popLayout">
          {isLoading ? (
            // Skeleton State
            [...Array(6)].map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProjectSkeleton />
              </motion.div>
            ))
          ) : filtered.length > 0 ? (
            filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="h-full">
                  <div className="
                    group relative rounded-3xl overflow-hidden
                    bg-white border border-gray-200 shadow-sm
                    dark:bg-[#111216] dark:border-white/10
                    hover:border-blue-500 dark:hover:border-blue-500/50
                    transition-all duration-500
                    flex flex-col h-full
                ">
                    {/* Header Gradient */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-60 group-hover:opacity-100" />
                    
                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col relative">
                        {/* Actions Overlay */}
                        <div className="flex gap-2 mb-6">
                            {p.live && (
                                <a
                                    href={p.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 border border-gray-200 dark:border-white/10 transition-all font-bold text-xs"
                                    title="Live Preview"
                                >
                                    <FiExternalLink size={16} />
                                </a>
                            )}
                            {p.github && (
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 border border-gray-200 dark:border-white/10 transition-all font-bold text-xs"
                                    title="View Source"
                                >
                                    <FiGithub size={16} />
                                </a>
                            )}
                        </div>

                        <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition">
                            {p.title}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 rounded-lg uppercase tracking-wider">
                            {p.category || p.tags?.[0] || 'Project'}
                        </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-1 leading-relaxed">
                        {p.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 mb-8">
                        {p.tech.slice(0, 3).map((t, idx) => (
                            <span key={idx} className="text-[10px] font-bold px-2.5 py-1 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 rounded-full uppercase">
                            {t}
                            </span>
                        ))}
                        {p.tech.length > 3 && (
                          <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-white/5 w-7 h-7 shrink-0 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10">
                            +{p.tech.length - 3}
                          </span>
                        )}
                        </div>

                        <Link
                            to={`/projects/${p.slug}`}
                            className="
                            flex items-center justify-between group/btn text-sm font-bold 
                            text-gray-900 dark:text-white hover:text-blue-500 transition-all
                        "
                        >
                            View Details
                            <FiChevronRight className="transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                    </div>
                </div>
              </div>
            </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center animate-in fade-in zoom-in">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters.</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="text-center py-20 border-t border-gray-100 dark:border-white/5">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Let's Build Something Great
        </h3>

        <p className="max-w-xl mx-auto mb-10 text-gray-600 dark:text-gray-400">
          I am currently available for new projects and collaborations.
        </p>

        <a
          href="/contact"
          className="
            inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold transition-all duration-300
            bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-black
            hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 active:scale-95
          "
        >
          Get In Touch
          <FiChevronRight />
        </a>
      </div>
    </div>
  );
}
