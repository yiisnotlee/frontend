import { Activity } from "@/src/types/activity";

export const getActivities = async (): Promise<Activity[]> => {
  const res = await fetch("http://localhost:8080/api/activities", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("활동 이력 데이터를 불러오는데 실패했습니다.");
  }

  return res.json();
};
