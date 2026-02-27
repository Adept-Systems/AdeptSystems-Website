import Link from "next/link";
import { ThemeToggle } from "@/src/components/ui/ThemeToggle";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { siteConfig } from "@/src/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 pt-3">
      <Container>
        <nav
          aria-label="Main navigation"
          className="rounded-3xl border bg-[var(--surface)] px-4 py-3 backdrop-blur sm:px-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              {siteConfig.companyName}
            </Link>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-slate-700 transition hover:bg-[var(--surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] dark:text-slate-200"
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
              <Button href="/contact">Contact</Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
