export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Logo Design' | 'Social Media Design' | 'Video Editing' | 'Branding' | 'Photo Editing' | 'Print Design' | 'Advertising';
  image: string;
  description: string;
  tools: string[];
  client: string;
  date: string;
  highlights?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface SkillItem {
  name: string;
  percentage: number;
  category: 'design' | 'operations';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
