import type React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { BLUR_FADE_DELAY } from "./constants";

type ProjectLink = {
  icon: React.ReactNode;
  type: string;
  href: string;
};

type Project = {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies: readonly string[];
  image?: string;
  video?: string;
  links?: readonly ProjectLink[];
};

type ProjectsSectionProps = {
  projects: readonly Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <img
                src="/decor/satellite.png"
                alt="weather satellite"
                className="w-full my-4 md:my-12 lg:my-16"
              />
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Research
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my Research , Articles & Projects
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve written various Research Papers, Articles, & Projects,
                covering diverse subjects. Here are some of my standout
                contributions.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {projects.map((project, index) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + index * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

