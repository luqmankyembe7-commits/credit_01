import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LoanProduct } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: LoanProduct }) {
  return (
    <Reveal>
      <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-foreground/10">
        <div className="relative aspect-[4/3]">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={cn("object-cover", product.imageClassName)}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-accent text-accent-foreground">{product.rateLabel}</Badge>
            <Badge variant="outline">Placeholder</Badge>
          </div>
          <h3 className="text-2xl font-extrabold">{product.name}</h3>
          <p className="text-base leading-relaxed text-muted-foreground">{product.summary}</p>
          <ul className="space-y-2 text-base leading-7">
            {product.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`/loans#${product.id}`}
            className="mt-auto inline-flex min-h-11 items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline"
          >
            See this loan
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
