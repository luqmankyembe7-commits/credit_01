import type { MemberPreview } from "@/data/types";
import { cn } from "@/lib/utils";

export function MemberSnapshot({
  preview,
  compact = false,
}: {
  preview: MemberPreview;
  compact?: boolean;
}) {
  const figures = [
    { label: "Savings", value: preview.savingsLabel },
    { label: "Loan limit", value: preview.loanLimitLabel },
    { label: "Dividend", value: preview.dividendLabel },
    { label: "Welfare", value: preview.welfareLabel },
  ];

  return (
    <div
      className={cn(
        "bg-[#fffdf8] text-[#14241c]",
        compact ? "p-4" : "rounded-3xl p-6 ring-1 ring-foreground/10 sm:p-8"
      )}
    >
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#c48a12]">
        Sample · TBC
      </p>
      <p className={cn("mt-2 font-heading font-extrabold", compact ? "text-lg" : "text-2xl")}>
        {preview.displayName}
      </p>
      <p className="text-xs text-[#3e5248]">Member number {preview.memberNumber}</p>
      <dl className={cn("mt-4 grid grid-cols-2 gap-2", compact ? "" : "sm:gap-3")}>
        {figures.map((figure) => (
          <div key={figure.label} className="rounded-2xl bg-[#e7f2eb] p-3">
            <dt className="text-[0.7rem] font-medium text-[#3e5248]">{figure.label}</dt>
            <dd className="mt-1 font-heading text-sm font-bold leading-snug">{figure.value}</dd>
          </div>
        ))}
      </dl>
      <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#3e5248]">
        Recent activity
      </h3>
      <ul className="mt-2 divide-y divide-[#e2d8c6]">
        {preview.activity.map((item) => (
          <li key={item.id} className="flex items-start justify-between gap-3 py-2 text-xs">
            <span>
              <span className="block font-semibold">{item.label}</span>
              <span className="text-[#3e5248]">{item.dateLabel}</span>
            </span>
            <span className="shrink-0 font-semibold">{item.amountLabel}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
