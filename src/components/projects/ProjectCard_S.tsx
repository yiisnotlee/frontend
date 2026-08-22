"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Tag from "@/src/components/common/Tag";
import type { ReactNode } from "react";

type ProjectCardSProps = {
  thumbnail: StaticImageData | string;
  logo: ReactNode;
  title: string;
  periodStart: string;
  periodEnd?: string;
  tags: string[];
  href?: string;
  onClick?: () => void;
};

export default function ProjectCardS({
  thumbnail,
  logo,
  title,
  periodStart,
  periodEnd,
  tags,
  href,
  onClick,
}: ProjectCardSProps) {
  const cardClassName =
    "group flex flex-col w-[280px] shrink-0 overflow-hidden h-[285px] rounded-lg border border-gray-200 bg-gray-0 text-left transition-shadow duration-200 hover:shadow-md";

  const content = (
    <>
      {/* 상단: 썸네일 */}
      <div className="relative h-[190px] w-full overflow-hidden bg-gray-100">
        <Image
          src={thumbnail}
          alt={`${title} 썸네일`}
          fill
          className="object-cover "
        />
      </div>

      {/* 하단: 텍스트 정보 */}
      <div className="flex flex-col flex-1 justify-between p-3">
        {/* 로고 + 타이틀 */}
        <div className="flex flex-col gap-1">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center">
              {logo}
            </span>
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

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cardClassName}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}
