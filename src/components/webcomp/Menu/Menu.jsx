'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'

export default function Menu({ open, setOpen }) {
   const buttonRef = useRef(null)

   const handleMouseMove = (e) => {
      const btn = buttonRef.current
      if (!btn) return

      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
   }

   const resetPosition = () => {
      if (buttonRef.current) {
         buttonRef.current.style.transform = `translate(0px, 0px)`
      }
   }

   return (
      <button
         ref={buttonRef}
         onClick={() => setOpen(!open)}
         onMouseMove={handleMouseMove}
         onMouseLeave={resetPosition}
         className="relative flex flex-col gap-[6px] p-4 transition-transform duration-200 ease-out"
      >
         <span
            className={cn(
               'block h-[2px] w-10 bg-white mix-blend-difference transition-all duration-300',
               open && 'translate-y-[4px] rotate-45'
            )}
            style={{
               boxShadow: '0 0 12px rgba(0,0,0,0.9), 0 0 24px rgba(0,0,0,0.8)'
            }}
         />

         <span
            className={cn(
               'block h-[2px] w-10 bg-white mix-blend-difference transition-all duration-300',
               open && '-translate-y-[4px] -rotate-45'
            )}
            style={{
               boxShadow: '0 0 12px rgba(0,0,0,0.9), 0 0 24px rgba(0,0,0,0.8)'
            }}
         />
      </button>
   )
}
