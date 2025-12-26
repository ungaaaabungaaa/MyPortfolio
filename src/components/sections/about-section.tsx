import { BlurFade } from "@/components/magicui/blur-fade";
import { HyperText } from "@/components/magicui/hyper-text";
import Markdown from "react-markdown";
import { BLUR_FADE_DELAY } from "./constants";

type AboutSectionProps = {
  summary: string;
  imageSrc?: string;
};

export function AboutSection({
  summary,
  imageSrc = "/decor/firefightingrobot.png",
}: AboutSectionProps) {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <HyperText className="text-xl font-bold" text="About Me" duration={600} />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {summary}
        </Markdown>
        <img
          src={imageSrc}
          alt="FireFightingRobot"
          className="w-full mt-4 md:mt-12 lg:mt-16"
        />
      </BlurFade>
    </section>
  );
}


