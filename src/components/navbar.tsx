"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { DATA } from "@/data/resume-data";
import { Dock, DockIcon } from "@/components/ui/dock";
import { BlurFade } from "@/components/ui/blur-fade";

function PreviewPortal({ href, label }: { href: string; label: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div className="pointer-events-none fixed top-[82px] left-1/2 z-[60] -translate-x-1/2 hidden md:block">
      <div className="mx-auto h-2 w-2 rotate-45 translate-y-[3px] border-t border-l border-border/60 bg-background" />
      <div className="overflow-hidden rounded-lg border border-border/60 bg-background shadow-xl">
        <div className="h-[160px] w-[220px] overflow-hidden">
          <iframe
            src={`${href}?preview=1`}
            title={`${label} preview`}
            className="h-[640px] w-[880px] origin-top-left scale-[0.25] pointer-events-none"
            tabIndex={-1}
            scrolling="no"
          />
        </div>
        <div className="px-2 py-1 text-[10px] font-medium text-muted-foreground text-center border-t border-border/40">
          {label}
        </div>
      </div>
    </div>,
    document.body
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isPreview, setIsPreview] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hoveredItem = DATA.navbar.find((i) => i.label === hoveredNav);

  useEffect(() => {
    if (window.location.search.includes("preview=1")) setIsPreview(true);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setHoveredNav(label), 300);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredNav(null);
  };

  if (isPreview) return null;

  return (
    <>
      {hoveredItem && (
        <PreviewPortal href={hoveredItem.href} label={hoveredItem.label} />
      )}
      <BlurFade delay={0.1}>
        <header className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center pb-6 md:top-0 md:bottom-auto md:pt-6">
          <nav className="pointer-events-auto">
            <Dock
            direction="middle"
            className="border-border/40 bg-background/70 shadow-lg shadow-black/[0.03] backdrop-blur-xl dark:shadow-white/[0.03]"
          >
            {DATA.navbar.map((item) => (
              <DockIcon key={item.label}>
                <Link
                  href={item.href}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    "flex h-full w-full items-center justify-center rounded-full transition-colors",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              </DockIcon>
            ))}

            <div className="mx-1 h-8 w-px bg-border/60" />

            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <DockIcon key={name}>
                <Link
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-full w-full items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              </DockIcon>
            ))}

            <div className="mx-1 h-8 w-px bg-border/60" />

            <DockIcon>
              <ThemeToggle />
            </DockIcon>
          </Dock>
          </nav>
        </header>
      </BlurFade>
    </>
  );
}
