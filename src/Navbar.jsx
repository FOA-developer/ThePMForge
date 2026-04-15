import thepmforge from './assets/image (11).png';
import Navmenu from './Navmenu.jsx';
import { useState } from 'react';


const Navbar = () => {

  const[openMenu, setOpenMenu] = useState(false);

  return ( 
    <nav className = "flex flex-row justify-between items-center pr-5 text-[rgb(11,41,95)] pt-6">
      <div className = "flex flex-row items-center gap-2 pl-3 md:pl-6">
      <img src={thepmforge} className="w-12 h-12 rounded-full" alt= "logo"/>
      <h1 className="font-inter font-bold text-sm ">ThePMForge</h1>
      </div>
      <div classname="hidden md:block">
        <ul className=" hidden md:list-none md:flex  md:gap-8 md:flex-row md:items-center">
          <li className=" font-semibold"><a href="#approach">Approach</a></li>
          <li className=" font-semibold"><a href="#about">About</a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScGlUTQCNadu03JH7oueH5JjgLxs8OPcFwn-KVr2nfTjYqcsw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"><button className="text-xs font-semi-bold bg-[rgb(11,41,95)] hover:bg-[rgb(39, 198, 230)]font-inter text-white p-3 rounded-full transition-all duration-600 ease-out transform hover:scale-105 active:scale-95 ">Request an Invite</button></a></li>
        </ul>
      </div>
      <div className="md:hidden flex flex-col cursor-pointer gap-1 transition-transform duration-300" onClick={() => setOpenMenu(prev => !prev)}>
        <span className={`w-4 h-[2px] bg-[rgb(11,41,95)] transition-all duration-300 
    ${openMenu ? "rotate-45 translate-y-[6px]" : ""}`}></span>
        <span className={`w-4 h-[2px] bg-[rgb(11,41,95)] transition-all duration-300 
    ${openMenu ? "rotate-[320deg] translate-y-[0px]" : ""}`}></span>
        <span className={`w-4 h-[2px] bg-[rgb(11,41,95)] transition-all duration-300 
    ${openMenu ? "hidden" : ""}`}></span>

        { openMenu && <Navmenu />}
      </div>
    </nav>
   );
}
 
export default Navbar;