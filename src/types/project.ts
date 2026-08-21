export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  githubUrl?: string;
  serviceUrl?: string;
  bannerUrl?: string;
  startDate?: string;
  endDate?: string;
  ongoing?: boolean;
  roles: string[];
  techStacks: string[];
}
