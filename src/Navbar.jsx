import thepmforge from './assets/image (11).png';

const Navbar = () => {

  return ( 
    <nav className = "flex flex-row justify-between items-center p-3">
      <div className = "flex flex-row items-center gap-2">
      <img src={thepmforge} className="w-12 h-12 rounded-full" alt= "logo"/>
      <h1 className="font-inter font-bold text-sm">ThePMForge</h1>
      </div>
      <div>
        <ul className= "list-none flex flex-row ">
          <li className="" ><a href="/Approach" className="hidden">Approach</a></li>
          <li className="hidden"><a href="/About">About</a></li>
          <li className=""><a href="/Invite"><button className="text-xs font-semi-bold bg-[rgb(1,104,126)] hover:bg-[rgb(39, 198, 230)]font-inter text-white p-3 rounded-full transition-all duration-600 ease-out transform hover:scale-105 active:scale-95 ">Request an Invite</button></a></li>
        </ul>
      </div>
    </nav>
   );
}
 
export default Navbar;