import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1517409240801-6c7c4c92df5f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
  }
];

export default function Insights() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Column 1 */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            
            {/* Text Block */}
            <div className="flex flex-col justify-center h-[350px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-1">
                  <div className="w-4 h-4 bg-gray-300 transform skew-y-12"></div>
                  <div className="w-4 h-4 bg-cube-green transform -skew-y-12"></div>
                </div>
                <span className="text-sm font-semibold tracking-widest uppercase italic text-gray-500">
                  Insights & Perspectives
                </span>
              </div>
              
              <h2 className="text-5xl font-medium text-cube-dark mb-6 leading-tight">
                Thought<br />Leadership
              </h2>
              <p className="text-gray-600 mb-8 text-[15px] leading-relaxed max-w-sm">
                Stay informed with our latest updates on infrastructure, sustainability, and innovation shaping India's highways.
              </p>
              <Link href="/insights" className="inline-flex w-fit items-center gap-4 bg-cube-dark text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors">
                Explore More <span>→</span>
              </Link>
            </div>

            {/* Article 2 (Bottom Left) */}
            <Link href={`/insights/2`} className="relative group overflow-hidden block h-[350px]">
              <Image src={articles[1].image} alt="Article 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <span className="text-xs font-semibold uppercase tracking-widest mb-3 block text-gray-300">Featured article</span>
                <h3 className="text-xl font-medium mb-5 leading-snug">{articles[1].title}</h3>
                <div className="inline-flex items-center gap-4 border border-white/40 px-5 py-2.5 text-[11px] uppercase tracking-widest hover:bg-white hover:text-cube-dark transition-colors">
                  Click To Read More <span>→</span>
                </div>
              </div>
            </Link>

          </div>

          {/* Column 2 */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            
            {/* Article 1 (Top Right) */}
            <Link href={`/insights/1`} className="relative group overflow-hidden block h-[350px]">
              <Image src={articles[0].image} alt="Article 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <span className="text-xs font-semibold uppercase tracking-widest mb-3 block text-gray-300">Featured article</span>
                <h3 className="text-xl font-medium mb-5 leading-snug">{articles[0].title}</h3>
                <div className="inline-flex items-center gap-4 border border-white/40 px-5 py-2.5 text-[11px] uppercase tracking-widest hover:bg-white hover:text-cube-dark transition-colors">
                  Click To Read More <span>→</span>
                </div>
              </div>
            </Link>

            {/* Article 3 (Bottom Right) */}
            <Link href={`/insights/3`} className="relative group overflow-hidden block h-[350px]">
              <Image src={articles[2].image} alt="Article 3" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <span className="text-xs font-semibold uppercase tracking-widest mb-3 block text-gray-300">Featured article</span>
                <h3 className="text-xl font-medium mb-5 leading-snug">{articles[2].title}</h3>
                <div className="inline-flex items-center gap-4 border border-white/40 px-5 py-2.5 text-[11px] uppercase tracking-widest hover:bg-white hover:text-cube-dark transition-colors">
                  Click To Read More <span>→</span>
                </div>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}