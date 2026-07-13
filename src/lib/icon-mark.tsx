import type { ReactElement } from "react";

// The JCZ mark: chrome roundel with a JC monogram, monochrome in the luxury-marque
// idiom. Sized by px so the same art serves the browser tab and the touch icon.
export function iconMark(px: number): ReactElement {
  return (
    <div
      style={{
        width: px,
        height: px,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: "#0b0c0e",
        border: `${px * 0.06}px solid #cfd4da`,
        color: "#eef1f4",
        fontSize: px * 0.4,
        fontWeight: 800,
        letterSpacing: `${-px * 0.02}px`,
        fontFamily: "sans-serif",
      }}
    >
      JC
    </div>
  );
}
