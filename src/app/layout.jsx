import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/webcomp/Navbar";
import FuturisticFooter from "@/components/webcomp/Footer";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "Interiofy",
   description: "We design spaces that inspire.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <Navbar />
            {children}
            <FuturisticFooter />
         </body>
      </html>
   );
}
