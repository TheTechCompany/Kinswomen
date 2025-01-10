import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";


const laviossa = localFont({src: './Laviossa-Medium.otf', variable: '--font-laviossa'});
const leagueSpartan = localFont({src: './LeagueSpartan-VariableFont_wght.ttf', variable: '--font-spartan'});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Kinswoman",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${laviossa.variable} ${leagueSpartan.variable}`}>
        {children}
      </body>
    </html>
  );
}
