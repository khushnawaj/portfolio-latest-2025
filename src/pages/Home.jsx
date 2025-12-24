import { FiCode, FiDatabase, FiLayers, FiChevronRight, FiDownload } from "react-icons/fi";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <main className="pt-28">
      {/* HERO */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-4xl text-center mx-auto">
          <div className="relative">
            {/* Animated gradient background */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-neon/10 rounded-full blur-3xl animate-pulse"></div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-white to-neon/80 bg-clip-text text-transparent">
                Khushnawaj
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon/10 rounded-full mb-6 border border-neon/30">
              <span className="w-2 h-2 bg-neon rounded-full animate-pulse"></span>
              <p className="text-neon text-lg md:text-xl">
                Full Stack Web Developer
              </p>
            </div>

            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg mb-8">
              Full Stack Developer with <span className="text-neon font-semibold">~2 years</span> of experience building and
              deploying production-ready web applications. Currently working at{" "}
              <span className="text-white font-semibold relative group cursor-pointer">
                Life Layer Health Solutions Pvt Ltd
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-neon transition-all duration-300"></span>
              </span>, focusing on backend APIs, databases, and real-world systems.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/projects"
                className="px-8 py-3 bg-neon text-black rounded-lg font-semibold flex items-center justify-center gap-2 group hover:bg-neon/90 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
              >
                View Projects
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume"
                className="px-8 py-3 border border-neon/30 rounded-lg text-white hover:border-neon hover:bg-neon/10 flex items-center justify-center gap-2 transition-all duration-300 group"
              >
                <FiDownload />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I <span className="text-neon">Do</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specializing in full-stack development with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FiCode size={24} />,
              title: "Backend Development",
              desc: "REST APIs, authentication, RBAC, business logic using Node.js and Express.",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: <FiDatabase size={24} />,
              title: "Databases",
              desc: "MongoDB, MySQL, PostgreSQL with schema design and query optimization.",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: <FiLayers size={24} />,
              title: "Frontend Integration",
              desc: "React & Vue.js UI integration with clean, responsive layouts.",
              color: "from-green-500 to-emerald-500"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-panel/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-neon/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-neon/5 group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-white font-semibold text-xl mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-4">
                {item.desc}
              </p>
              
              <div className="flex items-center text-neon text-sm font-medium">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                  →
                </span>
                <span className={`transition-all duration-300 ${hoveredCard === index ? 'translate-x-2' : ''}`}>
                  Learn more
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-neon/10 to-cyan-500/10 rounded-2xl p-12 border border-neon/20">
          <h2 className="text-3xl font-bold mb-6">
            Let's Build Something <span className="text-neon">Amazing</span> Together
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'm currently available for freelance work and collaborations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-neon to-cyan-500 text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300"
          >
            Get In Touch
            <FiChevronRight />
          </a>
        </div>
      </section>
    </main>
  );
}