import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const word = tone === "light" ? "text-[#f7f3ea]" : "text-foreground";
  const sub = tone === "light" ? "text-[#f6e7c1]" : "text-primary";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 40 40" className="size-10 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#145c38" />
        <path
          d="M20 31V11"
          stroke="#f6e7c1"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M20 24c-4-1.2-6.2-5-5.4-9"
          stroke="#f6e7c1"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 25c4-1.4 6.4-5.2 5.4-9.4"
          stroke="#f6e7c1"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="15.2" cy="16.2" rx="2.1" ry="3.3" transform="rotate(-28 15.2 16.2)" fill="#e0a106" />
        <ellipse cx="24.8" cy="15.4" rx="2.1" ry="3.3" transform="rotate(26 24.8 15.4)" fill="#e0a106" />
        <ellipse cx="20" cy="10.2" rx="1.9" ry="3" fill="#f3d48a" />
      </svg>
      <span className="leading-none">
        <span className={cn("block font-heading text-lg font-extrabold tracking-tight", word)}>
          BreadWinners
        </span>
        <span className={cn("mt-1 block text-xs font-semibold uppercase tracking-[0.18em]", sub)}>
          SACCO
        </span>
      </span>
    </span>
  );
}
