"use client";

import { useState } from "react";
import Image from "next/image";

const focusData = [
  {
    id: 0,
    title: "National and state highway networks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 1,
    title: "Toll and annuity-based mobility assets",
    description:
      "Focusing on stable revenue models and long-term asset management to ensure consistent growth and infrastructure reliability.",
    image:
      "https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "ESG-compliant infrastructure lifecycle management",
    description:
      "Integrating environmental, social, and governance standards into every phase of our infrastructure lifecycle.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Intelligent transportation systems",
    description:
      "Using intelligent technology and connected infrastructure to improve mobility, efficiency, safety and road user experience.",
    image:
      "https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function CoreFocus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFocus = focusData[activeIndex];

  return (
    <section className="relative overflow-x-hidden bg-[#f5f5f3]">
      {/* ================= HEADER ================= */}
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="pt-20 pb-14 lg:pt-24 lg:pb-16">
          {/* Aligned with the right-side content/card area */}
          <div className="ml-auto w-full lg:w-[52%] xl:w-[50%]">
            <h2 className="text-[42px] font-normal leading-[1.08] text-[#282828] lg:text-[48px] xl:text-[52px]">
              Our Core Focus Areas
            </h2>

            <p className="mt-5 max-w-[600px] text-[16px] leading-[1.5] text-[#343434] lg:text-[17px]">
              Our core focus areas reflect the evolving needs of India's
              infrastructure landscape. We invest in:
            </p>
          </div>
        </div>
      </div>

      {/* ================= IMAGE + CARD AREA ================= */}
      <div className="relative w-full pb-[130px] lg:pb-[120px]">
        {/* ================= FULL WIDTH IMAGE BANNER ================= */}
        <div
          className="
            relative
            h-[580px]
            w-full
            overflow-hidden
            lg:h-[620px]
          "
          style={{
            clipPath:
              "polygon(0 0, 23% 0, 30% 8%, 100% 8%, 100% 100%, 0 100%)",
          }}
        >
          <Image
            key={activeFocus.id}
            src={activeFocus.image}
            alt={activeFocus.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* ================= NAVIGATION ================= */}
          <div className="absolute inset-0 z-10">
            <div className="relative mx-auto h-full max-w-[1600px] px-6 lg:px-10">
              <div className="absolute top-[38%] -translate-y-1/2">
                <div className="flex flex-col gap-7 lg:gap-8">
                  {focusData.map((item, index) => {
                    const isActive = activeIndex === index;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="group text-left"
                      >
                        <span
                          className={`
                            block
                            max-w-[320px]
                            text-[15px]
                            font-medium
                            leading-[1.35]
                            transition-all
                            duration-300
                            lg:max-w-[390px]
                            lg:text-[17px]
                            ${
                              isActive
                                ? "text-white"
                                : "text-white/85 hover:text-white"
                            }
                          `}
                        >
                          {item.title}
                        </span>

                        {/* Active line */}
                        <div
                          className={`
                            mt-3
                            h-px
                            bg-white
                            transition-all
                            duration-500
                            ${
                              isActive
                                ? "w-[260px] lg:w-[390px]"
                                : "w-0"
                            }
                          `}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OVERFLOWING CARD ================= */}
        {/*
          Desktop card position:
          Banner = 620px
          Card ≈ 450px
          Top = 235px

          This keeps approximately 85% of the card inside
          the banner and allows only the lower ~15% to overflow.
        */}
        <div
          className="
            absolute
            left-1/2
            top-[235px]
            z-20
            w-[calc(100%-48px)]
            max-w-[540px]
            -translate-x-1/2
            lg:w-full
            lg:max-w-[580px]
            lg:translate-x-[8%]
          "
        >
          {/* ================= WHITE TEXT SECTION ================= */}
          <div className="min-h-[320px] bg-[#f8f8f7] px-7 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-11">
            <h3 className="max-w-[430px] text-[28px] font-normal leading-[1.12] text-[#282828] sm:text-[30px] lg:text-[32px] xl:text-[34px]">
              {activeFocus.title}
            </h3>

            <p className="mt-6 max-w-[430px] text-[14px] leading-[1.55] text-[#3f3f3f] sm:mt-7 sm:text-[15px] lg:text-[16px]">
              {activeFocus.description}
            </p>
          </div>

          {/* ================= GREEN BOTTOM DESIGN ================= */}
          <div className="relative h-[190px] overflow-hidden bg-cube-green sm:h-[165px] lg:h-[180px]">
            <svg
              className="absolute inset-0 h-full w-full opacity-30"
              viewBox="0 0 600 200"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M-30 120C80 105 145 130 225 105C310 78 320 18 405 20C490 22 520 95 630 150"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M105 230C125 135 190 55 280 55C365 55 405 130 475 155C525 173 565 180 630 180"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M245 230C240 140 280 40 360 10C425 -15 490 55 500 230"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}