import NavBar, { NavBarStates } from "@/src/components/common/NavBar";
import ProjectCard_S from "@/src/components/projects/ProjectCard_S";
import jobdri from "@/public/jobdri.png";
import logo from "@/public/file.svg";
import {
  ProfileLinkButton,
  ProjectLinkButton,
} from "@/src/components/button/LinkButton";
import SectionHeading from "@/src/components/common/SectionHeading";

export default function HomePage() {
  return (
    <div className="w-full h-full bg-bg-grad">
      <NavBar />
      <NavBarStates />
      <ProjectCard_S
        thumbnail={jobdri}
        logo={logo}
        title="JobDri"
        periodStart="2026.05"
        tags={["Next.js", "TypeScript"]}
        href="/work/jobdri"
      />
      <section id="links" className="flex justify-center gap-6 py-16">
        <ProfileLinkButton href="/profile" />
        <ProjectLinkButton href="/work" />
      </section>
      <SectionHeading label="PROFILE" title="ABOUT ME" />
      <SectionHeading
        label="WORK"
        title="PROJECTS"
        description="포트폴리오와 관련된 프로젝트들입니다."
      />
    </div>
  );
}
