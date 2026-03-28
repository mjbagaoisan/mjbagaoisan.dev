"use client";

import { DATA } from "@/data/resume-data";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

const BLUR_FADE_DELAY = 0.04;

const videos = [
  { id: 1, src: "/videos/squat-402.mp4", title: "402 Squat", label: "RPE 8" },
  { id: 2, src: "/videos/bench-270.mp4", title: "270 Bench ×2", label: "RPE 8" },
  { id: 3, src: "/videos/deadlift-441.mp4", title: "441 Deadlift", label: "RPE 7.5–8" },
];

export function LiftingPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 pt-24 pb-24 md:pt-32">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Powerlifting
        </h1>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <p className="mt-4 max-w-lg text-base text-muted-foreground">
          powerlifting is pretty cool. currently getting back into it after injury
        </p>
      </BlurFade>

      {/* Current PRs */}
      <section className="mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Current PR&apos;s
          </h2>
        </BlurFade>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {DATA.liftingPRs.map((pr, idx) => (
            <BlurFade key={pr.lift} delay={BLUR_FADE_DELAY * 6 + idx * 0.05}>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card/50 p-4 text-center transition-colors hover:bg-card">
                <span className="text-2xl">{pr.icon}</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {pr.lift}
                </span>
                <span className="text-xl font-semibold tabular-nums">
                  <NumberTicker value={parseInt(pr.weight)} />
                  <span className="ml-1 text-xs text-muted-foreground font-normal">
                    lbs
                  </span>
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="mt-16">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Videos
          </h2>
        </BlurFade>

        <div className="flex flex-col gap-8">
          {videos.map((video, idx) => (
            <BlurFade key={video.id} delay={BLUR_FADE_DELAY * 11 + idx * 0.05}>
              <div className="overflow-hidden rounded-xl border border-border/50 bg-muted/10">
                <video
                  src={video.src}
                  className="w-full max-h-[70vh] object-contain bg-black"
                  controls
                  playsInline
                  preload="metadata"
                  muted={false}
                />
                <div className="px-4 py-3">
                  <p className="text-sm font-medium">{video.title}</p>
                  <p className="text-xs text-muted-foreground">{video.label}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
}
