import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiCalendar, FiCode } from "react-icons/fi";
import { projectsData } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  const [gallery, setGallery] = useState([]);
  const [exists, setExists] = useState(true);

  if (!project)
    return (
      <div className="pt-28 px-6 text-gray-700 dark:text-gray-300 font-medium text-center">
        Project not found.
        <br />
        <a href="/projects" className="text-cyan-600 underline mt-2 inline-block">Back to Projects</a>
      </div>
    );

  useEffect(() => {
    // Dynamic import for assets based on slug
    const all = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp}", { eager: true });

    // Filter images that match the project slug folder structure: active/assets/<slug>/1.png, etc.
    // Note: ensure your folder structure in assets matches the slug name!
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

  // If no details are present in the data object yet, show coming soon
  if (!project.details) {
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

      {/* GALLERY (Only if images exist) */}
      {exists && gallery.length > 0 && (
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
      )}

      {/* ACTION BUTTONS */}
      <div className="flex flex-wrap gap-4 mb-14">
        {project.live && project.live !== "#" && (
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

        {project.github && project.github !== "#" && (
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

      {/* DETAILS CONTENT */}
      {project.details && (
        <>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Problem & Context</h2>
            <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200 dark:bg-[#111216] dark:border-[#1F2937]">
              <p className="leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">{project.details.problem}</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Solution Overview</h2>
            <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200 dark:bg-[#111216] dark:border-[#1F2937]">
              <p className="leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">{project.details.solution}</p>
            </div>
          </div>

          {project.details.architecture && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">System Architecture</h2>
              <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200 dark:bg-[#111216] dark:border-[#1F2937]">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {project.details.architecture.map((l, k) => <li key={k}>• {l}</li>)}
                </ul>
              </div>
            </div>
          )}

          {project.details.outcomes && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Outcomes</h2>
              <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200 dark:bg-[#111216] dark:border-[#1F2937]">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {project.details.outcomes.map((l, k) => <li key={k}>• {l}</li>)}
                </ul>
              </div>
            </div>
          )}
        </>
      )}

    </div>
  );
}
