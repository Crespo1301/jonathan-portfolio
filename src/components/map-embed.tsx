type MapEmbedProps = {
  query?: string;
  zoom?: number;
  className?: string;
  label?: string;
};

// Grayscale-filtered map embed (no API key, classic Google Maps embed).
// The CSS filter keeps it within the monochrome palette.
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
