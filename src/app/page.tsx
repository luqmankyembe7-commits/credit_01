import Image from "next/image";
import Link from "next/link";
import { FileText, PieChart, Smartphone } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { FaqList } from "@/components/faq-list";
import { PhoneMockup } from "@/components/phone-mockup";
import { PlaceholderNote, Section, Stat } from "@/components/section";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  getFaqs,
  getLoans,
  getPrograms,
  getSavingsProducts,
  getTestimonials,
} from "@/data";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Bank with purpose",
  description:
    "Join BreadWinners SACCO with a National ID and NIN. Save, borrow for school, farm, or a vehicle, and follow your dividend. Rates on this site are TBC.",
  path: "/",
});

const features = [
  {
    icon: Smartphone,
    title: "Pay via Mobile Money",
    body: "Joining fees, deposits, and repayments are planned to move by phone. Till numbers are TBC.",
  },
  {
    icon: FileText,
    title: "Apply for loans online",
    body: "Once you have a member number, loan requests start on this site. The live form is not open yet.",
  },
  {
    icon: PieChart,
    title: "Track dividends",
    body: "The member preview shows where savings, your loan limit, and a declared dividend will sit.",
  },
];

export default function HomePage() {
  const loans = getLoans();
  const savings = getSavingsProducts();
  const programs = getPrograms();

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <Badge variant="secondary" className="h-7 px-3">
            Open membership
          </Badge>
          <h1 className="mt-5 text-5xl font-extrabold text-balance md:text-7xl">
            Bank with purpose. Build your future.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            BreadWinners is a savings and credit co-operative open to everyone in Uganda.
            Join with your National ID and NIN. You do not need an employer.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/membership" className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-6 text-base")}>
              Become a Member
            </Link>
            <Link
              href="/loans"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-full px-6 text-base")}
            >
              Explore Loans
            </Link>
          </div>
        </div>
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4]">
            <Image
              src="/images/office-call.jpg"
              alt="A member smiling while speaking on the phone in an office"
              fill
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover object-[center_20%]"
            />
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-sage" aria-label="What you can do">
        <ul className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title} className="flex gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-card text-primary ring-1 ring-foreground/10">
                <feature.icon aria-hidden="true" className="size-5" />
              </span>
              <span>
                <span className="block font-heading text-lg font-bold">{feature.title}</span>
                <span className="mt-1 block text-sm leading-6 text-muted-foreground">{feature.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <Section
        id="loans"
        eyebrow="Loans"
        title="Borrow for the thing in front of you."
        description="Five products. Every rate on this page is a placeholder marked TBC, not an offer."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loans.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <Section
        id="savings"
        className="bg-sage"
        eyebrow="Savings"
        title="Your savings decide what you can borrow."
        description="Member savings, fixed deposits, and a welfare fund. The dividend below is a draft."
      >
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {savings.map((product) => (
              <article key={product.id} className="rounded-3xl bg-card p-5 ring-1 ring-foreground/10">
                <h3 className="text-xl font-extrabold">{product.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.summary}</p>
              </article>
            ))}
          </div>
          <Stat
            value={`${site.dividendDraft}*`}
            label="Average annual dividend"
            detail="Draft figure for this layout. Not a declared or guaranteed return."
          />
        </div>
        <PlaceholderNote>
          *The 12% figure is an illustrative placeholder. Dividends are declared by members and are not guaranteed.
        </PlaceholderNote>
      </Section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-3xl bg-primary px-6 py-10 text-primary-foreground md:grid-cols-[1.4fr_0.8fr] md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-wheat">Open to everyone</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Joining takes about 10 minutes.</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              National ID, NIN, and a joining fee of {site.joiningFee}. No employer restriction.
            </p>
          </div>
          <div className="rounded-3xl bg-[#fffdf8] p-6 text-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Joining fee</p>
            <p className="mt-2 font-heading text-4xl font-extrabold">{site.joiningFee}</p>
            <p className="mt-2 text-sm text-muted-foreground">Marked TBC until the board confirms the fee.</p>
            <Link href="/membership" className={cn(buttonVariants(), "mt-5 h-11 rounded-full px-5")}>
              How to join
            </Link>
          </div>
        </div>
      </section>

      <Section
        eyebrow="On your phone"
        title="Banking that moves with you."
        description="Balances, the loan limit, and dividends will live in one member view. The phone below is a layout preview with TBC figures, not a signed-in account."
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/mobile.jpg"
                alt="A woman with a yellow headwrap holding a phone at her desk"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col items-center gap-6">
            <PhoneMockup />
            <Link href="/dashboard" className="font-semibold text-primary underline-offset-4 hover:underline">
              Open the member preview
            </Link>
          </div>
        </div>
      </Section>

      <Section
        className="bg-sage"
        eyebrow="Bank with purpose"
        title="The co-operative is the point."
        description="Groups, table-banking circles, and bursaries for members’ children. Programme rules are still TBC."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="overflow-hidden rounded-3xl bg-card ring-1 ring-foreground/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={cn("object-cover", program.imageClassName)}
                />
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-extrabold">{program.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{program.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="mb-8 max-w-2xl text-3xl font-extrabold md:text-5xl">What members are working toward.</h2>
        <TestimonialCarousel items={getTestimonials()} />
        <p className="mt-4 text-sm text-muted-foreground">
          These four quotes are written for the layout. They are not statements from real members.
        </p>
      </section>

      <Section eyebrow="Questions" title="Before you send any money.">
        <FaqList items={getFaqs("home")} />
      </Section>

      <CtaBanner
        title="Ready when your National ID is."
        body="Read the joining steps, then talk to the office. Do not pay a fee to a number that is not published here."
        primaryHref="/membership"
        primaryLabel="Become a Member"
        secondaryHref="/contact"
        secondaryLabel="Contact the office"
      />
    </>
  );
}
