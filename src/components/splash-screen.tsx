"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import "./splash-screen.css";

const rovers = [
  "/images/splash/research-rover-clean.webp",
  "/images/splash/hexapod-explorer.webp",
];
const otherMachines = [
  "/images/splash/deep-sea-rov.webp",
  "/images/splash/industrial-arm-v2.webp",
  "/images/splash/ai-pendant.webp",
];

// Primary translations: Aristotle, Metaphysics I (W. D. Ross);
// Plato, Theaetetus (Benjamin Jowett), Internet Classics Archive.
const quotes = [
  { text: "All men by nature desire to know.", author: "Aristotle", source: "https://classics.mit.edu/Aristotle/metaphysics.1.i.html" },
  { text: "Philosophy begins in wonder.", author: "Plato", source: "https://classics.mit.edu/Plato/theatu.html" },
];

function shuffled<T,>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function artworkSequence(previous: string | null) {
  const r = shuffled(rovers);
  const m = shuffled(otherMachines);
  // The circular order keeps the two rovers apart, including at the wrap.
  const sequence = [r[0], m[0], r[1], m[1], m[2]];
  const starts = sequence.map((_, i) => i).filter((i) =>
    sequence[i] !== previous && !(previous && rovers.includes(previous) && rovers.includes(sequence[i]))
  );
  const start = starts[Math.floor(Math.random() * starts.length)];
  return [...sequence.slice(start), ...sequence.slice(0, start)];
}

// Five-second sequence after preloading; CSS also provides a no-JavaScript exit.
export function SplashScreen({ portraitSrc }: { portraitSrc: string }) {
  const [image, setImage] = useState<string | null>(null);

  const [word, setWord] = useState(0);
  const [progress, setProgress] = useState(0);
  const [quote, setQuote] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.documentElement.hasAttribute("data-skip-intro") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let previous: string | null = null;
    try { previous = localStorage.getItem("portfolio-intro-art"); } catch {}
    const artwork = artworkSequence(previous);
    let index = 0;

    let cancelled = false;
    let frame = 0;
    let imageInterval = 0;
    let wordInterval = 0;
    let quoteInterval = 0;
    let stop = 0;
    let preloadTimeout = 0;
    const preload = async (source: string) => {
      const asset = new window.Image();
      asset.src = source;
      try { await asset.decode(); } catch { /* A failed asset must not block the page. */ }
    };
    const show = (next: number) => {
      const source = artwork[next % artwork.length];
      setImage(source);
      try { localStorage.setItem("portfolio-intro-art", source); } catch {}
    };
    const begin = async () => {
      await Promise.race([
        Promise.all([...artwork, portraitSrc].map(preload).concat([document.fonts.ready.then(() => {})])),
        new Promise<void>((resolve) => { preloadTimeout = window.setTimeout(resolve, 3000); }),
      ]);
      if (cancelled) return;
      window.clearTimeout(preloadTimeout);
      setReady(true);
      setQuote(Math.floor(Math.random() * quotes.length));
      show(index);
      const started = performance.now();
      const tick = (now: number) => {
        const percent = Math.min(100, Math.floor((now - started) / 44));
        setProgress(percent);
        if (percent < 100) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      // Five distinct images before the fade begins at 4.5 seconds.
      imageInterval = window.setInterval(() => { show(++index); }, 900);
      wordInterval = window.setInterval(() => { setWord((current) => current + 1); }, 1500);
      quoteInterval = window.setInterval(() => { setQuote((current) => (current + 1) % quotes.length); }, 2200);
      stop = window.setTimeout(() => {
        window.clearInterval(imageInterval);
        window.clearInterval(wordInterval);
        window.clearInterval(quoteInterval);
      }, 4400);
    };
    void begin();
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.clearInterval(imageInterval);
      window.clearInterval(wordInterval);
      window.clearInterval(quoteInterval);
      window.clearTimeout(preloadTimeout);
      window.clearTimeout(stop);
    };
  }, [portraitSrc]);

  return (
    <div className="portfolio-splash" data-ready={ready} aria-hidden="true">
      <div className="splash-frame max-w-full md:max-w-2xl mx-auto px-2 lg:px-6">
        <div className="splash-inset md:px-4 lg:px-6">
          <div className="splash-content">
            <div className="splash-topline">
              {progress < 100 ? (
                <div className="splash-word">
                  <HyperText key={word} text={["RESEARCH", "BUILD", "EXPLORE"][word % 3]} duration={700} className="font-mono text-xs" />
                </div>
              ) : <div className="splash-word splash-word-settled">EXPLORE</div>}
              <div className="splash-progress">
                <div className="splash-track"><div style={{ transform: `scaleX(${progress / 100})` }} /></div>
                <span className="splash-percent">{progress}%</span>
              </div>
            </div>
            <div className="splash-copy">
              <p className="splash-statement">Syed Abdul<br />Muqeeth<span>.</span></p>
              <p className="splash-role">Human behavior. Intelligent machines.</p>
            </div>
            <div className="splash-art">
              {image && <Image key={image} src={image} alt="" width={1536} height={1024} loading="eager" />}
            </div>
            <blockquote key={quote} className="splash-quote splash-rotate" cite={quotes[quote].source}>
              “{quotes[quote].text}” <cite>— {quotes[quote].author}</cite>
            </blockquote>
            <div className="splash-bottomline">IMAI STUDIO · SAN FRANCISCO, CA, USA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
