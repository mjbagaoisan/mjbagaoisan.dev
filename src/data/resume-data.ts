import { Icons } from "@/components/icons";

export const DATA = {
  name: "Marc Jowell Bagaoisan",
  initials: "MJ",
  url: "https://mjbagaoisan.dev",
  location: "Los Angeles, CA",
  description:
    "CS & Linguistics @ UCLA — wiring distributed systems by day, chasing iron and light by night.",
  summary:
    "Junior at UCLA studying Computer Science and Linguistics. I’m most interested in backend development, with a growing focus on infrastructure and distributed systems.",
  avatarUrl: "/avatar.jpg",
  navbar: [
    { href: "/", icon: Icons.home, label: "Home" },
    { href: "/lifting", icon: Icons.dumbbell, label: "Lifting" },
    { href: "/photography", icon: Icons.camera, label: "Photography" },
  ],
  contact: {
    email: "mjbagaoisan@ucla.edu",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mjbagaoisan",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mjbagaoisan",
        icon: Icons.linkedin,
      },
      Resume: {
        name: "Resume",
        url: "/MarcJowellBagaoisanResume.pdf",
        icon: Icons.fileText,
      },
      Email: {
        name: "Email",
        url: "mailto:mjbagaoisan@ucla.edu",
        icon: Icons.email,
      },
    },
  },
  experience: [
    {
      company: "Creative Labs",
      href: "https://www.creativelabsucla.com/",
      location: "Los Angeles, CA",
      title: "Software Engineer Intern",
      logoUrl: "/logos/creativelabs.jpg",
      start: "Sep 2025",
      end: "Present",
      description:
        "Built an internal membership portal and Postgres-backed task system used by 70+ members across multiple projects. Engineered a GitHub webhook pipeline that syncs issues and PRs into tasks, and standardized deployments with Netlify CI/CD.",
    },
    {
      company: "UC Santa Cruz, AIEA Lab",
      href: "https://aiea.ucsc.edu/",
      location: "Santa Cruz, CA",
      title: "Undergraduate Research Assistant",
      logoUrl: "/logos/ucsc.jpg",
      start: "Jun 2025",
      end: "Present",
      description:
        "Built a SwiftUI audio-haptic prototype for BLV map exploration with sub-100ms response times. Engineered a PyTorch-based OSM pipeline that processes 15K+ map nodes/min to surface hazards and landmarks.",
    },
    {
      company: "De Anza College",
      href: "https://www.deanza.edu/",
      location: "Cupertino, CA",
      title: "Undergraduate Teaching Assistant",
      logoUrl: "/logos/deanza.jpg",
      start: "Jan 2024",
      end: "Apr 2025",
      description:
        "Led weekly sessions for 60+ students, breaking down Data Structures and Algorithms concepts with live Java demos covering hashing, linked-lists, and time complexity.",
    },
  ],
  projects: [
    {
      title: "HumanStocksBot",
      href: "https://github.com/mjbagaoisan",
      description:
        "Discord bot with a bonding-curve pricing engine and real-time trade execution. Uses event-driven architecture with NATS JetStream and Redis caching to keep trades under 50ms.",
      technologies: ["Go", "PostgreSQL", "Redis", "NATS JetStream", "gRPC", "AWS"],
      links: [{ type: "Source", href: "https://github.com/mjbagaoisan", icon: Icons.github }],
    },
    {
      title: "Bruin Marketplace",
      href: "https://github.com/mjbagaoisan",
      description:
        "UCLA-only student marketplace with Google OAuth and server-managed sessions. Cut search latency by 78% with a read-optimized PostgreSQL indexing strategy.",
      technologies: ["React", "Next.js", "TypeScript", "Express.js", "PostgreSQL", "Playwright"],
      links: [{ type: "Source", href: "https://github.com/mjbagaoisan", icon: Icons.github }],
    },
    {
      title: "SplitZen",
      href: "https://github.com/mjbagaoisan",
      description:
        "Full-stack expense splitter that tracks shared costs and settles group debts. Uses a deterministic greedy algorithm to resolve cyclic balances across multiple people.",
      technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "AWS S3"],
      links: [{ type: "Source", href: "https://github.com/mjbagaoisan", icon: Icons.github }],
    },
    {
      title: "UCLA Course Monitor",
      href: "https://github.com/mjbagaoisan",
      description:
        "Go service that concurrently monitors UCLA classes and fires Discord webhook alerts when spots open. Handles network failures with retry backoff and persists state across restarts on EC2.",
      technologies: ["Go", "AWS EC2", "Discord API"],
      links: [{ type: "Source", href: "https://github.com/mjbagaoisan", icon: Icons.github }],
    },
  ],
  skills: {
    languages: ["Java", "Python", "C/C++", "Go", "JavaScript/TypeScript", "HTML/CSS"],
    frameworks: ["React", "Node.js", "Express.js", "AWS"],
    tools: ["gRPC", "Redis", "Git", "Docker", "RESTful API", "Playwright", "NATS JetStream", "Supabase"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Neo4j", "Cassandra", "OpenSearch VectorDB", "Redis"],
  },
  liftingPRs: [
    { lift: "Bench Press", weight: "275 lbs", icon: "🏋️" },
    { lift: "Squat", weight: "402 lbs", icon: "🦵" },
    { lift: "Deadlift", weight: "441 lbs", icon: "💪" },
  ],
} as const;
