"use client";

import { BrandLogo } from "@/components/brand-logo";
import { MenuIcon } from "@/components/menu";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const socialLinks = Object.entries(DATA.contact.social)
    .filter(([_, social]) => social.navbar)
    .slice(0, 2);
  const [openMenuPath, setOpenMenuPath] = useState<string | null>(null);
  const isMobileMenuOpen = openMenuPath === pathname;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="pointer-events-auto mx-auto w-full max-w-4xl">
        <div className="overflow-hidden rounded-[1.75rem] border border-border/65 bg-background/80 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.32)] backdrop-blur-xl supports-backdrop-filter:bg-background/72 dark:shadow-[0_18px_50px_-34px_rgba(0,0,0,0.75)]">
          <div className="h-px w-full bg-linear-to-r from-transparent via-foreground/10 to-transparent" />

          <div className="flex items-center gap-3 px-4 py-3 sm:px-5">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-3 rounded-full pr-2 transition-opacity hover:opacity-85"
            >
                <BrandLogo className="size-8" />
              

              <div className="min-w-0 space-y-0.5">
                <p className="truncate text-sm font-semibold tracking-tight text-foreground">
                  {DATA.name}
                </p>
                <p className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground/85 sm:block">
                  Design Engineer
                </p>
              </div>
            </Link>

            <nav className="mx-auto hidden items-center gap-1 lg:flex">
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
                      "rounded-full px-3.5 py-2 text-sm tracking-tight transition-all",
                      isActive
                        ? "bg-muted/70 text-foreground ring-1 ring-border/80"
                        : "text-muted-foreground hover:bg-muted/45 hover:text-foreground"
                    )}
                  >
                    {"label" in item ? item.label : ""}
                  </Link>
                );
              })}
            </nav>

            <div className="ml-auto flex items-center gap-1.5">
              {isHomePage ? (
                <Link
                  href="/blog"
                  className="hidden items-center gap-2 rounded-full border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-border/60 hover:bg-muted/45 hover:text-foreground sm:inline-flex"
                >
                  Blog
                </Link>
              ) : (
                <span className="hidden rounded-full border border-border/65 bg-muted/45 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:inline-flex">
                  Portfolio
                </span>
              )}

              {socialLinks.map(([name, social]) => {
                const IconComponent = social.icon;

                return (
                  <a
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden size-9 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border/60 hover:bg-muted/45 hover:text-foreground sm:flex"
                    aria-label={name}
                  >
                    <IconComponent className="size-4" />
                  </a>
                );
              })}

              <div className="mx-0.5 hidden h-5 w-px bg-border/70 sm:block" />

              <ModeToggle className="size-9 rounded-full border border-transparent text-muted-foreground hover:border-border/60 hover:bg-muted/45 hover:text-foreground" />

              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border/60 hover:bg-muted/45 hover:text-foreground lg:hidden"
                onClick={() =>
                  setOpenMenuPath((openPath) => (openPath === pathname ? null : pathname))
                }
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="size-4" /> : <MenuIcon className="size-4" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen ? (
            <div className="border-t border-border/60 px-4 py-4 sm:px-5 lg:hidden">
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="px-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/80">
                    Navigate
                  </p>

                  <div className="space-y-1.5">
                    {DATA.navbar.map((item) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);
                      const IconComponent = item.icon;
                      const orderLabel = item.href === "/" ? "01" : "02";

                      return (
                        <Link
                          key={`mobile-page-${item.href}`}
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between rounded-2xl px-3 py-3 text-sm tracking-tight transition-colors",
                            isActive
                              ? "bg-muted/70 text-foreground"
                              : "text-muted-foreground hover:bg-muted/45 hover:text-foreground"
                          )}
                          onClick={() => setOpenMenuPath(null)}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={cn(
                                "flex size-8 items-center justify-center rounded-full border",
                                isActive
                                  ? "border-border/80 bg-background text-foreground"
                                  : "border-border/60 bg-background/70 text-muted-foreground"
                              )}
                            >
                              <IconComponent className="size-4" />
                            </span>
                            <span>{item.label}</span>
                          </span>

                          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                            {orderLabel}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
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
                          className="rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/45 hover:text-foreground"
                          onClick={() => setOpenMenuPath(null)}
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
                            className="flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/45 hover:text-foreground"
                          >
                            <IconComponent className="size-4" />
                            <span>{name}</span>
                          </a>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
