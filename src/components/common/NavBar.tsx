"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Global from "@/public/ic_global.svg";

type NavItemKey = "profile" | "work";

const NAV_ITEMS: { key: NavItemKey; label: string }[] = [
  { key: "profile", label: "PROFILE" },
  { key: "work", label: "WORK" },
];

function LogoMark() {
  return <Image src={Logo} alt="yiisnotlee" width={24} height={24} />;
}

function useScrollSpy(keys: NavItemKey[]) {
  const [activeItem, setActiveItem] = useState<NavItemKey | undefined>();

  useEffect(() => {
    const sections = keys
      .map((key) => document.getElementById(key))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 여러 섹션이 동시에 걸쳐 있을 수 있으니, 화면에 가장 많이 보이는 섹션을 활성으로 처리
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveItem(visible.target.id as NavItemKey);
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

function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function NavBar({
  /** 자동 감지를 오버라이드하고 싶을 때만 사용. 데모/스토리북 용도가 아니면 보통 생략 */
  activeItemOverride,
}: {
  activeItemOverride?: NavItemKey;
}) {
  const detectedActiveItem = useScrollSpy(NAV_ITEMS.map((item) => item.key));
  const activeItem = activeItemOverride ?? detectedActiveItem;

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-primary bg-transparent mx-auto w-300 px-6 py-2">
      {/* 좌측: 로고 — 클릭 시 맨 위로 스크롤 */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2"
      >
        <LogoMark />
        <span className="g-b-14-m text-primary cursor-pointer">yiisnotlee</span>
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
                  "g-b-10-m inline-block rounded-full px-2 pt-1 pb-0.5 transition-colors cursor-pointer",
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

      {/* 우측: 언어 전환 + CONTACT */}
      <div className="flex items-center gap-4">
        <button aria-label="언어 변경" type="button" className="cursor-pointer">
          <Global />
        </button>
        <button
          type="button"
          onClick={() => scrollToId("contact")}
          className="g-b-10-m inline-block rounded-full border-[1.3px] border-light-medium px-2 pt-1 pb-0.5 text-light-medium transition-colors duration-200 hover:bg-light-medium hover:text-gray-0 cursor-pointer"
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
}

export function NavBarStates() {
  return (
    <div className="flex flex-col gap-4">
      <NavBar />
      <NavBar activeItemOverride="profile" />
      <NavBar activeItemOverride="work" />
    </div>
  );
}
