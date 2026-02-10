

export default function About() {
   return (
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 py-20">
         <h2 className="font-heading text-4xl">
            Interiors shaped around people,
            not just aesthetics.
         </h2>

         <div className="space-y-6 text-muted">
            <p>
               Our design philosophy blends functionality with refined elegance,
               creating spaces that feel intuitive and timeless.
            </p>

            <div className="grid grid-cols-3 gap-6 text-black">
               <Stat value="12+" label="Years Experience" />
               <Stat value="450+" label="Projects" />
               <Stat value="20+" label="Cities" />
            </div>
         </div>
      </section>
   )
}

function Stat({ value, label }) {
   return (
      <div>
         <p className="text-3xl font-semibold">{value}</p>
         <p className="text-sm text-muted">{label}</p>
      </div>
   )
}
