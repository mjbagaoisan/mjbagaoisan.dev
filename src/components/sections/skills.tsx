"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const SKILLS = [
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Cassandra", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "gRPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg" },
  { name: "NATS", icon: "https://cdn.simpleicons.org/nats/27AAE1" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="pb-16">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
          Skills
        </h2>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 17}>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card/50 px-3 py-1.5 text-sm transition-colors hover:bg-accent"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
                unoptimized
              />
              {skill.name}
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
