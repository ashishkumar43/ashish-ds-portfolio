
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}
