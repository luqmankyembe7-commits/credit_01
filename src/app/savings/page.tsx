import Image from "next/image";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNote, Section, Stat } from "@/components/section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDividendHistory, getFaqs, getSavingsProducts } from "@/data";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Savings",
  description:
    "Member savings, fixed deposits, and the welfare fund. The 12% dividend shown by BreadWinners is a draft marked TBC.",
  path: "/savings",
});

export default function SavingsPage() {
  const products = getSavingsProducts();
  const history = getDividendHistory();

  return (
    <>
      <PageHero
        eyebrow="Savings"
        title="Save first. Borrow from that."
        description="Your balance is also your loan limit. The dividend is decided once a year, not promised on this page."
        image="/images/loan-agri.jpg"
        imageAlt="Hands harvesting maize in a field in Uganda"
        imageClassName="object-left"
      />
      <Section eyebrow="Products" title="Three places for members’ money.">
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} id={product.id} className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
                <h3 className="text-2xl font-extrabold">{product.name}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{product.summary}</p>
                <ul className="mt-4 space-y-2 text-base leading-7">
                  {product.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Stat
            value={`${site.dividendDraft}*`}
            label="Draft annual dividend"
            detail="Shown so the layout has a number. Not a declared rate."
          />
        </div>
      </Section>
      <Section className="bg-sage" eyebrow="History" title="Nothing has been declared yet.">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-card p-2 ring-1 ring-foreground/10 sm:p-4">
            <Table>
              <caption className="sr-only">Dividend history. No rate has been published.</caption>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>Declared dividend</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {history.map((row) => (
                  <TableRow key={row.year}>
                    <TableCell className="font-semibold">{row.year}</TableCell>
                    <TableCell>{row.declaredRate}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/about.jpg"
              alt="Sunset over a savanna with an acacia tree"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-4">
          <PlaceholderNote>
            *{site.dividendDraft} is the draft average used in the design. It is not in the table because it has not been declared.
          </PlaceholderNote>
        </div>
      </Section>
      <Section eyebrow="Questions" title="Savings, plainly.">
        <FaqList items={getFaqs("savings")} />
      </Section>
    </>
  );
}
