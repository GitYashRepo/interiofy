



export default function Services() {
   const services = [
      { id: "01", title: "Residential Interiors" },
      { id: "02", title: "Commercial Spaces" },
      { id: "03", title: "Custom Furniture & Styling" },
   ]

   return (
      <section className="max-w-7xl mx-auto px-6 py-20">
         <h2 className="font-heading text-4xl mb-12">Our Design Expertise</h2>

         <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
               <div
                  key={s.id}
                  className="rounded-3xl border p-8 hover:-translate-y-1 transition"
               >
                  <p className="text-muted">{s.id}</p>
                  <h3 className="text-xl mt-4">{s.title}</h3>
               </div>
            ))}
         </div>
      </section>
   )
}
