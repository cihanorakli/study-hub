export type ServiceCategory = 
  | 'architecture' 
  | 'documents' 
  | 'data' 
  | 'presentations' 
  | 'research' 
  | 'technical' 
  | 'creative' 
  | 'custom';

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  iconName: string;
  popular?: boolean;
  deliverables: string[];
  toolsUsed: string[];
  badge: string;
}

export interface ArchitectureItem {
  id: string;
  title: string;
  category: string;
  scale: string;
  software: string[];
  summary: string;
  description: string;
  image: string;
  deliverables: string[];
  tags: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'architecture' | 'documents' | 'presentations' | 'data' | 'creative' | 'technical';
  categoryLabel: string;
  image: string;
  summary: string;
  fullDescription: string;
  tools: string[];
  deliverables: string[];
  scope: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  detail: string;
  icon: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  subtitle: string;
  idealFor: string;
  estimatedTurnaround: string;
  examples: string[];
  features: string[];
  isPopular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  department: string;
  university: string;
  feedback: string;
  projectType: string;
  isPlaceholder: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'architecture' | 'pricing' | 'process' | 'files';
}

export interface RequestFormData {
  fullName: string;
  email: string;
  university: string;
  department: string;
  serviceType: string;
  deadline: string;
  urgency: 'flexible' | 'standard' | 'urgent';
  description: string;
  preferredFormat: string;
  budgetRange: string;
  contactPreference: 'whatsapp' | 'email';
  contactHandle: string;
  fileName?: string;
}
