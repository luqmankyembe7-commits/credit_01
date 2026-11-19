import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  headingClassName,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headingClassName?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {eyebrow || title || description ? (
          <Reveal>
            <header className={cn("mb-10 max-w-2xl", headingClassName)}>
              {eyebrow ? (
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {eyebrow}
                </p>
              ) : null}
              {title ? (
                <h2 className="text-3xl font-extrabold text-balance md:text-5xl">{title}</h2>
              ) : null}
              {description ? (
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
              ) : null}
            </header>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function Stat({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail?: string;
}) {
  return (
    <article className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
      <p className="font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
        {value}
      </p>
      <h3 className="mt-2 text-lg font-bold">{label}</h3>
      {detail ? <p className="mt-2 text-base leading-7 text-muted-foreground">{detail}</p> : null}
    </article>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="text-base leading-7 text-muted-foreground">
      <strong className="font-semibold text-foreground">TBC. </strong>
      {children}
    </p>
  );
}
