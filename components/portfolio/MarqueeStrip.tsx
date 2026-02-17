type MarqueeStripProps = {
  items: readonly string[];
};

export default function MarqueeStrip({ items }: MarqueeStripProps) {
  return (
    <section className="logo-strip" data-fade>
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-pill">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
