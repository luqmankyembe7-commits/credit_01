import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNote, Section } from "@/components/section";
import { getFaqs, getJoinSteps } from "@/data";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Membership",
  description:
    "Join BreadWinners with a National ID and NIN. The draft joining fee is Shs 100,000 and is marked TBC.",
  path: "/membership",
});

const requirements = [
  "18 or older. The bylaw age is TBC if it differs.",
  "Uganda National ID.",
  "NIN number.",
  `Joining fee of ${site.joiningFee} (TBC).`,
  "No employer, parish, or payroll restriction.",
];

export default function MembershipPage() {
  const steps = getJoinSteps();

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Open to everyone."
        description="Bring a National ID and a NIN. The co-operative does not ask who you work for."
        image="/images/portrait-smile.jpg"
        imageAlt="A woman in a purple patterned blouse, photographed against a clay-coloured wall"
      />
      <Section eyebrow="Three steps" title="Documents, fee, member number.">
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
              <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <PlaceholderNote>
            The 10-minute target and the {site.joiningFee} fee are drafts. Pay only after the office publishes a till number.
          </PlaceholderNote>
        </div>
      </Section>
      <Section className="bg-sage" eyebrow="Eligibility" title="What we ask for.">
        <ul className="grid gap-3 md:grid-cols-2">
          {requirements.map((item) => (
            <li key={item} className="rounded-2xl bg-card px-5 py-4 font-medium ring-1 ring-foreground/10">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section eyebrow="Membership questions" title="Still deciding?">
        <FaqList items={getFaqs("membership")} />
      </Section>
    </>
  );
}
