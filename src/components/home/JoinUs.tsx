import Image from "next/image";
import Link from "next/link";

export default function JoinUs() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-1">
              <div className="w-3 h-3 bg-gray-300 transform skew-y-12"></div>
              <div className="w-3 h-3 bg-cube-green transform -skew-y-12"></div>
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase italic text-gray-500">
              Strong and growing For Students
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-medium text-cube-dark mb-10">
            Join Our Team
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-md mb-10">
            Discover your next chapter with us. Explore a rewarding career with Cube Highways that aligns with your purpose, passion and potential.
          </p>
          
          <Link 
            href="/careers"
            className="inline-flex w-fit items-center gap-4 bg-cube-dark text-white px-8 py-4 text-sm font-medium hover:bg-black transition-colors"
          >
            Apply Now <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 h-[500px] relative rounded-sm overflow-hidden bg-gray-100">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
            alt="CubeHighways Team" 
            fill 
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}