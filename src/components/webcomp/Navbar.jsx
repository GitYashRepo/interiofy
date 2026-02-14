'use client'

import { useState } from "react"
import Link from "next/link"
import CurvedNavbar from "./CurvedNav/CurvedNavbar"
import Menu from "./Menu/Menu"

export default function Navbar() {
   const [open, setOpen] = useState(false)

   return (
      <>
         <div className="fixed md:hidden top-0 left-0 z-[100] ml-4 mt-1">
            <div className="bg-white/50 backdrop-blur-lg border border-white/50 rounded"><img className="w-12" src="/logo/logo.png" alt="Logo" /></div>
         </div>
         {/* 🔹 MENU (Always On Top) */}
         <div className="fixed top-0 right-0 z-[100] md:mr-10">
            <Menu open={open} setOpen={setOpen} />
         </div>

         {/* 🔹 FULL SCREEN NAV */}
         <div
            className={`fixed hidden md:block inset-0 z-[50]
            transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
            ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
         >
            <div className="relative w-full h-[90vh] border-b border-b-white/90 bg-white/50 backdrop-blur-xl flex items-end overflow-hidden">
               <div className="absolute -top-10 left-10">
                  <img className="w-12" src="/logo/logo.png" alt="" />
               </div>
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
                           <span className="text-xs mt-3 text-black font-semibold tracking-widest">
                              {item.no}
                           </span>

                           {/* Big Text */}
                           <span
                              className={`text-5xl font-semibold tracking-tight transition-all duration-300
                                 ${item.active
                                    ? "text-zinc-800"
                                    : "text-zinc-800 group-hover:text-black"}
                              `}
                           >
                              {item.name}
                           </span>
                        </Link>
                     ))}

                  </div>

                  {/* BOTTOM SOCIAL SECTION */}
                  <div className="flex items-end justify-between">
                     <div className="flex gap-24 text-sm text-black">
                        {["Instagram", "FaceBook", "LinkedIn", "X - Get Updates"].map((item, i) => (
                           <div key={i} className="group flex flex-col gap-2 hover:cursor-pointer">
                              <div className="flex items-center gap-2">
                                 <span>{item}</span>
                                 <span className="text-xs group-hover:translate-x-1 transition">
                                    ↗
                                 </span>
                              </div>
                              <div className="h-[1px] bg-black w-40 group-hover:bg-black transition" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="fixed hidden md:block top-0 left-10 z-[10]">
            <CurvedNavbar />
         </div>
      </>
   )
}
