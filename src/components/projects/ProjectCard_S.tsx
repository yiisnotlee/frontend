"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Tag from "@/src/components/common/Tag";
import type { ReactNode } from "react";

type ProjectCardSProps = {
  /** 상단 썸네일 (목업/스크린샷 이미지) */
  thumbnail: StaticImageData | string;
  /**
   * 프로젝트 로고. 서버 컴포넌트(page.tsx)에서 클라이언트 컴포넌트로 넘길 때는
   * 함수(컴포넌트 자체)가 아니라 JSX로 렌더링해서 넘겨야 함.
   *   logo={<Logo width={20} height={20} />}   ✅
   *   logo={Logo}                              ❌ (RSC 경계에서 함수 직렬화 에러)
   */
  logo: ReactNode;
  title: string;
  /** "2026.05" 형태. 진행중이면 periodEnd 생략 */
  periodStart: string;
  periodEnd?: string;
  tags: string[];
  href?: string;
};

export default function ProjectCardS({
  thumbnail,
  logo,
  title,
  periodStart,
  periodEnd,
  tags,
  href,
}: ProjectCardSProps) {
  const cardClassName =
    "group block w-[280px] shrink-0 overflow-hidden rounded-3xl border border-gray-200 bg-gray-0 transition-shadow duration-200 hover:shadow-lg";

  const content = (
    <>
      {/* 상단: 썸네일 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={thumbnail}
          alt={`${title} 썸네일`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* 하단: 텍스트 정보 */}
      <div className="flex flex-col gap-3 p-5">
        {/* 로고 + 타이틀 */}
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center">
            {logo}
          </span>
          <span className="b-24-sb truncate text-gray-900">{title}</span>
        </div>

        {/* 기간 */}
        <span className="b-14-r text-gray-400">
          {periodStart} {periodEnd ? `- ${periodEnd}` : "-"}
        </span>

        {/* 태그 */}
        <div className="flex gap-2 overflow-hidden">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}

/** 사용 예시 (page.tsx, 서버 컴포넌트)
 *
 * import Logo from "@/public/file.svg";
 *
 * <ProjectCardS
 *   thumbnail={jobdri}
 *   logo={<Logo width={20} height={20} />}
 *   title="JobDri"
 *   periodStart="2026.05"
 *   tags={["Next.js", "TypeScript"]}
 *   href="/work/jobdri"
 * />
 */
