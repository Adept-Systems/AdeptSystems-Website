import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of Service for Adept Systems.",
};

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-4xl">
        <h1 className="text-3xl font-semibold">Terms of Use</h1>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
          Effective Date: March 2, 2026
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2">
              These Terms of Use govern your access to and use of the
              {siteConfig.companyName} website, software products, APIs,
              advisory services, and related offerings (collectively, the
              &quot;Services&quot;).
              By accessing or using the Services, you agree to be bound by these
              Terms. If you are using the Services on behalf of an organization,
              you represent that you have authority to bind that organization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              2. Description of Services
            </h2>
            <p className="mt-2">
              {siteConfig.companyName} provides applied AI, workflow systems,
              implementation support, and software services, including strategy,
              model development, analytics, automation, integration support,
              advisory services, and, where offered, dashboards, portals, and
              API access.
              Specific deliverables, service levels, and responsibilities are
              defined in the applicable order form, statement of work, or master
              services agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              3. No Professional Advice
            </h2>
            <p className="mt-2">
              The Services do not provide legal, medical, financial, or other
              licensed professional advice. Content, analytics, and outputs are
              provided for informational and operational support purposes only.
              Customers remain responsible for decisions made in their own
              business and regulatory environments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              4. AI and Model Output Disclaimer
            </h2>
            <p className="mt-2">
              AI and machine learning outputs may be incomplete, inaccurate, or
              context-dependent. {siteConfig.companyName} does not guarantee
              model accuracy, completeness, or fitness for any specific
              regulatory or domain-specific use case. Outputs are decision
              support only. Clients remain solely responsible for regulatory
              compliance, risk controls, and all operational and business
              decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              5. User Responsibilities
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Provide accurate information and lawful usage inputs.</li>
              <li>
                Maintain security of credentials and restrict unauthorized
                access.
              </li>
              <li>
                Use the Services in compliance with applicable laws, contracts,
                and industry requirements.
              </li>
              <li>
                Avoid submitting confidential, regulated, or sensitive personal
                information through public contact forms unless explicitly
                requested through secure channels.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              6. Intellectual Property
            </h2>
            <p className="mt-2">
              All rights, title, and interest in the Services, including
              software, models, methods, documentation, and site content, remain
              with {siteConfig.companyName} or its licensors. Except as
              expressly granted in writing, no license or ownership rights are
              transferred to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              7. Confidentiality
            </h2>
            <p className="mt-2">
              Each party may receive non-public information from the other.
              Receiving parties agree to protect confidential information using
              reasonable safeguards, use it only to perform under the applicable
              agreement, and limit disclosure to authorized personnel with a need
              to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              8. Data Protection and Regulated Data Clarification
            </h2>
            <p className="mt-2">
              Data protection obligations are governed by applicable law and any
              signed data processing agreements. Unless expressly stated in a
              written agreement, website interactions and marketing contact
              channels are not intended for confidential, regulated, or other
              sensitive personal information. Where regulated data processing is
              in scope, terms will be governed by separate executed agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              9. Fees and Payment Terms
            </h2>
            <p className="mt-2">
              Fees, billing schedules, and payment terms are set out in the
              applicable commercial agreement. Unless otherwise agreed, invoices
              are due within thirty (30) days of issue. Late payments may result
              in service suspension and applicable finance charges to the extent
              permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              10. Third-Party Services
            </h2>
            <p className="mt-2">
              The Services may interoperate with third-party systems, cloud
              providers, or external tools. {siteConfig.companyName} is not
              responsible for the availability, security, or performance of
              third-party services beyond its direct control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              11. Warranties Disclaimer
            </h2>
            <p className="mt-2">
              Except as expressly provided in a signed agreement, the Services
              are provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any
              kind, express or implied, including merchantability, fitness for a
              particular purpose, non-infringement, and uninterrupted operation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              12. Limitation of Liability
            </h2>
            <p className="mt-2">
              To the maximum extent permitted by law, {siteConfig.companyName}
              and its affiliates are not liable for indirect, incidental,
              special, consequential, exemplary, or punitive damages, or for lost
              revenue, profits, data, or goodwill. Aggregate liability under
              these Terms will not exceed amounts paid by the customer for the
              applicable Services during the twelve (12) months preceding the
              claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              13. Indemnification
            </h2>
            <p className="mt-2">
              You agree to defend, indemnify, and hold harmless{" "}
              {siteConfig.companyName}, its officers, employees, and contractors
              from claims, liabilities, damages, and expenses arising from your
              misuse of the Services, violation of these Terms, or violation of
              law or third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              14. Termination
            </h2>
            <p className="mt-2">
              We may suspend or terminate access for material breach, security
              risk, non-payment, or unlawful use. Upon termination, rights to use
              the Services end immediately, except for provisions that by their
              nature survive, including confidentiality, limitations of
              liability, and indemnification.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              15. Governing Law
            </h2>
            <p className="mt-2">
              These Terms are governed by the laws of [State], United States,
              without regard to conflict of law principles. Venue and
              jurisdiction will be in [County, State], unless otherwise stated in
              a signed agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              16. Modifications to Terms
            </h2>
            <p className="mt-2">
              We may update these Terms from time to time. Updated Terms will be
              posted on this page with a revised effective date. Continued use of
              the Services after updates become effective constitutes acceptance
              of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              17. Contact Information
            </h2>
            <p className="mt-2">
              For legal notices or questions about these Terms, contact:
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
