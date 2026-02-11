'use client'

import { useState } from "react"
import Link from "next/link"
import CurvedNavbar from "./CurvedNav/CurvedNavbar"
import Menu from "./Menu/Menu"

export default function Navbar() {
   const [open, setOpen] = useState(false)

   return (
      <>
         {/* 🔹 MENU (Always On Top) */}
         <div className="fixed top-0 right-0 z-[100] mr-10">
            <Menu open={open} setOpen={setOpen} />
         </div>

         {/* <div
            className={`fixed top-0 left-0 w-full h-[90vh] z-[50]
            transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
            ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
         >
            <div className="w-full h-full backdrop-blur-xs bg-white/20 border-b border-white/80 shadow-2xl relative overflow-hidden">

               <div className="absolute inset-0 bg-white/20" />

               <div className="relative flex items-center justify-center h-full">
                  <h1 className="text-zinc-800 text-5xl font-light tracking-widest">
                     EXPLORE
                  </h1>
               </div>
            </div>
         </div> */}
         {/* 🔹 FULL SCREEN NAV */}
         <div
            className={`fixed inset-0 z-[50]
            transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
            ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
         >
            <div className="w-full h-[90vh] border-b border-b-white/80 bg-white/50 backdrop-blur-sm flex items-end overflow-hidden">
               <div className="relative h-[80%] py-10 w-full flex flex-col justify-between items-center">
                  {/* MAIN LINKS */}
                  <div className="grid grid-cols-3 gap-x-10 gap-y-4">
                     {[
                        { no: "01", name: "About us", href: "/about" },
                        { no: "02", name: "What we do", href: "/services" },
                        { no: "03", name: "Method", href: "/method" },
                        { no: "04", name: "Projects", href: "/projects" },
                        { no: "05", name: "Contact us", href: "/contact" },
                        { no: "06", name: "Work with us", href: "/careers" },
                     ].map((item, i) => (
                        <Link
                           key={i}
                           href={item.href}
                           onClick={() => setOpen(false)}
                           className="group flex items-start gap-3"
                        >
                           {/* Small Number */}
                           <span className="text-xs mt-3 text-black tracking-widest">
                              {item.no}
                           </span>

                           {/* Big Text */}
                           <span
                              className={`text-5xl font-light tracking-tight transition-all duration-300
                                 ${item.active
                                    ? "text-zinc-700"
                                    : "text-zinc-700 group-hover:text-zinc-800"}
                              `}
                           >
                              {item.name}
                           </span>
                        </Link>
                     ))}

                  </div>

                  {/* BOTTOM SOCIAL SECTION */}
                  <div className="flex items-end justify-between">
                     <div className="flex gap-24 text-sm text-zinc-800">
                        {["Facebook", "LinkedIn", "Behance", "Awwwards"].map((item, i) => (
                           <div key={i} className="group flex flex-col gap-2 hover:cursor-pointer">
                              <div className="flex items-center gap-2">
                                 <span>{item}</span>
                                 <span className="text-xs group-hover:translate-x-1 transition">
                                    ↗
                                 </span>
                              </div>
                              <div className="h-[1px] bg-zinc-700 w-40 group-hover:bg-zinc-800 transition" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="fixed top-0 left-10 z-[10]">
            <CurvedNavbar />
         </div>
      </>
   )
}
