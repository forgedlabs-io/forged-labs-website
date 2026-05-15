/*
 * Forged Labs — landing page
 *
 * Single direction: Obsidian & Sapphire (dark near-black + sapphire blue).
 * Copy is locked per CLAUDE.md — do not change without updating both the
 * file and chat-Claude's project knowledge.
 *
 * All styles live in app/globals.css under the `.fl-*` namespace.
 */

export default function Home() {
  return (
    <div className="fl-root">
      <div className="fl-container">
        {/* === MASTHEAD === */}
        <nav className="fl-nav">
          <div className="fl-nav-mark">forged labs</div>
          <div className="fl-nav-meta">Est. 2026 · TX</div>
        </nav>

        {/* === HERO === */}
        <section className="fl-hero">
          <div className="fl-hero-eyebrow">
            <span className="fl-eb-rule" />A software studio for individuals
            and industry
          </div>
          <h1 className="fl-hero-wordmark">
            Built for the
            <br />
            <span className="fl-accent-word">long</span> game.
          </h1>
          <p className="fl-hero-statement">
            We make software for two kinds of work — the patient work of a
            life, and the careful work of industry. Both built to last.
          </p>
          <div className="fl-hero-meta">
            <div className="fl-meta-block">
              <div className="fl-meta-label">Studio</div>
              <div className="fl-meta-value">League City, Texas</div>
            </div>
            <div className="fl-meta-block">
              <div className="fl-meta-label">Status</div>
              <div className="fl-meta-value">Active · Pre-launch</div>
            </div>
            <div className="fl-meta-block">
              <div className="fl-meta-label">Founded</div>
              <div className="fl-meta-value">2026</div>
            </div>
          </div>
        </section>

        {/* === PHILOSOPHY === */}
        <section className="fl-section">
          <div className="fl-section-eyebrow">
            <span className="fl-eb-rule" />
            <span className="fl-section-number">01</span>
            Philosophy
          </div>
          <div className="fl-philosophy-grid">
            <h2 className="fl-philosophy-title">
              Consistency
              <br />
              <em>is the engine.</em>
            </h2>
            <div className="fl-philosophy-body">
              <p>
                We build software for two kinds of work — the daily practice
                of becoming who you said you&rsquo;d be, and the careful work
                of industry, where that same drive is what makes the work
                right. Both reward patience, both punish shortcuts, both
                compound over the years.
              </p>
              <p>
                The technology industry sells hype and quick wins.
                We&rsquo;re not interested in that. Our products are designed
                to be used for years, not weeks. Slips and setbacks treated
                as signal, not collapse.{" "}
                <strong>Pick it back up, keep going.</strong>
              </p>
              <p>
                That&rsquo;s how we built the studio. That&rsquo;s how we
                build our products.
              </p>
            </div>
          </div>
        </section>

        {/* === TWO KINDS OF WORK === */}
        <section className="fl-section">
          <div className="fl-section-eyebrow">
            <span className="fl-eb-rule" />
            <span className="fl-section-number">02</span>
            Two kinds of work
          </div>
          <p className="fl-work-intro">
            One product at a time, built carefully, shipped when it&rsquo;s
            ready.
          </p>

          <div className="fl-work-grid">
            {/* PERSONAL */}
            <div className="fl-work-column">
              <div className="fl-work-label">Personal</div>
              <p className="fl-work-blurb">
                Apps for individuals who value consistency over hype.
              </p>
              <div className="fl-card">
                <div className="fl-product-number">001</div>
                <div className="fl-product-name">A E V Y N</div>
                <p className="fl-product-description">
                  A daily discipline app organized around five pillars —
                  Spirit, Mind, Body, Craft, and Life. For the long game.
                </p>
                <div className="fl-product-meta-row">
                  <div className="fl-product-status">
                    <span className="fl-status-dot" />
                    In development
                  </div>
                  <a href="https://aevyn.io" className="fl-product-link">
                    Visit <span className="fl-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* INDUSTRIAL */}
            <div className="fl-work-column">
              <div className="fl-work-label">Industrial</div>
              <p className="fl-work-blurb">
                Software for industrial shops, where the work has to be right.
              </p>
              <div className="fl-card fl-card-placeholder">
                <div className="fl-product-number">002</div>
                <div className="fl-product-name fl-product-name-muted">
                  In the forge
                </div>
                <p className="fl-product-description fl-product-description-muted">
                  Coming 2026.
                </p>
                <div className="fl-product-meta-row">
                  <div className="fl-product-status fl-product-status-muted">
                    <span className="fl-status-dot" />
                    Pre-development
                  </div>
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="fl-future-marker">More in the forge.</div>
        </section>

        {/* === CONTACT === */}
        <section className="fl-section" id="contact">
          <div className="fl-section-eyebrow">
            <span className="fl-eb-rule" />
            <span className="fl-section-number">03</span>
            Get in touch
          </div>
          <div className="fl-contact-content">
            <p className="fl-contact-line">
              For press, partnerships, or{" "}
              <span className="fl-accent-word-inline">
                a careful conversation
              </span>{" "}
              about the work.
            </p>
            <div className="fl-contact-info">
              <div className="fl-contact-block">
                <div className="fl-contact-label">General</div>
                <a
                  href="mailto:hello@forgedlabs.io"
                  className="fl-contact-value"
                >
                  hello@forgedlabs.io
                </a>
              </div>
              <div className="fl-contact-block">
                <div className="fl-contact-label">Press</div>
                <a
                  href="mailto:hello@forgedlabs.io?subject=Press%20inquiry"
                  className="fl-contact-value"
                >
                  hello@forgedlabs.io
                </a>
              </div>
              <div className="fl-contact-block">
                <div className="fl-contact-label">Legal</div>
                <a
                  href="mailto:legal@forgedlabs.io"
                  className="fl-contact-value"
                >
                  legal@forgedlabs.io
                </a>
              </div>
              <div className="fl-contact-block">
                <div className="fl-contact-label">Location</div>
                <div className="fl-contact-value">
                  League City, Texas · United States
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === FOOTER === */}
        <footer className="fl-footer">
          <div className="fl-footer-mark">forged labs</div>
          <div className="fl-footer-legal">
            © 2026 Forged Labs LLC · All rights reserved
          </div>
        </footer>
      </div>
    </div>
  );
}
