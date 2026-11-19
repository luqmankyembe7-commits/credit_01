"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

function linkClass(active: boolean) {
  return cn(
    "inline-flex min-h-11 items-center text-base font-semibold",
    active ? "text-primary" : "text-foreground hover:text-primary"
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="BreadWinners SACCO, home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass(active)}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/membership"
          className={cn(buttonVariants({ size: "lg" }), "hidden h-11 rounded-full px-5 lg:inline-flex")}
        >
          Join BreadWinners
        </Link>
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon-lg"
                className="rounded-full lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col px-4" aria-label="Mobile">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className={cn(linkClass(active), "border-b border-border py-1")}
                        aria-current={active ? "page" : undefined}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                );
              })}
            </nav>
            <div className="p-4">
              <SheetClose
                render={
                  <Link
                    href="/membership"
                    className={cn(buttonVariants({ size: "lg" }), "h-12 w-full rounded-full")}
                  />
                }
              >
                Join BreadWinners
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
