export const projectsData = [
  {
    slug: "nexus360",
    title: "Nexus360 ERP System",
    image: null,
    category: "Node.js",
    description: "An enterprise-grade, microservice-based ERP system featuring Multi-Tenancy, Role-Based Access Control, an API Gateway, and automated invoice workflows.",
    tags: ["Next.js", "NestJS", "Microservices", "TurboRepo"],
    caseStudy: true,
    github: "https://github.com/khushnawaj/nexus360",
    live: "#",
    featured: true,
    date: "Mar 2026",
    tech: ["Next.js", "NestJS", "TypeScript", "TurboRepo", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    details: {
      problem: "Large organizations require a highly scalable, multi-tenant ERP system to manage complex operations like invoicing, user verification, and role-based permissions without single points of failure.",
      solution: "Architected Nexus360 as a robust monorepo (TurboRepo) consisting of an API Gateway and independent NestJS microservices (Auth, ERP). Developed a modern Next.js admin frontend with a complex Super Admin verification panel, complete invoice cancellation/emailing workflows, and scheduled cron jobs.",
      architecture: [
        "TurboRepo advanced monorepo structure",
        "NestJS microservices communicating natively",
        "API Gateway configuration with wildcard tenant routing",
        "Next.js glassy frontend utilizing Server Side Rendering",
        "Multi-tenancy implementation using dynamic tenant identification",
        "Automated scheduled jobs for due-date reminders"
      ],
      outcomes: [
        "Eliminated monolithic bottlenecks",
        "Seamless addition of specialized microservices",
        "Robust enterprise verification systems integrated",
        "Sleek and highly performant internal admin UI"
      ]
    }
  },
  {
    slug: "script-shelf",
    title: "ScriptShelf",
    image: null,
    category: "React",
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
    slug: "article-builder",
    title: "Article Builder Pro",
    image: null,
    category: "React",
    description: "A comprehensive CMS for creating and managing long-form content with a powerful rich-text editor and custom layouts.",
    tags: ["React", "Node.js", "CMS"],
    caseStudy: true,
    github: "#",
    live: "#",
    featured: true,
    date: "Dec 2025",
    tech: ["React", "Node.js", "Express", "MongoDB", "TipTap", "Tailwind CSS"],
    details: {
      problem: "Content creators needed a more intuitive way to build structured articles with varied media types without technical overhead.",
      solution: "Developed a custom CMS with a block-based editor, permitting real-time previews and drag-and-drop structural organization.",
      architecture: [
        "Block-based content architecture",
        "Real-time preview engine",
        "Media management system",
        "Automated SEO metadata generation"
      ],
      outcomes: [
        "50% reduction in content publishing time",
        "Improved content quality with built-in validation",
        "Flexible layout system for diverse article types"
      ]
    }
  },
  {
    slug: "task-manager",
    title: "ProTask Manager",
    image: null,
    category: "React",
    description: "An enterprise-grade project management platform featuring collaborative Kanban boards, real-time activity streams, and intelligent workload analytics.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    caseStudy: true,
    github: "https://github.com/khushnawaj/taskmanager_full",
    live: "#",
    featured: true,
    date: "Jan 2026",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.io", "Redux Toolkit", "Framer Motion", "Recharts"],
    details: {
      problem: "Teams often struggle with fragmented communication and lack of visibility into workload distribution, leading to burnout and missed deadlines in fast-paced environments.",
      solution: "Developed ProTask Manager, a robust SaaS-style platform that centralizes project workflows. It features optimistic UI updates for zero latency, real-time collaboration via WebSockets, and a manager-level dashboard for balancing team capacity and task priorities.",
      architecture: [
        "Next.js client-side application with state management via Redux Toolkit",
        "Express REST API protected by rate-limiting and security middleware (Helmet)",
        "WebSocket integration for instant cross-user synchronization",
        "Soft-delete mechanism and comprehensive database audit logs",
        "Command Palette (Ctrl+K) for high-efficiency keyboard navigation",
        "Data visualization using Recharts for team productivity metrics"
      ],
      outcomes: [
        "Enabled seamless team collaboration with real-time feedback",
        "Reduced administrative overhead through automated audit trails",
        "Improved project predictability with data-driven workload insights",
        "Enhanced developer productivity with a modern, high-speed UX"
      ]
    }
  },
  {
    slug: "scentiva",
    title: "Scentiva E-Commerce",
    image: null,
    category: "Node.js",
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
    slug: "template-builder",
    title: "Low-Code Template Builder",
    image: null,
    category: "React",
    description: "A visual editor for creating customizable UI templates with dynamic data binding and real-time editing.",
    tags: ["React", "Canvas", "Low-Code"],
    caseStudy: true,
    github: "#",
    live: "#",
    featured: false,
    date: "Nov 2025",
    tech: ["React", "React-DND", "Tailwind CSS", "Redux"],
    details: {
      problem: "Static templates were too restrictive for dynamic business needs.",
      solution: "Created a drag-and-drop builder allowing users to define element positions, dimensions, and data hooks dynamically.",
      architecture: [
        "Layer-based rendering engine",
        "Dynamic property inspector",
        "Data-mapping layer for API integration"
      ],
      outcomes: [
        "Empowered non-technical users to build UIs",
        "Standardized template structures across the organization"
      ]
    }
  },
  {
    slug: "currency-xchange",
    title: "CurrencyXchange",
    image: null,
    category: "React",
    description: "Multi-currency wallet & exchange platform with real-time rates and secure transfers.",
    tags: ["React", "Django", "PostgreSQL", "JWT"],
    caseStudy: true,
    github: "https://github.com/khushnawaj/currency-exchange-backend",
    live: "#",
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
    slug: "election-campaign",
    title: "Election Campaign Platform",
    image: null,
    category: "Node.js",
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
    image: null,
    category: "Vue.js",
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
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    image: null,
    category: "React",
    description: "Real-time weather tracking with forecast and clean UI.",
    tags: ["React", "API Integration", "Chart.js", "Tailwind"],
    caseStudy: true,
    github: "#",
    live: "#",
    featured: false,
    date: "Sep 2024",
    tech: ["React", "Tailwind", "OpenWeather API", "Chart.js"],
    details: {
      problem: "Users need a quick, reliable, and visually engaging way to check real-time weather conditions and long-term forecasts without wading through cluttered ads and complex interfaces.",
      solution: "Created a clean, modern weather dashboard integrating OpenWeather API. Features dynamic background transitions based on current weather conditions, interactive multi-day forecast charts, and a search history system for fast city switching.",
      architecture: [
        "React functional components with local state management",
        "Axios for fetching real-time weather and forecast data from OpenWeather API",
        "Tailwind CSS for responsive layouts and theme changes",
        "Chart.js integration for visualizing 5-day temperature trends"
      ],
      outcomes: [
        "Instant access to real-time and 5-day forecasts",
        "High performance through minimized API calls using caching",
        "Responsive layout for mobile, tablet, and desktop views",
        "Beautiful user interface with animated weather icon states"
      ]
    }
  },
  {
    slug: "ArtWall",
    title: "ArtWall",
    image: null,
    category: "Vue.js",
    description: "A platform for artists to showcase their digital art.",
    tags: ["Vue", "Node.js", "Express", "MongoDB"],
    caseStudy: true,
    github: "https://github.com/khushnawaj/vue-wall",
    live: "https://vue-wall.vercel.app/",
    featured: true,
    date: "Jan 2026",
    tech: ["Vue", "Node.js", "Express", "MongoDB"],
    details: {
      problem: "Digital artists require a minimalist, aesthetic online gallery space where their artwork stands out, complete with engagement features like comments, while preserving page speed and visual hierarchy.",
      solution: "Built a custom showcase platform with a 'Moody Elegant' dark purple aesthetic, featuring Cormorant Garamond headings and Manrope body typography. The system allows art uploads, real-time comment feeds, and full-screen image expandability.",
      architecture: [
        "Vue.js (Vue 3) frontend with responsive layout structures",
        "Node.js & Express REST API for backend services",
        "MongoDB database for user records, art metadata, and comments",
        "Elegant dark theme layout with glassmorphic panels"
      ],
      outcomes: [
        "Seamless and highly readable digital artwork showcase",
        "Functional and optimized comments system to drive interaction",
        "Custom responsive navigation that adapts to all viewport sizes"
      ]
    }
  },
  {
    slug: "SyncUp",
    title: "SyncUp",
    image: null,
    category: "Python",
    description: "A platform for employee and employers to hire and Join Job.",
    tags: ["Python", "Next.Js", "PostgreSQL", "Redis"],
    caseStudy: true,
    github: "https://github.com/khushnawaj/syncup",
    live: "https://sync-up-one.vercel.app/jobs",
    featured: true,
    date: "Apr 2026",
    tech: ["Python", "Next.Js", "PostgreSQL", "Redis"],
    details: {
      problem: "Job matching platforms often suffer from slow matching pipelines, lack of real-time application updates, and inefficient search, leading to poor communication between recruiters and seekers.",
      solution: "Designed and developed SyncUp, a job matching platform utilizing a cache-aside Redis strategy to accelerate job searches. It implements a secure Prisma PostgreSQL schema, Socket.io for real-time notification alerts, and cost-efficient OpenAI integration for automated resume-job description match scoring.",
      architecture: [
        "Next.js client-side application utilizing Tailwind CSS",
        "Backend REST API built with Express / Python services",
        "PostgreSQL database using Prisma ORM with constraints to prevent duplicate applications",
        "Redis integration implementing Cache-Aside strategy for listing optimization",
        "Socket.io server enabling real-time targeted alerts per user-scoped rooms",
        "OpenAI integration (gpt-3.5-turbo) with resume text truncation to control token costs"
      ],
      outcomes: [
        "Optimized query response times using Redis caching for read-heavy lists",
        "Instant, private notifications delivered to users via WebSocket rooms",
        "Cost-controlled AI resume matching with automated scoring",
        "Safe and auditable database migration workflow"
      ]
    }
  },
  {
    slug: "ShelfForge",
    title: "ShelfForge",
    image: null,
    category: "React",
    description: "A platform for Book Lovers to handle their book data.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    caseStudy: true,
    github: "https://github.com/khushnawaj/booklibrary",
    live: "https://book-library-flax.vercel.app/",
    featured: true,
    date: "Apr 2026",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary"],
    details: {
      problem: "Book lovers need a consolidated platform to track their personal library, wishlists, and reading goals, while admins require secure tools to manage content and users without premature session expiration or data inconsistencies.",
      solution: "Built ShelfForge, a specialized book tracking and community platform. Resolves critical database validation issues, implements secure JWT refresh token flows with CORS flexibility for cross-domain hosting, and integrates Cloudinary for persistent user avatars and Google Books API for metadata autocomplete.",
      architecture: [
        "React Single Page Application (SPA) with Redux Toolkit for unified state tracking",
        "Express REST API featuring robust token-based JWT authentication and CORS configurations",
        "MongoDB database utilizing Mongoose schemas with validator hooks",
        "Cloudinary integration to support persistent user avatar uploads",
        "Google Books API integration for metadata retrieval"
      ],
      outcomes: [
        "Reliable user session management via secure token lifecycle handling",
        "Clean, scalable profile features displaying reading stats and followers",
        "Persistent image uploads and robust database integrity verification"
      ]
    }
  },
];
