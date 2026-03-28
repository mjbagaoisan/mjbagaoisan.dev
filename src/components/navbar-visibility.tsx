"use client";

import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Suspense } from "react";

function NavbarVisibilityInner() {
  const searchParams = useSearchParams();
  if (searchParams.get("preview") === "1") return null;
  return <Navbar />;
}

export function NavbarVisibility() {
  return (
    <Suspense fallback={<Navbar />}>
      <NavbarVisibilityInner />
    </Suspense>
  );
}
