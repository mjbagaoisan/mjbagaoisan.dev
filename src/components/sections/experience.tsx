"use client";

import Image from "next/image";
import { DATA } from "@/data/resume-data";
import { BlurFade } from "@/components/ui/blur-fade";
import { FileText } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function ExperienceSection() {
  return (
    <section id="experience" className="pb-16">
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Experience
          </h2>
          <Link
            href="/MarcJowellBagaoisanResume.pdf"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <FileText className="h-3 w-3" />
            résumé
          </Link>
        </div>
      </BlurFade>

      <div className="space-y-8">
        {DATA.experience.map((exp, idx) => (
          <BlurFade key={exp.company} delay={BLUR_FADE_DELAY * 8 + idx * 0.05}>
            <div className="group relative">
              <div className="flex gap-4">
                <Image
                  src={exp.logoUrl}
                  alt={exp.company}
                  width={40}
                  height={40}
                  className="mt-1 h-10 w-10 shrink-0 rounded-full border border-border/50 bg-background object-contain"
                />
                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-medium leading-snug">
                        {exp.title}
                      </h3>
                      <Link
                        href={exp.href}
                        target="_blank"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {exp.company}
                      </Link>
                    </div>
                    <span className="text-xs text-muted-foreground/70">
                      {exp.start} – {exp.end}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
