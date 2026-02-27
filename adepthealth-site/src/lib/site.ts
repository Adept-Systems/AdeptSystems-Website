export const siteConfig = {
  companyName: "AdeptHealth.AI",
  contactEmail: "rman7411@gmail.com",
  contactMailto: "mailto:rman7411@gmail.com",
  navLinks: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  coreServices: [
    {
      title: "AI Readiness and Use-Case Prioritization",
      description:
        "Assess maturity, identify high-value opportunities, and align initiatives to clinical and operational goals.",
    },
    {
      title: "Clinical and Operational Workflow Automation",
      description:
        "Reduce repetitive work across documentation, triage, and back-office processes with safe automation.",
    },
    {
      title: "Responsible AI, Governance, and Compliance",
      description:
        "Build governance controls, review checkpoints, and model oversight designed for regulated settings.",
    },
  ],
  processSteps: [
    "Discovery",
    "Data and Workflow Assessment",
    "Pilot and Validation",
    "Scale and Monitoring",
  ],
  outcomes: [
    "Faster documentation",
    "Reduced manual review",
    "Improved patient access",
    "Audit-ready governance",
  ],
  trustBullets: [
    "Privacy-first design",
    "Security-minded delivery",
    "Experience in regulated environments",
    "Human oversight and governance",
    "Do not submit PHI in contact form",
  ],
  testimonials: [
    {
      quote:
        "Sample testimonial: AdeptHealth.AI helped us move from workshop ideas to a validated pilot in one quarter.",
      author: "Operations Leader",
    },
    {
      quote:
        "Sample testimonial: Their approach balanced innovation with governance, which made leadership comfortable scaling.",
      author: "Digital Health Director",
    },
    {
      quote:
        "Sample testimonial: We got clear priorities, realistic timelines, and cleaner handoffs between clinical and technical teams.",
      author: "Care Transformation Team",
    },
  ],
  faqs: [
    {
      question: "What data do you need to start?",
      answer:
        "We start with workflow context and a light data inventory, then define the minimum data needed for pilot validation.",
    },
    {
      question: "Do you build solutions or advise teams?",
      answer:
        "Both. We can guide your internal team, build prototypes, and support production rollout with your existing stack.",
    },
    {
      question: "How do you handle compliance?",
      answer:
        "We include governance checkpoints, access controls, documentation, and human oversight from the first phase.",
    },
    {
      question: "What timeline should we expect?",
      answer:
        "Most engagements begin with a short discovery and planning phase, then move into pilot and scale decisions.",
    },
    {
      question: "Can you work with our current vendors?",
      answer:
        "Yes. We design for interoperability and collaborate with existing EHR, analytics, and cloud partners.",
    },
    {
      question: "Which AI capabilities do you support?",
      answer:
        "LLM workflows, predictive models, intelligent automation, and model monitoring for ongoing reliability.",
    },
  ],
  servicePageItems: [
    {
      title: "AI strategy and roadmap",
      description:
        "Define a phased plan tied to business and care delivery priorities.",
    },
    {
      title: "Use-case selection + ROI framing",
      description:
        "Prioritize practical initiatives with clear impact and adoption criteria.",
    },
    {
      title: "Data readiness + interoperability planning",
      description:
        "Prepare data and integration paths across EHR and operational systems.",
    },
    {
      title: "LLM and ML solution prototyping",
      description:
        "Build and validate prototypes against workflow and risk requirements.",
    },
    {
      title: "Deployment, monitoring, and MLOps",
      description:
        "Operationalize models with observability, change controls, and support loops.",
    },
    {
      title: "Responsible AI, governance, and compliance support",
      description:
        "Implement policies, review processes, and accountability for safe rollout.",
    },
  ],
  principles: [
    "Outcomes-first",
    "Clinician-in-the-loop",
    "Privacy by design",
    "Measurable delivery",
  ],
  contactReasons: [
    "AI strategy and roadmap",
    "Use-case assessment",
    "Prototype support",
    "Compliance and governance",
    "General inquiry",
  ],
} as const;
