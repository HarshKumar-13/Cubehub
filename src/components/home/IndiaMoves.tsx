export default function IndiaMoves() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Editorial Text */}
        <div className="w-full md:w-1/2 max-w-xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-cube-dark mb-6 leading-tight">
            India Moves.<br />We Move With It.
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            From faster journeys to stronger communities, Cube Highways enables economic growth by creating reliable, future-ready road networks across India.
          </p>
        </div>

        {/* Right: Abstract Graphic Representation */}
        <div className="w-full md:w-1/2 relative h-[300px] flex flex-col justify-center items-end gap-3 opacity-80">
          <div className="h-12 w-full max-w-[80%] bg-gradient-to-r from-transparent to-cube-green/20"></div>
          <div className="h-12 w-full max-w-[60%] bg-gradient-to-r from-transparent to-cube-green/40"></div>
          <div className="h-12 w-full max-w-[90%] bg-gradient-to-r from-transparent to-cube-green/30"></div>
          <div className="h-12 w-full max-w-[70%] bg-gradient-to-r from-transparent to-cube-green/50"></div>
        </div>

      </div>
    </section>
  );
}