import Image from "next/image";

export default function Partners() {
  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Row 1: Our Partners */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 bg-gray-300 transform skew-y-12"></div>
              <div className="w-4 h-4 bg-cube-green transform -skew-y-12"></div>
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase italic text-gray-500">
              Our Partners
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-start border-b border-gray-100 pb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative w-48 h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=400&auto=format&fit=crop" alt={`Partner ${i}`} fill className="object-contain object-left" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Group of Companies */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 bg-gray-300 transform skew-y-12"></div>
                <div className="w-4 h-4 bg-cube-green transform -skew-y-12"></div>
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase italic text-gray-500">
                Group of companies
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-cube-dark leading-tight">
              <span className="text-cube-green font-semibold">CubeHighways</span><br />
              brings together
            </h2>
          </div>
          
          <div className="w-full lg:w-2/3 flex gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="relative w-56 h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=400&auto=format&fit=crop" alt={`Company ${i}`} fill className="object-contain object-left" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}