



export default function Projects() {
   return (
      <section className="max-w-7xl mx-auto px-6 py-20">
         <h2 className="font-heading text-4xl mb-12">Selected Works</h2>

         <div className="grid lg:grid-cols-3 gap-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
         </div>
      </section>
   )
}

function ProjectCard() {
   return (
      <div className="rounded-3xl overflow-hidden group">
         <img
            src="/images/project.jpg"
            className="h-80 w-full object-cover group-hover:scale-105 transition"
         />
         <div className="mt-4">
            <p className="font-medium">Modern Villa</p>
            <p className="text-sm text-muted">Mumbai, India</p>
         </div>
      </div>
   )
}
