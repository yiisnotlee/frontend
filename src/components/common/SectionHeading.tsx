import clsx from "clsx";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx("flex flex-col gap-0.5", className)}>
      <span className="g-b-16-sb uppercase tracking-wide text-medium">
        {label}
      </span>
      <div className="flex flex-wrap items-baseline gap-3">
        <h2 className="sh-36-b text-gray-900">{title}</h2>
        {description && <p className="b-12-r text-gray-500">{description}</p>}
      </div>
    </div>
  );
}
