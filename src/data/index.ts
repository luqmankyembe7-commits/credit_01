import { faqs, joinSteps, leaders, memberPreview, programs, testimonials, values } from "@/data/content";
import { loans } from "@/data/loans";
import { dividendHistory, savingsProducts } from "@/data/savings";
import { navLinks, site } from "@/data/site";
import type { Faq } from "@/data/types";

/**
 * Typed reads for the marketing site.
 * There is no database client in this project. When Supabase is added,
 * replace these functions with server-side queries and keep the return types.
 * Do not expose the service-role key to the browser.
 */

export function getSite() {
  return site;
}

export function getNavLinks() {
  return navLinks;
}

export function getLoans() {
  return loans;
}

export function getSavingsProducts() {
  return savingsProducts;
}

export function getDividendHistory() {
  return dividendHistory;
}

export function getFaqs(page?: Faq["pages"][number]) {
  if (!page) return faqs;
  return faqs.filter((faq) => faq.pages.includes(page));
}

export function getTestimonials() {
  return testimonials;
}

export function getJoinSteps() {
  return joinSteps;
}

export function getPrograms() {
  return programs;
}

export function getLeaders() {
  return leaders;
}

export function getValues() {
  return values;
}

export function getMemberPreview() {
  return memberPreview;
}
