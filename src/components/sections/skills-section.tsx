import { BlurFade } from "@/components/magicui/blur-fade";
import { HyperText } from "@/components/magicui/hyper-text";
import { Badge } from "@/components/ui/badge";
import { BLUR_FADE_DELAY } from "./constants";

type SkillsSectionProps = {
  skills: readonly string[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <HyperText className="text-xl font-bold" text="Skills" duration={600} />
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
              <Badge>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

