"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "left" | "right" | "none";
};

export function Reveal({ children, className, delay = 0, dir = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const t = window.setTimeout(() => setShown(true), delay);
          observer.disconnect();
          node.dataset.timer = String(t);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal${className ? ` ${className}` : ""}`}
      data-dir={dir}
      data-shown={shown}
    >
      {children}
    </div>
  );
}
