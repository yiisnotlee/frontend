"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
import arrowIcon from "@/public/ic_arrow_r.svg";

type GlassCTAButtonProps = {
  /** 버튼 뒤에서 위로 살짝 삐져나오는 일러스트 이미지 */
  illustration: StaticImageData | string;
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
      <div className="pointer-events-none absolute left-20 -bottom-18 z-0 -translate-x-1/2 -translate-y-[55%]">
        <Image src={illustration} alt="" width={136} height={80} />
      </div>

      <Link
        href={href}
        className="group relative z-10 flex w-127 items-center justify-center gap-2.5 rounded-xl bg-white/30 border-[1.5px] border-gray-0 px-2.5 py-6 backdrop-blur-md transition-colors duration-200 hover:bg-white/40 hover:shadow-md hover:shadow-gray-300/10 hover:transition-all"
      >
        <span className="b-24-sb text-medium decoration-primary/50 underline-offset-4">
          {label}
        </span>
        <span className="text-primary">
          <Image src={arrowIcon} alt="arrow" />
        </span>
      </Link>
    </div>
  );
}
