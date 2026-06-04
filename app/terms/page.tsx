import { Metadata } from "next";
import { LegalLayout } from "../legal-layout";

export const metadata: Metadata = {
  title: "Terms of Use — Forged Labs",
  description:
    "Terms of Use for the Forged Labs LLC marketing website at forgedlabs.io. Governs the site only; each product has its own terms.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      lastUpdated="June 4, 2026"
      contactEmail="legal@forgedlabs.io"
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
        <h2>1. Acceptance of These Terms</h2>
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use
          of the Forged Labs website at <strong>forgedlabs.io</strong> (the
          &ldquo;Site&rdquo;), operated by Forged Labs LLC, a Texas limited
          liability company (&ldquo;Forged Labs,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
        </p>
        <p>
          By accessing or using the Site, you agree to these Terms. If you do not
          agree, please do not use the Site.
        </p>
        <p className="fl-legal-lead">
          <strong>
            These Terms apply only to the Forged Labs marketing website.
          </strong>{" "}
          They do <strong>not</strong> govern our software products. Each Forged
          Labs product is governed by its own separate Terms of Service:
        </p>
        <ul>
          <li>
            <strong>Aevyn</strong> — see{" "}
            <a
              href="https://aevyn.io/terms"
              className="fl-legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              aevyn.io/terms
            </a>
          </li>
          <li>
            Other products — see the terms linked within or alongside that product
          </li>
        </ul>
      </section>

      <section className="fl-legal-section">
        <h2>2. The Site Is Informational</h2>
        <p>
          The Site provides general information about Forged Labs and the products
          we build. Content on the Site is provided for informational purposes
          only. We may change, update, or remove content at any time without
          notice. We do not guarantee that the Site will be available,
          uninterrupted, or error-free.
        </p>
        <p>
          Nothing on the Site is an offer to sell, a solicitation, or a binding
          commitment unless expressly stated in a separate signed agreement.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>3. Intellectual Property</h2>
        <p>
          The Site and its contents — including text, design, layout, graphics,
          logos, and the names &ldquo;Forged Labs,&rdquo; &ldquo;Aevyn,&rdquo; and
          other product names and marks — are owned by Forged Labs LLC or its
          licensors and are protected by copyright, trademark, and other
          intellectual property laws.
        </p>
        <p>
          You may view and use the Site for your own personal, informational use.
          You may not copy, reproduce, republish, distribute, or create derivative
          works from the Site&rsquo;s content without our prior written
          permission, except as permitted by applicable law.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>4. Acceptable Use</h2>
        <p className="fl-legal-lead">You agree not to:</p>
        <ul>
          <li>
            Use the Site for any unlawful purpose or in violation of these Terms
          </li>
          <li>
            Attempt to gain unauthorized access to the Site or its underlying
            systems
          </li>
          <li>
            Interfere with or disrupt the Site or the servers or networks that
            host it
          </li>
          <li>
            Use bots, scrapers, or automated tools to access the Site in a manner
            that imposes an unreasonable load
          </li>
          <li>
            Misrepresent your identity or affiliation in any communication with us
          </li>
        </ul>
      </section>

      <section className="fl-legal-section">
        <h2>5. Third-Party Links</h2>
        <p>
          The Site may link to third-party websites, including our product sites
          and external services. We are not responsible for the content, policies,
          or practices of any third-party site. Links do not constitute
          endorsement.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>6. Disclaimers</h2>
        <p>
          THE SITE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo;
          WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT
          PERMITTED BY LAW, FORGED LABS DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT.
        </p>
        <p>
          We do not warrant that the Site will be uninterrupted, secure,
          error-free, or that any information on it is accurate, complete, or
          current.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>7. Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, FORGED LABS AND ITS OFFICERS,
          MEMBERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR
          RELATED TO YOUR USE OF THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF
          SUCH DAMAGES.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations, in which case our
          liability is limited to the maximum extent permitted by law.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>8. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Forged Labs and its officers,
          members, employees, and agents from any claims, damages, liabilities,
          costs, and expenses arising from your use of the Site or your violation
          of these Terms.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Texas, without
          regard to its conflict of laws principles. Any dispute relating to the
          Site that is not otherwise subject to a separate product agreement will
          be brought exclusively in the state or federal courts located in
          Galveston County, Texas, and you consent to personal jurisdiction in
          those courts.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we will update
          the &ldquo;Last Updated&rdquo; date above. Your continued use of the Site
          after changes take effect constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className="fl-legal-section">
        <h2>11. Contact Us</h2>
        <p>If you have questions about these Terms, contact us:</p>
        <p>
          <strong>Forged Labs LLC</strong>
          <br />
          Email:{" "}
          <a href="mailto:legal@forgedlabs.io" className="fl-legal-link">
            legal@forgedlabs.io
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
