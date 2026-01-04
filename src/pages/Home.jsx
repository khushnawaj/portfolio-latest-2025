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
            <p className="text-accent tracking-wide mb-2">
              Full Stack Developer
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building reliable, scalable and elegant web applications.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm <span className="text-white font-medium">Khushnawaj</span>, a developer with ~2 years of
              professional experience building full-stack products using modern web technologies.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="/projects"
                className="px-7 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition"
              >
                View Projects
              </a>

              <a
                href="/resume"
                className="px-7 py-3 border border-border text-gray-200 rounded-lg hover:border-accent hover:text-accent transition flex items-center gap-2"
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
              className="h-64 w-64 object-cover rounded-2xl border border-border shadow-xl"
              alt="profile"
            />
          </div>

        </div>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-white mb-10">
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
              className="bg-[#111216] border border-border rounded-xl p-7 transition-all hover:border-accent/40"
            >

              <div className="text-accent mb-4">
                {item.icon}
              </div>

              <h3 className="text-white text-lg font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-[#111216] border border-border rounded-2xl p-12">

          <h2 className="text-3xl font-bold text-white mb-6">
            Open to meaningful work & collaborations
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            If you have a project, opportunity or just want to connect, feel free to reach out.
          </p>

          <a
            href="/contact"
            className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition inline-flex items-center gap-2"
          >
            Get in touch
            <FiChevronRight />
          </a>

        </div>
      </section>

    </main>
  );
}
