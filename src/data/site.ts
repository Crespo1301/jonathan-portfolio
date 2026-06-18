export const site = {
  owner: "Jonathan Crespo",
  projectName: "Jonathan Portfolio",
  statusLabel: "Intake-ready starter",
  sitePurpose:
    "A personal portfolio website that can support a resume presence, personal brand, selected work, and future contact opportunities once Jonathan's real content is gathered.",
  intro: {
    eyebrow: "Jonathan Crespo Portfolio",
    headline: "A strong personal portfolio shell, ready for Jonathan's real story.",
    supportingCopy:
      "This starter is intentionally structured before the final design pass, it gives us a clean place to drop real copy, headshots, work samples, links, and contact details without inventing a fake brand voice first.",
    primaryCta: { label: "Review content checklist", href: "/contact#content-checklist" },
    secondaryCta: { label: "See the planned sections", href: "/work" },
  },
  plannedSections: [
    {
      title: "About and personal story",
      description:
        "Short introduction, background, values, and the kind of opportunities Jonathan wants this site to support.",
    },
    {
      title: "Work, projects, or proof",
      description:
        "A place to showcase selected wins, client work, experience snapshots, or portfolio pieces once the brief is confirmed.",
    },
    {
      title: "Resume and experience",
      description:
        "Career timeline, skills, strengths, downloadable resume, and optional references or metrics if Jonathan wants them public.",
    },
    {
      title: "Contact and next steps",
      description:
        "Direct email, social links, optional scheduling path, and a simple reason to reach out.",
    },
  ],
  contentNeeds: [
    "Professional headline or role",
    "Short bio and longer about copy",
    "Headshot or preferred hero image",
    "Resume or experience timeline",
    "Featured work, projects, or measurable wins",
    "Preferred links, social profiles, and contact info",
    "Visual preferences, colors, references, and no-go styles",
  ],
  placeholders: {
    headshot: "Recommended hero image slot: 1200 x 1500 portrait, natural light, clean background.",
    featuredWork:
      "Recommended project tile assets: at least 3 items, each with title, one-sentence summary, proof image or screenshot, and optional result metric.",
    cover:
      "Recommended social / portfolio card image: 1600 x 900 if Jonathan wants a branded hero or preview banner.",
  },
  intakeQuestions: [
    "What is the main job of the site, personal resume, client-facing portfolio, sales profile, or all three?",
    "What kind of work or opportunities should the site attract first?",
    "What sections feel essential versus optional?",
    "Does Jonathan want a more corporate, creative, personal, or minimal tone?",
    "Which links should be public on day one?",
    "What should stay private until later?",
  ],
};

export type SiteData = typeof site;
