export type NavLink = {
  href: string;
  label: string;
};

export type LoanProduct = {
  id: string;
  name: string;
  summary: string;
  rateLabel: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  bullets: string[];
  maximum: string;
  term: string;
  eligibility: string;
};

export type SavingsProduct = {
  id: string;
  name: string;
  summary: string;
  bullets: string[];
};

export type DividendYear = {
  year: string;
  declaredRate: string;
  status: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
  pages: Array<"home" | "membership" | "loans" | "savings">;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  detail: string;
};

export type JoinStep = {
  title: string;
  body: string;
};

export type CommunityProgram = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
};

export type Leader = {
  role: string;
  name: string;
  focus: string;
};

export type MemberPreview = {
  displayName: string;
  memberNumber: string;
  savingsLabel: string;
  loanLimitLabel: string;
  dividendLabel: string;
  welfareLabel: string;
  activity: Array<{
    id: string;
    label: string;
    amountLabel: string;
    dateLabel: string;
  }>;
};
