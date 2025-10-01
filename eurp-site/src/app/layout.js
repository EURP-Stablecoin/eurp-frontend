import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EURP - Euro Protocol ",
  description: "A stablecoin for free financial markets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <link rel="icon" href="/P.png" sizes="any"/>
        <title>EURP - Euro Protocol</title>
    </head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    {children}
      </body>
    </html>
  );
}
