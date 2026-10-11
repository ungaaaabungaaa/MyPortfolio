"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DATA } from "@/data/resume";
import "./splash-screen.css";

const artwork = [
  "/images/splash/research-rover-clean.webp",
  "/images/splash/deep-sea-rov.webp",
  "/images/splash/orbital-observatory.webp",
  "/images/splash/hexapod-explorer.webp",
];

// CSS reveals the page after five seconds, even if JavaScript is unavailable.
export function SplashScreen() {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (document.documentElement.hasAttribute("data-skip-intro") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = Math.floor(Math.random() * artwork.length);
    try {
      const previous = Number(localStorage.getItem("portfolio-intro-art") ?? -1);
      if (index === previous) index = (index + 1) % artwork.length;
      localStorage.setItem("portfolio-intro-art", String(index));
    } catch { /* The intro also works when storage is blocked. */ }

    let cancelled = false;
    const show = async (next: number) => {
      const source = artwork[next % artwork.length];
      const preload = new window.Image();
      preload.src = source;
      try {
        await preload.decode();
        if (!cancelled) setImage(source);
      } catch { /* Keep the current image if the next asset fails. */ }
    };
    void show(index);
    const interval = window.setInterval(() => { void show(++index); }, 1500);
    const stop = window.setTimeout(() => {
      cancelled = true;
      window.clearInterval(interval);
    }, 4500);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.clearTimeout(stop);
    };
  }, []);

  return (
    <div className="portfolio-splash" aria-hidden="true">
      <div className="splash-topline">
        <span>RESEARCH · BUILD · EXPLORE</span>
        <span>AI · BEHAVIOR · MECHATRONICS</span>
      </div>
      <div className="splash-art">
        {image && <Image key={image} src={image} alt="" width={1536} height={1024} loading="eager" />}
      </div>
      <div className="splash-copy">
        <p className="splash-kicker">SYED ABDUL</p>
        <p className="splash-statement">MUQEETH<span>.</span></p>
        <p className="splash-role">{DATA.role}</p>
      </div>
      <div className="splash-bottomline">
        <span>IMAI STUDIO · SAN FRANCISCO, CA, USA</span>
        <div className="splash-track"><div /></div>
      </div>
    </div>
  );
}
