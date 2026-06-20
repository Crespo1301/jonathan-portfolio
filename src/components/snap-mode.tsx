"use client";

import { useEffect } from "react";

// Enables full-screen scroll-snap on the document while the home page is
// mounted (desktop + no reduced-motion, gated in globals.css). Headless:
// no visible UI, replaces the old section rail.
export function SnapMode() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.snap = "true";
    return () => {
      delete root.dataset.snap;
    };
  }, []);

  return null;
}
