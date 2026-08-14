"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-20 pb-6 border-t border-white/10">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Branding & Intro (Spans 2 columns) */}
          <div className="lg:col-span-2 flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 bg-white transform skew-y-12"></div>
                <div className="w-5 h-5 bg-cube-green transform -skew-y-12"></div>
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase">
                CubeHighways
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Driving sustainable infrastructure growth through visionary leadership, operational excellence, and long-term value creation.
            </p>
            <div>
              <h4 className="text-sm font-semibold mb-4">Follow Us!</h4>
              {/* Social Icons Placeholder */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-cube-green transition-colors cursor-pointer flex items-center justify-center text-xs">IN</div>
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-cube-green transition-colors cursor-pointer flex items-center justify-center text-xs">TW</div>
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-cube-green transition-colors cursor-pointer flex items-center justify-center text-xs">FB</div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 opacity-0 hidden lg:block">Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <address className="not-italic text-sm text-gray-400 space-y-4 mb-8">
              <p>12th Floor, DLF Building Number 9B, DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana 122002</p>
              <p><a href="mailto:example@gmail.com" className="hover:text-white transition-colors text-cube-green">example@gmail.com</a></p>
              <p><a href="tel:+919981373291" className="hover:text-white transition-colors">+91 99813 73291</a></p>
            </address>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Write to Us!</h4>
              <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter Email ID" 
                  className="px-4 py-2.5 w-full bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cube-green"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-cube-green text-cube-dark px-4 py-2.5 text-sm font-bold hover:bg-[#8ade3e] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 uppercase tracking-widest">
          <p>© Copyright 2021. All Right Reserved. Cube Highways.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 md:mt-0 font-bold hover:text-cube-green transition-colors flex items-center gap-2"
          >
            Go Up To Top <span className="text-lg leading-none">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}