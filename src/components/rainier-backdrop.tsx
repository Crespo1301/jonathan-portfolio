type RainierBackdropProps = {
  className?: string;
};

// Mount Rainier silhouette as seen from the Seattle / Bellevue (northwest) side:
// a broad volcanic dome, Liberty Cap as a left shoulder, a wide saddle, then the
// higher Columbia Crest, with long sweeping concave flanks. Smooth curves, not
// jagged. Anchored to the bottom of its (relative) white section and given a
// scroll-driven parallax drift (`.rainier-parallax`, reduced-motion safe).
export function RainierBackdrop({ className }: RainierBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={`rainier-parallax pointer-events-none absolute inset-x-0 bottom-0 -z-10 select-none ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 1600 440"
        preserveAspectRatio="xMidYMax slice"
        className="h-[44vh] w-full text-chrome opacity-[0.16]"
        fill="currentColor"
      >
        <path d="M0,440 L0,408 C200,400 360,388 470,360 C560,337 612,300 660,262 C690,238 706,214 722,196 C732,184 742,188 752,196 C766,206 776,212 792,212 C808,212 820,200 834,184 C846,170 862,176 874,190 C900,220 928,242 962,266 C1030,314 1110,350 1230,382 C1350,410 1470,420 1600,426 L1600,440 Z" />
      </svg>
    </div>
  );
}
