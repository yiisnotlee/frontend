import NavBar, { NavBarStates } from "@/src/components/common/NavBar";
import ProjectCard_S from "@/src/components/projects/ProjectCard_S";
import jobdri from "@/public/jobdri.png";
import Logo from "@/public/file.svg";
import {
  ProfileLinkButton,
  ProjectLinkButton,
} from "@/src/components/button/LinkButton";
import SectionHeading from "@/src/components/common/SectionHeading";
import ContactInfoList from "../components/profile/ContactInfoList";
import UserIcon from "@/public/ic_user.svg";
import SchoolIcon from "@/public/ic_school.svg";
import MailIcon from "@/public/ic_mail.svg";
import GithubIcon from "@/public/ic_github.svg";

export default function HomePage() {
  return (
    <div className="w-full h-full bg-bg-grad">
      <NavBar />
      <NavBarStates />
      <ProjectCard_S
        thumbnail={jobdri}
        logo={<Logo width={20} height={20} />}
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
      <ContactInfoList
        items={[
          { icon: <UserIcon width={16} height={16} />, text: "YIYOONSEO" },
          {
            icon: <SchoolIcon width={16} height={16} />,
            text: "홍익대학교 컴퓨터공학과",
          },
          {
            icon: <MailIcon width={16} height={16} />,
            text: "yiisnotlee@naver.com",
            href: "mailto:yiisnotlee@naver.com",
          },
          {
            icon: <GithubIcon width={16} height={16} />,
            text: "Github",
            href: "https://github.com/yiisnotlee",
          },
        ]}
      />
    </div>
  );
}
