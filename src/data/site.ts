import type { NavLink } from "@/data/types";

export const site = {
  name: "BreadWinners SACCO",
  shortName: "BreadWinners",
  description:
    "BreadWinners is a Ugandan savings and credit co-operative open to everyone. Join with a National ID and NIN, save, borrow, and follow your dividends.",
  joiningFee: "Shs 100,000",
  dividendDraft: "12%",
  loanMultiple: "3× savings",
  phoneDisplay: "+256 700 000 000",
  email: "hello@breadwinners.ug",
  address: ["Plot TBC, Kampala Road", "Kampala, Uganda"],
  hours: [
    { days: "Monday–Friday", time: "8:30–17:00" },
    { days: "Saturday", time: "9:00–13:00" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export const navLinks: NavLink[] = [
  { href: "/savings", label: "Savings" },
  { href: "/loans", label: "Loans" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
