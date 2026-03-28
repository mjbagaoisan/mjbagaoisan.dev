"use client";

import { DATA } from "@/data/resume-data";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsSection() {
  return (
    <section id="projects" className="pb-16">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
          Projects
        </h2>
      </BlurFade>

      <div className="grid gap-4 sm:grid-cols-2">
        {DATA.projects.map((project, idx) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + idx * 0.05}
          >
            <Link
              href={project.href}
              target="_blank"
              className="group relative flex h-full flex-col justify-between rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-sm"
            >
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{project.title}</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-md px-2 py-0.5 text-[10px] font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
