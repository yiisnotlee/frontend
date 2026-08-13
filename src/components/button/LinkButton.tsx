import GlassCTAButton from "./GlassCTAButton";
import ProfileIcon from "@/public/ic_profile.svg";
import ProjectsIcon from "@/public/ic_projects.svg";

export function ProfileLinkButton({ href = "/profile" }: { href?: string }) {
  return (
    <GlassCTAButton
      illustration={<ProfileIcon width={136} />}
      label="프로필 보러가기"
      href={href}
    />
  );
}

export function ProjectLinkButton({ href = "/work" }: { href?: string }) {
  return (
    <GlassCTAButton
      illustration={<ProjectsIcon width={138} />}
      label="프로젝트 보러가기"
      href={href}
    />
  );
}
