import type { Metadata } from "next";
import { Geist, Geist_Mono, Playwrite_HU } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import NavBar from "@/modules/ui/components/nav-bar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});
const playwriteHU = Playwrite_HU({
  variable: "--font-playwrite-hu"
});

export const metadata: Metadata = {
  title: "Bookstore",
  description: "Amazing books for everyone"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playwriteHU.variable}  antialiased `}>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
