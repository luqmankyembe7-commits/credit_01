import Image from "next/image";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageClassName,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-extrabold text-balance md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={cn("object-cover", imageClassName)}
          />
        </div>
      </div>
    </section>
  );
}
