type MapEmbedProps = {
  query?: string;
  zoom?: number;
  className?: string;
  label?: string;
};

// Full-color Google Maps embed (no API key, classic embed). Framed with a
// hairline border to sit cleanly in the palette.
export function MapEmbed({
  query = "Bellevue, WA",
  zoom = 11,
  className,
  label = "Map of Bellevue, Washington and the greater Seattle area",
}: MapEmbedProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    query,
  )}&z=${zoom}&output=embed`;

  return (
    <div className={`map-frame border border-border ${className ?? ""}`}>
      <iframe
        title={label}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
      />
    </div>
  );
}
