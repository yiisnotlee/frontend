import Tag from "@/src/components/common/Tag";

type TechStackCategory = {
  /** "FRONTEND", "BACKEND", "APP", "ETC" */
  label: string;
  items: string[];
};

type TechStackSectionProps = {
  categories: TechStackCategory[];
};

export default function TechStackSection({
  categories,
}: TechStackSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-y-4">
      {categories.map((category) => (
        <div key={category.label} className="flex flex-col gap-1">
          <span className="b-16-sb tracking-wide text-gray-400">
            {category.label}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {category.items.map((item) => (
              <Tag key={item} size="m" color="blue-light">
                {item}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
