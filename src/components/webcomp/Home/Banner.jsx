



export default function Banner() {
   return (
      <div className="relative">
         <div className="w-full h-screen overflow-hidden">
            <img src="/Banner/Home.jpg" alt="Home Banner" className="w-full h-full object-cover" />
         </div>
         <div className="absolute bottom-10 left-6 flex flex-row gap-2 items-center justify-center">
            <div className="hover:cursor-pointer hover:bg-white/80 py-2 px-4 bg-white rounded-full">Get Started &#129125;</div>
            <div className="text-black bg-white/40 py-2 px-4 rounded-full hover:bg-white hover:cursor-pointer">Learn More</div>
         </div>
      </div>
   )
}
