import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/types";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <Accordion className="divide-y divide-border rounded-3xl bg-card px-4 ring-1 ring-foreground/10 sm:px-6">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-0">
          <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-7 text-[#24382e]">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
