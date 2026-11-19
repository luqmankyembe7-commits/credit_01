import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { getLeaders, getValues } from "@/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "BreadWinners SACCO is a member-owned co-operative for people across Uganda. Leadership names are still TBC.",
  path: "/about",
});

export default function AboutPage() {
  const leaders = getLeaders();
  const values = getValues();

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A co-operative, not a queue at a bank."
        description="Members own it. Surplus returns as a dividend or stays in reserve for the people who saved it."
        image="/images/portrait-man.jpg"
        imageAlt="A smiling man in a navy beret and turtleneck, seated with a camera"
      />
      <Section eyebrow="Purpose" title="Mission and vision.">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8">
            <h3 className="text-2xl font-extrabold">Mission</h3>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Help people across Uganda save money they can see, and borrow against that record
              for school fees, a season on the farm, a vehicle, or a working stall.
            </p>
          </article>
          <article className="rounded-3xl bg-primary p-6 text-primary-foreground sm:p-8">
            <h3 className="text-2xl font-extrabold">Vision</h3>
            <p className="mt-3 text-base leading-7 text-primary-foreground/85">
              A member list that is not limited to one employer, where dividends, loan limits,
              and welfare payments are written down and easy to check.
            </p>
          </article>
        </div>
      </Section>
      <Section className="bg-sage" eyebrow="Values" title="How decisions should feel.">
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
              <h3 className="text-xl font-extrabold">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Leadership" title="Seats reserved. Names not confirmed.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <article key={leader.role} className="rounded-3xl bg-card p-5 ring-1 ring-foreground/10">
              <div
                aria-hidden="true"
                className="flex size-16 items-center justify-center rounded-2xl bg-sage font-heading text-xl font-extrabold text-primary"
              >
                TBC
              </div>
              <h3 className="mt-4 text-lg font-extrabold">{leader.role}</h3>
              <p className="text-sm font-semibold text-primary">{leader.name}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{leader.focus}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Photographs of members elsewhere on the site are not pictures of these officers.
        </p>
      </Section>
      <section className="px-4 pb-16 sm:px-6">
        <div className="relative mx-auto aspect-[16/7] max-w-6xl overflow-hidden rounded-3xl">
          <Image
            src="/images/about.jpg"
            alt="Sunset over a savanna with a single acacia tree"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
