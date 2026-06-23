type SkylineBackdropProps = {
  className?: string;
};

// Downtown Bellevue, WA skyline silhouette: a cluster of towers of varied height
// (the tall center spire echoing the real downtown core) over a low treeline,
// with a faint Mount Rainier dome behind for the PNW nod. Anchored to the bottom
// of its (relative) section and given a scroll-driven parallax drift
// (`.skyline-parallax`, reduced-motion safe).
export function SkylineBackdrop({ className }: SkylineBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={`skyline-parallax pointer-events-none absolute inset-x-0 bottom-0 -z-10 select-none ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 1600 440"
        preserveAspectRatio="xMidYMax slice"
        className="h-[32vh] w-full"
        fill="none"
      >
        {/* Mount Rainier dome, far behind and very faint */}
        <path
          className="text-chrome"
          fill="currentColor"
          opacity="0.05"
          d="M0,440 L0,360 C260,352 470,300 690,236 C760,214 786,206 800,206 C814,206 842,216 912,238 C1130,304 1340,356 1600,366 L1600,440 Z"
        />

        {/* Skyline of towers */}
        <g className="text-chrome" fill="currentColor" opacity="0.09">
          <rect x="40" y="300" width="78" height="140" />
          <rect x="128" y="248" width="64" height="192" />
          <rect x="202" y="288" width="52" height="152" />
          <rect x="266" y="214" width="86" height="226" />
          {/* stepped crown */}
          <rect x="286" y="196" width="46" height="24" />
          <rect x="364" y="268" width="58" height="172" />
          <rect x="432" y="236" width="70" height="204" />
          {/* tall center spire (downtown core) */}
          <rect x="520" y="120" width="92" height="320" />
          <rect x="548" y="92" width="36" height="34" />
          <rect x="562" y="64" width="8" height="32" />
          <rect x="624" y="208" width="64" height="232" />
          <rect x="700" y="252" width="56" height="188" />
          {/* angled-top tower */}
          <path d="M770,440 L770,236 L848,196 L848,440 Z" />
          <rect x="862" y="226" width="76" height="214" />
          <rect x="950" y="180" width="84" height="260" />
          <rect x="980" y="158" width="30" height="26" />
          <rect x="1046" y="262" width="58" height="178" />
          <rect x="1116" y="226" width="74" height="214" />
          <rect x="1202" y="276" width="60" height="164" />
          <rect x="1274" y="240" width="72" height="200" />
          <rect x="1358" y="296" width="56" height="144" />
          <rect x="1426" y="258" width="68" height="182" />
          <rect x="1506" y="312" width="62" height="128" />
        </g>

        {/* Low treeline / shoreline grounding the towers */}
        <path
          className="text-chrome"
          fill="currentColor"
          opacity="0.07"
          d="M0,440 L0,406 C90,398 150,388 210,392 C250,394 270,384 320,384 C360,384 380,394 430,392 C500,389 540,378 600,382 C660,386 690,396 760,394 C840,392 880,380 950,384 C1030,388 1070,398 1150,394 C1240,390 1300,380 1380,384 C1460,388 1520,398 1600,402 L1600,440 Z"
        />
      </svg>
    </div>
  );
}
