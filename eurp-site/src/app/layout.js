"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import {WagmiProvider} from "wagmi";
import {getDefaultConfig, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base, baseSepolia,
} from 'wagmi/chains';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*export const metadata = {
  title: "EURP - Euro Protocol ",
  description: "A stablecoin for free financial markets",
};*/



const config = getDefaultConfig({
  appName: 'EURP',
  projectId: 'YOUR_PROJECT_ID',
  chains: [ baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
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
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
  );
}
