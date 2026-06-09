import { Cloud } from "lucide-react";

export const SITE = {
  name: "TrioPulse Technologies",
  tagline:
    "Web Development • SEO Services • AI & Automation Services • Custom Software",
  description:
    "We help businesses build better websites, get found on Google, and create software that solves everyday challenges. No unnecessary complexity-just practical digital solutions.",
  url: "https://www.triopulsetechnologies.com",
  email: "hello@triopulsetechnologies.com",
  phone: "+91 84698 93890",
  address: "Rajkot, Gujarat, India",
} as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern websites and web applications built for performance, scalability, and seamless user experiences across every device.",
    icon: "Code2",
    features: [
      "Custom websites & landing pages",
      "E-commerce & SaaS platforms",
      "Business websites & corporate portals",
      "CMS development (WordPress, headless CMS, custom CMS)",
      "API integration & third-party services",
      "Performance optimization",
      "Secure & scalable architecture",
      "Portfolio & personal brand websites",
      "Lead generation focused websites",
      "Mobile-first responsive design",
    ],
    image: "/images/services/web-development.jpg",
  },
  {
    id: "seo",
    title: "SEO Services",
    description:
      "Search-focused strategies that improve visibility, attract the right audience, and drive long-term organic growth.",
    icon: "Search",
    features: [
      "Technical SEO",
      "Keyword research & content strategy",
      "On-page & off-page optimization",
      "Local SEO optimization",
      "SEO-friendly website structure",
      "Competitor SEO analysis",
      "Blog strategy & SEO content guidance",
      "Meta tags & schema optimization",
      "SaaS SEO strategies",
      "Organic traffic growth strategy",
    ],
    image: "/images/services/seo-services.jpg",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Smart automation systems that simplify workflows, reduce repetitive tasks, and improve operational efficiency.",
    icon: "Bot",
    features: [
      "Process automation",
      "AI chatbots & assistants",
      "Workflow integrations",
      "AI-powered customer support systems",
      "WhatsApp & email automation",
      "AI content generation workflows",
      "Appointment & booking automation",
      "Custom AI integrations using APIs"
    ],
    image: "/images/services/ai-automation.jpg",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Custom-built software solutions tailored to your business processes, goals, and future scalability needs.",
    icon: "Layers",
    features: [
      "Enterprise applications",
      "API development & integration",
      "CRM & ERP solutions",
      "Admin panels & dashboards",
      "Inventory & warehouse management systems",
      "Billing & invoicing systems",
      "Cloud-based software solutions",
      "SaaS product development",
      "Third-party software integrations",
      "AI-enabled business software"
    ],
    image: "/images/services/custom-software.jpg",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Expert Team",
    description:
      "We work closely with you to understand your goals and create solutions that truly fit your business.",
    icon: "Users",
  },
  {
    title: "Results-Driven",
    description:
      "Our focus is simple - helping your business grow with meaningful results, better performance, and lasting digital impact.",
    icon: "TrendingUp",
  },
  {
    title: "Transparent Process",
    description:
      "From the first conversation to final delivery, we keep everything clear, collaborative, and easy to understand.",
    icon: "MessageCircle",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We believe in building lasting relationships by supporting your business long after the project is completed.",
    icon: "Handshake",
  },
] as const;

export const TECH_STACK = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "OpenAI", category: "AI" },
  { name: "Google Analytics", category: "SEO" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "TrioPulse transformed our online presence. Our traffic doubled within three months of launch.",
    author: "Sarah Mitchell",
    role: "CEO, Bloom Retail",
    rating: 5,
  },
  {
    quote:
      "Their AI automation saved our team 20+ hours per week. Incredible ROI and professional delivery.",
    author: "James Chen",
    role: "Operations Director, TechFlow",
    rating: 5,
  },
  {
    quote:
      "From SEO to custom software, TrioPulse understood our needs and exceeded expectations.",
    author: "Emily Rodriguez",
    role: "Founder, HealthBridge",
    rating: 5,
  },
] as const;

export const PORTFOLIO_ITEMS = [
    {
    slug: "therabody",
    title: "Therabody",
    category: "E-Commerce",
    industry: "Health & Wellness",
    timeline: "6 months",
    location: "United States",
    image: "/images/portfolio/therabodyNew.png",
    description:
      "A premium e-commerce experience built for the health and wellness industry, focused on performance, user engagement, and seamless online shopping journeys.",
    technologies: [
      "React JS",
      "Node JS",
      "E-Commerce",
      "CMS Integration"
    ],
    results: [
      "Optimized shopping experience",
      "Responsive user journeys",
      "Conversion-focused design",
      "Enhanced website performance",
      "CMS integration for easy content management"
    ],
    tags: [
      "E-Commerce",
      "Performance",
      "CMS Integration",
      "Health & Wellness"
    ],

    website: "https://www.therabody.com/"
  },
  {
    slug: "nestframe",
    title: "NestFrame",
    category: "Real Estate Platform",
    industry: "Real Estate",
    timeline: "3 Weeks",
    location: "United Kingdom",
    image: "/images/portfolio/nestFrameNew.png",
    description: "A luxury interior design website built with Next.js, featuring a refined visual experience, seamless navigation, and modern performance. Designed to showcase premium spaces, sophisticated aesthetics, and elevate brand presence through an elegant digital experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO"
    ],

    results: [
      "Mobile-first experience",
      "SEO optimized architecture",
      "Fast page load performance"
    ],

    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "CSS",
    ],

    website: "https://nestframe.triopulsetechnologies.com/"
  },
  {
    slug: "wybrid",
    title: "Wybrid",
    category: "Business Platform",
    industry: "Business Consulting & Professional Services",
    timeline: "1 year",
    location: "India",
    image: "/images/portfolio/wybridNew.png",
    description:
      "A modern business platform built with emerging technologies, designed to establish a strong digital presence through professional branding, intuitive user experiences, and high-performance web architecture.",
    technologies: [
      "React JS",
      "Node JS",
      "AWS Cloud",
      "TypeScript",
      "Custom CSS"
    ],
    results: [
      "Professional digital presence",
      "Mobile-first experience",
      "Improved user engagement",
      "Fast page load performance"
    ],
    tags: [
      "MERN Stack",
      "Business Website",
      "Responsive Design",
      "Cloud Hosting"
    ],
    website: "https://wybrid.com/"
  },
  {
    slug: "cpp-web-services",
    title: "CPP Web Services Portal",
    category: "Business Portal",
    industry: "Technology & IT Services",
    timeline: "3 years",
    location: "India",
    image: "/images/portfolio/cppNew.png",
    description:
      "A custom business portal developed to streamline operations, manage customer workflows, and improve organizational efficiency through automation and centralized management.",
    technologies: [
      "MERN Stack",
      "JAVA",
      "AWS Cloud",
      "AI Integrations",
      "OPENAI API"
    ],
    results: [
      "Streamlined business operations",
      "Improved workflow management",
      "Fast and scalable sales APIs",
      "Imporoved business efficiency through automation"
    ],
    tags: [
      "Portal",
      "Automation",
      "Custom Software",
      "Finance",
      "SBI",
      "ICICI",
      "Bajaj Finance"
    ],
    website: "https://portal.cppwebservices.in/"
  }

] as const;
