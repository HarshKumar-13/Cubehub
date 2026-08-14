"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Andhra Pradesh Expressway Ltd. (APEL)",
    location: "Andhra Pradesh",
    coordinates: { top: "65%", left: "55%" },
    image:
      "https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=600&auto=format&fit=crop",
    slug: "apel-expressway",
  },
  {
    id: "02",
    title: "Western Corridor Infrastructure",
    location: "Gujarat",
    coordinates: { top: "45%", left: "30%" },
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=600&auto=format&fit=crop",
    slug: "western-corridor",
  },
  {
    id: "03",
    title: "Northern Transit Hub",
    location: "Haryana",
    coordinates: { top: "30%", left: "35%" },
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
    slug: "northern-transit",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="relative overflow-hidden bg-[#212121] py-24 lg:py-28">
      <div className="relative mx-auto flex min-h-[650px] w-full max-w-[1400px] px-6 lg:px-10">
        
        {/* LEFT CONTENT */}
        <div className="relative z-20 flex w-full flex-col pt-10 lg:w-[34%] lg:pt-16">
          
          {/* Our Projects */}
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/assests/projects-icon.svg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />

            <span className="text-[20px] font-normal italic text-white">
              Our Projects
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[52px] font-medium leading-[1.12] tracking-[-0.02em] text-white xl:text-[60px]">
            Making Every
            <br />
            Journey Matter
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-[16px] text-[#A7B0BF]">
            Driving Change Across India
          </p>
        </div>

        {/* MAP AREA */}
        <div className="relative flex w-full items-center justify-center lg:w-[66%]">
          
          {/* Larger Map */}
          <div className="relative h-[620px] w-[720px] max-w-none pointer-events-none">
            <Image
              src="/assests/map.svg"
              alt="India Projects Map"
              fill
              className="object-contain"
              priority
            />

            {/* Dashed line */}
            <div className="absolute left-[5%] top-1/2 w-[90%] border-t border-dashed border-cube-green/30" />
          </div>

          {/* MAP MARKERS */}
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`absolute z-20 -ml-5 -mt-5 flex h-10 w-10 items-center justify-center transition-all duration-300 hover:scale-110 ${
                activeProject.id === project.id
                  ? "text-cube-green drop-shadow-[0_0_10px_rgba(123,185,54,0.9)]"
                  : "text-gray-500 opacity-70"
              }`}
              style={{
                top: project.coordinates.top,
                left: project.coordinates.left,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </button>
          ))}

          {/* PROJECT CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute z-30"
              style={{
                top: `calc(${activeProject.coordinates.top} - 15%)`,
                left: `calc(${activeProject.coordinates.left} + 5%)`,
              }}
            >
              <Link
                href={`/projects/${activeProject.slug}`}
                className="group block"
              >
                <div className="w-[300px] border border-white/5 bg-[#1A1A1A] p-3 shadow-2xl transition-colors hover:border-cube-green/50">
                  
                  <div className="relative mb-4 h-[160px] w-full overflow-hidden">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />

                    <div className="absolute left-4 top-4 text-3xl font-light text-white">
                      {activeProject.id}
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-1 text-white">
                    <h4 className="w-4/5 text-sm font-medium leading-snug text-gray-300">
                      {activeProject.title}
                    </h4>

                    <span className="text-cube-green transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}