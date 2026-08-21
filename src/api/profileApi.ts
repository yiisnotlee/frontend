import { Profile } from "@/src/types/profile";

export interface TechStackItem {
  id: number;
  category: string;
  name: string;
}

export const getProfile = async (): Promise<Profile> => {
  const res = await fetch("http://localhost:8080/api/profiles", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("프로필 정보를 불러오는데 실패했습니다.");
  return res.json();
};

export const getTechStacks = async (): Promise<TechStackItem[]> => {
  const res = await fetch("http://localhost:8080/api/tech-stacks", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("기술 스택을 불러오는데 실패했습니다.");
  return res.json();
};
