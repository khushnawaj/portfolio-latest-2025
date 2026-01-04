import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiLinkedin,
  FiGithub,
  FiTwitter
} from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    { icon: <FiTwitter />, url: "https://x.com/PG4daotBo94zbMG" }
  ];

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-accent tracking-wide mb-2">CONTACT</p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let's Connect
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project or opportunity in mind? Feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-20">
        
        {/* Left */}
        <div className="space-y-6">

          <div className="p-6 bg-[#111216] border border-[#1F2937] rounded-xl flex gap-4">
            <div className="p-3 rounded-lg bg-[#0B0B0D] border border-[#1F2937] text-accent">
              <FiMail />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <a
                href="mailto:khushnawaj14@gmail.com"
                className="text-gray-300 hover:text-accent"
              >
                khushnawaj14@gmail.com
              </a>
            </div>
          </div>

          <div className="p-6 bg-[#111216] border border-[#1F2937] rounded-xl flex gap-4">
            <div className="p-3 rounded-lg bg-[#0B0B0D] border border-[#1F2937] text-accent">
              <FiPhone />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Phone</h3>
              <a
                href="tel:+918417858734"
                className="text-gray-300 hover:text-accent"
              >
                +91 84178 58734
              </a>
            </div>
          </div>

          <div className="p-6 bg-[#111216] border border-[#1F2937] rounded-xl flex gap-4">
            <div className="p-3 rounded-lg bg-[#0B0B0D] border border-[#1F2937] text-accent">
              <FiMapPin />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Location</h3>
              <p className="text-gray-300">Gurugram, Haryana</p>
            </div>
          </div>

          {/* Social */}
          <div className="pt-4">
            <h3 className="text-white font-medium mb-4">Social</h3>

            <div className="flex gap-3">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-[#1F2937] bg-[#0B0B0D] text-gray-400 hover:text-accent hover:border-accent/40 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Form */}
        <div className="bg-[#111216] border border-[#1F2937] rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-white mb-8">
            Send a Message
          </h2>

          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="text-accent text-3xl mb-4"><FiMail /></div>
              <p className="text-white font-medium mb-2">Message Sent</p>
              <p className="text-gray-400">I’ll get back to you soon.</p>
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
                className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#1F2937] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#1F2937] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent"
              />

              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#1F2937] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mb-20">
        <div className="bg-[#111216] border border-[#1F2937] rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-6">
            Open to Work & Collaboration
          </h3>

          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Whether it's a product build, backend system or consultation — I’d love to talk.
          </p>

          <a
            href="mailto:khushnawaj14@gmail.com"
            className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
}
