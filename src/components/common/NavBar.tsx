"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Logo from "@/public/logo.png";
import GlobalIcon from "@/public/ic_global.svg";

type NavItemKey = "profile" | "work";

const NAV_ITEMS: { key: NavItemKey; label: string }[] = [
  { key: "profile", label: "PROFILE" },
  { key: "work", label: "WORK" },
];

/** CONTACT 버튼이 여는 mailto 대상. 실제 이메일로 바꿔서 쓰면 됨 */
const CONTACT_EMAIL = "yiisnotlee@naver.com";

function LogoMark() {
  return <Image src={Logo} alt="yiisnotlee" width={24} height={24} />;
}

// function GlobalIcon() {
//   return <Image src={Global} alt="Global" />;
// }

function useScrollSpy(keys: NavItemKey[]) {
  const [activeItem, setActiveItem] = useState<NavItemKey | undefined>();

  useEffect(() => {
    const sections = keys
      .map((key) => document.getElementById(key))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveItem(visible.target.id as NavItemKey);
        } else {
          // 화면에 profile/work 섹션이 하나도 안 보이면 활성 상태 초기화
          setActiveItem(undefined);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [keys]);

  return activeItem;
}

function scrollToSection(key: NavItemKey) {
  document
    .getElementById(key)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function NavBar({
  activeItemOverride,
}: {
  activeItemOverride?: NavItemKey;
}) {
  const detectedActiveItem = useScrollSpy(NAV_ITEMS.map((item) => item.key));
  const activeItem = activeItemOverride ?? detectedActiveItem;

  return (
    <nav className="sticky top-4 z-50 flex items-center justify-between border-b border-primary bg-transparent mx-auto w-300 px-6 py-2">
      {/* 좌측: 로고 — 클릭 시 맨 위로 스크롤 */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2"
      >
        <LogoMark />
        <span className="g-b-14-m text-primary">yiisnotlee</span>
      </button>

      {/* 중앙: 메뉴 */}
      <ul className="flex items-center gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem === item.key;

          return (
            <li key={item.key}>
              <button
                type="button"
                onClick={() => scrollToSection(item.key)}
                className={clsx(
                  "g-b-10-m inline-block rounded-full px-2.5 pt-1 pb-0.5 transition-colors",
                  isActive
                    ? "bg-primary text-gray-0"
                    : "text-primary hover:bg-light-medium hover:text-gray-0",
                )}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* 우측: 언어 전환 + CONTACT (메일 클라이언트 열기) */}
      <div className="flex items-center gap-4">
        <button aria-label="언어 변경" type="button">
          <GlobalIcon />
        </button>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="g-b-10-m inline-block rounded-full border-[1.3px] border-light-medium px-2 pt-1 pb-0.5 text-light-medium transition-colors duration-200 hover:border-light-medium hover:bg-light-medium hover:text-gray-0"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
}