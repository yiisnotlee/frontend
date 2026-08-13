"use client";

import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import ArrowIcon from "@/public/ic_arrow_r.svg";

type GlassCTAButtonProps = {
  illustration: ReactNode;
  label: string;
  href: string;
  className?: string;
};

export default function GlassCTAButton({
  illustration,
  label,
  href,
  className,
}: GlassCTAButtonProps) {
  return (
    <div className={clsx("relative w-full max-w-127", className)}>
      <div className="pointer-events-none absolute left-0 -top-14 z-0">
        {illustration}
      </div>

      <Link
        href={href}
        className="group relative z-10 flex w-127 items-center justify-center gap-2.5 rounded-xl border-[1.5px] border-gray-0 bg-white/30 px-2.5 py-6 backdrop-blur-md transition-all duration-200 hover:bg-white/40 hover:shadow-md hover:shadow-gray-300/10"
      >
        <span className="b-24-sb text-medium ">{label}</span>
        <span className="text-primary">
          <ArrowIcon aria-hidden="true" />
        </span>
      </Link>
    </div>
  );
}
