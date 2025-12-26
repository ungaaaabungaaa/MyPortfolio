import { BlurFade } from "@/components/magicui/blur-fade";
import { HyperText } from "@/components/magicui/hyper-text";
import { ResumeCard } from "@/components/resume-card";
import { BLUR_FADE_DELAY } from "./constants";

type WorkItem = {
  company: string;
  href?: string;
  badges?: readonly string[];
  location?: string;
  title?: string;
  logoUrl: string;
  start: string;
  end?: string | null;
  description?: string;
};

type WorkSectionProps = {
  work: readonly WorkItem[];
};

export function WorkSection({ work }: WorkSectionProps) {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <HyperText
            className="text-xl font-bold"
            text="Work Experience"
            duration={600}
          />
        </BlurFade>
        {work.map((item, index) => (
          <BlurFade
            key={item.company}
            delay={BLUR_FADE_DELAY * 6 + index * 0.05}
          >
            <ResumeCard
              key={item.company}
              logoUrl={item.logoUrl}
              altText={item.company}
              title={item.company}
              subtitle={item.title}
              href={item.href}
              badges={item.badges}
              period={`${item.start} - ${item.end ?? "Present"}`}
              description={item.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

