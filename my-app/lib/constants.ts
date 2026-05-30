import { Cloud } from "lucide-react";

export const SITE = {
  name: "TrioPulse",
  tagline:
    "Web Development • SEO Services • AI & Automation Services • Custom Software",
  description:
    "TrioPulse delivers web development, SEO, AI automation, and custom software solutions to help businesses grow online.",
  url: "https://triopulse.com",
  email: "triopulsetechnologies@gmail.com",
  phone: "+91 84698 93890",
  address: "Rajkot, Gujarat, India",
} as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  // { href: "/portfolio", label: "Portfolio" },
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
      "Our focus is simple — helping your business grow with meaningful results, better performance, and lasting digital impact.",
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
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-featured online store with payment integration and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "SEO Growth Campaign",
    category: "SEO Services",
    description: "Organic traffic increased 180% in 6 months for a B2B SaaS client.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tags: ["Technical SEO", "Content", "Analytics"],
  },
  {
    title: "AI Customer Support Bot",
    category: "AI & Automation",
    description: "24/7 intelligent chatbot handling 70% of support inquiries automatically.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80",
    tags: ["OpenAI", "Node.js", "Integrations"],
  },
  {
    title: "Healthcare Management System",
    category: "Custom Software",
    description: "HIPAA-aware patient scheduling and records management platform.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    tags: ["React", "API", "Security"],
  },
  {
    title: "Corporate Website Redesign",
    category: "Web Development",
    description: "Modern brand refresh with 95+ Lighthouse performance score.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    tags: ["Next.js", "Tailwind", "CMS"],
  },
  {
    title: "Workflow Automation Suite",
    category: "AI & Automation",
    description: "Automated data pipelines connecting CRM, email, and reporting tools.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    tags: ["Python", "Zapier", "APIs"],
  },
] as const;
