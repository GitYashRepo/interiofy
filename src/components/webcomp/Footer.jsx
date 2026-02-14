"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function LayeredFooter() {
   return (
      <footer className="relative bg-white text-black border-t overflow-hidden pt-10">
         <div className="max-w-7xl mx-auto px-8 py-10 pt-32 relative">
            <div className="absolute uppercase -top-10 right-0 text-[14vw] font-extrabold tracking-tight opacity-[0.04] select-none">
               Interiofy
            </div>
            <div className="mb-24">
               <h2 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight max-w-4xl">
                  Structured design.
                  <br />
                  Engineered creativity.
               </h2>
            </div>
            <div className="relative">
               <div className="absolute w-[420px] border rounded-[32px] p-10 bg-white hover:-translate-y-3 transition-all duration-500">
                  <h3 className="text-xl font-semibold mb-6">About Studio</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                     We create immersive digital ecosystems blending visual systems,
                     interaction and architecture.
                  </p>
                  <Button className="mt-8 rounded-full bg-black text-white hover:bg-neutral-800">
                     Explore
                     <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
               </div>
               <div className="absolute left-[480px] top-[120px] w-[380px] border rounded-[32px] p-10 bg-white hover:-translate-y-3 transition-all duration-500">
                  <p className="text-xs tracking-widest text-neutral-400 mb-6 uppercase">
                     Navigation
                  </p>
                  <div className="grid grid-cols-2 gap-y-6 text-sm font-medium">
                     <a className="hover:translate-x-2 transition-all">Work</a>
                     <a className="hover:translate-x-2 transition-all">Services</a>
                     <a className="hover:translate-x-2 transition-all">Process</a>
                     <a className="hover:translate-x-2 transition-all">Journal</a>
                     <a className="hover:translate-x-2 transition-all">Careers</a>
                     <a className="hover:translate-x-2 transition-all">Contact</a>
                  </div>
               </div>
               <div className="absolute left-[200px] top-[370px] w-[360px] border rounded-[32px] p-10 bg-white hover:-translate-y-3 transition-all duration-500">
                  <p className="text-xs tracking-widest text-neutral-400 mb-6 uppercase">
                     Resources
                  </p>
                  <div className="space-y-4 text-sm font-medium">
                     <a className="hover:tracking-wider hover:cursor-pointer transition-all">Case Studies</a><br />
                     <a className="hover:tracking-wider hover:cursor-pointer transition-all">Brand Assets</a><br />
                     <a className="hover:tracking-wider hover:cursor-pointer transition-all">Press Kit</a><br />
                     <a className="hover:tracking-wider hover:cursor-pointer transition-all">Whitepapers</a>
                  </div>
               </div>
               <div className="absolute right-0 top-[300px] w-[420px] border rounded-[32px] p-10 bg-white hover:-translate-y-3 transition-all duration-500">
                  <h3 className="text-xl font-semibold mb-6">Join The System</h3>
                  <p className="text-sm text-neutral-500 mb-6">
                     Experimental drops, curated insights and digital evolution.
                  </p>
                  <div className="flex gap-3">
                     <Input placeholder="Email address" className="rounded-full" />
                     <Button className="rounded-full bg-black text-white hover:bg-neutral-800">
                        Subscribe
                     </Button>
                  </div>
               </div>
               <div className="absolute right-[120px] top-[50px] rotate-90 origin-right text-sm tracking-widest text-neutral-400">
                  <a href="#"><span>INSTAGRAM</span></a> — <a href="#"><span>FACEBOOK</span></a> — <a href="#"><span>WHATSAPP</span></a> — <a href="#"><span>X [ TWITTER ]</span></a>
               </div>
            </div>
            <div className="mt-[120vh] pt-12 border-t flex justify-between text-sm text-neutral-500">
               <span>© {new Date().getFullYear()} Interiofy Design</span>
               <a href="https://www.webtechware.in" target="_blank"><span>Designed & Developed by <span className="text-black font-bold hover:cursor-pointer">Web Tech Ware</span></span></a>
            </div>
         </div>
      </footer>
   )
}
