import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiLayers,
  FiCopy,
  FiCheck
} from "react-icons/fi";
import { useState } from "react";
import SEO from "../components/SEO";
import Toast from "../components/Toast";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("khushnawaj14@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const social = [
    { icon: <FiGithub />, url: "https://github.com/khushnawaj" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/17-khushnawaj/" },
    { icon: <FiTwitter />, url: "https://x.com/PG4daotBo94zbMG" },
    { icon: <FiInstagram />, url: "https://www.instagram.com/__nawaj_md__" },
    { icon: <FiLayers />, url: "https://script-self-two.vercel.app/u/khush" }
  ];

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      <SEO title="Contact" description="Get in touch with Khushnawaj for collaborations and opportunities." />

      {/* Header */}
      <div className="text-center mb-16">
        <p className="tracking-wide mb-2 text-cyan-600 dark:text-accent">CONTACT</p>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Let's Connect
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Have a project or opportunity in mind? Feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-20">

        {/* Left */}
        <div className="space-y-6">

          <div className="p-6 rounded-xl flex gap-4
            bg-white border border-gray-200
            dark:bg-[#111216] dark:border-[#1F2937]
          ">
            <div className="p-3 rounded-lg
              bg-gray-100 border border-gray-200 text-cyan-600
              dark:bg-[#0B0B0D] dark:border-[#1F2937] dark:text-accent
            ">
              <FiMail />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1 text-gray-900 dark:text-white">Email</h3>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:khushnawaj14@gmail.com"
                  className="text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-accent"
                >
                  khushnawaj14@gmail.com
                </a>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md text-gray-400 hover:text-cyan-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  title="Copy Email"
                >
                  {isCopied ? <FiCheck className="text-green-500" /> : <FiCopy size={14} />}
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl flex gap-4
            bg-white border border-gray-200
            dark:bg-[#111216] dark:border-[#1F2937]
          ">
            <div className="p-3 rounded-lg
              bg-gray-100 border border-gray-200 text-cyan-600
              dark:bg-[#0B0B0D] dark:border-[#1F2937] dark:text-accent
            ">
              <FiPhone />
            </div>
            <div>
              <h3 className="font-medium mb-1 text-gray-900 dark:text-white">Phone</h3>
              <a
                href="tel:+918417858734"
                className="text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-accent"
              >
                +91 84178 58734
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl flex gap-4
            bg-white border border-gray-200
            dark:bg-[#111216] dark:border-[#1F2937]
          ">
            <div className="p-3 rounded-lg
              bg-gray-100 border border-gray-200 text-cyan-600
              dark:bg-[#0B0B0D] dark:border-[#1F2937] dark:text-accent
            ">
              <FiMapPin />
            </div>
            <div>
              <h3 className="font-medium mb-1 text-gray-900 dark:text-white">Location</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Gurugram, Haryana
              </p>
            </div>
          </div>



          {/* Social */}
          <div className="pt-4">
            <h3 className="font-medium mb-4 text-gray-900 dark:text-white">Social</h3>

            <div className="flex gap-3">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-3 rounded-lg transition
                    border border-gray-200 bg-gray-100 text-gray-600
                    hover:text-cyan-600 hover:border-cyan-300
                    dark:border-[#1F2937] dark:bg-[#0B0B0D] dark:text-gray-400
                    dark:hover:text-accent dark:hover:border-accent/40
                  "
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Form */}
        <div className="
          rounded-2xl p-8
          bg-white border border-gray-200
          dark:bg-[#111216] dark:border-[#1F2937]
        ">

          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Send a Message
          </h2>

          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="text-3xl mb-4 text-cyan-600 dark:text-accent"><FiMail /></div>
              <p className="font-medium mb-2 text-gray-900 dark:text-white">Message Sent</p>
              <p className="text-gray-600 dark:text-gray-400">I’ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="
                  w-full px-4 py-3 rounded-lg focus:outline-none transition
                  bg-gray-100 border border-gray-300 placeholder-gray-500
                  focus:border-cyan-500
                  dark:bg-[#0B0B0D] dark:border-[#1F2937] dark:text-white dark:placeholder-gray-500 dark:focus:border-accent
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="
                  w-full px-4 py-3 rounded-lg focus:outline-none transition
                  bg-gray-100 border border-gray-300 placeholder-gray-500
                  focus:border-cyan-500
                  dark:bg-[#0B0B0D] dark:border-[#1F2937] dark:text-white dark:placeholder-gray-500 dark:focus:border-accent
                "
              />

              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="
                  w-full px-4 py-3 rounded-lg resize-none focus:outline-none transition
                  bg-gray-100 border border-gray-300 placeholder-gray-500
                  focus:border-cyan-500
                  dark:bg-[#0B0B0D] dark:border-[#1F2937] dark:text-white dark:placeholder-gray-500 dark:focus:border-accent
                "
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3 rounded-lg font-medium transition disabled:opacity-60
                  bg-gray-900 text-white hover:bg-gray-800
                  dark:bg-white dark:text-black dark:hover:bg-gray-200
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mb-20">
        <div className="
          rounded-2xl p-12
          bg-gray-50 border border-gray-200
          dark:bg-[#111216] dark:border-[#1F2937]
        ">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Open to Work & Collaboration
          </h3>

          <p className="max-w-xl mx-auto mb-8 text-gray-600 dark:text-gray-400">
            Whether it's a product build, backend system or consultation — I’d love to talk.
          </p>

          <a
            href="mailto:khushnawaj14@gmail.com"
            className="
              px-8 py-3 rounded-lg font-medium transition
              bg-gray-900 text-white hover:bg-gray-800
              dark:bg-white dark:text-black dark:hover:bg-gray-200
            "
          >
            Email Me
          </a>
        </div>
      </div>

      <Toast message="Email copied to clipboard!" isVisible={isCopied} />
    </div>
  );
}
