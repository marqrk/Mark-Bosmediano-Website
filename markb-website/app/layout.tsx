import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

import SideNav from "./ui/dashboard/sidenav";



const sans = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const mono = Roboto_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Bosmediano's website",
  description: "A website for hosting Mark Bosmediano's main info and projects",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sans.variable} ${mono.variable} antialiased`}>
                <div className="w-full flex-none md:w-64">
                    <SideNav />
                </div>
                {children}
            </body>
        </html>
    );
}