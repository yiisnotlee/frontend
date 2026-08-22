import Hero, { Highlight } from "@/src/components/profile/Hero";
import { IntroductionItem } from "@/src/types/profile";
import { getProfile } from "@/src/api/profileApi";

const parseJSON = (text: string): IntroductionItem[] => {
  if (!text) return [];

  const sanitizeAndParse = (raw: string) => {
    try {
      return JSON.parse(raw);
    } catch {
      try {
        const clean = raw.replace(/,\s*([\]}])/g, "$1");
        return JSON.parse(clean);
      } catch {
        return null;
      }
    }
  };

  const parsed = sanitizeAndParse(text);
  if (parsed && Array.isArray(parsed)) return parsed;
  if (text.trim().startsWith("[") || text.trim().startsWith("{")) return [];

  return [{ text, isHighlight: false, font: "" }];
};

export default async function HeroSection() {
  let profile = await getProfile();

  if (Array.isArray(profile)) profile = profile[0];
  if (!profile) return null;

  const rawIntro = profile.description;
  const parsedIntro = parseJSON(rawIntro)
    .map((i) => i.text)
    .join("");

  const descriptionList = parsedIntro ? parsedIntro.split(/\\n|\n/) : [];

  const parsedHeadline = parseJSON(profile.headline);
  const headlineNode =
    parsedHeadline.length > 0 ? (
      <>
        {parsedHeadline.map((item: IntroductionItem, idx: number) => {
          const className = item.font;

          const textContent = item.text || "";
          const lines = textContent.split(/\\n|\n/);

          const content = lines.map((line: string, i: number) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ));

          return item.isHighlight ? (
            <Highlight key={idx}>
              <span className={className}>{content}</span>
            </Highlight>
          ) : (
            <span key={idx} className={className}>
              {content}
            </span>
          );
        })}
      </>
    ) : null;

  return (
    <Hero
      photo={profile.avatarUrl || "/images/profile_avatar.jpg"}
      headline={headlineNode}
      description={descriptionList}
      tags={profile.tags || []}
    />
  );
}
