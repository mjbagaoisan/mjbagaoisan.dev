"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export function GitHubContributionsSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const lightTheme = {
    dark: ["#f0f0f0", "#d4d4d4", "#a3a3a3", "#737373", "#525252"],
    light: ["#f0f0f0", "#d4d4d4", "#a3a3a3", "#737373", "#525252"],
  };

  const darkTheme = {
    dark: ["#1a1a1a", "#2a2a2a", "#404040", "#606060", "#808080"],
    light: ["#1a1a1a", "#2a2a2a", "#404040", "#606060", "#808080"],
  };

  return (
    <section id="github" className="pb-16">
      <BlurFade delay={BLUR_FADE_DELAY * 20}>
        <a
          href="https://github.com/mjbagaoisan"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl hover:underline underline-offset-4"
        >
          Contributions
          <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 21}>
        <div className="overflow-x-auto rounded-xl border border-border/50 bg-card/50 p-4 sm:p-6">
          {mounted && (
            <GitHubCalendar
              username="mjbagaoisan"
              colorScheme={theme === "dark" ? "dark" : "light"}
              theme={theme === "dark" ? darkTheme : lightTheme}
              fontSize={12}
              blockSize={11}
              blockMargin={3}
            />
          )}
        </div>
      </BlurFade>
    </section>
  );
}
