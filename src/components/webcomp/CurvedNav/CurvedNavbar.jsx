'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const items = [
   { name: 'Home', link: "/" },
   { name: 'About', link: "/about" },
   { name: 'Contact', link: "/contact" }
]

export default function CurvedNavbar() {
   const pathname = usePathname()

   return (
      <div
         className="w-[500px] h-[60px] flex flex-row items-center justify-center gap-6 bg-white/90 hover:bg-white"
         style={{
            clipPath: `path(
            "M 0,0 L 500,0 L 460,54 A 10,10 0,0,1 450,60 L 40,60 A 10,10 0,0,1 32,52 L 0,0 Z"
          )`,
         }}
      >
         <Link href="/">
            <div className='hover:scale-105 transition-transform duration-300'>
               <img src="/logo/logo.png" alt="Logo" className="w-18" />
            </div>
         </Link>
         <div className='flex flex-row items-center justify-center gap-6'>
            {items.map((item) => {
               const isActive = pathname === item.link
               return (
                  <Link
                     key={item.name}
                     href={item.link}
                     className="relative text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-black"
                  >
                     {item.name}
                     <span
                        className={cn(
                           "absolute left-0 -bottom-1 h-[2px] w-full bg-black transition-all duration-300 origin-left",
                           isActive
                              ? "scale-x-100"
                              : "scale-x-0"
                        )}
                     />
                  </Link>
               )
            })}
         </div>
      </div>
   )
}
