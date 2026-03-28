"use client";

import { DATA } from "@/data/resume-data";
import { BlurFade } from "@/components/ui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero" className="pb-12">
      <div className="flex flex-col gap-6">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m Marc{" "}
            <span className="inline-block origin-[70%_70%] animate-[wave_2.5s_ease-in-out_infinite]">
              👋
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Junior @ UCLA studying Computer Science and Linguistics.
          </p>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I’m most interested in backend development, with a growing focus on infrastructure and distributed systems.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
