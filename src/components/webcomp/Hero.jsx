

export default function Hero() {
   return (
      <section className="max-w-7xl mx-auto px-6 pt-20 grid lg:grid-cols-2 gap-16 items-center">
         <div>
            <h1 className="font-heading text-5xl lg:text-6xl leading-tight">
               Purposeful Interiors,
               <br /> Designed for Real Living
            </h1>

            <p className="mt-6 text-muted max-w-md">
               We craft timeless interior spaces that balance beauty, comfort,
               and functionality.
            </p>

            <div className="mt-10 flex gap-4">
               <button className="rounded-full bg-primary text-white px-6 py-3">
                  Start Your Project →
               </button>
               <button className="rounded-full border px-6 py-3">
                  View Our Work
               </button>
            </div>
         </div>

         <div className="relative rounded-3xl overflow-hidden">
            <img
               src="/images/hero-interior.jpg"
               alt="Interior Design"
               className="w-full h-full object-cover"
            />

            <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-6 py-4 shadow">
               <p className="text-2xl font-semibold">98%</p>
               <p className="text-sm text-muted">Client Satisfaction</p>
            </div>
         </div>
      </section>
   )
}
