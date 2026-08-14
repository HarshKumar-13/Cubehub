"use client";

import { useState } from "react";
import Image from "next/image";

const features = [
  {
    title: "Connecting\nlives",
    description: "We operate across critical highway corridors, enabling safer travel, stronger communities, and seamless movement of goods that powers economic growth.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Boosting\ngrowth",
    description: "Strategic investments driving national prosperity and logistical efficiency.",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Safer\njourneys",
    description: "Implementing world-class safety standards and intelligent monitoring systems.",
    image: "https://images.unsplash.com/photo-1517409240801-6c7c4c92df5f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ConnectingLives() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Headlines */}
        <div className="w-full lg:w-1/3 space-y-6">
          <h2 className="text-4xl md:text-5xl font-medium text-cube-dark flex gap-4">
            <span className="text-cube-green font-semibold">Push</span> boundaries
          </h2>
          <h2 className="text-4xl md:text-5xl font-medium text-cube-dark flex gap-4">
            <span className="text-cube-green font-semibold">Lead</span> innovation
          </h2>
          <h2 className="text-4xl md:text-5xl font-medium text-cube-dark flex gap-4">
            <span className="text-cube-green font-semibold">Drive</span> transformation
          </h2>
        </div>

        {/* Right Side: Flex Accordion Gallery */}
        <div className="w-full lg:w-2/3 flex h-[450px] gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`relative h-full rounded-md overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                hoveredIndex === index ? "w-[50%]" : "w-[25%]"
              }`}
            >
              <Image 
                src={feature.image} 
                alt="Feature background" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <h3 className={`text-2xl md:text-3xl font-semibold mb-3 whitespace-pre-line leading-tight transition-all duration-500 ${
                  hoveredIndex === index ? "transform-none" : "-rotate-90 origin-bottom-left absolute bottom-12 left-8 whitespace-nowrap"
                }`}>
                  {feature.title}
                </h3>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    hoveredIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[13px] font-light text-gray-200 line-clamp-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}