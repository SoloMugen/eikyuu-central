import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eikyuu News",
  description: "The Legitimacy Engine",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import CollapsibleSidebar from "@/components/CollapsibleSidebar";
import Footer from "@/components/Footer";
import ScrollToBottom from "@/components/ScrollToBottom";

// ... existing imports

export default function RootLayout({
  children,
  evidence,
  conflict,
}: Readonly<{
  children: React.ReactNode;
  evidence: React.ReactNode;
  conflict: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen bg-background text-foreground relative">
            <ScrollToBottom />
            {/* Main Feed Area */}
            <main className="flex-1 w-full p-0 flex flex-col">
              <div className="flex-1">
                {children}
              </div>
              <Footer />
            </main>

            {/* Evidence Sidebar (Desktop only or Drawer on mobile) */}
            <CollapsibleSidebar>{evidence}</CollapsibleSidebar>
          </div>
          {/* Conflict Module (Positioned or Modal-like) */}
          {conflict}
        </ThemeProvider>
      </body>
    </html>
  );
}
