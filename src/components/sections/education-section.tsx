import { BlurFade } from "@/components/magicui/blur-fade";
import { HyperText } from "@/components/magicui/hyper-text";
import { ResumeCard } from "@/components/resume-card";
import { BLUR_FADE_DELAY } from "./constants";

type EducationItem = {
  school: string;
  href?: string;
  logoUrl: string;
  degree?: string;
  start: string;
  end?: string;
  description?: string;
};

type EducationSectionProps = {
  education: readonly EducationItem[];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <HyperText
            className="text-xl font-bold"
            text="Education"
            duration={600}
          />
        </BlurFade>
        {education.map((item, index) => (
          <BlurFade
            key={item.school}
            delay={BLUR_FADE_DELAY * 8 + index * 0.05}
          >
            <ResumeCard
              key={item.school}
              href={item.href}
              logoUrl={item.logoUrl}
              altText={item.school}
              title={item.school}
              subtitle={item.degree}
              period={`${item.start} - ${item.end}`}
              description={item.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

