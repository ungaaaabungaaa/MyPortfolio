"use client"
import { useState, useEffect } from "react";
import { BlurFade } from "./magicui/blur-fade";
import { Safari } from "./magicui/safari";
const BLUR_FADE_DELAY = 0.04;

const images = ["/1.webp", "/2.webp", "/3.webp", "/4.webp", "/5.webp", "/6.webp"];

export default function SafariSection() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="safari">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <Safari url="muqeeth.me" className="size-full" imageSrc={currentImage} />
        </BlurFade>
      </div>
    </section>
  );
}
