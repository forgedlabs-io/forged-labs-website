import { Metadata } from "next";
import { LegalLayout } from "../legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — Forged Labs",
  description:
    "Privacy policy for Forged Labs LLC and its products, including AEVYN.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="2026-05-15"
      contactEmail="privacy@forgedlabs.io"
    >
      <section className="fl-legal-section">
        <h2>Coming soon.</h2>
        <p>
          Forged Labs LLC is preparing its full Privacy Policy in coordination
          with legal counsel. This page exists as a placeholder while the policy
          is finalized.
        </p>
        <p>
          Our forthcoming Privacy Policy will cover how Forged Labs and its
          products — including <strong>AEVYN</strong> — collect, use, store,
          share, and protect personal information. It will also describe your
          rights under applicable privacy regulations, including CCPA, GDPR, and
          COPPA where relevant.
        </p>
        <p>
          For privacy-related questions, requests to access or delete your data,
          or any other inquiry related to how Forged Labs handles personal
          information, please contact{" "}
          <a href="mailto:privacy@forgedlabs.io" className="fl-legal-link">
            privacy@forgedlabs.io
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
