import NavBar from "@/src/components/common/NavBar";
import SectionHeading from "@/src/components/common/SectionHeading";
import Hero, { Highlight } from "@/src/components/profile/Hero";
import ContactInfoList from "@/src/components/profile/ContactInfoList";
import TechStackSection from "@/src/components/profile/TechStackSection";
import ActivityTimeline from "@/src/components/profile/ActivityTimeline";
import Image from "next/image";

import profilePhoto from "@/public/profile.png";
import jobdri from "@/public/jobdri.png";
import Logo from "@/public/file.svg";
import UserIcon from "@/public/ic_user.svg";
import SchoolIcon from "@/public/ic_school.svg";
import MailIcon from "@/public/ic_mail.svg";
import GithubIcon from "@/public/ic_github.svg";
import ProjectsGrid from "../components/projects/ProjectGrid";
import { ProjectDetail } from "../components/projects/ProjectCardDetail";

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
      <section
        id="profile"
        className="mx-auto flex w-full max-w-300 scroll-mt-16 h-screen flex-col gap-16 px-20 py-9"
      >
        <div>
          <SectionHeading label="PROFILE" title="ABOUT ME" className="mb-8" />

          <div className="flex gap-21 flex-row">
            <div className="relative aspect-[3/4] w-77 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={profilePhoto}
                alt="프로필 사진"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-8 ">
              <p className="sh-32-sb text-gray-900">
                <span className="kcc-40">레이어를 가리지 않는</span> 개발자,{" "}
                <br />
                <span className="text-primary ">이윤서</span>
                입니다
              </p>

              <ContactInfoList
                items={[
                  {
                    icon: <UserIcon width={16} height={16} />,
                    text: "YIYOONSEO",
                  },
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
              <div>
                <h3 className="b-24-sb mb-4 text-gray-900">기술 스택</h3>
                <TechStackSection
                  categories={[
                    {
                      label: "FRONTEND",
                      items: ["React", "Next.js", "TypeScript"],
                    },
                    { label: "BACKEND", items: ["Spring", "Node.js"] },
                    { label: "APP", items: ["React Native"] },
                    {
                      label: "ETC",
                      items: ["Figma", "Notion", "Git", "Confluence"],
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="b-24-sb mb-4 text-gray-900">활동 이력</h3>
          <ActivityTimeline
            items={[
              {
                period: "25.03 - 25.12",
                description: "인터파크 사업부에 참여하여 UI/UX 개편함",
              },
              {
                period: "24.09 - 25",
                description: "동아리 활동 및 팀 프로젝트 다수 참여",
              },
              {
                period: "24.03 - 24.08",
                description: "산업체 인턴(개발부) 근무 및 업무 자동화 진행",
              },
              {
                period: "26.01 - 26.10",
                description: "졸업작품 KAN-LIA 웹개발 및 3위 입상",
                variant: "outline",
              },
              {
                period: "24.06 - 24.09",
                description: "인공지능 강의를 통해 딥러닝 서비스 개발",
              },
              {
                period: "23 - 27.02",
                description: "캡스톤디자인 수업 진행 및 UI/UX 리서치",
              },
            ]}
          />
        </div>
      </section>

      {/* ===== 워크 ===== */}
      <section
        id="work"
        className="mx-auto flex w-full max-w-300 scroll-mt-16 h-screen flex-col gap-16 px-20 py-9"
      >
        <SectionHeading
          label="WORK"
          title="PROJECTS"
          description="포트폴리오와 관련된 프로젝트들입니다."
        />

        <ProjectsGrid projects={projects} />
      </section>
    </div>
  );
}
