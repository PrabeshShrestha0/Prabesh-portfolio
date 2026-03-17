import { Project, Skill, TimelineItem, PersonalInfo, NavigationItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Prabesh Shrestha",
  title: "Business Development Professional",
  avatar: "/assets/images/PROFILE_IMAGE.png",
  bio: "Strategic Business Developer with 3+ years of experience driving client success across technology and education sectors. I excel at transforming complex challenges into growth opportunities through data-driven insights and compelling communication. My approach consistently delivers results that exceed expectations and build lasting partnerships.",
  email: "prabeshshres1234@gmail.com",
  phone: "+977-9808170109",
  location: "Kathmandu, Nepal",
  tagline: "Connecting Technology to Business Value, One Partnership at a Time",
  socialLinks: {
    github: "https://github.com/PrabeshShrestha0",
    linkedin: "https://www.linkedin.com/in/prabesh-shrestha-92b7b1316",
    twitter: "https://twitter.com/yourusername",
    website: "https://prabeshrestha.com.np"
  }
};

export const navigationItems: NavigationItem[] = [
  { label: "Expertise", href: "#expertise" },
  { label: "History", href: "#history" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const skills: Skill[] = [
  {
    id: "1",
    title: "Strategic Client Development",
    description: "Expert in B2B/B2C acquisition, managing 50+ enterprise clients across ed-tech and software sectors with 85% satisfaction rates",
    icon: "🎯",
    category: "Business Development",
    technologies: ["Client Relations", "B2B Strategy", "Account Management", "Sales Pipeline", "CRM Systems"]
  },
  {
    id: "2",
    title: "Project Leadership",
    description: "Led 30+ cross-functional projects from conception to delivery, ensuring alignment between technical capabilities and business objectives",
    icon: "🚀",
    category: "Project Management",
    technologies: ["Project Management", "Agile/Scrum", "Stakeholder Management", "Budget Control", "Team Leadership"]
  },
  {
    id: "3",
    title: "Communication Excellence",
    description: "Translated complex technical requirements into actionable business insights, improving client understanding and decision-making by 60%",
    icon: "💬",
    category: "Communication",
    technologies: ["Client Presentations", "Technical Translation", "Negotiation", "Business Analysis", "Documentation"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "B2B Client Acquisition Strategy",
    description: "Developed comprehensive client acquisition framework that increased enterprise client portfolio by 150% across ed-tech and software sectors.",
    imageUrl: "/assets/images/B2B_Client_Acquisition_Strategy.jpg",
    featured: true,
    technologies: ["Business Strategy", "CRM Systems", "Market Analysis", "Sales Pipeline", "Client Relations"]
  },
  {
    id: "2",
    title: "Enterprise Partnership Program",
    description: "Established 25+ strategic partnerships with educational institutions and tech companies, creating sustainable revenue streams and referral networks.",
    imageUrl: "/assets/images/Enterprise_Partnership_Program.png",
    featured: true,
    technologies: ["Partnership Development", "Negotiation", "Contract Management", "Stakeholder Relations"]
  },
  {
    id: "3",
    title: "Client Communication Framework",
    description: "Created standardized communication protocols that reduced misunderstandings by 70% and improved project satisfaction scores to 85%.",
    imageUrl: "/assets/images/Client_Communication_Framework.jpg",
    featured: false,
    technologies: ["Communication Strategy", "Process Optimization", "Client Management", "Documentation"]
  },
  {
    id: "4",
    title: "Cross-Functional Project Leadership",
    description: "Led 30+ cross-functional projects from conception to delivery, ensuring alignment between technical capabilities and business objectives.",
    imageUrl: "/assets/images/Cross-Functional_Project_Leadership.png",
    featured: false,
    technologies: ["Project Management", "Team Leadership", "Budget Control", "Agile/Scrum"]
  }
];

export const timeline: TimelineItem[] = [
  {
    id: "1",
    title: "Business Development Manager",
    company: "Young Crafts Academy",
    period: "2025 - Present",
    description: "Developing scalable client acquisition frameworks while mentoring junior development associates. Expanded client portfolio by 150% and established 25+ strategic partnerships.",
    type: "work"
  },
  {
    id: "2",
    title: "Senior Business Developer",
    company: "Vrit Tech",
    period: "2023 - 2025",
    description: "Managed enterprise-level tech implementations, coordinating between technical teams and C-suite stakeholders. Led 30+ cross-functional projects with 95% on-time completion rate.",
    type: "work"
  },
  {
    id: "3",
    title: "Business Development Associate",
    company: "Skill Shikshya",
    period: "2021 - 2023",
    description: "Spearheaded B2B educational partnerships, increasing client retention by 40% through personalized communication strategies. Managed 50+ enterprise clients.",
    type: "work"
  }
];
