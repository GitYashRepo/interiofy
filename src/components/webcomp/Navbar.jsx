import CurvedNavbar from "./CurvedNav/CurvedNavbar";
import Menu from "./Menu/Menu";



export default function Navbar() {
   return (
      <div className="w-[100vw] fixed flex flex-row items-center justify-between bg-transparent">
         <div className="w-[70vw] ml-10">
            <CurvedNavbar />
         </div>
         <div className="mr-10">
            <Menu />
         </div>
      </div>
   )
}
