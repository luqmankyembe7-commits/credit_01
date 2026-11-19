import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBanner({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl bg-forest-deep px-6 py-10 text-[#f7f3ea] sm:px-10 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-balance md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#f7f3ea]">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href={primaryHref}
            className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-6 text-base")}
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full border-[#f6e7c1]! bg-transparent! px-6 text-base text-[#f7f3ea]! hover:bg-[#145c38]! hover:text-[#f7f3ea]!"
              )}
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
