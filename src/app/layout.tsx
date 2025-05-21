import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar/Navbar";
import Footer1 from "@/components/main/Footer/Footer1";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BATP - Behavior Analysis & Therapy Partners",
  description: "BATP - Behavior Analysis & Therapy Partners",
  icons: {
    icon: "/images/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
   <Navbar/>
        
        {children}
        <Footer1/>
        </body>
    </html>
  );
}
