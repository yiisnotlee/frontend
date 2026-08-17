"use client";

import GlassCTAButton from "./GlassCTAButton";
import ProfileIcon from "@/public/ic_profile.svg";
import ProjectsIcon from "@/public/ic_projects.svg";

function scrollToSection(id: "profile" | "work") {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ProfileLinkButton() {
  return (
    <GlassCTAButton
      illustration={<ProfileIcon width={136} height={80} />}
      label="프로필 보러가기"
      onClick={() => scrollToSection("profile")}
    />
  );
}

export function ProjectLinkButton() {
  return (
    <GlassCTAButton
      illustration={<ProjectsIcon width={136} height={80} />}
      label="프로젝트 보러가기"
      onClick={() => scrollToSection("work")}
    />
  );
}