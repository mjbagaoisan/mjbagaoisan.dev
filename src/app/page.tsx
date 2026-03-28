import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { GitHubContributionsSection } from "@/components/sections/github-contributions";
import { SocialsSection } from "@/components/sections/socials";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 pt-24 pb-12 md:pt-32">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <GitHubContributionsSection />
      <SocialsSection />
    </div>
  );
}
