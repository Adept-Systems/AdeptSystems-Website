type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

type Segment = {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  featured?: boolean;
  external?: boolean;
};

export const siteConfig = {
  companyName: "Adept Systems",
  contactEmail: "contact@adepthealth.ai",
  contactMailto: "mailto:contact@adepthealth.ai",
  adeptHealthUrl: "https://adepthealth.ai",
  navLinks: [
    { label: "Contact", href: "/#contact" },
  ] satisfies readonly NavLink[],
  coreServices: [
    {
      title: "Applied AI strategy",
      description:
        "Shape practical roadmaps, evaluate where AI fits, and prioritize initiatives that can move from concept to execution.",
    },
    {
      title: "Workflow systems",
      description:
        "Design and implement tools, automations, and operating models that reduce friction across complex business processes.",
    },
    {
      title: "Digital product delivery",
      description:
        "Build focused products, prototypes, and implementation frameworks that help teams ship with more confidence.",
    },
  ],
  capabilities: [
    {
      title: "AI Strategy",
      description:
        "Translate ambition into a clear roadmap, investment thesis, and sequence of execution.",
    },
    {
      title: "Workflow Automation",
      description:
        "Modernize repetitive processes with systems that improve speed, consistency, and team capacity.",
    },
    {
      title: "Product Prototyping",
      description:
        "Validate concepts quickly with usable prototypes that clarify scope, workflows, and value.",
    },
    {
      title: "Applied ML Systems",
      description:
        "Develop practical model-enabled solutions tied to real operational use cases.",
    },
  ],
  segments: [
    {
      title: "Adept Health",
      description:
        "AI strategy, workflow modernization, and implementation support for healthcare organizations.",
      ctaLabel: "Visit adepthealth.ai",
      ctaHref: "https://adepthealth.ai",
      featured: true,
      external: true,
    },
    {
      title: "Operations",
      description:
        "Workflow systems and applied automation for teams managing high-volume coordination, delivery, and execution.",
    },
    {
      title: "Enterprise Tools",
      description:
        "Internal platforms and operator-facing products that connect fragmented processes and decision-making.",
    },
    {
      title: "Finance",
      description:
        "Structured data, review workflows, and implementation frameworks for risk-aware financial operations.",
    },
  ] satisfies readonly Segment[],
  processSteps: ["Discover", "Build", "Deploy", "Improve"],
  processBlurbs: {
    Discover:
      "We define the operating problem, map the constraints, and align around where systems work can create leverage.",
    Build:
      "We turn direction into prototypes, workflows, and implementation-ready products with tight feedback loops.",
    Deploy:
      "We launch into real environments with practical governance, ownership, and adoption built into the rollout.",
    Improve:
      "We refine performance, strengthen the operating model, and expand what works without losing control.",
  },
  principles: [
    "Practical over performative",
    "Built for operators",
    "Structured execution",
    "Reusable systems thinking",
  ],
  servicePageItems: [
    {
      title: "AI strategy and roadmap design",
      description:
        "Prioritize initiatives, define sequencing, and connect AI bets to operating realities.",
    },
    {
      title: "Workflow architecture and automation",
      description:
        "Redesign high-friction processes with cleaner handoffs, automation, and decision support.",
    },
    {
      title: "Prototype and MVP development",
      description:
        "Build focused tools that test usability, technical feasibility, and organizational fit.",
    },
    {
      title: "Implementation planning",
      description:
        "Establish the roles, milestones, controls, and rollout structure needed to launch responsibly.",
    },
    {
      title: "Operating model and governance support",
      description:
        "Create the review rhythms, ownership model, and guardrails that keep initiatives effective over time.",
    },
    {
      title: "Segment-specific solution design",
      description:
        "Adapt a common systems platform into focused offerings for healthcare and other industry contexts.",
    },
  ],
  faqs: [
    {
      question: "What does Adept Systems actually build?",
      answer:
        "We work across strategy, implementation, and product delivery. That can mean shaping an AI roadmap, prototyping a workflow tool, or helping a team stand up the operating system around a new initiative.",
    },
    {
      question: "Do you only work in healthcare?",
      answer:
        "No. Adept Health is one operating segment under the broader Adept Systems umbrella. The parent company focuses more broadly on applied AI, workflow systems, and digital products across industries.",
    },
    {
      question: "How do engagements usually start?",
      answer:
        "Most work starts with a discovery phase to clarify the problem, current constraints, stakeholders, and implementation path. From there we define the right scope for strategy support, a prototype, or a more complete build.",
    },
    {
      question: "Can you work with our internal team or vendors?",
      answer:
        "Yes. We can work as a focused delivery partner alongside internal operators, product teams, engineering groups, or outside vendors. The goal is to complement existing capabilities, not force unnecessary resets.",
    },
  ],
  testimonials: [
    {
      quote:
        "Adept Systems brought structure to a messy initiative and helped us move from broad interest in AI to a concrete delivery path.",
      author: "Operations Executive",
    },
    {
      quote:
        "Their approach balanced strategy and implementation, which made it easier for our team to move without overcommitting too early.",
      author: "Product Leader",
    },
    {
      quote:
        "The work felt grounded in how teams actually operate, not just in what looked good on a roadmap slide.",
      author: "Transformation Lead",
    },
  ],
  contactReasons: [
    "AI strategy and roadmap",
    "Workflow systems",
    "Prototype or product build",
    "Segment partnership",
    "General inquiry",
  ],
} as const;
