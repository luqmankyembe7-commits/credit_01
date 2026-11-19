import type {
  CommunityProgram,
  Faq,
  JoinStep,
  Leader,
  MemberPreview,
  Testimonial,
} from "@/data/types";

export const joinSteps: JoinStep[] = [
  {
    title: "Bring your documents",
    body: "A Uganda National ID and the NIN printed on it. No employer letter, introduction, or payroll number.",
  },
  {
    title: "Pay the joining fee",
    body: "Shs 100,000 (TBC), to be collected by Mobile Money when the account is opened. The fee is a placeholder until the board confirms it.",
  },
  {
    title: "Receive a member number",
    body: "That number is how you save, apply for a loan, and read your dividend. Issuing time is TBC.",
  },
];

export const faqs: Faq[] = [
  {
    id: "who",
    question: "Who can join?",
    answer:
      "Any adult with a Uganda National ID and NIN. Membership is not tied to an employer, a parish, or a salary account. The minimum age in the bylaws is TBC; the working rule on this site is 18.",
    pages: ["home", "membership"],
  },
  {
    id: "fee",
    question: "What does it cost to join?",
    answer:
      "The draft joining fee is Shs 100,000 (TBC). Share capital and monthly savings minimums are not published yet and are marked TBC on purpose.",
    pages: ["home", "membership"],
  },
  {
    id: "momo",
    question: "Can I pay with Mobile Money?",
    answer:
      "Yes. Deposits, the joining fee, and loan repayments are planned through Mobile Money. The provider list and till numbers are TBC, so do not send money to a number you see elsewhere.",
    pages: ["home", "membership", "savings"],
  },
  {
    id: "multiple",
    question: "How much can I borrow?",
    answer:
      "The draft credit rule is a loan of up to 3× your savings (TBC). The multiple, the rate, and the fees are not a standing offer until the credit policy is published.",
    pages: ["home", "loans"],
  },
  {
    id: "dividend",
    question: "Is the 12% dividend guaranteed?",
    answer:
      "No. 12% is a draft average used so the page has a figure to design around. It is marked TBC. A dividend is declared by the members at an AGM and can be lower, higher, or withheld.",
    pages: ["home", "savings"],
  },
  {
    id: "time",
    question: "How long does joining take?",
    answer:
      "The target is about 10 minutes once an officer can see your National ID and confirm the fee. Live turnaround is TBC until the office opens applications.",
    pages: ["membership"],
  },
  {
    id: "security",
    question: "What secures a loan?",
    answer:
      "Savings are the first backstop. Extra security, guarantors, and logbook rules differ by product and are TBC. Nothing on this site is a credit offer.",
    pages: ["loans"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "amina",
    quote:
      "I joined with my National ID on a Saturday and started saving from the market the same week. Nobody asked me for a payslip.",
    name: "Amina K.",
    detail: "Illustrative story · produce trader · TBC",
  },
  {
    id: "joseph",
    quote:
      "School fees used to mean a loan from a friend of a friend. I want a limit I can see, based on what I have already saved.",
    name: "Joseph O.",
    detail: "Illustrative story · parent · TBC",
  },
  {
    id: "nakato",
    quote:
      "Our table-banking circle kept the records in an exercise book. A member number and a dividend we can all read would change that.",
    name: "Nakato M.",
    detail: "Illustrative story · savings group · TBC",
  },
  {
    id: "okello",
    quote:
      "The maize is ready before the buyer pays. An agri loan that follows the season, not a salary calendar, is the one I would take.",
    name: "Okello P.",
    detail: "Illustrative story · farmer · TBC",
  },
];

export const programs: CommunityProgram[] = [
  {
    title: "Member groups",
    body: "Neighbours can save under one group name and still keep individual member numbers. Group rules are TBC.",
    image: "/images/groups.jpg",
    imageAlt: "Four adults talking outside a market stall",
  },
  {
    title: "Table-banking circles",
    body: "Bring an existing circle with you. The circle’s cash-out rules stay yours; the SACCO keeps the ledger. Setup steps are TBC.",
    image: "/images/community.jpg",
    imageAlt: "Men sitting together outdoors beside sacks of produce",
    imageClassName: "object-[center_18%]",
  },
  {
    title: "Bursaries",
    body: "A fund for members’ children, separate from the school-fees loan. Who qualifies, and for how much, is TBC.",
    image: "/images/portrait-smile.jpg",
    imageAlt: "A woman in a purple patterned blouse standing against a clay-coloured wall",
  },
];

export const leaders: Leader[] = [
  {
    role: "Chairperson",
    name: "Name TBC",
    focus: "Member governance and the annual general meeting.",
  },
  {
    role: "Treasurer",
    name: "Name TBC",
    focus: "Savings records, the welfare fund, and the dividend proposal.",
  },
  {
    role: "Secretary",
    name: "Name TBC",
    focus: "The membership register and meeting minutes.",
  },
  {
    role: "Credit committee chair",
    name: "Name TBC",
    focus: "Loan appraisal against the published credit policy.",
  },
];

export const values = [
  {
    title: "Owned by members",
    body: "Surplus comes back as a dividend or a reserve. It is not a bank’s profit.",
  },
  {
    title: "Open membership",
    body: "A National ID and a NIN are the door. An employer is not.",
  },
  {
    title: "Plain figures",
    body: "Rates, fees, and the dividend stay marked TBC until the board publishes them.",
  },
  {
    title: "Close to the ground",
    body: "Market days, school terms, and planting seasons are the calendar we lend against.",
  },
];

export const memberPreview: MemberPreview = {
  displayName: "Sample member",
  memberNumber: "BW-TBC-0000",
  savingsLabel: "TBC",
  loanLimitLabel: "TBC",
  dividendLabel: "12% draft · TBC",
  welfareLabel: "TBC",
  activity: [
    {
      id: "a1",
      label: "Mobile Money deposit",
      amountLabel: "TBC",
      dateLabel: "Date TBC",
    },
    {
      id: "a2",
      label: "Joining fee",
      amountLabel: "Shs 100,000 · TBC",
      dateLabel: "Date TBC",
    },
    {
      id: "a3",
      label: "Dividend posted",
      amountLabel: "TBC",
      dateLabel: "After AGM",
    },
  ],
};
