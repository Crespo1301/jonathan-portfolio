"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type UnveilProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

// Cinematic "sheet-pull": wraps media in a container with a solid cover panel
// that slides off when the element scrolls into view (Rolls-Royce reveal,
// translated to the locked system). Motion + initial cover are gated to
// prefers-reduced-motion: no-preference in globals.css, so non-JS / reduced
// users always see the image.
export function Unveil({ children, className, delay = 0 }: UnveilProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.setTimeout(() => setShown(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`unveil${className ? ` ${className}` : ""}`} data-shown={shown}>
      {children}
      <span className="unveil-cover" aria-hidden="true" />
    </div>
  );
}
