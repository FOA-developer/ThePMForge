import thepmforge from './assets/image (11).png';

const Navbar = () => {

  return ( 
    <nav className = "flex flex-row justify-between items-center p-4 text-[rgb(11,41,95)] pt-6">
      <div className = "flex flex-row items-center gap-2 pl-3 md:pl-6">
      <img src={thepmforge} className="w-12 h-12 rounded-full" alt= "logo"/>
      <h1 className="font-inter font-bold text-sm ">ThePMForge</h1>
      </div>
      <div>
        <ul className="list-none flex gap-8 flex-row items-center">
          <li className="hidden md:block font-semibold"><a href="#approach">Approach</a></li>
          <li className="hidden md:block font-semibold"><a href="#about">About</a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScGlUTQCNadu03JH7oueH5JjgLxs8OPcFwn-KVr2nfTjYqcsw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"><button className="text-xs font-semi-bold bg-[rgb(11,41,95)] hover:bg-[rgb(39, 198, 230)]font-inter text-white p-3 rounded-full transition-all duration-600 ease-out transform hover:scale-105 active:scale-95 ">Request an Invite</button></a></li>
        </ul>
      </div>
    </nav>
   );
}
 
export default Navbar;