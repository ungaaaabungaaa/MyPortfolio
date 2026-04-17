import { DATA } from "@/data/resume";
import { AboutSection } from "@/components/sections/about-section";
import { AppsSection } from "@/components/sections/apps-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HackathonsSection } from "@/components/sections/hackathons-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HobbiesSection } from "@/components/sections/hobbies-section";
import { CLIToolsSection } from "@/components/sections/cli-tools-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SafariSection } from "@/components/sections/safari-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${DATA.url}#person`,
      name: "Syed Abdul Muqeeth",
      alternateName: DATA.name,
      description: DATA.description,
      url: DATA.url,
      image: `${DATA.url}${DATA.avatarUrl}`,
      jobTitle: "AI Research Engineer and Full-Stack Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressCountry: "India",
      },
      sameAs: Object.values(DATA.contact.social)
        .map((social) => social.url)
        .filter((url) => !url.startsWith("mailto:")),
      alumniOf: DATA.education.slice(0, 2).map((item) => ({
        "@type": "CollegeOrUniversity",
        name: item.school,
        url: item.href === "#" ? undefined : item.href,
      })),
      knowsAbout: DATA.skills,
    },
    {
      "@type": "WebSite",
      "@id": `${DATA.url}#website`,
      name: "Muqeeth Portfolio",
      url: DATA.url,
      description: DATA.description,
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${DATA.url}#webpage`,
      url: DATA.url,
      name: "Muqeeth | AI Research Engineer & Full-Stack Developer",
      description: DATA.description,
      isPartOf: {
        "@id": `${DATA.url}#website`,
      },
      about: {
        "@id": `${DATA.url}#person`,
      },
      primaryImageOfPage: `${DATA.url}/images/social/og-image.jpg`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
        <CLIToolsSection />
        <ContactSection emailUrl={DATA.contact.social.email.url} />
      </main>
    </>
  );
}
