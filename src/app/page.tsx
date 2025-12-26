import Head from "next/head";
import { DATA } from "@/data/resume";
import { AboutSection } from "@/components/sections/about-section";
import { AppsSection } from "@/components/sections/apps-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HackathonsSection } from "@/components/sections/hackathons-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HobbiesSection } from "@/components/sections/hobbies-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SafariSection } from "@/components/sections/safari-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";

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
        <HeroSection
          name={DATA.name}
          description={DATA.description}
          avatarUrl={DATA.avatarUrl}
          initials={DATA.initials}
        />
        <AboutSection summary={DATA.summary} />
        <SkillsSection skills={DATA.skills} />
        <SafariSection />
        <WorkSection work={DATA.work} />
        <EducationSection education={DATA.education} />
        <ProjectsSection projects={DATA.projects} />
        <AppsSection />
        <HackathonsSection hackathons={DATA.hackathons} />
        <HobbiesSection />
        <ContactSection emailUrl={DATA.contact.social.email.url} />
      </main>
    </>
  );
}
