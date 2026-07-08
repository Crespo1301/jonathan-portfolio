import type { ReactElement } from "react";

// Icon design candidates for JCZ, monochrome chrome-on-black in the luxury-marque
// idiom (BMW / Mercedes / Porsche). Each render(px) returns a square node sized to
// px so the same art works at favicon, tab, and touch-icon scales. The chosen one
// gets promoted into app/icon.tsx + app/apple-icon.tsx.
const BLACK = "#0b0c0e";
const SILVER = "#cfd4da";
const INK = "#eef1f4";

export type IconDesign = {
  id: number;
  name: string;
  note: string;
  render: (px: number) => ReactElement;
};

export const designs: IconDesign[] = [
  {
    id: 1,
    name: "Chrome roundel + JC",
    note: "Black disc, polished silver ring, silver JC monogram.",
    render: (px) => (
      <div
        style={{
          width: px,
          height: px,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: BLACK,
          border: `${px * 0.06}px solid ${SILVER}`,
          color: INK,
          fontSize: px * 0.4,
          fontWeight: 800,
          letterSpacing: `${-px * 0.02}px`,
          fontFamily: "sans-serif",
        }}
      >
        JC
      </div>
    ),
  },
  {
    id: 2,
    name: "Split roundel (BMW homage)",
    note: "Quartered disc, chrome ring, small JC hub.",
    render: (px) => (
      <div style={{ width: px, height: px, position: "relative", display: "flex" }}>
        {/* quadrants, clipped to a circle */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "50%", height: "50%", background: SILVER }} />
          <div style={{ width: "50%", height: "50%", background: BLACK }} />
          <div style={{ width: "50%", height: "50%", background: BLACK }} />
          <div style={{ width: "50%", height: "50%", background: SILVER }} />
        </div>
        {/* black separator ring */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: `${px * 0.05}px solid ${BLACK}`,
            boxSizing: "border-box",
          }}
        />
        {/* outer chrome ring */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: `${px * 0.02}px solid ${SILVER}`,
            boxSizing: "border-box",
          }}
        />
        {/* center hub */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: px * 0.36,
            height: px * 0.36,
            marginLeft: -px * 0.18,
            marginTop: -px * 0.18,
            borderRadius: "50%",
            background: BLACK,
            border: `${px * 0.02}px solid ${SILVER}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: INK,
            fontSize: px * 0.15,
            fontWeight: 800,
            fontFamily: "sans-serif",
          }}
        >
          JC
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Crest / shield",
    note: "Heraldic shield outline with JC, transparent field.",
    render: (px) => (
      <div
        style={{
          width: px,
          height: px,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width={px}
          height={px}
          viewBox="0 0 100 100"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            d="M50 5 L88 19 V50 C88 73 70 89 50 95 C30 89 12 73 12 50 V19 Z"
            fill={BLACK}
            stroke={SILVER}
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            display: "flex",
            color: INK,
            fontSize: px * 0.3,
            fontWeight: 800,
            fontFamily: "sans-serif",
            marginTop: -px * 0.04,
          }}
        >
          JC
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: "Single sculpted J",
    note: "One refined J, chrome on black. Sharpest at 16px.",
    render: (px) => (
      <div
        style={{
          width: px,
          height: px,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: BLACK,
          border: `${px * 0.05}px solid ${SILVER}`,
          color: INK,
          fontSize: px * 0.56,
          fontWeight: 800,
          fontFamily: "serif",
        }}
      >
        J
      </div>
    ),
  },
];
