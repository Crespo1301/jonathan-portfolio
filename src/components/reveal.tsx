"use client";

import { animate } from "animejs";
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
          const t = window.setTimeout(() => {
            setShown(true);

            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              const translate =
                dir === "left"
                  ? ["-28px", "0px"]
                  : dir === "right"
                    ? ["28px", "0px"]
                    : dir === "up"
                      ? ["22px", "0px"]
                      : ["0px", "0px"];

              animate(node, {
                opacity: [0, 1],
                translateX: dir === "left" || dir === "right" ? translate : ["0px", "0px"],
                translateY: dir === "up" ? translate : ["0px", "0px"],
                duration: 720,
                easing: "easeOutCubic",
              });
            }
          }, delay);
          observer.disconnect();
          node.dataset.timer = String(t);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, dir]);

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
