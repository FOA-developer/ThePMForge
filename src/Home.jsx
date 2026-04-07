const Home = () => {
  return ( 
    <div className="pt-20 pl-6 pr-2 pb-24 md:w-[80%] md:pl-20 lg:w-[70%]">
      <h3 className="font-inter font-semibold text-xs text-[rgb(11,41,95)]">EXECUTION  INTELLIGENCE ORANGNIZATION</h3>
      <h1 className="font-display font-bold text-6xl pt-5 text-[rgb(11,41,95)] ">Execution fails more than strategy. We study<span className="font-display italic"> why.</span></h1>
      <p className="font-inter pt-4 text-base text-[rgb(11,41,95)]">ThePMForge brings together experienced project and program operators in curated roundtables to uncover real execution breakdowns and turn them into structured, practical systems for better delivery.</p>
      <div className="flex flex-row gap-5 pt-10 items-center [rgb(11,41,95)]">
        <button className="bg-[rgb(11,41,95)] font-medium text-sm rounded-full text-white p-3 transition-all duration-500 ease-out transform hover:scale-105 active:scale-95"><a href="">Request an Invite</a></button>
        <button className="font-medium text-sm rounded-full  text-[rgb(11,41,95)] border-[rgb(11,41,95)] border-1 p-3 transition-all duration-500 ease-out transform hover:scale-105 active:scale-95"><a href="">Join The Waitlist</a></button>
      </div>
    </div>
   );
}
 
export default Home;