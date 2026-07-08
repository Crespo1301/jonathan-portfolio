import { ImageResponse } from "next/og";
import { designs } from "./icon-lab/designs";

// Live browser-tab icon: design 1 (chrome roundel + JC monogram).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(designs[0].render(size.width), size);
}
