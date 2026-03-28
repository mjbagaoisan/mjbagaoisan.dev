"use client";

import { DATA } from "@/data/resume-data";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function SocialsSection() {
  return (
    <section id="socials" className="pb-24">
      <BlurFade delay={BLUR_FADE_DELAY * 23}>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
          Connect
        </h2>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 24}>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Always down to talk systems, research, or whatever&apos;s on your mind.
          </p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:border-border hover:bg-accent hover:text-foreground"
              >
                <social.icon className="h-4 w-4" />
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
