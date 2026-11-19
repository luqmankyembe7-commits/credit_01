import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact BreadWinners SACCO in Kampala. The office address, phone, and hours on this page are marked TBC.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ask before you pay."
        description="The form checks your message on this device. It does not deliver it. Phone, email, and the plot number are still TBC."
        image="/images/mobile.jpg"
        imageAlt="A woman holding a phone at a desk"
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <article className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
            <h2 className="flex items-center gap-2 text-xl font-extrabold">
              <MapPin className="size-5 text-primary" aria-hidden="true" />
              Office
            </h2>
            <address className="mt-3 text-base leading-7 text-foreground not-italic">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </article>
          <article className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
            <h2 className="flex items-center gap-2 text-xl font-extrabold">
              <Clock className="size-5 text-primary" aria-hidden="true" />
              Hours (TBC)
            </h2>
            <dl className="mt-3 space-y-2 text-base">
              {site.hours.map((row) => (
                <div key={row.days} className="flex justify-between gap-4">
                  <dt>{row.days}</dt>
                  <dd className="font-semibold">{row.time}</dd>
                </div>
              ))}
            </dl>
          </article>
          <article className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
            <h2 className="text-xl font-extrabold">Reach the office</h2>
            <p className="mt-3 flex items-center gap-2 text-base">
              <Phone className="size-4 text-primary" aria-hidden="true" />
              <a href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}>{site.phoneDisplay}</a>
              <span className="text-muted-foreground">TBC</span>
            </p>
            <p className="mt-2 flex items-center gap-2 text-base">
              <Mail className="size-4 text-primary" aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span className="text-muted-foreground">TBC</span>
            </p>
          </article>
          <iframe
            title="Map of central Kampala. The exact office pin is TBC."
            src="https://www.openstreetmap.org/export/embed.html?bbox=32.56%2C0.30%2C32.62%2C0.35&layer=mapnik"
            className="h-64 w-full rounded-3xl border border-border"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <ContactForm />
      </section>
    </>
  );
}
