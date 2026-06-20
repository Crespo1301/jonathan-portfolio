type WheelProps = {
  className?: string;
};

// Small wheel mark used in place of bullets/dots (car easter egg). Spins on
// hover of a parent `.group` (see globals.css `.wheel`). Decorative.
export function Wheel({ className }: WheelProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`wheel ${className ?? ""}`}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.1" opacity="0.6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      {/* spokes (three diameters) */}
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" />
      <line x1="7" y1="3.3" x2="17" y2="20.7" stroke="currentColor" strokeWidth="1" />
      <line x1="17" y1="3.3" x2="7" y2="20.7" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
