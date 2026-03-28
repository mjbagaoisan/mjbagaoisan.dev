import type { Metadata, Viewport } from "next";
import { Newsreader, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "marc jowell bagaoisan",
  description:
    "CS & Linguistics @ UCLA.",
  metadataBase: new URL("https://mjbagaoisan.dev"),
  openGraph: {
    title: "MJ Bagaoisan",
    description:
      "CS & Linguistics @ UCLA",
    url: "https://mjbagaoisan.dev",
    siteName: "MJ Bagaoisan",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
