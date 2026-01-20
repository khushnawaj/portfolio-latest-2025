import {
  FiCode,
  FiDatabase,
  FiDownload,
  FiServer,
  FiAward
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMysql, SiPostgresql } from "react-icons/si";
import { useState } from "react";

export default function Resume() {
  const [active, setActive] = useState("experience");

  const experiences = [
    {
      role: "Full Stack Web Developer",
      company: "Life Layer Health Solutions Pvt Ltd",
      period: "Apr 2024 – Sep 2025",
      location: "Gurugram, India",
      responsibilities: [
        "Built & maintained full-stack applications (MEVN/MERN)",
        "Designed RESTful APIs with Node & Express",
        "Schema design & query optimization",
        "Implemented authentication & authorization",
        "Frontend-backend collaboration & integration"
      ],
      tech: ["Node.js", "Express", "Vue.js", "MongoDB", "REST APIs"]
    },
    {
      role: "Full Stack Web Development Intern",
      company: "Slash Mark IT Startup",
      period: "Mar 2024 – Apr 2024",
      location: "Remote",
      responsibilities: [
        "Built production-grade blogging platform",
        "Developed e-commerce features",
        "Worked in team-based development environment"
      ],
      tech: ["Node.js", "Express", "MongoDB", "Vue.js"]
    },
    {
      role: "Trainee Full Stack Developer",
      company: "Ducat Education",
      period: "Jun 2022 – Dec 2022",
      location: "Noida, India",
      responsibilities: [
        "Hands-on training in MERN & Django",
        "Worked on API-driven applications",
        "Backend & database implementation"
      ],
      tech: [
        "Python", "Django", "MySQL", "Node.js",
        "Express", "React.js", "MongoDB"
      ]
    },
    {
      role: "Summer Trainee",
      company: "AVD Technologies",
      period: "Jun 2019 – Aug 2019",
      location: "Prayagraj, India",
      responsibilities: [
        "Python programming & OOPS",
        "Tkinter GUI development",
        "Machine Learning fundamentals",
        "ML, NLP & Deep Learning basics"
      ],
      tech: ["Python", "Tkinter", "Machine Learning", "Data Science"]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "SHUATS, Prayagraj",
      period: "2017 – 2021",
      highlights: [
        "Focused on Web Technologies",
        "Final Year Project: E-Commerce Platform"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Hansvahini Inter College, Sonebhadra",
      period: "2014 – 2016",
      highlights: ["PCM", "69.2% Aggregate"]
    },
    {
      degree: "High School (10th Grade)",
      institution: "Hansvahini Inter College, Sonebhadra",
      period: "2012 – 2014",
      highlights: ["PCM", "73.66% Aggregate"]
    }
  ];

  const certifications = [
    {
      title: "Node.js Essential Training",
      org: "LinkedIn",
      date: "Mar 2025",
      id: "317cafe0e0d57457...",
      skills: "Node.js"
    },
    {
      title: "SQL (Basic)",
      org: "HackerRank",
      date: "Feb 2024",
      link: "https://www.hackerrank.com/certificates/iframe/9b0c81292509",
      skills: "SQL, MySQL"
    },
    {
      title: "Python Full Stack",
      org: "Ducat Education",
      date: "Feb 2023",
      id: "070220239416213",
      skills: "Python, Django, Node.js, React, SQL"
    },
    {
      title: "Web Applications with Django",
      org: "Skillsoft",
      date: "Nov 2022",
      id: "61414665",
      skills: "Django, Python"
    },
    {
      title: "Programming Foundations: Fundamentals",
      org: "LinkedIn Learning",
      date: "Oct 2021",
      id: "AfRMVRpcDY13l2qJuW4ilE2i9bfyCredential ",
      skills: "Programing Concepts"
    },
    {
      title: "AWS Cloud Computing",
      org: "KANISHKA I.T. Pvt Ltd",
      date: "Oct 0",
      id: "2020/KIT/16",
      skills: "Programing Concepts"
    },
    {
      title: "Python & Machine Learning",
      org: "AVD Technology",
      date: "Aug 2019",
      id: "KNO/02019101/0182",
      skills: "Machine Learning, Python"
    }
  ];

  const skills = {
    Frontend: [
      { name: "React", icon: <FaReact />, level: 85 },
      { name: "Vue.js", icon: <FaVuejs />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 }
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs />, level: 88 },
      { name: "Express", icon: <SiExpress />, level: 85 },
      { name: "REST APIs", icon: <FiCode />, level: 90 }
    ],
    Databases: [
      { name: "MongoDB", icon: <FiDatabase />, level: 85 },
      { name: "MySQL", icon: <SiMysql />, level: 75 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 70 }
    ]
  };

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto pb-20">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14">
        <div>
          <p className="tracking-wide mb-2 text-cyan-600 dark:text-accent">
            EXPERIENCE & SKILLS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Resume
          </h1>

          <p className="max-w-2xl text-gray-600 dark:text-gray-400">
            Full-Stack Developer with ~2 years of experience building scalable products.
          </p>
        </div>

        <div className="flex justify-start md:justify-end">
          <a
            href="/Khushnawaj_MERN_Resume.pdf"
            download="Khushnawaj_MERN_Resume.pdf"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition
              bg-gray-900 text-white hover:bg-gray-800
              dark:bg-white dark:text-black dark:hover:bg-gray-200
            "
          >
            <FiDownload /> Download Resume
          </a>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-6 border-b border-gray-200 dark:border-[#1F2937] mb-12 overflow-x-auto no-scrollbar">
        {["experience", "education", "skills", "certifications"].map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-3 font-medium transition whitespace-nowrap ${active === tab
              ? "text-cyan-600 dark:text-accent border-b-2 border-cyan-600 dark:border-accent"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* EXPERIENCE */}
      {active === "experience" && (
        <div className="space-y-8">
          {experiences.map((e, i) => (
            <div
              key={i}
              className="
                rounded-xl p-8
                bg-white border border-gray-200
                dark:bg-[#111216] dark:border-[#1F2937]
              "
            >
              <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                {e.role}
              </h3>

              <p className="font-medium mb-1 text-cyan-600 dark:text-accent">
                {e.company}
              </p>

              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {e.period} • {e.location}
              </p>

              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                Key Responsibilities
              </h4>

              <ul className="space-y-2 mb-6">
                {e.responsibilities?.map((r, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-700 dark:text-gray-300">
                    <span className="mt-1 text-cyan-600 dark:text-accent">•</span> {r}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {e.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1 rounded-lg text-sm
                      bg-gray-100 border border-gray-200 text-gray-700
                      dark:bg-[#0B0B0D] dark:border-[#1F2937] dark:text-gray-300
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* EDUCATION */}
      {active === "education" && (
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((ed, i) => (
            <div
              key={i}
              className="
                rounded-xl p-8
                bg-white border border-gray-200
                dark:bg-[#111216] dark:border-[#1F2937]
              "
            >
              <p className="
                px-3 py-1 rounded-lg inline-block mb-4
                bg-gray-100 border border-gray-200 text-cyan-600
                dark:bg-[#0B0B0D] dark:border-[#1F2937] dark:text-accent
              ">
                {ed.period}
              </p>

              <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                {ed.degree}
              </h3>

              <p className="mb-5 text-gray-700 dark:text-gray-300">
                {ed.institution}
              </p>

              <ul className="space-y-2">
                {ed.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-700 dark:text-gray-300">
                    <span className="mt-1 text-cyan-600 dark:text-accent">•</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* SKILLS */}
      {active === "skills" && (
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([cat, arr]) => (
            <div
              key={cat}
              className="
                rounded-xl p-8
                bg-white border border-gray-200
                dark:bg-[#111216] dark:border-[#1F2937]
              "
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {cat}
              </h3>

              <div className="space-y-6">
                {arr.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                        <span className="text-cyan-600 dark:text-accent">{s.icon}</span>
                        {s.name}
                      </div>
                      <span className="text-sm text-cyan-600 dark:text-accent">
                        {s.level}%
                      </span>
                    </div>

                    <div className="h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-[#0B0B0D]">
                      <div
                        className="h-full rounded-full bg-cyan-600 dark:bg-accent"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CERTIFICATIONS */}
      {active === "certifications" && (
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((c, i) => (
            <div
              key={i}
              className="
                rounded-xl p-8
                bg-white border border-gray-200
                dark:bg-[#111216] dark:border-[#1F2937]
              "
            >
              <div className="flex items-center gap-3 mb-3">
                <FiAward className="text-cyan-600 dark:text-accent" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {c.title}
                </h3>
              </div>

              <p className="mb-1 text-cyan-600 dark:text-accent">{c.org}</p>
              <p className="mb-3 text-gray-600 dark:text-gray-400">{c.date}</p>

              {c.id && (
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                  Credential ID: {c.id}
                </p>
              )}

              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 inline-block underline text-cyan-600 dark:text-accent"
                >
                  View Credential
                </a>
              )}

              <p className="text-gray-700 dark:text-gray-300">
                Skills: {c.skills}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
