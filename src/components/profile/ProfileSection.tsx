import Image from "next/image";
import SectionHeading from "@/src/components/common/SectionHeading";
import ContactInfoList from "@/src/components/profile/ContactInfoList";
import TechStackSection from "@/src/components/profile/TechStackSection";
import ActivityTimeline from "@/src/components/profile/ActivityTimeline";
import { getActivities } from "@/src/api/activityApi";
import { getProfile, getTechStacks, TechStackItem } from "@/src/api/profileApi";
import { Activity } from "@/src/types/activity";
import { Profile, IntroductionItem } from "@/src/types/profile";

import profilePhoto from "@/public/profile.png";
import UserIcon from "@/public/ic_user.svg";
import TechBlogIcon from "@/public/ic_techblog.svg";
import SchoolIcon from "@/public/ic_school.svg";
import MailIcon from "@/public/ic_mail.svg";
import GithubIcon from "@/public/ic_github.svg";
import AddressIcon from "@/public/ic_address.svg";
import CallIcon from "@/public/ic_call.svg";
import AcademicIcon from "@/public/ic_academic.svg";

const formatYearMonth = (dateString?: string | null): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}.${month}`;
};

export default async function ProfileSection() {
  const [profileRes, rawTechStacks, rawActivities] = await Promise.all([
    getProfile(),
    getTechStacks(),
    getActivities(),
  ]);

  const profile: Profile = Array.isArray(profileRes)
    ? profileRes[0]
    : profileRes;

  const timelineItems = rawActivities.map((activity: Activity) => {
    const start = formatYearMonth(activity.startDate);
    const end = activity.ongoing ? "現" : formatYearMonth(activity.endDate);

    return {
      period: `${start} - ${end}`,
      description: activity.description,
      variant: (activity.ongoing ? "outline" : "filled") as
        | "outline"
        | "filled",
    };
  });

  // 기술 스택 카테고리별 그룹화
  const groupedTechStacks = (rawTechStacks || []).reduce(
    (acc: { label: string; items: string[] }[], curr) => {
      const existing = acc.find((item) => item.label === curr.category);
      if (existing) {
        existing.items.push(curr.name);
      } else {
        acc.push({ label: curr.category, items: [curr.name] });
      }
      return acc;
    },
    [],
  );

  console.log("백엔드가 준 프로필 데이터:", profile);

  return (
    <section
      id="profile"
      className="mx-auto flex w-full max-w-300 scroll-mt-16 h-screen flex-col gap-16 px-20 py-9"
    >
      <div>
        <SectionHeading label="PROFILE" title="ABOUT ME" className="mb-8" />

        <div className="flex gap-21 flex-row">
          <div className="relative aspect-[3/4] w-77 shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={profile.avatarUrl || profilePhoto}
              alt="프로필 사진"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-8 ">
            <div>
              <p className="sh-32-sb text-gray-900 whitespace-pre-line">
                {(() => {
                  try {
                    const headlineData =
                      typeof profile.introduction === "string"
                        ? JSON.parse(profile.introduction)
                        : profile.introduction;

                    return headlineData.map(
                      (item: IntroductionItem, idx: number) => (
                        <span
                          key={idx}
                          className={`${item.font} ${item.isHighlight ? "text-primary" : "text-gray-900"}`}
                        >
                          {item.text}
                        </span>
                      ),
                    );
                  } catch (e) {
                    console.error("JSON 파싱 에러 원인:", e);
                    return profile.introduction;
                  }
                })()}
              </p>
            </div>

            <ContactInfoList
              items={[
                {
                  icon: <UserIcon width={16} height={16} />,
                  text: profile.name,
                },
                {
                  icon: <MailIcon width={16} height={16} />,
                  text: profile.email,
                  href: `mailto:${profile.email}`,
                },
                {
                  icon: <SchoolIcon width={16} height={16} />,
                  text: `${profile.schoolName} ${profile.major}`,
                },
                {
                  icon: <AddressIcon width={16} height={16} />,
                  text: profile.address,
                },
                {
                  icon: <AcademicIcon width={16} height={16} />,
                  text: `GPA ${profile.gpa} / 4.5`,
                },
                {
                  icon: <GithubIcon width={16} height={16} />,
                  text: "Github",
                  href: profile.githubUrl,
                },
                {
                  icon: <CallIcon width={16} height={16} />,
                  text: profile.phone,
                },
                ...(profile.techblogUrl
                  ? [
                      {
                        icon: <TechBlogIcon width={16} height={16} />,
                        text: "Velog - Tech blog",
                        href: profile.techblogUrl,
                      },
                    ]
                  : []),
              ]}
            />

            <div>
              <h3 className="b-24-sb mb-4 text-gray-900">기술 스택</h3>
              <TechStackSection categories={groupedTechStacks} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="b-24-sb mb-4 text-gray-900">활동 이력</h3>
        <ActivityTimeline items={timelineItems} columns={2} />
      </div>
    </section>
  );
}
