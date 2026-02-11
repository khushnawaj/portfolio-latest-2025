import {
  FiCode,
  FiDatabase,
  FiDownload,
  FiServer,
  FiAward,
  FiExternalLink
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMysql, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { useState } from "react";

export default function Resume() {
  const [active, setActive] = useState("experience");

  const experiences = [
    {
      role: "Full Stack Web Developer",
      company: "Life Layer Health Solutions Pvt Ltd",
      period: "Aug 2023 – Sep 2025",
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
      title: "Hands-On Introduction to Cloud Computing with AWS",
      org: "Udemy",
      date: "Jan 2026",
      id: "Learning-AWS-Cloud-Computing 2026",
      skills: "AWS, Cloud Computing"
    },
    {
      title: "Advanced Node.js",
      org: "LinkedIn Learning",
      date: "Jan 2026",
      id: "https://lnkd.in/gjRECFxK",
      skills: "Node.js"
    },
    {
      title: "Node.js Essential Training",
      org: "LinkedIn Learning",
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
      date: "Oct 2020",
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
    <div className="pt-28 px-6 max-w-4xl mx-auto mb-20">
      <SEO title="Resume" description="Professional resume and skills of Khushnawaj." />

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
            href="/Khushnawaj-Resume-.pdf"
            download="Khushnawaj-Resume-.pdf"
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

      {/* EXPERIENCE - TIMELINE LAYOUT */}
      {active === "experience" && (
        <div className="space-y-16 border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-6 pl-8 md:pl-12 py-4">
          {experiences.map((e, i) => (
            <div key={i} className="relative">
              {/* Timeline Dot */}
              <span className="
                absolute -left-[41px] md:-left-[57px] top-2
                flex h-5 w-5 items-center justify-center rounded-full
                bg-white box-content border-4 border-gray-100 ring-2 ring-cyan-600 dark:ring-accent
                dark:bg-[#111216] dark:border-[#111216]
              ">
                <span className="h-2 w-2 rounded-full bg-cyan-600 dark:bg-accent" />
              </span>

              <div
                className="
                  rounded-xl p-6 md:p-8
                  bg-white border border-gray-200 shadow-sm
                  dark:bg-[#111216] dark:border-[#1F2937]
                  hover:border-cyan-300 dark:hover:border-accent/30 transition
                "
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {e.role}
                    </h3>
                    <p className="font-medium text-cyan-600 dark:text-accent">
                      {e.company}
                    </p>
                  </div>
                  <span className="
                    inline-block px-3 py-1 rounded-full text-xs font-semibold
                    bg-gray-100 text-gray-600 dark:bg-[#0B0B0D] dark:text-gray-400
                  ">
                    {e.period}
                  </span>
                </div>

                <p className="mb-4 text-sm text-gray-500 dark:text-gray-500">
                  <span className="mr-2">📍</span>{e.location}
                </p>

                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-900 dark:text-white">
                  Key Responsibilities
                </h4>

                <ul className="space-y-2 mb-6">
                  {e.responsibilities?.map((r, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-cyan-600 dark:bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {e.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1 rounded-lg text-xs font-medium
                        bg-gray-50 border border-gray-200 text-gray-600
                        dark:bg-[#0B0B0D] dark:border-[#1F2937] dark:text-gray-400
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* EDUCATION - TIMELINE LAYOUT */}
      {active === "education" && (
        <div className="space-y-16 border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-6 pl-8 md:pl-12 py-4">
          {education.map((ed, i) => (
            <div key={i} className="relative">
              {/* Timeline Dot */}
              <span className="
                absolute -left-[41px] md:-left-[57px] top-2
                flex h-5 w-5 items-center justify-center rounded-full
                bg-white box-content border-4 border-gray-100 ring-2 ring-cyan-600 dark:ring-accent
                dark:bg-[#111216] dark:border-[#111216]
              ">
                <span className="h-2 w-2 rounded-full bg-cyan-600 dark:bg-accent" />
              </span>

              <div
                className="
                  rounded-xl p-8
                  bg-white border border-gray-200 shadow-sm
                  dark:bg-[#111216] dark:border-[#1F2937]
                  hover:border-cyan-300 dark:hover:border-accent/30 transition
                "
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {ed.degree}
                  </h3>
                  <span className="
                    inline-block px-3 py-1 rounded-full text-xs font-semibold
                    bg-gray-100 text-gray-600 dark:bg-[#0B0B0D] dark:text-gray-400
                  ">
                    {ed.period}
                  </span>
                </div>

                <p className="text-lg font-medium mb-4 text-cyan-600 dark:text-accent">
                  {ed.institution}
                </p>

                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-900 dark:text-white">
                  Highlights
                </h4>

                <ul className="space-y-2">
                  {ed.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-cyan-600 dark:bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SKILLS - ENHANCED GRID */}
      {active === "skills" && (
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([cat, arr]) => (
            <div
              key={cat}
              className="
                rounded-xl p-6
                bg-gradient-to-b from-white to-gray-50
                border border-gray-200 shadow-sm
                dark:bg-none dark:bg-[#111216] dark:border-[#1F2937]
              "
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white uppercase tracking-wider">
                <span className="w-1.5 h-6 bg-cyan-600 dark:bg-accent rounded-full"></span>
                {cat}
              </h3>

              <div className="space-y-5">
                {arr.map((s, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3 text-gray-900 dark:text-white font-medium">
                        <span className="text-cyan-600 dark:text-accent opacity-80 group-hover:opacity-100 transition">{s.icon}</span>
                        {s.name}
                      </div>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-500">
                        {s.level}%
                      </span>
                    </div>

                    <div className="h-1.5 rounded-full overflow-hidden bg-gray-200 dark:bg-[#0B0B0D]">
                      <div
                        className="h-full rounded-full bg-cyan-600 dark:bg-accent transition-all duration-1000 ease-out"
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

      {/* CERTIFICATIONS - COMPACT GRID */}
      {active === "certifications" && (
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((c, i) => (
            <div
              key={i}
              className="
                rounded-xl p-6 relative overflow-hidden group
                bg-white border border-gray-200 shadow-sm
                dark:bg-[#111216] dark:border-[#1F2937]
                hover:border-cyan-300 dark:hover:border-accent/40 transition
              "
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="p-2 rounded-lg bg-cyan-50 dark:bg-[#0B0B0D] text-cyan-600 dark:text-accent">
                  <FiAward size={24} />
                </div>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-600 dark:hover:text-accent transition"
                    title="View Credential"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white leading-tight">
                {c.title}
              </h3>

              <p className="text-sm font-medium mb-3 text-cyan-600 dark:text-accent">
                {c.org} <span className="text-gray-400 font-normal mx-1">•</span> {c.date}
              </p>

              {c.id && (
                <p className="mb-4 text-xs font-mono text-gray-500 bg-gray-100 dark:bg-[#0B0B0D] inline-block px-2 py-1 rounded">
                  ID: {c.id}
                </p>
              )}

              <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                  {c.skills}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
