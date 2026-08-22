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
import HeroSection from "../components/profile/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-bg-grad">
      <NavBar />
      <HeroSection />

      <ProfileSection />

      <ProjectsSection />
    </div>
  );
}
