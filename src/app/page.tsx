import NavBar from "@/src/components/common/NavBar";
import SectionHeading from "@/src/components/common/SectionHeading";
import Hero, { Highlight } from "@/src/components/profile/Hero";
import ProfileSection from "@/src/components/profile/ProfileSection"; // 🌟 새로 만든 프로필 섹션 불러오기

import profilePhoto from "@/public/profile.png";
import jobdri from "@/public/jobdri.png";
import Logo from "@/public/file.svg";
import SchoolIcon from "@/public/ic_school.svg";
import GithubIcon from "@/public/ic_github.svg";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectDetail } from "../components/projects/ProjectCardDetail";
import ProjectsSection from "../components/projects/ProjectSection";

const projects: ProjectDetail[] = [
  {
    banner: jobdri,
    logo: <Logo width={20} height={20} />,
    title: "JobDri",
    periodStart: "2026.05",
    roles: ["FE", "CTO"],
    headline: "취준생을 위한 AI 자소서 첨삭 및 모의 지원 서비스",
    description:
      "프론트엔드와 CTO를 맡았습니다. Next.js 기반으로 프로그램을 설계하였으며, 기획과 개발 간의 소통을 담당하였습니다.",
    techStack: ["Next.js", "TypeScript"],
    links: [
      {
        icon: <GithubIcon width={16} height={16} />,
        label: "GitHub",
        href: "https://github.com/yiisnotlee/jobdri",
      },
      {
        icon: <SchoolIcon width={16} height={16} />,
        label: "Velog",
        href: "https://velog.io/@yiisnotlee/jobdri",
      },
      {
        icon: <SchoolIcon width={16} height={16} />,
        label: "JobDri",
        href: "https://jobdri.vercel.app",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-bg-grad">
      <NavBar />

      {/* ===== 랜딩 ===== */}
      <Hero
        photo={profilePhoto}
        headline={
          <>
            인터페이스와 <br /> 시스템 사이,
            <br />
            <Highlight>경험</Highlight>을 설계합니다.
          </>
        }
        description={[
          "화면 뒤 작은 단위의 디테일부터 백엔드 설계까지,",
          "사용자가 겪는 경험을 촘촘하게 설계합니다.",
        ]}
        tags={["백엔드", "방명록", "프로젝트관리", "유저은근"]}
      />

      {/* ===== 프로필 ===== */}
      {/* 🚀 수백 줄의 코드가 컴포넌트 하나로 깔끔하게 정리되었습니다! */}
      <ProfileSection />

      {/* ===== 워크 ===== */}

      <ProjectsSection />
    </div>
  );
}
