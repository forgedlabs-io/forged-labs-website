import { Metadata } from "next";
import { LegalLayout } from "../legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — Forged Labs",
  description:
    "Privacy Policy for the Forged Labs LLC marketing website at forgedlabs.io. Covers the site only; each product has its own policy.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="June 4, 2026"
      contactEmail="privacy@forgedlabs.io"
    >
      <section className="fl-legal-section">
        <p>
          <strong>Effective Date:</strong> June 4, 2026
          <br />
          <strong>Last Updated:</strong> June 4, 2026
        </p>
        <p>
          <strong>Forged Labs LLC</strong>
          <br />
          League City, Texas, United States
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>1. About This Policy</h2>
        <p>
          This Privacy Policy explains how Forged Labs LLC (&ldquo;Forged
          Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          handles information in connection with our website at{" "}
          <strong>forgedlabs.io</strong> (the &ldquo;Site&rdquo;).
        </p>
        <p className="fl-legal-lead">
          This policy covers <strong>only the Forged Labs marketing website.</strong>{" "}
          It does <strong>not</strong> cover our software products. Each Forged
          Labs product has its own separate privacy policy:
        </p>
        <ul>
          <li>
            <strong>Aevyn</strong> — see{" "}
            <a
              href="https://aevyn.io/privacy"
              className="fl-legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              aevyn.io/privacy
            </a>
          </li>
          <li>
            Other products — see the privacy policy linked within or alongside
            that product
          </li>
        </ul>
        <p>
          If you are a user of one of our applications, please refer to that
          application&rsquo;s own privacy policy, which governs the data that
          application collects.
        </p>
        <p>
          Forged Labs LLC is a single-member limited liability company organized
          under the laws of the State of Texas.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>2. Information We Collect</h2>
        <p>
          The Forged Labs website is an informational site. We do not require you
          to create an account, and we do not ask you to submit personal
          information to browse the Site.
        </p>
        <p className="fl-legal-lead">
          <strong>Information we do not collect through the Site:</strong>
        </p>
        <ul>
          <li>We do not operate user accounts on the Site</li>
          <li>We do not run advertising or third-party advertising trackers</li>
          <li>We do not sell personal information</li>
          <li>We do not knowingly collect information from children</li>
        </ul>
        <p className="fl-legal-lead">
          <strong>Information collected automatically:</strong>
        </p>
        <p>
          Like most websites, our hosting provider automatically records standard
          technical server information when you visit, which may include your IP
          address, browser type, device type, referring page, and the date and
          time of your request. This information is used only to operate, secure,
          and maintain the Site, and to understand aggregate traffic. It is not
          used to build advertising profiles.
        </p>
        <p className="fl-legal-lead">
          <strong>If you contact us:</strong>
        </p>
        <p>
          If you email us using an address listed on the Site, we will receive
          your email address and the contents of your message. We use this solely
          to respond to and manage your inquiry.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>3. How We Use Information</h2>
        <p className="fl-legal-lead">
          We use the limited information described above to:
        </p>
        <ul>
          <li>Operate, maintain, and secure the Site</li>
          <li>Understand aggregate Site traffic and performance</li>
          <li>Respond to inquiries you send us</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="fl-legal-section">
        <h2>4. Hosting and Service Providers</h2>
        <p>
          The Site is hosted by <strong>Vercel Inc.</strong>, which processes
          standard technical request data on our behalf to deliver and secure the
          Site. Vercel&rsquo;s handling of this data is governed by its own terms
          and privacy practices.
        </p>
        <p>
          We do not share information collected through the Site with advertisers
          or data brokers.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>5. Cookies and Analytics</h2>
        <p>
          The Forged Labs marketing site does not set advertising cookies and does
          not deploy third-party advertising trackers. If we add website analytics
          in the future, we will update this policy to describe what is collected
          and provide any choices required by applicable law.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>6. Legal Disclosures</h2>
        <p>
          We may disclose information if required by law, court order, or
          government request, or where necessary to protect the rights, safety, or
          property of Forged Labs, our users, or others.
        </p>
        <p>
          If Forged Labs is involved in a merger, acquisition, financing, or sale
          of assets, information may be transferred as part of that transaction.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>7. Data Security</h2>
        <p>
          We use commercially reasonable measures to protect information
          associated with the Site, including encryption of data in transit (TLS).
          No method of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>8. Your Rights</h2>
        <p>
          Depending on where you live, you may have rights regarding personal
          information, including the right to access, correct, or delete
          information we hold about you, and the right to object to or restrict
          certain processing. Because the Site collects little personal
          information, these rights primarily relate to any email correspondence
          you have sent us. To make a request, contact us at the address below.
        </p>
        <p>
          We do not sell or share personal information for cross-context
          behavioral advertising.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>9. International Visitors</h2>
        <p>
          The Site is operated from the United States. If you visit from outside
          the United States, your information will be processed in the United
          States and other countries where our service providers operate.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>10. Children&rsquo;s Privacy</h2>
        <p>
          The Site is not directed to children under 13, and we do not knowingly
          collect personal information from children under 13.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will
          update the &ldquo;Last Updated&rdquo; date above. Material changes will
          be reflected on this page.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>12. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us:
        </p>
        <p>
          <strong>Forged Labs LLC</strong>
          <br />
          Email:{" "}
          <a href="mailto:privacy@forgedlabs.io" className="fl-legal-link">
            privacy@forgedlabs.io
          </a>
        </p>
        <p className="fl-legal-address">
          Forged Labs LLC
          <br />
          c/o Northwest Registered Agent, LLC
          <br />
          5900 Balcones Drive, STE 100
          <br />
          Austin, TX 78731
          <br />
          United States
        </p>
      </section>
    </LegalLayout>
  );
}
