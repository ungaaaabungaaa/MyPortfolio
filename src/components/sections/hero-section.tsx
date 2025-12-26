import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BLUR_FADE_DELAY } from "./constants";

type HeroSectionProps = {
  name: string;
  description: string;
  avatarUrl: string;
  initials: string;
};

export function HeroSection({
  name,
  description,
  avatarUrl,
  initials,
}: HeroSectionProps) {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi,I&apos;m <AuroraText>{name}</AuroraText>
              </h1>
            </BlurFade>
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage alt={name} src={avatarUrl} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

