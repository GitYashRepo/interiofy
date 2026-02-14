"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { MoveRight, MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
   const canvasRef = useRef();

   useEffect(() => {
      let phi = 0;

      const globe = createGlobe(canvasRef.current, {
         devicePixelRatio: 2,
         width: 600 * 2,
         height: 600 * 2,
         phi: 0,
         theta: 0,
         dark: 0, // Light/White theme to match aesthetic
         diffuse: 1.2,
         mapSamples: 16000,
         mapBrightness: 6,
         baseColor: [1, 1, 1],
         markerColor: [0, 0, 0], // Black marker
         glowColor: [0.8, 0.8, 0.8],
         markers: [
            // Siliguri, India: 26.7271° N, 88.3953° E
            { location: [26.7271, 88.3953], size: 0.1 },
         ],
         onRender: (state) => {
            // Called on every animation frame.
            // `state` will be an empty object, return updated params.
            state.phi = phi;
            phi += 0.003;
         },
      });

      return () => {
         globe.destroy();
      };
   }, []);

   return (
      <main className="w-full bg-white text-black min-h-screen pt-24 px-4 md:px-12 pb-12">
         <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left Column: Content & Form */}
            <div className="flex flex-col gap-8">
               <div>
                  <h1 className="text-[12vw] lg:text-[6vw] font-black tracking-tighter leading-[0.85] mb-6">
                     LET'S WORK <br /> TOGETHER.
                  </h1>
                  <p className="text-xl text-neutral-500 max-w-md">
                     Have a project in mind? We'd love to hear from you. Let's create something timeless.
                  </p>
               </div>

               <form className="flex flex-col gap-6 mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Name</label>
                        <input type="text" placeholder="John Doe" className="border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent text-lg placeholder:text-neutral-300" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Email</label>
                        <input type="email" placeholder="john@example.com" className="border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent text-lg placeholder:text-neutral-300" />
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Project Type</label>
                     <select className="border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent text-lg text-black">
                        <option>Residential Design</option>
                        <option>Commercial Space</option>
                        <option>Architectural Planning</option>
                        <option>Other</option>
                     </select>
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Message</label>
                     <textarea rows="3" placeholder="Tell us about your vision..." className="border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent text-lg placeholder:text-neutral-300 resize-none"></textarea>
                  </div>

                  <button className="self-start mt-4 bg-black text-white px-10 py-5 rounded-full flex items-center gap-4 hover:bg-neutral-800 transition-all font-medium group">
                     Send Message
                     <div className="bg-white text-black p-1 rounded-full group-hover:translate-x-1 transition-transform">
                        <MoveRight size={16} />
                     </div>
                  </button>
               </form>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-neutral-100">
                  <div className="flex items-start gap-4">
                     <MapPin className="mt-1" size={24} />
                     <div>
                        <h4 className="font-bold text-lg">Visit Us</h4>
                        <p className="text-neutral-500">Sevoke Road, Siliguri<br />West Bengal, 734001</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <Mail className="mt-1" size={24} />
                     <div>
                        <h4 className="font-bold text-lg">Email Us</h4>
                        <p className="text-neutral-500">hello@interiofy.com<br />careers@interiofy.com</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Column: Globe (Sticky) */}
            <div className="relative h-[600px] w-full flex items-center justify-center lg:sticky lg:top-24 rounded-[3rem] bg-neutral-50 overflow-hidden">
               {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <span className="text-[12rem] font-black text-black/5 opacity-50 select-none">WORLD</span>
               </div> */}
               <canvas
                  ref={canvasRef}
                  style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
               />
               <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/50 z-20">
                  <div className="flex items-center gap-3">
                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                     <span className="text-sm font-bold">Siliguri, India</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">Global Headquarters</p>
               </div>
            </div>

         </div>
      </main>
   )
}
