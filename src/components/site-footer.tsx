import Link from "next/link";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep text-[#f7f3ea]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-base leading-7 text-[#e7f0ea]">
            A savings and credit co-operative open to everyone in Uganda. Figures on this
            website are drafts marked TBC until the board publishes them.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-wheat">Visit</h2>
          <ul className="mt-4 space-y-2 text-base leading-7 text-[#e7f0ea]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[#e7f0ea] underline-offset-4 hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/dashboard" className="text-[#e7f0ea] underline-offset-4 hover:text-white hover:underline">
                Member preview
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-wheat">Contact</h2>
          <address className="mt-4 space-y-2 text-base leading-7 text-[#e7f0ea] not-italic">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a className="block underline-offset-4 hover:underline" href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}>
              {site.phoneDisplay} (TBC)
            </a>
            <a className="block underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
              {site.email} (TBC)
            </a>
            <p>Social profiles: TBC</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-2 px-4 py-6 text-sm leading-6 text-[#e7f0ea] sm:px-6">
          <p>
            Regulatory status: TBC. BreadWinners SACCO intends to operate under Uganda’s SACCO
            framework supervised by SASRA. This website is not a licence, a prospectus, or an
            offer of credit.It a sample desinged by lUQMAN SHADOW 
          </p>
          <p>
           
          </p>
        </div>
      </div>
    </footer>
  );
}
