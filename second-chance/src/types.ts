export type ActiveScreen =
  | 'about'
  | 'key-findings'
  | 'projects'
  | 'impact'
  | 'stories'
  | 'fellowship'
  | 'contact';

export interface FindingItem {
  id: string;
  tag: string;
  tagBg: string;
  tagText: string;
  stat: string;
  statColor: string;
  title: string;
  description: string;
  footer: string;
  bgClass: string;
  iconName: string;
  colSpan?: string;
  subStat?: string;
  details?: {
    sampleSize: number;
    methodology: string;
    actionTaken: string;
    keyTakeaway: string;
  };
}

export interface ProjectItem {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  footerTag: string;
  iconName: string;
  headerBg: string;
  category: 'fellowship' | 'reentry' | 'education' | 'legal' | 'gender' | 'mental-health';
  url?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  curriculum?: string[];
  partnerGovt?: string;
}

export interface ImpactMetric {
  id: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  stat: string;
  statColor: string;
  title: string;
  description: string;
  shadowColor: string;
  bgClass: string;
}

export interface InmateStory {
  id: string;
  name: string;
  age: number;
  ward: string;
  quote: string;
  story: string;
  milestone: string;
  initiative: string;
  letterSnippet?: string;
}

export interface FellowshipApplication {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  education: string;
  statementOfPurpose: string;
  priorVolunteerExperience: string;
  availabilityMonths: number;
}
