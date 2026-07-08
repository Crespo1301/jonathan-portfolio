import { ImageResponse } from "next/og";

// Circular JCZ monogram favicon, matched to the site palette (dark disc, gold
// ring + wordmark). Rendered by next/og so it stays crisp on retina tabs.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#0f1113",
          border: "3px solid #b9863c",
          color: "#b9863c",
          fontSize: 26,
          fontWeight: 800,
          letterSpacing: "-1px",
          fontFamily: "sans-serif",
        }}
      >
        JCZ
      </div>
    ),
    size,
  );
}
