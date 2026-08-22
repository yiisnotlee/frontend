export interface Profile {
  id: number;
  email: string;
  phone: string;
  githubUrl: string;
  techblogUrl: string;
  gpa: number;
  avatarUrl: string;
  name: string;
  headline: string;
  schoolName: string;
  major: string;
  address: string;
  introduction: string;
  tags: string[];
  description: string;
}

export interface IntroductionItem {
  text: string;
  isHighlight: boolean;
  font?: string;
}
