type MarqueeProps = {
  items: string[];
  className?: string;
};

// Pure-CSS kinetic marquee. Duplicated track for a seamless loop.
// Animation is gated behind prefers-reduced-motion in globals.css.
export function Marquee({ items, className }: MarqueeProps) {
  const track = (
    <ul className="marquee-track" aria-hidden="false">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-8 pr-8">
          <span>{item}</span>
          <span className="text-accent">/</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee ${className ?? ""}`}>
      <div className="marquee-inner">
        {track}
        <ul className="marquee-track" aria-hidden="true">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-8 pr-8">
              <span>{item}</span>
              <span className="text-accent">/</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
