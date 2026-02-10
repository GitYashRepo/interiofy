import About from "@/components/webcomp/About";
import Clients from "@/components/webcomp/Clients";
import CTA from "@/components/webcomp/cta";
import Hero from "@/components/webcomp/Hero";
import Navbar from "@/components/webcomp/Navbar";
import Projects from "@/components/webcomp/Projects";
import Services from "@/components/webcomp/Services";



export default function HomePage() {
   return (
      <main className="bg-background text-black font-body">
         <Navbar />
         <Hero />
         <Clients />
         <About />
         <Services />
         <Projects />
         {/* <Process /> */}
         <CTA />
         {/* <Footer /> */}
      </main>
   )
}
