import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { iconMark } from "@/lib/icon-mark";

export const alt =
  "Jonathan Crespo, Automotive Paint Specialist, Bellevue WA. A finish beyond factory standard.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Photography-led share card, built to mirror the site's hero: full-bleed image
// under a solid near-black signature bar (no scrim, no gradient). The base image
// is inlined at build so the card never depends on a live URL or font fetch.
const hero = readFileSync(join(process.cwd(), "public/images/og-hero.jpg"));
const heroSrc = `data:image/jpeg;base64,${hero.toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ position: "relative", width: "100%", height: "100%", display: "flex" }}>
        <img src={heroSrc} width={1200} height={630} alt="" />

        {/* solid signature bar, the same device the hero uses */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "44px 64px",
            background: "#0b0b0c",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 46, height: 5, background: "#2353a4" }} />
              <div style={{ fontSize: 19, letterSpacing: 6, color: "#9aa0a8" }}>
                AUTOMOTIVE PAINT SPECIALIST
              </div>
            </div>
            <div
              style={{
                fontSize: 66,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: -1.5,
                color: "#f4f5f6",
              }}
            >
              Jonathan Crespo
            </div>
            <div style={{ display: "flex", gap: 20, fontSize: 22, color: "#b9863c" }}>
              <span>Collision to restoration</span>
              <span style={{ color: "#3a3d44" }}>/</span>
              <span>Glasurit 100 Line</span>
              <span style={{ color: "#3a3d44" }}>/</span>
              <span>Bellevue, WA</span>
            </div>
          </div>

          {iconMark(112)}
        </div>
      </div>
    ),
    { ...size },
  );
}
