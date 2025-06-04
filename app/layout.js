// import { Geist, Geist_Mono } from "next/font/google";
// import { Fredoka } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const freedoka = Fredoka({
//   variable: "--font-fredoka",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Webnet",
  description: "Your priority to build web applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} ${freedoka.variable} antialiased`}
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
