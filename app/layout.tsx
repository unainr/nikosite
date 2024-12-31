import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IrvinTechSolution | Customer Insights & Feedback Analytics Solutions",
  description: "Transform your business with IrvinTechSolution's advanced customer feedback analytics. We help companies collect, analyze, and leverage customer insights for data-driven growth and improved customer satisfaction.",
  keywords: "customer feedback, business analytics, customer insights, feedback collection, data analytics, IrvinTechSolution, business intelligence",
  openGraph: {
    title: "IrvinTechSolution | Customer Insights & Feedback Analytics Solutions",
    description: "Transform your business with IrvinTechSolution's advanced customer feedback analytics. We help companies collect, analyze, and leverage customer insights for data-driven growth.",
    type: "website",
    locale: "en_US",
    siteName: "IrvinTechSolution",
  },
  twitter: {
    card: "summary_large_image",
    title: "IrvinTechSolution | Customer Insights & Feedback Analytics",
    description: "Transform your business with IrvinTechSolution's advanced customer feedback analytics solutions.",
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
  verification: {
    google: "your-google-verification-code",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
							color="#136fe8"
							height={2}
							crawlSpeed={50}
							speed={1000}
							showSpinner={false}
						/>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
