import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { siteConfig } from "@/src/lib/site";

export function Footer() {
  return (
    <footer className="border-t py-6">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold">{siteConfig.companyName}</p>
            <a
              href={siteConfig.contactMailto}
              className="mt-2 inline-block text-sm text-slate-600 underline-offset-4 hover:underline dark:text-slate-300"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-1 py-1 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/privacy" className="rounded-md px-1 py-1 hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="rounded-md px-1 py-1 hover:underline">
              Terms
            </Link>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-3 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-end sm:justify-between">
          <p>
            {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="leading-relaxed sm:text-right">
            <p>Created By Rahul Manchanda Izquierdo</p>
            <p>University of Maryland, College Park</p>
            <p>
              <a
                href="mailto:rman7411@gmail.com"
                className="underline underline-offset-4"
              >
                rman7411@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
