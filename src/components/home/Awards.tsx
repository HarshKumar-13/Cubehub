import Image from "next/image";
import Link from "next/link";

const awards = [
  {
    id: 1,
    date: "12 January, 2026",
    title: "Excellence in Sustainable Road Infrastructure Award",
    description: "Recognized for leadership in ESG-driven infrastructure development.",
    readTime: "3 Minute Read",
    image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop",
    href: "/awards/1"
  },
  {
    id: 2,
    date: "12 January, 2026",
    title: "Excellence in Sustainable Road Infrastructure Award",
    description: "Recognized for leadership in ESG-driven infrastructure development.",
    readTime: "3 Minute Read",
    image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop",
    href: "/awards/2"
  }
];

export default function Awards() {
  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 lg:gap-8">
        
        {/* Left Column: Typography & Socials */}
        <div className="w-full lg:w-5/12 flex flex-col pt-4">
          <h2 className="text-5xl md:text-[3.5rem] font-medium text-cube-dark leading-[1.1] mb-12 max-w-lg">
            In the Fast Lane of India’s Growth,{" "}
            <span className="text-cube-green">Cube Highways</span> Leads the Way.
          </h2>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Follow Us!</h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <Link href="#" className="text-cube-dark hover:text-cube-green transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" className="text-cube-dark hover:text-cube-green transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              {/* Facebook */}
              <Link href="#" className="text-cube-dark hover:text-cube-green transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Cards & Controls */}
        <div className="w-full lg:w-7/12 flex flex-col">
          <div className="flex gap-6 overflow-hidden">
            {awards.map((award) => (
              <div key={award.id} className="min-w-[320px] md:min-w-[360px] bg-white flex flex-col shadow-sm border-b-4 border-cube-dark">
                {/* Card Image */}
                <div className="relative h-56 w-full">
                  <Image src={award.image} alt={award.title} fill className="object-cover" />
                </div>
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-gray-500 text-sm mb-4">{award.date}</span>
                  <h4 className="text-xl font-medium text-cube-dark mb-3 leading-snug">
                    {award.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
                    {award.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>{award.readTime}</span>
                  </div>
                  
                  <Link href={award.href} className="text-cube-green text-sm font-medium flex items-center gap-2 hover:text-[#659c29] transition-colors">
                    Click to Read More 
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="flex gap-4 justify-end mt-8">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-cube-dark hover:bg-cube-dark hover:text-white transition-colors" aria-label="Previous">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-cube-dark hover:bg-cube-dark hover:text-white transition-colors" aria-label="Next">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}