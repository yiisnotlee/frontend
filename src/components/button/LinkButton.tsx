import GlassCTAButton from "@/src/components/button/GlassCTAButton";
import ProfileIcon from "@/public/ic_profile.svg";
import ProjectsIcon from "@/public/ic_projects.svg";

export function ProfileLinkButton({ href = "/profile" }: { href?: string }) {
  return (
    <GlassCTAButton
      illustration={ProfileIcon}
      label="프로필 보러가기"
      href={href}
    />
  );
}

export function ProjectLinkButton({ href = "/work" }: { href?: string }) {
  return (
    <GlassCTAButton
      illustration={ProjectsIcon}
      label="프로젝트 보러가기"
      href={href}
    />
  );
}
