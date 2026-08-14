import Image from "next/image";

export default function Impact() {
  return (
    <section className="relative bg-cube-dark text-white py-24 overflow-hidden border-t border-white/10">
      
      {/* Background Vertical Grid Lines */}
      <div className="absolute inset-0 z-0 flex justify-between container mx-auto px-4 pointer-events-none opacity-10">
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white hidden md:block"></div>
        <div className="w-px h-full bg-white hidden lg:block"></div>
        <div className="w-px h-full bg-white hidden lg:block"></div>
        <div className="w-px h-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            {/* Cube Logo Placeholder */}
            <div className="w-6 h-6 bg-cube-green rotate-45 transform origin-center"></div>
            <span className="text-sm font-medium tracking-widest uppercase italic text-gray-300">
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
            Creating Value<br />Across India
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
            Our work spans across the country, impacting millions of daily commuters, logistics networks, and communities.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="bg-cube-green p-8 rounded-2xl flex flex-col justify-between min-h-[260px]">
              <h3 className="text-4xl lg:text-5xl font-semibold mb-4">10,000+</h3>
              <p className="text-base font-medium leading-tight">lane kilometers under management</p>
            </div>
            <div className="relative h-[220px] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" alt="Growth graph" fill className="object-cover" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[300px] rounded-2xl overflow-hidden bg-[#2A2A2A] p-4">
               {/* Using a stock map image as a placeholder for the dot map */}
              <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map" fill className="object-cover opacity-60 mix-blend-luminosity" />
            </div>
            <div className="bg-[#262626] p-8 rounded-2xl flex flex-col justify-between min-h-[180px]">
              <h3 className="text-4xl lg:text-5xl font-semibold mb-2">25+</h3>
              <p className="text-sm font-medium text-gray-300">Major road assets across India</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="bg-cube-green p-8 rounded-2xl flex flex-col justify-between min-h-[320px]">
              <h3 className="text-4xl lg:text-5xl font-semibold mb-4">90%</h3>
              <p className="text-base font-medium leading-tight mt-auto">Employees, belonging to 100+ nationalities</p>
            </div>
            <div className="relative h-[160px] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Team high five" fill className="object-cover" />
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#262626] p-8 rounded-2xl flex flex-col justify-between min-h-[200px]">
              <h3 className="text-4xl lg:text-5xl font-semibold mb-4">20+</h3>
              <p className="text-sm font-medium text-gray-300">Presence in Indian states</p>
            </div>
            <div className="relative h-[280px] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop" alt="Cityscape" fill className="object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}