export const SITE = {
  name: "TrioPulse",
  tagline:
    "Web Development • SEO Services • AI & Automation Services • Custom Software",
  description:
    "TrioPulse delivers web development, SEO, AI automation, and custom software solutions to help businesses grow online.",
  url: "https://triopulse.com",
  email: "hello@triopulse.com",
  phone: "+1 (555) 123-4567",
  address: "Your City, Country",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, fast, and responsive websites and web applications built with cutting-edge technologies.",
    icon: "Code2",
    features: [
      "Custom websites & landing pages",
      "E-commerce & SaaS platforms",
      "Performance optimization",
      "Mobile-first responsive design",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  },
  {
    id: "seo",
    title: "SEO Services",
    description:
      "Data-driven SEO strategies that improve rankings, traffic, and conversions for your business.",
    icon: "Search",
    features: [
      "Technical SEO audits",
      "Keyword research & content strategy",
      "On-page & off-page optimization",
      "Analytics & reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1920&q=80",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Intelligent workflows and AI-powered tools that save time and scale your operations.",
    icon: "Bot",
    features: [
      "Process automation",
      "AI chatbots & assistants",
      "Workflow integrations",
      "Custom ML solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Tailored software solutions designed around your unique business needs and goals.",
    icon: "Layers",
    features: [
      "Enterprise applications",
      "API development & integration",
      "Legacy system modernization",
      "Ongoing support & maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Expert Team",
    description:
      "Skilled developers, designers, and strategists dedicated to delivering excellence on every project.",
    icon: "Users",
  },
  {
    title: "Results-Driven",
    description:
      "We focus on measurable outcomes—higher traffic, better conversions, and streamlined operations.",
    icon: "TrendingUp",
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication, regular updates, and no hidden surprises from kickoff to launch.",
    icon: "MessageCircle",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We grow with you—offering support, maintenance, and continuous improvement after delivery.",
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
