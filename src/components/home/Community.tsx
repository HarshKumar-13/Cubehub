import Image from "next/image";

export default function Community() {
  return (
    <section className="bg-white pt-24 pb-0">
      
      {/* Header (Inside standard container) */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 bg-gray-300 transform skew-y-12"></div>
              <div className="w-4 h-4 bg-cube-green transform -skew-y-12"></div>
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase italic text-gray-500">
              Our purpose in action
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium text-cube-dark mb-6">
            Community
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Infrastructure goes beyond roads. We actively engage with local communities to create shared value, promote safety, and support livelihoods.
          </p>
        </div>
      </div>

      {/* Banner Carousel (Full width, broke out of container) */}
      <div className="relative w-full h-[600px] overflow-hidden group">
        <Image 
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2400&auto=format&fit=crop" 
          alt="Community Students" 
          fill 
          className="object-cover"
        />
        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        
        {/* Banner Content (Wrapped back in a container so text aligns with the page) */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="text-white max-w-xl">
              <h3 className="text-4xl font-medium mb-3">Community Welfare Programs</h3>
              <p className="text-gray-300 font-light text-base leading-relaxed">
                Supporting local growth and wellbeing through structured development initiatives.
              </p>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-cube-dark transition-colors" aria-label="Previous">
                ←
              </button>
              <button className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-cube-dark transition-colors" aria-label="Next">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}