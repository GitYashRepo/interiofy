'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Menu() {
   const [open, setOpen] = useState(false)

   return (
      <button
         onClick={() => setOpen(!open)}
         className="flex flex-col justify-center items-center gap-[6px] p-2"
      >
         {/* Top line */}
         <span
            className={cn(
               'block h-[2px] w-10 bg-black transition-all duration-300',
               open && 'translate-y-[4px] rotate-45'
            )}
         />

         {/* Bottom line */}
         <span
            className={cn(
               'block h-[2px] w-10 bg-black transition-all duration-300',
               open && '-translate-y-[4px] -rotate-45'
            )}
         />
      </button>
   )
}
