'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

const items = ['Home', 'Our Artist', 'Services', 'About']

export default function CurvedNavbar() {
   const active = 'Home'

   return (
      <div
         className="w-[600px] h-[60px] flex flex-row items-center justify-center gap-4 bg-blue-100"
         style={{
            clipPath: `path(
            "M 8,0 L 590,0 A 20,20 0,0,1 590,8 L 560,52 A 10,10 0,0,1 550,60 L 40,60 A 10,10 0,0,1 32,52 L 8,8 A 10,10 0,0,1 8,0 Z"
          )`,
         }}
      >
         {items.map((item) => (
            <Link
               key={item}
               href="#"
               className={cn(
                  'px-5 py-2 text-sm font-medium rounded-full transition-all',
                  item === active
                     ? 'bg-rose-500 text-white shadow-md'
                     : 'text-gray-700 hover:bg-gray-100'
               )}
            >
               {item}
            </Link>
         ))}
      </div>
   )
}
