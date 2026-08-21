"use client";

import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import Tag from "@/src/components/common/Tag";
import {
  ProfileLinkButton,
  ProjectLinkButton,
} from "@/src/components/button/LinkButton";
import HighlightMark from "@/public/highlight_mark.png";

type HeroProps = {
  photo: StaticImageData | string;
  headline: ReactNode;
  description: string | string[];
  tags: string[];
};

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block px-1">
      <span
        className="pointer-events-none absolute -inset-x-1 inset-y-2 z-10"
        aria-hidden="true"
      >
        <Image
          src={HighlightMark}
          alt="highlight"
          fill
          className="object-fill"
        />
      </span>
      <span className="own-96 relative z-10">{children}</span>
    </span>
  );
}

export default function Hero({
  photo,
  headline,
  description,
  tags,
}: HeroProps) {
  const descriptionParagraphs = Array.isArray(description)
    ? description
    : [description];

  return (
    <section className="mx-auto flex w-full h-screen max-w-300 flex-col gap-10 px-16 pt-30">
      {/* 상단: 사진 + 텍스트 */}
      <div className="flex flex-row items-center justify-between">
        {/* 좌측: 프로필 사진 */}
        <div className="relative shrink-0">
          <div className="relative z-10 aspect-[3/4] w-[280px] overflow-hidden rounded-lg">
            <Image
              src={photo}
              alt="프로필 사진"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 우측: 헤드라인 + 설명 + 태그 */}
        <div className="flex w-[554px] h-full flex-col">
          <div className="flex flex-col gap-6">
            <h1 className="h-64-eb text-gray-900">{headline}</h1>

            <div className="flex flex-col gap-1 text-right pr-6">
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index} className="b-16-r text-gray-500">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-1 pt-20 items-center gap-2">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} size="m" color="blue-light">
                  {tag.startsWith("#") ? tag : `#${tag}`}
                </Tag>
              ))}
            </div>
            <span className="h-px flex-1 bg-gray-300" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* 하단: CTA 버튼 */}
      <div className="w-full h-fit flex flex-row justify-center gap-10 mt-20">
        <ProfileLinkButton />
        <ProjectLinkButton />
      </div>
    </section>
  );
}
