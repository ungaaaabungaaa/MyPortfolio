import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Space_Grotesk as FontSans } from "next/font/google";
import "./globals.css";
import LiquidEther from "@/components/LiquidEther";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme !== 'dark') {
                    localStorage.setItem('theme', 'dark');
                  }
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased relative dark",
          fontSans.variable
        )}
      >
        {/* LiquidEther Background */}
        <div className="fixed inset-0 z-0">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={true}
            viscous={50}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={true}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        
        <TooltipProvider delayDuration={0}>
          {/* Content */}
          <div className="relative z-10 min-h-screen max-w-3xl mx-auto py-12 sm:py-24 px-6">
            <div className="backdrop-blur-sm rounded-3xl shadow-2xl min-h-screen p-6 sm:p-8">
              {children}
            </div>
          </div>
          
          {/* Navbar - Outside glass container for proper positioning */}
          <Navbar />
        </TooltipProvider>
      </body>
    </html>
  );
}
