import { FiExternalLink, FiGithub, FiCalendar, FiCode } from "react-icons/fi";

export default function ProjectDetails() {
  const slug = "scentiva"; // This would come from useParams()
  
  if (slug !== "scentiva") {
    return (
      <div className="pt-28 px-6 max-w-4xl mx-auto">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🚧</div>
          <h1 className="text-3xl font-bold mb-4">Case Study Coming Soon</h1>
          <p className="text-gray-400 mb-8">
            This project case study is currently being prepared.
          </p>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neon text-neon rounded-lg hover:bg-neon/10 transition-all duration-300"
          >
            Back to Projects
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <a 
          href="/projects" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          ← Back to Projects
        </a>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-neon/20 text-neon rounded-full text-sm font-medium">
            Featured
          </span>
          <span className="text-gray-400 text-sm flex items-center gap-1">
            <FiCalendar size={14} />
            Dec 2024
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Scentiva - <span className="text-neon">E-Commerce Platform</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          A full-stack e-commerce solution with complete admin controls, 
          payment integration, and cloud deployment.
        </p>
      </div>

      {/* Project Links */}
      <div className="flex flex-wrap gap-4 mb-12">
        <a
          href="https://scentiva-lac.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-neon text-black font-semibold rounded-lg hover:bg-neon/90 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
        >
          <FiExternalLink />
          Live Demo
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-white font-semibold rounded-lg hover:border-neon hover:bg-neon/10 transition-all duration-300"
        >
          <FiGithub />
          Source Code
        </a>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiCode />
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React.js", "Node.js", "Express", "MongoDB", 
            "JWT Auth", "Razorpay", "Cloudinary", "Vercel"
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-panel/50 border border-gray-800 rounded-lg p-4 text-center hover:border-neon/40 transition-colors"
            >
              <span className="text-white font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        <section className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-neon mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Scentiva is a production-ready e-commerce platform built from scratch to handle 
            real users, real payments, and real deployments. The platform supports complete 
            product management, user authentication, payment processing, and admin controls.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Built with scalability in mind, the application can handle thousands of products 
            and users while maintaining optimal performance and security standards.
          </p>
        </section>

        <section className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-neon mb-6">What I Worked On</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "REST APIs and backend architecture design",
              "JWT authentication and authorization system",
              "Complete admin dashboards (products, orders, coupons)",
              "Razorpay payment gateway integration",
              "Cloudinary image upload and management",
              "Deployment on Vercel & Render with CI/CD",
              "Database design and optimization",
              "Frontend components and user interface"
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-panel/30 p-4 rounded-lg border border-gray-800 hover:border-neon/40 transition-colors"
              >
                <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-neon mb-4">Challenges & Solutions</h2>
          <div className="bg-panel/30 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed">
              One of the main challenges was implementing a secure payment system that could 
              handle multiple payment methods while ensuring data security. The solution involved 
              integrating Razorpay with proper webhook handling, encrypting sensitive data, 
              and implementing a robust order management system.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}