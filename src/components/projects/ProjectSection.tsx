import SectionHeading from "@/src/components/common/SectionHeading";
import ProjectsGrid from "@/src/components/projects/ProjectsGrid";
import { getProjects } from "@/src/api/projectApi";
import { ProjectDetail } from "@/src/components/projects/ProjectCardDetail";
import DefaultLogoIcon from "@/public/ic_github.svg";

const formatYearMonth = (dateString?: string | null): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}.${month}`;
};

export default async function ProjectsSection() {
  const rawProjects = await getProjects();
  console.log("프로젝트 데이터 확인:", rawProjects);

  const projects: ProjectDetail[] = (rawProjects || []).map((project) => ({
    banner:
      project.bannerUrl ||
      "https://placehold.co/600x360/e2e8f0/1e293b?text=Project+Banner",
    logo: <DefaultLogoIcon width={16} height={16} />,
    title: project.title,
    periodStart: formatYearMonth(project.startDate),
    periodEnd: project.ongoing ? "現" : formatYearMonth(project.endDate),
    roles: project.roles || ["FE"],
    headline: project.subtitle,
    description: project.description,
    techStack: project.techStacks || [],
    links: [
      ...(project.githubUrl
        ? [
            {
              icon: <DefaultLogoIcon width={16} height={16} />,
              label: "GitHub",
              href: project.githubUrl,
            },
          ]
        : []),
      ...(project.serviceUrl
        ? [
            {
              icon: <DefaultLogoIcon width={16} height={16} />,
              label: "Website",
              href: project.serviceUrl,
            },
          ]
        : []),
    ],
  }));

  return (
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
  );
}
