import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <FiGithub />, label: "GitHub", url: "https://github.com", color: "hover:text-gray-300" },
    { icon: <FiLinkedin />, label: "LinkedIn", url: "https://linkedin.com", color: "hover:text-blue-500" },
    { icon: <FiTwitter />, label: "Twitter", url: "https://twitter.com", color: "hover:text-sky-400" },
  ];

  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-neon mb-3">
          <span className="text-sm font-medium">GET IN TOUCH</span>
          <div className="w-12 h-0.5 bg-neon"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-neon">Connect</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to discuss opportunities? 
          Feel free to reach out!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Contact Information */}
        <div>
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-neon rounded-full animate-pulse"></span>
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-panel/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-neon/40 transition-all duration-300">
                <div className="p-3 rounded-lg bg-neon/10 border border-neon/20">
                  <FiMail className="text-neon" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a 
                    href="mailto:khushnawaj14@gmail.com" 
                    className="text-gray-300 hover:text-neon transition-colors"
                  >
                    khushnawaj14@gmail.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">I'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-panel/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-neon/40 transition-all duration-300">
                <div className="p-3 rounded-lg bg-neon/10 border border-neon/20">
                  <FiPhone className="text-neon" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a 
                    href="tel:+918417858734" 
                    className="text-gray-300 hover:text-neon transition-colors"
                  >
                    +91 84178 58734
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Available Mon-Fri, 10AM-7PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-panel/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-neon/40 transition-all duration-300">
                <div className="p-3 rounded-lg bg-neon/10 border border-neon/20">
                  <FiMapPin className="text-neon" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-300">Gurugram, Haryana</p>
                  <p className="text-gray-500 text-sm mt-1">Open to remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Find me online</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl border border-gray-800 bg-panel/50 text-gray-400 ${social.color} hover:border-neon/40 hover:scale-105 transition-all duration-300`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-panel/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <FiSend className="text-neon" />
              Send a Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiMail className="text-neon" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 border border-neon text-neon rounded-lg hover:bg-neon/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-neon to-cyan-500 text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-gray-500 text-sm text-center">
                  I typically respond within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map/Location Section */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-6">Based in Gurugram</h3>
        <div className="bg-panel/50 border border-gray-800 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-4">Availability</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  <span className="text-gray-300">Open to full-time remote positions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  <span className="text-gray-300">Available for freelance projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  <span className="text-gray-300">Open to collaboration opportunities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neon/10 to-cyan-500/10 border border-neon/20 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-white font-bold mb-2">Remote Work Ready</h4>
              <p className="text-gray-300">Fully equipped for distributed teams</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Response CTA */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-neon/5 to-cyan-500/5 border border-neon/20 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6">
            Let's Build Something <span className="text-neon">Great</span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Whether it's a new project, collaboration, or just a friendly hello - 
            I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:khushnawaj14@gmail.com"
              className="px-8 py-3 bg-neon text-black font-semibold rounded-lg hover:bg-neon/90 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              Email Me Directly
            </a>
            <a
              href="tel:+918417858734"
              className="px-8 py-3 border border-neon text-neon font-semibold rounded-lg hover:bg-neon/10 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}