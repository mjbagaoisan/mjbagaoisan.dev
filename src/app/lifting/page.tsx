import { LiftingPage } from "@/components/lifting/lifting-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Powerlifitng",
  description: "getting strong!",
};

export default function Lifting() {
  return <LiftingPage />;
}
