import { FiChevronRight, FiDownload, FiCode, FiDatabase, FiLayers } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Home() {

  return (
    <main className="pt-28">

      {/* HERO */}
      <section className="min-h-[75vh] flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="text-cyan-600 dark:text-accent tracking-wide mb-2">
              Full Stack Developer
            </p>

            <h1 className="
              text-5xl md:text-6xl font-bold leading-tight mb-6
              text-gray-900 dark:text-white
            ">
              Building reliable, scalable and elegant web applications.
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              I'm <span className="text-gray-900 dark:text-white font-medium">Khushnawaj</span>, a developer with ~2 years of
              professional experience building full-stack products using modern web technologies.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="/projects"
                className="
                  px-7 py-3 rounded-lg font-medium transition
                  bg-gray-900 text-white hover:bg-gray-800
                  dark:bg-white dark:text-black dark:hover:bg-gray-200
                "
              >
                View Projects
              </a>

              <a
                href="/resume"
                className="
                  px-7 py-3 rounded-lg flex items-center gap-2 transition
                  border border-gray-300 text-gray-700 hover:text-cyan-600 hover:border-cyan-300
                  dark:border-border dark:text-gray-200 dark:hover:text-accent dark:hover:border-accent
                "
              >
                <FiDownload />
                Resume
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <img
              src={logo}
              alt="profile"
              className="
                h-64 w-64 object-cover rounded-2xl shadow-xl
                border border-gray-300 dark:border-border
              "
            />
          </div>

        </div>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
          Core Expertise
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
            <div
              key={i}
              className="
                rounded-xl p-7 transition-all
                bg-white border border-gray-200 hover:border-cyan-300
                dark:bg-[#111216] dark:border-border dark:hover:border-accent/40
              "
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

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="
          rounded-2xl p-12
          bg-gray-50 border border-gray-200
          dark:bg-[#111216] dark:border-border
        ">

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

        </div>
      </section>

    </main>
  );
}
