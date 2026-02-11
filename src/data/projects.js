export const projectsData = [
  {
    slug: "script-shelf",
    title: "ScriptShelf",
    description: "A developer-centric platform featuring a Redis-backed notification system, gamification with XP/reputation, and an interactive typing game.",
    tags: ["React", "Express", "MongoDB", "Redis"],
    caseStudy: true,
    github: "https://github.com/khushnawaj/scriptSelf",
    live: "https://script-self-two.vercel.app/",
    featured: true,
    date: "Feb 2026",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Redis", "Socket.io", "Tailwind CSS"],
    details: {
      problem: "Developers need a platform to not only manage scripts but also engage with the community and improve their skills, while admins require robust tools for content moderation and user management.",
      solution: "Built a comprehensive ecosystem featuring a high-performance notification engine using Redis, a gamified system with XP and reputation to drive engagement, and an interactive typing game for skill enhancement. Also includes a powerful Admin Console for system management.",
      architecture: [
        "React frontend with Tailwind CSS for a modern, responsive UI",
        "Node.js/Express backend with MongoDB for scalable data storage",
        "Redis for efficient notification queuing and caching",
        "Socket.io for real-time updates and interactive features"
      ],
      outcomes: [
        "Increased user engagement through gamification mechanics",
        "High-performance notification delivery with Redis",
        "Streamlined administrative workflows with the Admin Console",
        "Interactive skill-building with the Typing Game"
      ]
    }
  },
  {
    slug: "currency-xchange",
    title: "CurrencyXchange",
    description: "Multi-currency wallet & exchange platform with real-time rates and secure transfers.",
    tags: ["React", "Django", "PostgreSQL", "JWT"],
    caseStudy: true,
    github: "https://github.com/khushnawaj/currency-exchange-backend", // Backend Repo
    live: "#",   // Add link if available
    featured: true,
    date: "Jan 2026",
    tech: ["React 19", "Vite", "Django REST Framework", "PostgreSQL", "JWT", "Hot Toast"],
    details: {
      problem: "Users need a secure, unified platform to manage multiple currencies, view live exchange rates, and perform instant money transfers without complex banking procedures.",
      solution: "Developed a full-stack financial application allowing users to create multi-currency wallets, convert funds with real-time API data, and securely transfer money to other users. Includes a comprehensive dashboard for tracking transaction history and analytics.",
      architecture: [
        "Django REST Framework backend with custom JWT authentication",
        "React + Vite frontend for a responsive SPA experience",
        "Integration with ExchangeRate-API for live currency data",
        "PostgreSQL database for secure transaction storage",
        "Admin panel for system management and user oversight"
      ],
      outcomes: [
        "Implemented secure financial transaction flows",
        "Real-time currency conversion with live data",
        "Scalable wallet management system",
        "Comprehensive transaction tracking and export"
      ]
    }
  },
  {
    slug: "scentiva",
    title: "Scentiva E-Commerce",
    description: "Production-ready e-commerce platform with payments, admin panel, and cloud deployment.",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"],
    caseStudy: true,
    github: "#",
    live: "https://scentiva-lac.vercel.app/",
    featured: true,
    date: "Dec 2024",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Razorpay", "Cloudinary", "Vercel"],
    details: {
      problem: "Most small businesses struggle to set up secure and scalable online platforms. They need a solution that supports real-world user traffic, secure payments and a simple admin workflow without requiring a large tech team.",
      solution: "I engineered a full-stack web application designed for real-world deployments. The platform includes authentication, admin dashboards, order tracking, payment processing and secure API-based communication across services.\n\nThe architecture focuses on scalability, modularity and long-term maintainability.",
      architecture: [
        "Frontend served as a statically optimised SPA",
        "Backend REST API with token-based authentication",
        "Secure database with schema-driven access",
        "Cloud storage for media uploads",
        "Integration with third-party payment gateway",
        "Environment-based deployment configurations"
      ],
      outcomes: [
        "Designed & deployed a production-grade system",
        "Implemented secure authentication flow",
        "Built a scalable backend API",
        "Delivered clean, intuitive user experience",
        "Improved development speed using modular architecture"
      ]
    }
  },
  {
    slug: "election-campaign",
    title: "Election Campaign Platform",
    description: "Secure election system with paid registration, candidate workflows, and real-time voting.",
    tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
    caseStudy: true,
    github: "#",
    live: "#",
    featured: false,
    date: "Jan 2025",
    tech: ["Vue.js", "Node.js", "Express", "MongoDB", "Stripe"],
    details: {
      problem: "Elections require transparency, security, and ease of access. Traditional systems are often opaque or difficult to scale.",
      solution: "Developed a platform that allows users to register, pay fees securely, and vote in real-time. Includes an admin panel for candidate management and result tracking.",
      architecture: [
        "Vue.js frontend for responsive UI",
        "Node.js/Express backend for API logic",
        "MongoDB for flexible data storage",
        "Stripe integration for payment processing"
      ],
      outcomes: [
        "Secure voting process",
        "Automated registration and payment",
        "Real-time result visualization"
      ]
    }
  },
  {
    slug: "elearning",
    title: "E-Learning Platform",
    description: "Course management and live classes with teacher & student dashboards.",
    tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
    caseStudy: true,
    github: "#",
    live: "#",
    featured: true,
    date: "Nov 2024",
    tech: ["Vue.js", "Node.js", "Express", "MongoDB"],
    details: {
      problem: "Remote learning tools often lack engagement features or are too complex to manage.",
      solution: "Built a comprehensive LMS with role-based access for admins, teachers, and students. Supports video uploads, assignments, and live class scheduling.",
      architecture: [
        "Vue.js frontend",
        "Express backend with role-based middleware",
        "MongoDB for storing course content and user progress"
      ],
      outcomes: [
        "Streamlined course management",
        "Improved student engagement through interactive dashboards"
      ]
    }
  },
  {
    slug: "task-manager",
    title: "Task Management System",
    description: "Collaborative task management with real-time updates and team features.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    caseStudy: false,
    github: "#",
    live: "#",
    featured: false,
    date: "Oct 2024",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL"]
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather tracking with forecast and clean UI.",
    tags: ["React", "API Integration", "Chart.js", "Tailwind"],
    caseStudy: false,
    github: "#",
    live: "#",
    featured: false,
    date: "Sep 2024",
    tech: ["React", "Tailwind", "OpenWeather API"]
  },
  {
    slug: "ArtWall",
    title: "ArtWall",
    description: "A platform for artists to showcase their digital art.",
    tags: ["Vue", "Node.js", "Express", "MongoDB"],
    caseStudy: false,
    github: "https://github.com/khushnawaj/vue-wall",
    live: "https://vue-wall.vercel.app/",
    featured: true,
    date: "Jan 2026",
    tech: ["Vue", "Node.js", "Express", "MongoDB"]
  }
];
