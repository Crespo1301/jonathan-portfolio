import { ImageResponse } from "next/og";

// Circular JCZ monogram for iOS home-screen / Apple touch icon.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          border: "8px solid #b9863c",
          color: "#b9863c",
          fontSize: 74,
          fontWeight: 800,
          letterSpacing: "-3px",
          fontFamily: "sans-serif",
        }}
      >
        JCZ
      </div>
    ),
    size,
  );
}
