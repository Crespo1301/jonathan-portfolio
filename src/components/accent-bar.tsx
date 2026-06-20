type AccentBarProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

// A single solid accent stroke. Used as the brand mark, hero signature, and
// section-divider bookmark. Replaces the old stacked tricolor. Decorative.
export function AccentBar({ orientation = "horizontal", className }: AccentBarProps) {
  return (
    <span
      aria-hidden="true"
      className={`accent-bar ${orientation === "vertical" ? "accent-bar-v" : ""} ${className ?? ""}`}
    />
  );
}
