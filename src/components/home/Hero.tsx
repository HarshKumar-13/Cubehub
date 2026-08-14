"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Bottom-Left bracket starts inward (top-right) and expands outwards
  const bracketLeftVariants: Variants = {
    hidden: { opacity: 0, x: 40, y: -40 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Top-Right bracket starts inward (bottom-left) and expands outwards
  const bracketRightVariants: Variants = {
    hidden: { opacity: 0, x: -40, y: 40 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative h-[100vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assests/Hero.png"
          alt="CubeHighways Infrastructure"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Adjusted gradient for centered text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Centered Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10 text-white flex flex-col items-center justify-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative px-12 py-8 inline-block text-center">
          
          {/* Bottom-Left L-Bracket */}
          <motion.div 
            variants={bracketLeftVariants}
            className="absolute left-0 bottom-0 w-12 h-12 border-b-[3px] border-l-[3px] border-white"
          ></motion.div>

          {/* Top-Right Inverse Bracket */}
          <motion.div 
            variants={bracketRightVariants}
            className="absolute right-0 top-0 w-12 h-12 border-t-[3px] border-r-[3px] border-white"
          ></motion.div>
          
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl lg:text-[5rem] font-semibold tracking-tight mb-4 leading-[1.1]">
            We are Cubehighways
          </motion.h1>
          
          <motion.p variants={textVariants} className="text-xl md:text-2xl font-light tracking-wide text-gray-200">
            Building India's Infrastructure Future
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom Center Accessibility Button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <button className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white text-[11px] uppercase tracking-widest px-6 py-2.5 rounded-sm border border-white/20 transition-all">
          Accessibility Options
        </button>
      </div>

      {/* Right Side Social Bar */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
        {['WA', 'IN', 'YT', 'X', 'FB'].map((platform, i) => (
          <Link key={i} href="#" className="w-8 h-8 bg-white/90 text-cube-dark rounded-sm flex items-center justify-center text-[10px] font-bold hover:bg-cube-green hover:text-white transition-colors shadow-lg">
            {platform}
          </Link>
        ))}
      </div>

      {/* 
        Bottom Right Slanted Cutout
        Uses a clip-path polygon to create a perfect triangle that slopes UP to the right edge.
      */}
      <div
  className="absolute bottom-0 left-0 w-full h-[40px] bg-white z-10"
  style={{
    clipPath: "polygon(0 100%, 80% 100%, 88% 0, 100% 0, 100% 100%)",
  }}
/>
      
    </section>
  );
}