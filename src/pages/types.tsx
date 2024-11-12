// types.ts
export interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}








