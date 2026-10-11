import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk as FontSans } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/Aurora";
import { SplashScreen } from "@/components/splash-screen";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteTitle = DATA.seoTitle;
const socialImage = "/opengraph-image";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050816",
};

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: siteTitle,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.seoDescription,
  applicationName: "Muqeeth Portfolio",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Syed Abdul Muqeeth", url: DATA.url }],
  creator: "Syed Abdul Muqeeth",
  publisher: "Syed Abdul Muqeeth",
  category: "technology",
  keywords: [
    "Syed Abdul Muqeeth",
    "Muqeeth portfolio",
    "AI and behavioral psychology researcher",
    "human-AI interaction",
    "full-stack developer",
    "Next.js developer",
    "React Native developer",
    "machine learning engineer",
    "robotics engineer",
    "LLM engineer",
    "Human-AI interaction",
  ],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#050816",
      },
    ],
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: siteTitle,
    description: DATA.seoDescription,
    url: DATA.url,
    siteName: "Muqeeth Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Syed Abdul Muqeeth — AI & Behavioral Psychology Researcher",
        type: "image/png",
      },
    ],
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
    title: siteTitle,
    description: DATA.seoDescription,
    card: "summary_large_image",
    images: [{ url: socialImage, alt: "Syed Abdul Muqeeth — AI & Behavioral Psychology Researcher" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Muqeeth Portfolio",
  },
  other: {
    "msapplication-TileColor": "#050816",
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
                  if (sessionStorage.getItem('portfolio-intro-seen')) {
                    document.documentElement.dataset.skipIntro = 'true';
                  }
                  sessionStorage.setItem('portfolio-intro-seen', 'true');
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
        <SplashScreen portraitSrc={DATA.avatarUrl} />
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[#110e16]">
          <Aurora colorStops={["#7cff67", "#b497cf", "#5227ff"]} speed={1} blend={0.5} amplitude={1} />
        </div>

        <TooltipProvider delayDuration={0}>
          {/* Content */}
          <div className="relative z-10 min-h-[100dvh] max-h-[100dvh]  max-w-full md:max-w-2xl mx-auto lg:py-12 sm:py-24 lg:px-6 py-12 px-2">
            <div className="min-h-[100dvh] lg:min-h-screen md:p-4 lg:p-6">
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
