"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Tag from "@/src/components/common/Tag";
import type { ReactNode } from "react";

type ProjectLink = {
  icon: ReactNode;
  label: string;
  href: string;
};

export type ProjectDetail = {
  /** 로고+태그라인+목업이 통째로 들어간 배너 이미지 */
  banner: StaticImageData | string;
  /** 제목 옆의 작은 로고 아이콘 */
  logo: ReactNode;
  title: string;
  periodStart: string;
  periodEnd?: string;
  /** "FE", "CTO" 같은 역할 뱃지 (파란 톤) */
  roles: string[];
  /** 굵게 나오는 한 줄 소개 */
  headline: string;
  /** 여러 문단이면 배열로 */
  description: string | string[];
  techStack: string[];
  links?: ProjectLink[];
};

type ProjectDetailModalProps = {
  project: ProjectDetail | null;
  onClose: () => void;
};

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!project) return;
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => {
      cancelAnimationFrame(raf);
      setMounted(false);
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const descriptionParagraphs =
    typeof project.description === "string"
      ? [project.description]
      : project.description;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 p-6 backdrop-blur-sm transition-opacity duration-200 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={`flex max-h-[85vh] w-full max-w-[640px] flex-col overflow-hidden rounded-2xl bg-gray-0 shadow-xl transition-all duration-200 ${
          mounted
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* 배너 (로고+태그라인+목업 통짜 이미지) */}
        <div className="relative h-[360px] w-full shrink-0 overflow-hidden bg-gray-200">
          <Image
            src={project.banner}
            alt={`${project.title} 배너`}
            fill
            className="object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full text-gray-0/90 transition-colors hover:text-gray-0"
          >
            ✕
          </button>
        </div>

        {/* 본문: 스크롤 가능 */}
        <div className="flex flex-1 flex-col gap-7 overflow-y-auto p-6">
          {/* 로고 + 타이틀 + 역할 태그 */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                {project.logo}
              </span>
              <h2 className="b-24-sb text-gray-900">{project.title}</h2>
            </div>
            <div className="flex shrink-0 gap-2">
              {project.roles.map((role) => (
                <Tag key={role} color="blue" size="m">
                  {role}
                </Tag>
              ))}
            </div>
          </div>

          <span className="-mt-3 b-16-m text-gray-400">
            {project.periodStart}{" "}
            {project.periodEnd ? `- ${project.periodEnd}` : "-"}
          </span>

          {/* 헤드라인 + 설명 */}
          <div className="flex flex-col gap-1">
            <p className="b-16-sb text-gray-900">{project.headline}</p>
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="b-14-r text-gray-900">
                {paragraph}
              </p>
            ))}
          </div>

          {/* 기술 스택 */}
          <div className="flex flex-col gap-2">
            <span className="c-10-m tracking-wide text-gray-400">
              TECH STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>

          {/* 구분선 + 링크 */}
          {project.links && project.links.length > 0 && (
            <div className="flex grid grid-cols-2 gap-y-2 border-t border-gray-200 pt-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="b-14-r flex items-center gap-2 text-gray-700 transition-colors hover:text-primary"
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
