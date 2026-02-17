type ContactSectionProps = {
  copiedEmail: boolean;
  emailAddress: string;
  onCopyEmail: () => Promise<void>;
};

export default function ContactSection({ copiedEmail, emailAddress, onCopyEmail }: ContactSectionProps) {
  return (
    <section id="contact" className="dh-section contact-section">
      <div className="section-head" data-fade>
        <p className="eyebrow">Contact</p>
        <h2>Have a campaign, opener, or social pack in mind? Let&apos;s build it.</h2>
      </div>

      <div className="contact-grid">
        <article className="contact-card" data-fade>
          <h3>Reach Out</h3>
          <a className="contact-mail" href={`mailto:${emailAddress}`}>
            {emailAddress}
          </a>
          <p>Open for freelance motion graphics, brand reels, title sequences, and social content systems.</p>
          <div className="contact-actions">
            <button type="button" onClick={onCopyEmail} className="copy-btn">
              {copiedEmail ? "Copied" : "Copy Email"}
            </button>
            <span className="response-pill">Replies in 24h</span>
          </div>
        </article>

        <article className="contact-card" data-fade>
          <h3>Social</h3>
          <div className="social-row">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noreferrer">
              Behance
            </a>
          </div>
          <p>Send your brief, timeline, and references. I can help shape both the visual direction and delivery system.</p>
        </article>
      </div>
    </section>
  );
}
