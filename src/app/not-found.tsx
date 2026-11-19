import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Page not found",
  description: "That BreadWinners page does not exist.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">404</p>
      <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">That page is not on the site.</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The homepage, savings, loans, membership, about, and contact pages are the ones that exist.
      </p>
      <Link href="/" className={cn(buttonVariants({ size: "lg" }), "mt-8 h-12 rounded-full px-6")}>
        Back to the homepage
      </Link>
    </section>
  );
}
