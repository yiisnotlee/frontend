import { Project } from "@/src/types/project";

export async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:8080/api/projects", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("프로젝트 목록을 불러오는데 실패했습니다.");
  return res.json();
}
