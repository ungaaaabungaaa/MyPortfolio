import { HackathonCard } from "@/components/hackathon-card";
import { BlurFade } from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { HyperText } from "@/components/magicui/hyper-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Head from "next/head";
import { CalPopup } from "@/components/cal";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedTestimonialsDemo } from "./animated-testimonials";
import SafariSection from "@/components/SafariSection";
import { MorphingText } from "@/components/magicui/morphing-text";
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Syed Abdul Muqeeth's Portfolio - Showcasing innovative projects and creative work in web development, design, and technology."
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Syed Abdul Muqeeth's Portfolio" />
        <meta
          property="og:description"
          content="Showcasing innovative projects and creative work in web development, design, and technology."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://syedabdulmuqeeth.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Syed Abdul Muqeeth's Portfolio" />
        <meta
          name="twitter:description"
          content="Showcasing innovative projects and creative work in web development, design, and technology."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
      </Head>

      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi,I&apos;m <AuroraText>Muqeeth</AuroraText>
                  </h1>
                </BlurFade>
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <HyperText
              className="text-xl font-bold"
              text="About Me"
              duration={600}
            ></HyperText>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
            <img
              src="/decor/firefightingrobot.png"
              alt="FireFightingRobot"
              className="w-full mt-4 md:mt-12 lg:mt-16"
            />
          </BlurFade>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <HyperText
                className="text-xl font-bold"
                text="Skills"
                duration={600}
              ></HyperText>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <SafariSection />

        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <HyperText
                className="text-xl font-bold"
                text="Work Experience"
                duration={600}
              ></HyperText>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <HyperText
                className="text-xl font-bold"
                text="Education"
                duration={600}
              ></HyperText>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  description={education.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

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
                    I&apos;ve written various Research Papers, Articles, &
                    Projects, covering diverse subjects. Here are some of my
                    standout contributions.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
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
        <section className="hidden md:block" id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  AppStore
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My APP&apos;s
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trying Out Flutter & React Native.
                </p>
              </div>
            </div>
            <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
          </BlurFade>
        </section>

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
                    Each piece allowed me to explore and articulate my
                    understanding of complex topics, fostering a deeper
                    appreciation for the intersection of theory & practice.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l border-white divide-white">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
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

        <section id="hobbies">
          <div className="space-y-12 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center py-4">
                <div className="space-y-2">

                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hands-On Projects
                  </div>
                  
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Hobbie Project&lsquo;s
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    from 3D printing & custom keyboards to cyberdecks & RAG
                    apps, I love turning wild ideas into working prototypes
                  </p>
                </div>
              </div>


              <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-full h-auto lg:h-auto">
                  <h3 className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-semibold">
                    Crone Keyboard V.1 
                  </h3>
                  <div className="text-base">
                    <span className="">
                     Corne keyboard is a popular, split, ergonomic, mechanical keyboard with a 40% layout, featuring a 3x6 column staggered key layout with 3 thumb keys per half
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 justify-center items-center">
                    <img
                src="/hobbies/CroneKeyboardv1.png"
                alt="Space Craft"
                className="w-full"
              />
                  </div>
              </div>
              
              <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-full h-[24rem] lg:h-[32rem]">
                  <h3 className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-semibold">
                    CyberDeck
                  </h3>
                  <div className="text-base">
                    <span className="">
                      Кибердек RA01 is a custom-made wearable computer, inspired by classic cyberpunk science fiction.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 justify-center items-center">
                    <MorphingText texts={["Кибердек", "CyberDeck"]} />
                  </div>
              </div>

                <div className="flex basis-full flex-col p-4 tracking-tight  sm:basis-1/2 w-full h-[24rem] lg:h-[32rem]">
                  <h3 className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-semibold">
                    6 Axis
                  </h3>
                  <div className="text-base">
                    <span className="">
                      Arm has 6+1 degrees of freedom, which is the same as a typical industrial robot, thus necessary for displaying nearly all manufacturing & domestic uses.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-[#11998e] to-[#38ef7d] justify-center items-center">
                    <MorphingText texts={["6DOF", "Robot Arm"]} />
                  </div>
              </div>


              <div className="flex basis-full flex-col p-4 tracking-tight  sm:basis-1/2 w-full h-[24rem] lg:h-[32rem]">
                  <h3 className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-semibold">
                    Robotic Telescope
                  </h3>
                  <div className="text-base">
                    <span className="">
                      The Ultrascope is an ARO (Automated Robotic Observatory) with two designs in the works, the Explorer, with a 3.5″ mirror, and the Odyssey, with an 8″ mirror
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-[#FF0099] to-[#493240] justify-center items-center">
                    <MorphingText texts={["3D", "Telescope"]} />
                  </div>
              </div>

              <div className="flex basis-full flex-col p-4 tracking-tight  sm:basis-1/2 w-full h-[24rem] lg:h-[32rem]">
                  <h3 className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-semibold">
                    HomeLab
                  </h3>
                  <div className="text-base">
                    <span className="">
                     small-scale environment meant to simulate different components of a business network.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-[#2980B9] via-[#6DD5FA] to-[#FFFFFF] justify-center items-center">
                    <MorphingText texts={["HomeLab", "Network"]} />
                  </div>
              </div>


            </BlurFade>
          </div>
        </section>
        
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact.social.email.url}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on Email
                  </Link>{" "}
                  and I&apos;ll reply when I can—assuming it&apos;s not
                  something I didn&apos;t ask for
                </p>
                <br></br>
                <CalPopup></CalPopup>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}
