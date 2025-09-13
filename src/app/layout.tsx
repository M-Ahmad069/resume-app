import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Resume Builder - Create Job-Winning Resumes in Minutes",
  description: "Use the power of AI to build, format, and export a professional resume with ease - no design skills needed. Get hired faster with our proven templates and tools.",
  keywords: "resume builder, AI resume, professional resume, job application, career, hiring",
  authors: [{ name: "Resume Builder Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Resume Builder - Create Job-Winning Resumes in Minutes",
    description: "Use the power of AI to build, format, and export a professional resume with ease - no design skills needed.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume Builder - Create Job-Winning Resumes in Minutes",
    description: "Use the power of AI to build, format, and export a professional resume with ease - no design skills needed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
