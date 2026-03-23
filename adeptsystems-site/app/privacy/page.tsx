import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy Policy for Adept Systems.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-4xl">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
          Effective Date: March 2, 2026
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              1. Scope
            </h2>
            <p className="mt-2">
              This Privacy Policy describes how {siteConfig.companyName}
              collects, uses, discloses, and protects information through our
              website, consulting engagements, software products, portals, and
              APIs (collectively, the &quot;Services&quot;). This Policy applies to
              information we process as a business and service provider and does
              not override terms in signed customer agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              2. Information We Collect
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Contact and business information, including name, work email,
                organization, and inquiry details.
              </li>
              <li>
                Usage and technical data, including device, browser, logs, and
                interaction metrics.
              </li>
              <li>
                Customer-provided data processed in connection with contracted
                services.
              </li>
              <li>
                Authentication and account metadata for dashboards, portals, or
                API services where enabled.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              3. How We Use Information
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Provide, operate, and improve the Services.</li>
              <li>Respond to inquiries and deliver customer support.</li>
              <li>
                Perform analytics, security monitoring, reliability, and fraud
                prevention.
              </li>
              <li>
                Comply with legal obligations and enforce contractual rights.
              </li>
              <li>
                Communicate service updates and relevant business information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              4. AI Processing and Decision Support
            </h2>
            <p className="mt-2">
              Our Services may include AI and model-driven processing. Outputs
              may be probabilistic and are not guaranteed to be complete or
              accurate. Outputs are intended for decision support. Customers
              remain responsible for validating outputs, maintaining compliance,
              and making their own operational, legal, and domain-specific
              decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              5. Sensitive Data Clarification
            </h2>
            <p className="mt-2">
              Website forms and general marketing channels are not intended for
              confidential, regulated, or otherwise sensitive personal data.
              Where we support regulated workflows, data-handling expectations
              are governed by separate signed agreements and scoped security
              controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              6. How We Share Information
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                With vendors and service providers under confidentiality and
                security obligations.
              </li>
              <li>
                With customer-authorized integrations and third-party platforms.
              </li>
              <li>
                When required by law, legal process, or to protect rights,
                safety, and security.
              </li>
              <li>
                In connection with corporate restructuring, merger, acquisition,
                or asset transfer.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              7. Data Security
            </h2>
            <p className="mt-2">
              We implement administrative, technical, and organizational
              safeguards designed to protect data against unauthorized access,
              disclosure, and misuse. No method of storage or transmission is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              8. Data Retention
            </h2>
            <p className="mt-2">
              We retain information for as long as reasonably necessary to
              provide Services, comply with legal obligations, resolve disputes,
              and enforce agreements. Retention periods may vary based on data
              type, contract terms, and regulatory requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              9. Cookies and Similar Technologies
            </h2>
            <p className="mt-2">
              We may use cookies and similar technologies to operate the site,
              remember preferences, measure performance, and improve user
              experience. You can control cookie settings through your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              10. Your Rights and Choices
            </h2>
            <p className="mt-2">
              Depending on applicable law, you may have rights to access,
              correct, delete, or restrict processing of certain personal
              information. To submit a request, contact us using the details
              below. We may verify identity and request scope before processing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              11. Children&apos;s Privacy
            </h2>
            <p className="mt-2">
              Our Services are not directed to children under 13, and we do not
              knowingly collect personal information directly from children under
              13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              12. Cross-Border Processing
            </h2>
            <p className="mt-2">
              If information is transferred across jurisdictions, we implement
              contractual and operational safeguards appropriate for the transfer
              and applicable legal standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              13. Changes to this Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy periodically. Material updates
              will be posted on this page with a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              14. Contact Information
            </h2>
            <p className="mt-2">
              For privacy-related questions or requests, contact:
            </p>
            <p className="mt-2">
              {siteConfig.companyName}
              <br />
              Email:{" "}
              <a
                href={siteConfig.contactMailto}
                className="underline underline-offset-4"
              >
                {siteConfig.contactEmail}
              </a>
              <br />
              Mailing Address: 5464 Wooded Way, 21044 Columbia MD
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
