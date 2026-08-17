import clsx from "clsx";

type ActivityItem = {
  period: string;
  description: string;
  variant?: "filled" | "outline";
};

type ActivityTimelineProps = {
  items: ActivityItem[];
  columns?: 1 | 2;
};

function Bullet({ variant = "filled" }: { variant?: "filled" | "outline" }) {
  return (
    <span
      className={clsx(
        "h-2 w-2 shrink-0 rounded-full",
        variant === "filled"
          ? "bg-primary"
          : "border border-primary bg-transparent",
      )}
    />
  );
}

export default function ActivityTimeline({
  items,
  columns = 2,
}: ActivityTimelineProps) {
  return (
    <ul
      className={clsx(
        "grid gap-x-10 gap-y-1",
        columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1",
      )}
    >
      {items.map((item, index) => {
        const isLastInColumn = index + columns >= items.length;

        return (
          <li key={index} className="relative flex items-start gap-3">
            {/* 불릿 + 연결선 */}
            <div className="flex h-full flex-col items-center self-stretch pt-1">
              <Bullet variant={item.variant} />
              {!isLastInColumn && (
                <span
                  className="mt-1 w-px flex-1 bg-gray-200"
                  aria-hidden="true"
                />
              )}
            </div>

            <div className="flex flex-col gap-0.5 pb-4">
              <span className="b-16-r text-dark">{item.period}</span>
              <span className="b-16-r text-gray-900">{item.description}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
