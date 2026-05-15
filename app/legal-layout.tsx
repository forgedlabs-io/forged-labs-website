import { ReactNode } from "react";
import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  contactEmail: string;
  children: ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  contactEmail,
  children,
}: LegalLayoutProps) {
  return (
    <main className="fl-legal-main">
      <div className="fl-legal-container">
        <Link href="/" className="fl-legal-back">
          ← forged labs
        </Link>

        <header className="fl-legal-header">
          <p className="fl-legal-eyebrow">Legal</p>
          <h1 className="fl-legal-title">{title}</h1>
          <p className="fl-legal-meta">Last updated: {lastUpdated}</p>
        </header>

        <div className="fl-legal-body">{children}</div>

        <footer className="fl-legal-footer">
          <p>
            Questions? Contact us at{" "}
            <a href={`mailto:${contactEmail}`} className="fl-legal-link">
              {contactEmail}
            </a>
            .
          </p>
          <p className="fl-legal-fineprint">
            © 2026 Forged Labs LLC · All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
