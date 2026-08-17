"use client";

import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import ArrowIcon from "@/public/ic_arrow_r.svg";

type GlassCTAButtonProps = {
  illustration: ReactNode;
  label: string;
  className?: string;
  /** 다른 페이지/외부 링크로 이동해야 할 때 */
  href?: string;
  /** 같은 페이지 안에서 스크롤 등 동작이 필요할 때 (href보다 우선) */
  onClick?: () => void;
};

export default function GlassCTAButton({
  illustration,
  label,
  href,
  onClick,
  className,
}: GlassCTAButtonProps) {
const linkClassName =
    "group relative cursor-pointer z-10 flex w-full py-6 items-center justify-center gap-2.5 rounded-xl border-[1.5px] border-gray-0 px-4 py-4 backdrop-blur-lg transition-all duration-200 hover:bg-white/40 hover:shadow-md hover:shadow-gray-300/10";

    const inner = (
    <>
      <span className="b-24-sb text-medium">
        {label}
      </span>
      <span >
        <ArrowIcon  aria-hidden="true" />
      </span>
    </>
  );

  return (
    <div className={clsx("relative w-full max-w-127")}>
      <div className="pointer-events-none absolute left-0 -top-14 z-0">
        {illustration}
      </div>

      {onClick ? (
        <button type="button" onClick={onClick} className={linkClassName}>
          {inner}
        </button>
      ) : (
        <Link href={href ?? "#"} className={linkClassName}>
          {inner}
        </Link>
      )}
    </div>
  );
}
