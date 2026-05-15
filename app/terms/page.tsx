import { Metadata } from "next";
import { LegalLayout } from "../legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service — Forged Labs",
  description:
    "Terms of service for Forged Labs LLC and its products, including AEVYN.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="2026-05-15"
      contactEmail="legal@forgedlabs.io"
    >
      <section className="fl-legal-section">
        <h2>Coming soon.</h2>
        <p>
          Forged Labs LLC is preparing its full Terms of Service in coordination
          with legal counsel. This page exists as a placeholder while the terms
          are finalized.
        </p>
        <p>
          Our forthcoming Terms of Service will govern your use of products
          operated by Forged Labs LLC, including <strong>AEVYN</strong>. They
          will cover account responsibilities, acceptable use, intellectual
          property, disclaimers and limitations of liability, dispute
          resolution, and other standard provisions for software services.
        </p>
        <p>
          For legal questions, contract inquiries, or service-of-notice matters,
          please contact{" "}
          <a href="mailto:legal@forgedlabs.io" className="fl-legal-link">
            legal@forgedlabs.io
          </a>
          .
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>Forged Labs LLC</h2>
        <p>
          Forged Labs LLC is a Texas single-member limited liability company.
          Our registered business address is:
        </p>
        <p className="fl-legal-address">
          Forged Labs LLC
          <br />
          2521 Saratoga Dr
          <br />
          League City, TX 77573
          <br />
          United States
        </p>
      </section>
    </LegalLayout>
  );
}
