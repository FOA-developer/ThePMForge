import thepmforge from './assets/image (11).png';
import Navmenu from './Navmenu.jsx';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setAtTop(currentY < 10);

      if (currentY < lastScrollY.current || currentY < 10) {
        // scrolling down or at top — show
        setVisible(true);
      } else {
        // scrolling up — hide
        setVisible(false);
        setOpenMenu(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        flex flex-row justify-between items-center pr-5 pt-6 pb-4
        transition-all duration-300 ease-in-out
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${atTop
          ? 'bg-transparent text-[rgb(11,41,95)] shadow-none'
          : 'bg-white/90 backdrop-blur-sm text-[rgb(11,41,95)] shadow-sm'
        }
      `}
    >
      <div className="flex flex-row items-center gap-2 pl-3 md:pl-6">
        <img src={thepmforge} className="w-12 h-12 rounded-full" alt="logo" />
        <h1 className="font-inter font-bold text-sm">ThePMForge</h1>
      </div>

      <div className="hidden md:block">
        <ul className="list-none flex gap-8 flex-row items-center">
          <li className="font-semibold"><a href="#approach">Approach</a></li>
          <li className="font-semibold"><a href="#about">About</a></li>
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScGlUTQCNadu03JH7oueH5JjgLxs8OPcFwn-KVr2nfTjYqcsw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              <button className="text-xs font-semibold bg-[rgb(11,41,95)] font-inter text-white p-3 rounded-full transition-all duration-300 ease-out transform hover:scale-105 active:scale-95">
                Request an Invite
              </button>
            </a>
          </li>
        </ul>
      </div>

      <div
        className="md:hidden flex flex-col cursor-pointer gap-1 transition-transform duration-300"
        onClick={() => setOpenMenu(prev => !prev)}
      >
        <span className={`w-4 h-[2px] bg-[rgb(11,41,95)] transition-all duration-300 ${openMenu ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
        <span className={`w-4 h-[2px] bg-[rgb(11,41,95)] transition-all duration-300 ${openMenu ? 'rotate-[320deg] translate-y-[0px]' : ''}`}></span>
        <span className={`w-4 h-[2px] bg-[rgb(11,41,95)] transition-all duration-300 ${openMenu ? 'hidden' : ''}`}></span>
        {openMenu && <Navmenu />}
      </div>
    </nav>
  );
};

export default Navbar;
