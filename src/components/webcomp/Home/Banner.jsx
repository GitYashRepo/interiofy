"use client";

import Link from "next/link";


export default function Banner() {
   return (
      <div>
         <div className="relative">
            <div className="w-full h-screen overflow-hidden">
               <img src="/Banner/Home.jpg" alt="Home Banner" className="w-full h-full object-cover" />
            </div>

            {/* Floating Card */}
            <div className="absolute hidden md:block bottom-4 right-4 w-[100%] md:w-[30%] bg-white rounded-2xl p-4 shadow-2xl flex flex-col">
               {/* Title */}
               <h1 className="text-4xl leading-[0.95] tracking-widest font-black text-black mb-4">
                  Crafting<br />
                  Timeless<br />
                  Interiors.
               </h1>

               {/* Content Box */}
               <div className="border border-gray-200 rounded-3xl p-2">
                  <div className="flex gap-4">
                     <div className="w-24 h-32 shrink-0 overflow-hidden rounded-xl">
                        <img
                           className="w-full h-full object-cover"
                           src="/Projects/homedecor1.jpeg"
                           alt="Interior Design"
                        />
                     </div>
                     <div className="flex flex-col justify-between py-1 flex-1">
                        <p className="text-sm font-medium text-gray-800 leading-snug">
                           We design elegant, functional spaces that reflect your style and elevate everyday living.
                        </p>
                        <div className="flex justify-between items-end text-xs text-gray-400 font-medium">
                           <span>Interiofy</span>
                           <span>2024</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Buttons */}
               <div className="flex flex-col gap-1 mt-4">
                  <button className="w-full bg-black text-white rounded-full py-3 px-4 flex items-center justify-between group cursor-pointer transition-transform active:scale-95">
                     <span className="font-medium text-lg">Projects</span>
                     <div className="bg-white text-black rounded-full p-1.5 transition-transform group-hover:translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="m9 18 6-6-6-6" />
                        </svg>
                     </div>
                  </button>

                  <button className="w-full bg-white border border-gray-200 text-black rounded-full py-3 px-4 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-all active:scale-95">
                     <span className="font-medium text-lg">Enquiry</span>
                     <div className="bg-black text-white rounded-full p-1.5 transition-transform group-hover:translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="m9 18 6-6-6-6" />
                        </svg>
                     </div>
                  </button>
               </div>
            </div>
            <div className="absolute bottom-10 left-2 md:left-6 flex flex-row gap-2 items-center justify-center">
               <div className="hover:cursor-pointer text-sm hover:bg-white/80 py-2 px-4 bg-white rounded-full">Get Started &#129125;</div>
               <div className="text-black text-sm bg-white/40 py-2 px-4 rounded-full hover:bg-white hover:cursor-pointer">Learn More</div>
            </div>
         </div>
         <div className="relative w-full m-auto h-[60vh] p-2">
            <div className="absolute top-4 right-4 md:right-10 flex items-center gap-2 text-xl z-10">
               <Link href="/services">
                  <h1 className="flex flex-col group hover:cursor-pointer">
                     <span className="font-semibold">Our</span>
                     <span className="flex flex-row font-semibold gap-2">
                        Services
                        <span className="group-hover:translate-x-1 transition font-thin">
                           ↗
                        </span>
                     </span>
                  </h1>
               </Link>
            </div>
            <div
               className="relative w-full h-[60vh] flex flex-row items-center justify-center gap-6 bg-black/10 transition-colors"
               style={{
                  WebkitMask: "url(#cardMask)",
                  mask: "url(#cardMask)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
               }}
            >
               <p className="absolute top-2 left-2 md:left-6 text-[10px] font-bold md:text-base underline flex flex-row gap-2">INTERIOFY <span className="hidden md:block font-thin">↗</span></p>
               <p className="absolute top-20 left-2 md:left-6 text-xs md:text-base flex flex-row gap-2">Transforming spaces into elegant, <br />functional environments tailored to your lifestyle.</p>
               <h1 className="absolute bottom-4 left-2 md:left-6 text-2xl md:text-5xl flex flex-row gap-2">Built to Impress. <br /> Designed to Live In.</h1>
               <div className="absolute hidden bottom-4 right-4 border md:flex flex-row gap-2">
                  <Link href="/services">
                     <div className="flex flex-col bg-white items-center justify-between border border-black p-2 rounded-md">
                        <div className="w-20 overflow-hidden rounded mb-4"><img src="/Banner/Home.jpg" alt="" /></div>
                        <div>
                           Residential <br /> Design <span>↗</span>
                        </div>
                     </div>
                  </Link>
                  <Link href="/services">
                     <div className="flex flex-col bg-white items-center justify-between border border-black p-2 rounded-md">
                        <div className="w-20 overflow-hidden rounded mb-4"><img src="/Banner/Home.jpg" alt="" /></div>
                        <div>
                           Commercial <br /> Design <span>↗</span>
                        </div>
                     </div>
                  </Link>
                  <Link href="/services">
                     <div className="flex flex-col bg-white items-center justify-between border border-black p-2 rounded-md">
                        <div className="w-20 overflow-hidden rounded mb-4"><img src="/Banner/Home.jpg" alt="" /></div>
                        <div>
                           Hospitality <br /> Design <span>↗</span>
                        </div>
                     </div>
                  </Link>
                  <Link href="/services">
                     <div className="flex flex-col bg-white items-center justify-between border border-black p-2 rounded-md">
                        <div className="w-20 overflow-hidden rounded mb-4"><img src="/Banner/Home.jpg" alt="" /></div>
                        <div>
                           Space <br /> Planning <span>↗</span>
                        </div>
                     </div>
                  </Link>
                  <Link href="/services">
                     <div className="flex flex-col bg-white items-center justify-between border border-black p-2 rounded-md">
                        <div className="w-20 overflow-hidden rounded mb-4"><img src="/Banner/Home.jpg" alt="" /></div>
                        <div>
                           Corporate <br /> Interiors <span>↗</span>
                        </div>
                     </div>
                  </Link>
               </div>
            </div>

            <svg width="0" height="0" style={{ position: "absolute" }}>
               <defs>
                  <mask
                     id="cardMask"
                     maskUnits="objectBoundingBox"
                     maskContentUnits="objectBoundingBox"
                  >
                     <rect width="1" height="1" fill="black" />
                     <path
                        d="M 0.02 0
                           L 0.20 0
                           A 0.02 0.05 0 0 1 0.22 0.04
                           L 0.22 0.1
                           A 0.02 0.05 0 0 0 0.24 0.14
                           L 0.40 0.14
                           A 0.02 0.05 0 0 1 0.42 0.18
                           L 0.42 0.22
                           A 0.02 0.05 0 0 0 0.44 0.28
                           L 0.98 0.28
                           A 0.02 0.05 0 0 1 1.00 0.34
                           L 1.00 0.96
                           A 0.02 0.05 0 0 1 0.98 1.00
                           L 0.02 1.00
                           A 0.02 0.05 0 0 1 0.00 0.96
                           L 0.00 0.04
                           A 0.02 0.05 0 0 1 0.02 0
                           Z"
                        fill="white"
                     />
                  </mask>
               </defs>
            </svg>
         </div>
      </div>
   )
}
