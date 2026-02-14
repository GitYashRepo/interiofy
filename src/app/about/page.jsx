"use client";

import { ArrowUpRight, CheckCircle2, Users, Trophy, Target, MoveRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
   return (
      <main className="w-full bg-white text-black p-4 md:p-6">
         {/* Bento Grid Hero Section */}
         <section className="max-w-[1600px] mx-auto mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[85vh]">

               {/* Large Left Card - Vision */}
               <div className="lg:col-span-5 relative bg-[#F4F4F4] rounded-[2.5rem] overflow-hidden group h-[60vh] lg:h-full">
                  <img
                     src="/Banner/Home.jpg"
                     alt="Interior Vision"
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Top Tags */}
                  <div className="absolute top-6 left-6 flex gap-2">
                     <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Vision</span>
                     <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Luxury</span>
                     <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Design</span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                     <h2 className="text-white text-3xl font-bold mb-4 leading-tight">
                        Redefining Spaces with <br /> Timeless Elegance
                     </h2>
                     <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-neutral-100 transition-colors cursor-pointer group/btn">
                        Explore Vision <MoveRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </div>
               </div>

               {/* Right Column */}
               <div className="lg:col-span-7 flex flex-col gap-4 h-full">

                  {/* Top Text Block */}
                  <div className="flex-1 bg-neutral-50 rounded-[2.5rem] p-10 flex flex-col justify-center">
                     <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-neutral-900">
                        Life Up Your <br /> Living Room
                     </h1>
                     <p className="text-neutral-500 text-lg max-w-xl leading-relaxed mb-8">
                        Unlocking the doors to aesthetic prosperity: Providing tailored interior services, cutting-edge technology, and knowledgeable advisors to craft your perfect sanctuary.
                     </p>
                     <div>
                        <Link href="/services">
                           <button className="border border-neutral-200 px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
                              Learn More
                           </button>
                        </Link>
                     </div>
                  </div>

                  {/* Bottom Row - Two Cards */}
                  <div className="h-[280px] grid grid-cols-1 md:grid-cols-2 gap-4">

                     {/* Card 1 - Team/Chair */}
                     <div className="relative bg-[#F4F4F4] rounded-[2.5rem] p-6 group overflow-hidden">
                        <div className="flex justify-between items-start relative z-10">
                           <span className="border border-neutral-200 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium">Team</span>
                           <div className="bg-black text-white p-2 rounded-full cursor-pointer hover:scale-110 transition-transform">
                              <ArrowUpRight size={16} />
                           </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pt-10">
                           <img src="/Projects/homedecor1.jpeg" alt="Team" className="w-[80%] h-[80%] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500" />
                        </div>
                     </div>

                     {/* Card 2 - Awards/Table */}
                     <div className="relative bg-[#F4F4F4] rounded-[2.5rem] p-6 group overflow-hidden">
                        <div className="flex justify-between items-start relative z-10">
                           <span className="border border-neutral-200 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium">Awards</span>
                           <div className="bg-black text-white p-2 rounded-full cursor-pointer hover:scale-110 transition-transform">
                              <ArrowUpRight size={16} />
                           </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pt-10">
                           <img src="/Banner/Home.jpg" alt="Awards" className="w-[80%] h-[80%] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500" />
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </section>

         {/* Approach / Philosophy Grid (Kept from previous design but refined spacing) */}
         <section className="py-12 px-2 md:px-6">
            <div className="max-w-[1600px] mx-auto">
               <div className="mb-16 flex justify-between items-end">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Philosophy.</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                     { icon: Target, title: "Precision", text: "Every line calculated. Design meeting absolute functionality." },
                     { icon: CheckCircle2, title: "Sustainability", text: "Eco-conscious materials and energy-efficient layouts." },
                     { icon: Users, title: "Community", text: "Deeply collaborative process involving visionaries." },
                     { icon: Trophy, title: "Excellence", text: "Setting the benchmark for modern interior architecture." }
                  ].map((item, i) => (
                     <div key={i} className="group bg-neutral-50 p-8 rounded-[2.5rem] hover:bg-black hover:text-white transition-all duration-500">
                        <item.icon className="w-10 h-10 mb-6 group-hover:text-white" strokeWidth={1.5} />
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-sm opacity-80 leading-relaxed">
                           {item.text}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Visionaries / Team Section */}
         <section className="py-24 px-4 md:px-12 bg-neutral-900 text-white rounded-[2.5rem] mx-4 mb-4">
            <div className="max-w-[1600px] mx-auto">
               <div className="mb-20">
                  <span className="text-neutral-500 text-sm tracking-widest uppercase block mb-4">The Minds</span>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tight">The Visionaries.</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     { name: "Sarah Jenkins", role: "Principal Architect", img: "/Projects/homedecor1.jpeg" },
                     { name: "David Chen", role: "Design Director", img: "/Banner/Home.jpg" },
                     { name: "Elena Rossi", role: "Head of Interiors", img: "/Projects/homedecor1.jpeg" },
                  ].map((member, i) => (
                     <div key={i} className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] cursor-pointer">
                        <img
                           src={member.img}
                           alt={member.name}
                           className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                           <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                           <p className="text-neutral-300 font-mono text-sm">{member.role}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Evolution / Timeline Section */}
         <section className="py-32 px-6 md:px-12 bg-white">
            <div className="max-w-[1600px] mx-auto">
               <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
                  <div>
                     <span className="text-neutral-500 text-sm tracking-widest uppercase block mb-4">Our Journey</span>
                     <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black">Evolution.</h2>
                  </div>
                  <p className="max-w-md text-neutral-500 mt-6 md:mt-0">
                     From a small studio in 2010 to a global design collective, our path has been defined by relentless innovation.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-[15px] left-0 w-full h-[1px] bg-neutral-200" />

                  {[
                     { year: "2010", title: "Inception", text: "Founded in New York with a focus on residential minimalism." },
                     { year: "2015", title: "Expansion", text: "Opened studios in London and Tokyo. Launched commercial division." },
                     { year: "2020", title: "Digital Shift", text: "Integrated VR/AR into design process. Carbon-neutral pledge." },
                     { year: "2025", title: "Future", text: "Pioneering AI-driven adaptive architecture for smart cities." },
                  ].map((item, i) => (
                     <div key={i} className="relative pt-8 md:pt-0 group">
                        <div className="hidden md:block absolute top-[11px] left-0 w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-black group-hover:scale-150 transition-all duration-300" />
                        <span className="text-6xl md:text-8xl font-black text-neutral-100 group-hover:text-black transition-colors duration-500 block mb-4 -mt-6 md:mt-8">
                           {item.year}
                        </span>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                           {item.text}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
         {/* The Blueprint / Process Section */}
         <section className="pt-24 bg-neutral-50 overflow-hidden rounded-2xl">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16">
               <span className="text-neutral-500 text-sm tracking-widest uppercase block mb-4">The Blueprint</span>
               <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black">Process.</h2>
            </div>

            {/* Horizontal Scroller */}
            <div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x hide-scrollbar">
               {[
                  { step: "01", title: "Discovery", desc: "We begin by decoding your lifestyle. Understanding the rhythm of your daily life to craft spaces that flow effortlessly." },
                  { step: "02", title: "Concept", desc: "Translating abstract ideas into tangible forms. Sketches, mood boards, and 3D visualizations that breathe life into the vision." },
                  { step: "03", title: "Detailing", desc: "The magic is in the minutiae. Selecting textures, defining light paths, and curating material palettes with surgical precision." },
                  { step: "04", title: "Execution", desc: "Coordinating with master craftsmen. Overseeing every join, stitch, and coat of paint to ensure the reality surpasses the dream." },
               ].map((item, i) => (
                  <div key={i} className="min-w-[85vw] md:min-w-[500px] snap-center bg-white p-10 rounded-[2.5rem] border border-neutral-200 hover:border-black transition-colors duration-500 flex flex-col justify-between h-[450px]">
                     <div className="flex justify-between items-start">
                        <span className="text-8xl font-black text-neutral-100">{item.step}</span>
                        <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center">
                           <ArrowUpRight size={20} />
                        </div>
                     </div>
                     <div>
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-neutral-500 leading-relaxed text-lg">
                           {item.desc}
                        </p>
                     </div>
                  </div>
               ))}
               <div className="min-w-[10vw]"></div> {/* Spacer */}
            </div>
         </section>

         {/* Visual Symphony / Gallery Marquee */}
         <section className="py-24 bg-black text-white overflow-hidden rounded-2xl">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
               <div>
                  <span className="text-neutral-500 text-sm tracking-widest uppercase block mb-4">Visual Symphony</span>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white line-clamp-2">Curated <br /> Excellence.</h2>
               </div>
               <button className="hidden md:flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-neutral-200 transition-all font-medium">
                  View Full Portfolio <ArrowUpRight size={20} />
               </button>
            </div>

            {/* Marquee Row 1 */}
            <div className="flex gap-8 mb-8 w-max animate-scroll hover:pause-animation">
               {[1, 2, 3, 4, 1, 2, 3, 4].map((num, i) => (
                  <div key={i} className="w-[400px] h-[300px] rounded-[2rem] overflow-hidden relative group">
                     <img
                        src={num % 2 === 0 ? "/Banner/Home.jpg" : "/Projects/homedecor1.jpeg"}
                        alt="Gallery"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
               ))}
            </div>

            {/* Marquee Row 2 (Reverse) */}
            <div className="flex gap-8 w-max animate-scroll-reverse hover:pause-animation">
               {[3, 4, 1, 2, 3, 4, 1, 2].map((num, i) => (
                  <div key={i} className="w-[400px] h-[300px] rounded-[2rem] overflow-hidden relative group">
                     <img
                        src={num % 2 !== 0 ? "/Banner/Home.jpg" : "/Projects/homedecor1.jpeg"}
                        alt="Gallery"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
               ))}
            </div>
         </section>
      </main>
   )
}
