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
  siteDescription:
    "Adept Systems builds and deploys agentic AI systems for organizations that need execution, not theory. Autonomous agents, workflow automation, and rapid implementation.",
  contactEmail: "contact@adeptsystems.ai",
  contactMailto: "mailto:contact@adeptsystems.ai",
  adeptHealthUrl: "https://adepthealth.ai",
  hero: {
    title: "Agentic AI systems, built to execute.",
    description:
      "Adept Systems builds and deploys agentic AI systems for private equity teams, SMBs, nonprofits, and other organizations that need execution across real operations. We design digital workflows where autonomous agents move work from one step to the next with context intact. We move from scoping to live deployment fast. No slide decks. No stalled discovery loops. Just agent-driven systems working alongside your team.",
    tags: [
      "Agentic AI",
      "Private equity",
      "SMBs",
      "Nonprofits",
      "Digital workforce",
      "Autonomous workflows",
      "Rapid deployment",
    ],
  },
  navLinks: [{ label: "Contact", href: "/#contact" }] satisfies readonly NavLink[],
  coreServices: [
    {
      title: "Agentic AI systems",
      description:
        "We design and deploy autonomous agents that plan, reason, and execute multi-step workflows with minimal human intervention. From focused agents to coordinated multi-agent orchestration, we build systems that act.",
    },
    {
      title: "Workflow automation",
      description:
        "We map your highest-friction processes and replace manual coordination with agent-driven workflows. That means faster throughput, fewer handoffs, and execution capacity that scales with demand.",
    },
    {
      title: "Rapid implementation",
      description:
        "We move from scoping to working software fast. No prolonged discovery cycles. No shelfware. We build alongside your team and stay close until the agentic system is live and producing results.",
    },
  ],
  capabilities: [
    {
      title: "Agent architecture",
      description:
        "Design autonomous agents with the right goals, tools, permissions, and controls so agentic systems can operate reliably in production.",
    },
    {
      title: "Agent-driven workflows",
      description:
        "Turn fragmented process steps into agent-driven workflows that carry context across tasks and keep execution moving without constant intervention.",
    },
    {
      title: "Multi-agent orchestration",
      description:
        "Coordinate specialized agents across intake, analysis, decisions, and follow-through so work moves through a structured agentic pipeline.",
    },
    {
      title: "Live deployment",
      description:
        "Ship quickly into real environments, connect to your systems, and manage performance so autonomous workflows deliver value in day-to-day operations.",
    },
  ],
  segments: [
    {
      title: "Revenue Generation",
      description:
        "Agent-driven workflows for marketing and sales teams that need faster pipeline movement, sharper follow-up, and more consistent revenue execution across the funnel.",
    },
    {
      title: "Operations",
      description:
        "Agent-driven workflows for teams managing high-volume coordination, delivery, and execution across complex operations.",
    },
    {
      title: "Enterprise Tools",
      description:
        "Internal platforms, autonomous agents, and operator-facing systems that connect fragmented processes and decisions.",
    },
    {
      title: "Finance",
      description:
        "Agentic review workflows, structured data systems, and implementation support for risk-aware financial operations.",
    },
    {
      title: "Agentic Workforce",
      description:
        "Deploy coordinated AI agents across revenue, operations, and support functions. We scope, build, and manage the agent layer that works alongside your team.",
    },
    {
      title: "SMB Automation",
      description:
        "Practical agentic AI for small and mid-sized businesses. We make enterprise-grade agent infrastructure accessible without enterprise complexity or cost.",
    },
    {
      title: "HR and Administration",
      description:
        "Agent-driven workflows for recruiting, onboarding, internal support, documentation, and the administrative work that keeps teams moving.",
    },
    {
      title: "Adept Health",
      description:
        "Agentic AI systems, workflow modernization, and implementation support for healthcare organizations.",
    },
  ] satisfies readonly Segment[],
  processSteps: ["Discover", "Build", "Deploy", "Improve"],
  processBlurbs: {
    Discover:
      "We define the operating problem, identify where agentic systems can take ownership, and align on the workflows ready for autonomous execution.",
    Build:
      "We turn scope into working agents, orchestration logic, and agent-driven workflows with tight feedback loops from your team.",
    Deploy:
      "We launch into real environments, connect the agent layer to your systems, and put the right controls around live execution.",
    Improve:
      "We tune performance, expand successful workflows, and strengthen the operating model as your autonomous agent layer matures.",
  },
  principles: [
    "Agentic systems built to execute",
    "Autonomous workflows with controls",
    "Fast implementation over theater",
    "Built alongside operators",
  ],
  servicePageItems: [
    {
      title: "Agentic AI strategy and scoping",
      description:
        "Prioritize the workflows best suited for autonomous agents, define sequencing, and connect agentic bets to operational realities.",
    },
    {
      title: "Autonomous workflow design",
      description:
        "Redesign high-friction processes into agent-driven workflows with cleaner handoffs, stronger context retention, and faster execution.",
    },
    {
      title: "Agent prototype and pilot builds",
      description:
        "Build focused agentic systems that test usability, system fit, and operational value before broader rollout.",
    },
    {
      title: "Multi-agent orchestration",
      description:
        "Stand up coordinated agent teams with distinct roles, shared context, and clear controls across complex business processes.",
    },
    {
      title: "Implementation and rollout",
      description:
        "Establish the integrations, ownership model, review loops, and deployment structure needed to launch autonomous agents responsibly.",
    },
    {
      title: "Segment-specific agent systems",
      description:
        "Adapt a reusable agentic platform into focused offerings for healthcare, SMB automation, and other industry contexts.",
    },
  ],
  faqs: [
    {
      question: "What does Adept Systems actually build?",
      answer:
        "We build agentic AI systems that execute real work. That can mean autonomous agents, multi-agent orchestration, agent-driven workflows, or the implementation layer required to get those systems live inside your operation.",
    },
    {
      question: "Do you only work in healthcare?",
      answer:
        "No. Adept Health is one operating segment under the broader Adept Systems umbrella. We also build agentic systems for operations, finance, SMB automation, and other execution-heavy environments.",
    },
    {
      question: "How do engagements usually start?",
      answer:
        "Most engagements start with a focused scoping phase. We map the workflow, identify where autonomous agents can own execution, and move quickly into a working build rather than a long advisory cycle.",
    },
    {
      question: "Can you work with our internal team or vendors?",
      answer:
        "Yes. We work alongside operators, product teams, engineers, and outside vendors. The goal is to add a coordinated agent layer that fits your environment and helps your team execute with more continuity.",
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
    "Agentic AI system build",
    "Autonomous workflow design",
    "Multi-agent orchestration",
    "Segment partnership",
    "General inquiry",
  ],
} as const;
