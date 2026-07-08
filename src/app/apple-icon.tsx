import { ImageResponse } from "next/og";
import { designs } from "./icon-lab/designs";

// iOS home-screen / Apple touch icon: design 1 (chrome roundel + JC monogram).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(designs[0].render(size.width), size);
}
