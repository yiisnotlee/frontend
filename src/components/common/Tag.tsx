import clsx from "clsx";
import type { ReactNode } from "react";

type TagSize = "s" | "m";
type TagColor = "gray" | "blue";

type TagProps = {
  children: ReactNode;
  size?: TagSize;
  color?: TagColor;
  className?: string;
};

const SIZE_STYLES: Record<TagSize, string> = {
  s: "c-10-m px-1 py-0.5",
  m: "b-16-m px-4 py-1.5",
};

const COLOR_STYLES: Record<TagColor, string> = {
  gray: "bg-gray-100 text-gray-600",
  blue: "bg-gray-0 text-primary",
};

export default function Tag({
  children,
  size = "s",
  color = "gray",
  className,
}: TagProps) {
  return (
    <span
      className={clsx(
        "inline-block shrink-0 rounded-sm",
        SIZE_STYLES[size],
        COLOR_STYLES[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
