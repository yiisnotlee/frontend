"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Tag from "@/src/components/common/Tag";

type ProjectCardSProps = {
  /** 상단 썸네일 (목업/스크린샷 이미지) */
  thumbnail: StaticImageData | string;
  /** 프로젝트 로고 아이콘 */
  logo: StaticImageData | string;
  title: string;
  /** "2026.05" 형태. 진행중이면 periodEnd 생략 */
  periodStart: string;
  periodEnd?: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard_S({
  thumbnail,
  logo,
  title,
  periodStart,
  periodEnd,
  tags,
  href,
}: ProjectCardSProps) {
  const cardClassName =
    "group block w-[280px] shrink-0 overflow-hidden rounded-[8px] border border-gray-200 bg-gray-0 transition-shadow duration-200 hover:shadow-md";

  const content = (
    <>
      {/* 상단: 썸네일 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={thumbnail}
          alt={`${title} 썸네일`}
          fill
          className="object-cover "
        />
      </div>

      {/* 하단: 텍스트 정보 */}
      <div className="flex flex-col justify-between p-3 h-[95px]">
        <div className="flex flex-col gap-1">
          {/* 로고 + 타이틀 */}
          <div className="flex min-w-0 items-center gap-2">
            <Image
              src={logo}
              alt={`${title} 로고`}
              width={16}
              height={16}
              className="shrink-0"
            />
            <span className="b-14-m truncate text-gray-900">{title}</span>
          </div>

          {/* 기간 */}
          <span className="c-10-m text-gray-400">
            {periodStart} {periodEnd ? `- ${periodEnd}` : "-"}
          </span>
        </div>

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

/** 사용 예시
 *
 * <ProjectCardS
 *   thumbnail={jobDriThumbnail}
 *   logo={jobDriLogo}
 *   title="JobDri"
 *   periodStart="2026.05"
 *   tags={["Next.js", "TypeScript"]}
 *   href="/work/jobdri"
 * />
 */
