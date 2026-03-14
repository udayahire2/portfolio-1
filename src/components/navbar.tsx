"use client";

import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HOME_SECTIONS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#internship", label: "Internship" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const desktopLinks = isHomePage ? HOME_SECTIONS : DATA.navbar;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="pointer-events-auto mx-auto w-full max-w-4xl">
        <div className="rounded-[2rem] border border-border/60 bg-background/78 px-4 py-3 shadow-[0_20px_70px_-36px_rgba(15,23,42,0.35)] backdrop-blur-2xl supports-[backdrop-filter]:bg-background/68">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3 rounded-full pr-2 transition-opacity hover:opacity-80"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-muted/60 text-xs font-semibold tracking-[0.24em] text-foreground/80 uppercase shadow-inner">
                {DATA.initials}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-tight text-foreground">
                  {DATA.name}
                </p>
                <p className="hidden text-xs text-muted-foreground sm:block">
                  {DATA.location}
                </p>
              </div>
            </Link>

            <nav className="mx-auto hidden items-center rounded-full border border-border/50 bg-muted/35 p-1 lg:flex">
              {desktopLinks.map((item) => {
                const isActive =
                  item.href.startsWith("#")
                    ? false
                    : item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
                    )}
                  >
                    {"label" in item ? item.label : ""}
                  </Link>
                );
              })}
            </nav>

            <div className="ml-auto flex items-center gap-1">
              {isHomePage ? (
                <Link
                  href="/blog"
                  className="hidden rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground sm:inline-flex"
                >
                  Blog
                </Link>
              ) : (
                <Badge
                  variant="secondary"
                  className="hidden rounded-full bg-muted/55 px-3 py-1 text-xs font-medium text-muted-foreground sm:inline-flex"
                >
                  Portfolio
                </Badge>
              )}
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .slice(0, 2)
                .map(([name, social]) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden size-9 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border/70 hover:bg-muted/60 hover:text-foreground sm:flex"
                      aria-label={name}
                    >
                      <IconComponent className="size-4" />
                    </a>
                  );
                })}
              <div className="mx-1 hidden h-5 w-px bg-border/80 sm:block" />
              <ModeToggle className="size-9 rounded-full border border-transparent text-muted-foreground hover:border-border/70 hover:bg-muted/60 hover:text-foreground" />
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border/70 hover:bg-muted/60 hover:text-foreground lg:hidden"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen ? (
            <div className="mt-3 space-y-4 border-t border-border/50 pt-4 lg:hidden">
              <div className="grid grid-cols-2 gap-2">
                {DATA.navbar.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={`mobile-page-${item.href}`}
                      href={item.href}
                      className={cn(
                        "rounded-2xl border px-3 py-3 text-sm transition-colors",
                        isActive
                          ? "border-border bg-muted text-foreground"
                          : "border-border/60 text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {isHomePage ? (
                <div className="space-y-2">
                  <p className="px-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/80">
                    Sections
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {HOME_SECTIONS.map((section) => (
                      <Link
                        key={`mobile-section-${section.href}`}
                        href={section.href}
                        className="rounded-full border border-border/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {section.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="space-y-2">
                <p className="px-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/80">
                  Connect
                </p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => {
                      const IconComponent = social.icon;

                      return (
                        <a
                          key={`mobile-social-${name}`}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full border border-border/60 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                        >
                          <IconComponent className="size-4" />
                          <span>{name}</span>
                        </a>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
