import type React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { HackathonCard } from "@/components/hackathon-card";
import { BLUR_FADE_DELAY } from "./constants";

type HackathonLink = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  links?: readonly HackathonLink[];
};

type HackathonsSectionProps = {
  hackathons: readonly Hackathon[];
};

export function HackathonsSection({ hackathons }: HackathonsSectionProps) {
  return (
    <section id="hackathons">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <img
                src="/decor/iss.png"
                alt="Space Station"
                className="w-full my-4 md:my-6  lg:my-12"
              />

              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Projects & Patents
              </div>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ideas & Innovations
              </h2>

              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Each piece allowed me to explore and articulate my understanding
                of complex topics, fostering a deeper appreciation for the
                intersection of theory & practice.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l border-white divide-white">
            {hackathons.map((project, index) => (
              <BlurFade
                key={project.title + project.dates}
                delay={BLUR_FADE_DELAY * 15 + index * 0.05}
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
          <img
            src="/decor/cassinie.png"
            alt="Space Craft"
            className="w-full"
          />
        </BlurFade>
      </div>
    </section>
  );
}

