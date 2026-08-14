import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

// 1. Import your global layout components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configure Albert Sans
const albert = Albert_Sans({ 
  subsets: ["latin"],
  variable: "--font-albert",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CubeHighways",
  description: "Building India's Infrastructure Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albert.variable} font-sans antialiased min-h-screen flex flex-col bg-white`}>
        
        {/* 2. Global Header / Navbar (Sticky at the top) */}
        <Header />
        
        {/* 3. The main page content (Hero, Impact, etc. will render inside here) */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* 4. Global Footer (Always at the bottom) */}
        <Footer />
        
      </body>
    </html>
  );
}