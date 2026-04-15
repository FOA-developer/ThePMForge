const Navmenu = () => {
  return (
    <nav className="navmenu absolute top-16 right-4 bg-white rounded-lg shadow-lg p-4 z-10">
      <ul className="navmenu-list font-semibold flex flex-col gap-4 text-[rgb(11,41,95)]">
        <li><a href="#approach">Approach</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScGlUTQCNadu03JH7oueH5JjgLxs8OPcFwn-KVr2nfTjYqcsw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"><button className="request-invite-button">Request an Invite</button></a></li>
      </ul>
    </nav>
   );
}
 
export default Navmenu;