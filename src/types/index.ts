export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  featured?: boolean;
}

export interface Skill {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface PersonalInfo {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  tagline?: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    website: string;
  };
}

export interface ThemeMode {
  mode: 'light' | 'dark';
  toggle: () => void;
}

export interface NavigationItem {
  label: string;
  href: string;
}
