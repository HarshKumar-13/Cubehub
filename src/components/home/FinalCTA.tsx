import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-28 flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2400&auto=format&fit=crop" 
          alt="Highway Infrastructure" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            We are Cubehighways
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-light mb-10 leading-relaxed max-w-2xl">
            Driving sustainable infrastructure growth through visionary leadership, 
            operational excellence, and long-term value creation.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 border border-white/40 px-6 py-3 text-sm font-medium hover:bg-white hover:text-cube-dark transition-colors"
          >
            Connect With Us <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}