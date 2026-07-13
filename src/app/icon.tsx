import { ImageResponse } from "next/og";
import { iconMark } from "@/lib/icon-mark";

// Browser-tab icon: chrome JCZ roundel.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(iconMark(size.width), size);
}
