import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1811 Labs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Sidebar/> */}
        {children}
        </body>
    </html>
  );
}
