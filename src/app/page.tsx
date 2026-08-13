import NavBar, { NavBarStates } from "@/src/components/common/NavBar";
import ProjectCard_S from "@/src/components/projects/ProjectCard_S";
import jobdri from "@/public/jobdri.png";
import logo from "@/public/file.svg";

export default function HomePage() {
  return (
    <div>
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
    </div>
  );
}
