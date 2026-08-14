"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// --- MOCK DATA ---
const internalNavLinks = [
  "Who We Are",
  "Our Journey",
  "Leadership",
  "Vision & Values",
  "Our Impacts",
  "ESG & Sustainability",
  "Portfolio Management Capabilities"
];

const impactStats = [
  { value: "10,000+", label: "lane kilometers under management" },
  { value: "90%", label: "Employees, belonging to 100+ nationalities" },
  { value: "25+", label: "Major road assets across India" },
  { value: "20+", label: "Presence in Indian states" }
];

const journeyYears = ["2014", "2017", "2020", "2023", "2024"];

const awardsYears = ["2014", "2017", "2020", "2023", "2024"];

export default function AboutUsPage() {
  const [activeJourneyYear, setActiveJourneyYear] = useState("2014");
  const [activeAwardYear, setActiveAwardYear] = useState("2014");

  // Hero Animation Variants
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const bracketVariants: Variants = {
    hidden: { opacity: 0, x: -20, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=3474&auto=format&fit=crop"
            alt="About CubeHighways"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <motion.div 
          className="container mx-auto px-4 lg:px-8 relative z-10 text-white flex flex-col h-full justify-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <div className="relative pl-6 py-4 max-w-3xl">
            {/* Animated L-Bracket */}
            <motion.div 
              variants={bracketVariants}
              className="absolute left-0 bottom-0 w-10 h-10 border-b-[3px] border-l-[3px] border-white"
            ></motion.div>
            
            <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-medium tracking-tight mb-4">
              About Us<span className="text-cube-green">.</span>
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* 2. INTERNAL STICKY NAVIGATION */}
      <div className="sticky top-[80px] z-40 w-full bg-white border-b border-gray-200 shadow-sm overflow-x-auto">
        <div className="container mx-auto px-4 lg:px-8">
          <ul className="flex items-center gap-8 whitespace-nowrap min-w-max h-16">
            {internalNavLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-sm font-medium transition-colors h-16 flex items-center border-b-2 ${
                    idx === 0 ? "border-cube-green text-cube-green" : "border-transparent text-gray-500 hover:text-cube-dark"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. TITLE & INTRO SECTION */}
      <section className="bg-[#FAFAFA] py-20" id="who-we-are">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-medium text-cube-dark mb-6">Title</h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
              In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla 
              lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHO WE ARE */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left side text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-medium text-cube-dark mb-10">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">
                Cube Highways is a long-term owner and operator of critical road infrastructure across India.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                We are focused on creating high-performing highway assets that enable seamless mobility, 
                reliable logistics, and sustained economic growth.
              </p>
            </div>

            {/* Right side list */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12">
              <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                </div>
                <h3 className="text-2xl font-medium text-cube-dark leading-snug pt-2">Singapore-based<br/>company</h3>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                </div>
                <h3 className="text-2xl font-medium text-cube-dark leading-snug pt-2">We invest in<br/>connecting lives</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. VISION & MISSION */}
      <section className="bg-white pb-24" id="vision-&-values">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row gap-6">
          
          <div className="flex-1 bg-[#1A1A1A] text-white p-10 md:p-14 rounded-xl flex flex-col justify-between min-h-[350px]">
            <h3 className="text-3xl md:text-4xl font-medium mb-8 leading-snug">Our Vision Going<br/>Forward</h3>
            <div className="space-y-6 text-gray-300 font-light text-[15px] leading-relaxed">
              <p>Our vision is to build future-ready road infrastructure that balances growth, safety, and sustainability.</p>
              <p>As India's mobility needs evolve, we continue to invest in intelligent systems, responsible asset management, and long-term value creation.</p>
            </div>
          </div>

          <div className="flex-1 bg-cube-green text-white p-10 md:p-14 rounded-xl flex flex-col justify-between min-h-[350px]">
            <h3 className="text-3xl md:text-4xl font-medium mb-8 leading-snug">Our Mission in<br/>Action</h3>
            <div className="space-y-6 text-white/90 font-light text-[15px] leading-relaxed">
              <p>Our mission is to deliver high-performance road networks by integrating advanced technology with sustainable engineering.</p>
              <p>We are committed to enhancing connectivity across India through disciplined asset management & innovation, ensuring every journey is safer, smoother, and more efficient.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. OUR IMPACT (Bento Grid identical to Home) */}
      <section className="relative bg-cube-dark text-white py-24 overflow-hidden" id="our-impacts">
        <div className="absolute inset-0 z-0 flex justify-between container mx-auto px-4 pointer-events-none opacity-10">
          <div className="w-px h-full bg-white"></div>
          <div className="w-px h-full bg-white hidden md:block"></div>
          <div className="w-px h-full bg-white hidden lg:block"></div>
          <div className="w-px h-full bg-white hidden lg:block"></div>
          <div className="w-px h-full bg-white"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 bg-gray-400 transform skew-y-12"></div>
                <div className="w-4 h-4 bg-cube-green transform -skew-y-12"></div>
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase italic text-gray-300">Our Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">Creating Value<br />Across India</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              Our work spans across the country, impacting millions of daily commuters, logistics networks, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Col 1 */}
            <div className="flex flex-col gap-6">
              <div className="bg-cube-green p-8 rounded-2xl flex flex-col justify-between min-h-[260px]">
                <h3 className="text-4xl lg:text-5xl font-semibold mb-4">{impactStats[0].value}</h3>
                <p className="text-base font-medium leading-tight">{impactStats[0].label}</p>
                <span className="text-[10px] uppercase tracking-widest mt-4 opacity-80">*FY25, excluding currency fluctuation</span>
              </div>
              <div className="relative h-[220px] rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" alt="Growth" fill className="object-cover" />
              </div>
            </div>
            {/* Col 2 */}
            <div className="flex flex-col gap-6">
              <div className="relative h-[300px] rounded-2xl overflow-hidden bg-[#2A2A2A] p-4">
                <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map" fill className="object-cover opacity-60 mix-blend-luminosity" />
              </div>
              <div className="bg-[#262626] p-8 rounded-2xl flex flex-col justify-between min-h-[180px]">
                <h3 className="text-4xl lg:text-5xl font-semibold mb-2">{impactStats[2].value}</h3>
                <p className="text-sm font-medium text-gray-300">{impactStats[2].label}</p>
              </div>
            </div>
            {/* Col 3 */}
            <div className="flex flex-col gap-6">
              <div className="bg-cube-green p-8 rounded-2xl flex flex-col justify-between min-h-[320px]">
                <h3 className="text-4xl lg:text-5xl font-semibold mb-4">{impactStats[1].value}</h3>
                <p className="text-base font-medium leading-tight mt-auto">{impactStats[1].label}</p>
              </div>
              <div className="relative h-[160px] rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Team" fill className="object-cover" />
              </div>
            </div>
            {/* Col 4 */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#262626] p-8 rounded-2xl flex flex-col justify-between min-h-[200px]">
                <h3 className="text-4xl lg:text-5xl font-semibold mb-4">{impactStats[3].value}</h3>
                <p className="text-sm font-medium text-gray-300">{impactStats[3].label}</p>
              </div>
              <div className="relative h-[280px] rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop" alt="Cityscape" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR JOURNEY */}
      <section className="bg-white py-24" id="our-journey">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="mb-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 bg-gray-300 transform skew-y-12"></div>
                <div className="w-4 h-4 bg-cube-green transform -skew-y-12"></div>
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase italic text-gray-500">Corporate Social Responsibilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-cube-dark mb-6">Our Journey</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              From inception to scale, Cube Highways has grown with a clear focus on disciplined investment, operational excellence, and long-term performance.
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex items-center border-b border-gray-200 mb-16 relative">
            {journeyYears.map((year, idx) => (
              <button
                key={year}
                onClick={() => setActiveJourneyYear(year)}
                className={`flex-1 text-center py-4 text-sm font-medium transition-all relative ${
                  activeJourneyYear === year ? "text-cube-dark" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {year}
                {/* Active Underline Indicator */}
                {activeJourneyYear === year && (
                  <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-cube-green"></div>
                )}
              </button>
            ))}
          </div>

          {/* Journey Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold text-cube-dark mb-6">Established</h3>
              <p className="text-gray-600 text-[22px] leading-relaxed font-light">
                Established as a joint venture of leading global infrastructure investors.
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] w-full bg-gray-100 rounded-sm overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=1200&auto=format&fit=crop" 
                alt={`Milestone ${activeJourneyYear}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR LEADERSHIP */}
      <section className="relative h-[600px] w-full flex items-center" id="leadership">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop"
            alt="Leadership"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#3a1c1c]/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 bg-white/50 transform skew-y-12"></div>
                <div className="w-4 h-4 bg-cube-green transform -skew-y-12"></div>
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase italic text-gray-300">Our Leadership</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium mb-6 leading-[1.1]">Driving the group toward<br/>global leadership</h2>
            <p className="text-gray-200 text-lg font-light mb-10 leading-relaxed max-w-xl">
              Our leadership team combines strategic foresight, operational excellence, and deep industry expertise to build sustainable infrastructure for the future.
            </p>
            <Link href="/leadership" className="inline-flex items-center gap-3 border border-white/40 px-6 py-3 text-sm font-medium hover:bg-white hover:text-cube-dark transition-colors">
              Check our leadership <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. AWARDS & RECOGNITIONS */}
      <section className="bg-[#121212] text-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Awards & Recognitions</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Celebrating milestones, industry acknowledgments, and our commitment to excellence in infrastructure, safety, and sustainability.
            </p>
          </div>

          {/* Timeline Navigation (Awards) */}
          <div className="flex items-center border-b border-gray-700 mb-12 relative">
            {awardsYears.map((year) => (
              <button
                key={`award-${year}`}
                onClick={() => setActiveAwardYear(year)}
                className={`flex-1 text-center py-4 text-sm font-medium transition-all relative ${
                  activeAwardYear === year ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {year}
                {activeAwardYear === year && (
                  <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-cube-green"></div>
                )}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col group cursor-pointer">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-sm">
                  <Image 
                    src="https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop" 
                    alt="Award" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h4 className="text-xl font-medium mb-3 leading-snug group-hover:text-gray-300 transition-colors">
                  Excellence in Sustainable Road Infrastructure Award
                </h4>
                <p className="text-cube-green text-[13px] font-medium tracking-wide">
                  Recognized for leadership in ESG-driven infrastructure development.
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-end gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-cube-dark transition-colors" aria-label="Previous">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-cube-dark transition-colors" aria-label="Next">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </section>

      {/* 10. VIEW INSIGHTS CTA */}
      <section className="relative h-[400px] w-full flex items-center justify-center cursor-pointer group">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400&auto=format&fit=crop"
            alt="View Insights"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
        </div>
        
        <div className="relative z-10 text-white flex items-center gap-4">
          <h2 className="text-5xl md:text-7xl font-medium">View Insights</h2>
          <span className="text-5xl md:text-7xl font-light transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
            ↗
          </span>
        </div>
      </section>

    </div>
  );
}