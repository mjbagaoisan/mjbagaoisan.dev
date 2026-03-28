import { PhotographyPage } from "@/components/photography/photography-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography — MJ Bagaoisan",
  description: "Moments captured through a lens.",
};

export default function Photography() {
  return <PhotographyPage />;
}
