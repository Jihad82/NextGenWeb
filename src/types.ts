export interface ProjectItem {
  id: string;
  num: string;
  category: string;
  badge: string;
  badgeColor: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  services: string[];
  image: string;
  thumbnail: string;
}

export interface JournalItem {
  id: string;
  category: string;
  readTime: string;
  title: string;
  summary: string;
  publishDate: string;
  introduction: string;
  keyInsights: string[];
  deepDive: string;
  takeaway: string;
  image: string;
  thumbnail: string;
}

export interface ExpertiseItem {
  id: string;
  num: string;
  category: string;
  title: string;
  summary: string;
  bgIconColor: string;
  iconName: 'Monitor' | 'Layers' | 'TrendingUp';
  introduction: string;
  methodology: string[];
  deepDive: string;
  takeaway: string;
  deliverables: string[];
}
