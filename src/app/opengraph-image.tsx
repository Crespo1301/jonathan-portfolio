import { ImageResponse } from "next/og";

export const alt = "Jonathan Crespo, Automotive Paint Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share card, generated at build (no external asset or font fetch).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0c",
          color: "#f4f5f6",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 46, height: 6, background: "#2353a4" }} />
          <div style={{ fontSize: 26, letterSpacing: 8, color: "#9aa0a8" }}>JONATHAN CRESPO</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}>
            A finish beyond
          </div>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}>
            factory standard.
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#b9863c" }}>
          <span>Collision to restoration</span>
          <span style={{ color: "#3a3d44" }}>/</span>
          <span>Glasurit 100 Line</span>
          <span style={{ color: "#3a3d44" }}>/</span>
          <span>Bellevue, WA</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
