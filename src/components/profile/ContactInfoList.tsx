import clsx from "clsx";
import type { ReactNode } from "react";

type ContactInfoItem = {
  icon: ReactNode;
  text: string;
  href?: string;
};

type ContactInfoListProps = {
  items: ContactInfoItem[];
  twoColumn?: boolean;
  className?: string;
};

export default function ContactInfoList({
  items,
  twoColumn = true,
  className,
}: ContactInfoListProps) {
  return (
    <ul
      className={clsx(
        "grid gap-x-8 gap-y-2",
        twoColumn ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
        className,
      )}
    >
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <span className="flex h-4 w-4 shrink-0 items-center justify-center text-gray-500">
            {item.icon}
          </span>
          {item.href ? (
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="b-14-r text-gray-700 transition-colors hover:text-primary"
            >
              {item.text}
            </a>
          ) : (
            <span className="b-14-r text-gray-700">{item.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
