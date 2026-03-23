"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "@/src/components/ui/ThemeToggle";
import { Container } from "@/src/components/ui/Container";
import { siteConfig } from "@/src/lib/site";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isActiveLink = (href: string) =>
    href.includes("#") ? pathname === href.split("#")[0] : pathname === href;
  const activePillClasses =
    "bg-[var(--primary)] text-[var(--primary-foreground)] border border-transparent";
  const idlePillClasses =
    "bg-transparent text-[var(--foreground)] hover:bg-[var(--surface)] hover:ring-1 hover:ring-[var(--border)]";

  return (
    <header className="sticky inset-x-0 top-4 z-[70]">
      <Container>
        <nav
          aria-label="Main navigation"
          className="mx-auto w-full rounded-[36px] border border-neutral-300/60 bg-[color:rgb(255_255_255_/_0.58)] px-4 py-1.5 backdrop-blur-xl dark:border-white/15 dark:bg-[color:rgb(20_20_20_/_0.62)] sm:px-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link
              href="/"
              aria-label={siteConfig.companyName}
              className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              <Image
                src="/AdeptSystemsLogoBlackNB.png"
                alt={`${siteConfig.companyName} logo`}
                width={801}
                height={254}
                className="block h-[3.75rem] w-auto dark:hidden sm:h-[4.25rem]"
                priority
              />
              <Image
                src="/AdeptSystemsLogoWhiteNB.png"
                alt={`${siteConfig.companyName} logo`}
                width={825}
                height={268}
                className="hidden h-[3.75rem] w-auto dark:block sm:h-[4.25rem]"
                priority
              />
            </Link>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={
                    link.label === "Contact"
                      ? undefined
                      : isActiveLink(link.href)
                        ? "page"
                        : undefined
                  }
                  onClick={(event) => {
                    if (link.label !== "Contact") return;

                    event.preventDefault();

                    if (pathname === "/") {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      return;
                    }

                    sessionStorage.setItem("scrollToContact", "1");
                    router.push("/#contact");
                  }}
                  className={`inline-flex cursor-pointer items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${
                    link.label === "Contact"
                      ? "border border-transparent bg-neutral-900 text-white hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
                      : isActiveLink(link.href)
                        ? activePillClasses
                        : idlePillClasses
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
