import { Audience, HeaderNavConfig, BottomCtaConfig } from "@/types/audience";
import { FAQItem } from "@/data/landing";

export const HEADER_CONFIG: Record<Audience, HeaderNavConfig> = {
  recruiter: {
    links: [
      { label: "Home", href: "#" },
      { label: "Find Talent", href: "#talent" },
      { label: "The Advantage", href: "#advantage" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
    ],
    ctaText: "Start Hiring",
    ctaHref: "#talent",
  },
  jobseeker: {
    links: [
      { label: "Home", href: "#" },
      { label: "Explore Jobs", href: "#jobs" },
      { label: "Why Job10", href: "#benefits" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
    ],
    ctaText: "Find My Next Job",
    ctaHref: "#jobs",
  },
  guest: {
    links: [
      { label: "Home", href: "#" },
      { label: "Find Jobs", href: "#jobs" },
      { label: "Find Talent", href: "#talent" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
    ],
    ctaText: "Join Now",
    ctaHref: "#login",
  },
};

export const JOBSEEKER_HERO_CONFIG = {
  headline: "Start your next chapter in the next 10 minutes.",
  headlinePrefix: "Start your next chapter",
  highlightWord: "in the next 10 minutes.",
  description:
    "Find opportunities that match your skills, experience, and ambitions. Let Job10’s AI help you discover relevant job matches in just 10 minutes.",
  primaryCtaText: "Find Jobs for Me",
  primaryCtaHref: "#jobs",
  secondaryCtaText: "See how it works",
  secondaryCtaHref: "#how-it-works",
  metricPill: "Verified Direct Opportunities",
};

export const RECRUITER_HERO_CONFIG = {
  headline: "Build your dream team in the next 10 minutes.",
  headlinePrefix: "Build your dream team",
  highlightWord: "in the next 10 minutes.",
  description:
    "Find candidates who match your role, requirements, and ambitions. Let Job10’s AI help you discover relevant talent in just 10 minutes — so you can spend less time screening and more time building your team.",
  primaryCtaText: "Find Candidates for Me",
  primaryCtaHref: "#talent",
  secondaryCtaText: "See how it works",
  secondaryCtaHref: "#how-it-works",
  metricPill: "Intelligent Candidate Discovery",
};

export const GUEST_HERO_CONFIG = {
  headline: "Better matches. Bigger opportunities.",
  highlightWord: "Bigger opportunities",
  description:
    "Whether you're discovering your next career move or searching for great talent, Job10 makes meaningful connections easier.",
  primaryCtaText: "Find a Job",
  primaryCtaHref: "#jobs",
  secondaryCtaText: "Find Talent",
  secondaryCtaHref: "#talent",
  metricPill: "Dual Talent & Recruitment Hub",
};

export const HERO_CONFIG = {
  jobseeker: {
    ...JOBSEEKER_HERO_CONFIG,
    metricLabel: JOBSEEKER_HERO_CONFIG.metricPill,
    tagline: "Discover opportunities aligned with your skills and",
  },
  recruiter: {
    ...RECRUITER_HERO_CONFIG,
    metricLabel: RECRUITER_HERO_CONFIG.metricPill,
    tagline: "Discover candidates matched to your requirements with",
  },
  guest: {
    ...GUEST_HERO_CONFIG,
    metricLabel: GUEST_HERO_CONFIG.metricPill,
    tagline: "The talent platform loved by candidates and recruiters — with",
  },
};

export const BOTTOM_CTA_CONFIG: Record<"recruiter" | "jobseeker", BottomCtaConfig> = {
  recruiter: {
    headline: "Better hiring starts with better matches.",
    description:
      "Discover relevant talent and give your team a more efficient way to hire. Start meeting interview-ready professionals today.",
    buttonText: "Start Hiring",
    buttonHref: "#talent",
    badgeText: "⚡ High-Signal Recruitment",
  },
  jobseeker: {
    headline: "Your next chapter starts with the right opportunity.",
    description:
      "Discover jobs that fit your strengths and take the next step toward the career you want. Free for all candidates.",
    buttonText: "Explore Jobs",
    buttonHref: "#jobs",
    badgeText: "🔥 Tailored For Your Skills",
  },
};

export const AUDIENCE_FAQS: Record<Audience, FAQItem[]> = {
  recruiter: [
    {
      id: "rec-1",
      question: "How does AI-powered candidate matching work?",
      answer:
        "Job10 analyzes your role specifications against verified candidate profiles, assessing technical competencies, project experience, domain depth, and compensation alignment to recommend candidates who genuinely meet your requirements.",
    },
    {
      id: "rec-2",
      question: "What is the Private Talent Vault and how does it help employers?",
      answer:
        "The Private Talent Vault is your company's proprietary candidate database on Job10. It lets you store, organize, tag, and search high-potential candidates for future hiring cycles without losing past applicants in unstructured spreadsheets.",
    },
    {
      id: "rec-3",
      question: "How does Job10 reduce manual resume screening?",
      answer:
        "Instead of reading through hundreds of unqualified resumes, you receive pre-scored candidate profiles matched against your requirements, highlighting verified accomplishments and role suitability upfront.",
    },
    {
      id: "rec-4",
      question: "How are candidate credentials and background data verified?",
      answer:
        "Candidates on Job10 undergo portfolio verification and standardized competency checks. Sensitive personal details remain private until candidates choose to share them with verified employers.",
    },
    {
      id: "rec-5",
      question: "Can we message candidates directly through the platform?",
      answer:
        "Yes. Verified hiring managers can initiate direct interview requests and conversation threads directly within Job10 without third-party headhunters.",
    },
  ],
  jobseeker: [
    {
      id: "job-1",
      question: "How does Job10 match me with relevant job opportunities?",
      answer:
        "When you build your profile or upload your resume, Job10 parses your skills, career history, preferred work arrangements, and salary goals. It then surfaces active openings from verified employers that closely align with your background.",
    },
    {
      id: "job-2",
      question: "Is Job10 free for jobseekers to use?",
      answer:
        "Yes, 100%. Creating your profile, discovering matched opportunities, submitting 1-click applications, and scheduling interviews on Job10 are completely free for all jobseekers.",
    },
    {
      id: "job-3",
      question: "Is my personal information and current employer status confidential?",
      answer:
        "Absolutely. You have complete control over profile visibility. Your contact information is never displayed publicly, and you can hide your profile from your current employer at any time.",
    },
    {
      id: "job-4",
      question: "How does applying for jobs work on Job10?",
      answer:
        "Once your profile is set up, you can review full compensation details, tech stacks, and team requirements, then submit verified applications directly to the hiring team with a single click.",
    },
    {
      id: "job-5",
      question: "How quickly do employers typically respond to applications?",
      answer:
        "Because Job10 only presents candidates who closely match the role criteria, employers actively review submissions and typically respond within 24 to 48 hours.",
    },
  ],
  guest: [
    {
      id: "faq-1",
      question: "What makes Job10 different from conventional job boards?",
      answer:
        "Traditional job boards overwhelm recruiters with spam applications and trap jobseekers in black holes. Job10 focuses on structured, high-affinity matching that connects qualified professionals directly with verified hiring teams.",
    },
    {
      id: "faq-2",
      question: "Can I use Job10 both as a jobseeker and as an employer?",
      answer:
        "Yes. You can switch between the candidate and recruiter experiences at any time using the role selector in the header.",
    },
    {
      id: "faq-3",
      question: "How does Job10 protect user privacy and data security?",
      answer:
        "Job10 adheres to strict SOC-2 and GDPR data protection standards. We never sell user data, and all candidate and recruiter interactions occur within a secure portal.",
    },
    {
      id: "faq-4",
      question: "What types of companies hire on Job10?",
      answer:
        "Job10 hosts verified opportunities from high-growth technology startups, established enterprise SaaS leaders, engineering consultancies, and remote-first organizations worldwide.",
    },
  ],
};
