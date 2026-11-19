import type { DividendYear, SavingsProduct } from "@/data/types";

export const savingsProducts: SavingsProduct[] = [
  {
    id: "member-savings",
    name: "Member Savings",
    summary: "The everyday account that builds your loan limit and your share of a dividend.",
    bullets: [
      "Deposits by Mobile Money once collections open",
      "Balance visible in the member dashboard",
      "Withdrawals follow the bylaws (TBC)",
    ],
  },
  {
    id: "fixed-deposits",
    name: "Fixed Deposits",
    summary: "Lock an amount for a stated term when you do not need it for school fees or stock.",
    bullets: [
      "Term and rate card not yet published",
      "Early break conditions TBC",
      "Separate from your withdrawable savings",
    ],
  },
  {
    id: "welfare",
    name: "Welfare Fund",
    summary: "A shared pool for members facing a bereavement or a hospital bill.",
    bullets: [
      "Contribution amount TBC",
      "What the fund pays, and when, TBC",
      "Governed with the rest of the co-operative",
    ],
  },
];

export const dividendHistory: DividendYear[] = [
  { year: "2023", declaredRate: "TBC", status: "Not published" },
  { year: "2024", declaredRate: "TBC", status: "Not published" },
  { year: "2025", declaredRate: "TBC", status: "Not published" },
  { year: "2026", declaredRate: "TBC", status: "Not yet declared" },
];
