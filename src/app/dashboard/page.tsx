import Link from "next/link";
import { MemberSnapshot } from "@/components/member-snapshot";
import { PlaceholderNote, Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { getMemberPreview } from "@/data";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Member preview",
  description:
    "A layout preview of the BreadWinners member dashboard. It is not a signed-in account and every balance is TBC.",
  path: "/dashboard",
});

export default function DashboardPage() {
  const preview = getMemberPreview();

  return (
    <Section
      eyebrow="Member preview"
      title="Where your numbers will sit."
      description="There is no login on this site. The cards below show the layout with placeholder figures, not a statement."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <MemberSnapshot preview={preview} />
        <aside className="rounded-3xl bg-sage p-6">
          <h2 className="text-xl font-extrabold">Not an account</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Authentication, balances, and loan decisions are not connected. When they are, they
            will be read on the server. A service-role key will not be shipped to the browser.
          </p>
          <Link href="/membership" className={cn(buttonVariants(), "mt-5 h-11 rounded-full px-5")}>
            Read how to join
          </Link>
        </aside>
      </div>
      <div className="mt-6">
        <PlaceholderNote>
          Savings, loan limit, welfare, and activity amounts are unpublished. The 12% dividend label is the same draft used on the savings page.
        </PlaceholderNote>
      </div>
    </Section>
  );
}
