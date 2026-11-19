import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNote, Section } from "@/components/section";
import { ProductCard } from "@/components/product-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getFaqs, getLoans } from "@/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Loans",
  description:
    "Development, school fees, emergency, agri-business, and auto loans. Every BreadWinners rate is marked TBC.",
  path: "/loans",
});

export default function LoansPage() {
  const loans = getLoans();

  return (
    <>
      <PageHero
        eyebrow="Loans"
        title="A limit that follows your savings."
        description="The draft rule is a loan of up to 3× what you have saved. Rates, fees, and tenors are TBC."
        image="/images/loan-development.jpg"
        imageAlt="A woman at her produce stall in a Kampala market"
      />
      <Section eyebrow="Products" title="Five ways members borrow.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loans.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
      <Section className="bg-sage" eyebrow="Comparison" title="Rates side by side.">
        <div className="rounded-3xl bg-card p-2 ring-1 ring-foreground/10 sm:p-4">
          <Table>
            <caption className="sr-only">Placeholder loan rates. Every figure is TBC.</caption>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Maximum</TableHead>
                <TableHead>Term</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loans.map((loan) => (
                <TableRow key={loan.id} id={loan.id}>
                  <TableCell className="font-semibold">{loan.name}</TableCell>
                  <TableCell>{loan.rateLabel}</TableCell>
                  <TableCell>{loan.maximum}</TableCell>
                  <TableCell>{loan.term}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4">
          <PlaceholderNote>
            A rate of “TBC% p.a.” means the price has not been set. Do not treat this table as a quotation.
          </PlaceholderNote>
        </div>
      </Section>
      <Section eyebrow="Eligibility" title="Who the draft policy covers.">
        <div className="rounded-3xl bg-card p-2 ring-1 ring-foreground/10 sm:p-4">
          <Table>
            <caption className="sr-only">Draft loan eligibility. Thresholds are TBC.</caption>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Who can apply</TableHead>
                <TableHead>Savings multiple</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loans.map((loan) => (
                <TableRow key={`${loan.id}-eligibility`}>
                  <TableCell className="font-semibold">{loan.name}</TableCell>
                  <TableCell>{loan.eligibility}</TableCell>
                  <TableCell>Up to 3× (TBC)</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Section>
      <Section className="bg-sage" eyebrow="Questions" title="Before you apply.">
        <FaqList items={getFaqs("loans")} />
      </Section>
    </>
  );
}
