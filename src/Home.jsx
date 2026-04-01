const Home = () => {
  return ( 
    <div className = "pt-20 pl-6 pr-2 bg-[rgb(248,249,250)] pb-24">
      <h3 className="font-inter font-semibold text-xs text-[rgb(1,104,126)]">EXECUTION  INTELLIGENCE ORANGIZATION</h3>
      <h1 className="font-display font-bold text-4xl pt-5 text-[rgb(1,104,126)]">Execution fails more than strategy. We study<span className="font-display italic"> why.</span></h1>
      <p className="font-inter pt-4 text-sm text-[rgb(1,104,126)]">ThePMForge brings together experienced project and program leaders to uncover real execution breakdowns and turn them into practical insights, frameworks, and solutions</p>
      <div className="flex flex-row gap-5 pt-10 items-center">
        <button className="bg-[rgb(1,104,126)] font-mediium text-sm rounded-full text-white p-3 transition-all duration-500 ease-out transform hover:scale-105 active:scale-95">Request an Invite</button>
        <button className="font-medium text-sm rounded-full border-[rgb(1,104,126)] border-1 p-3 transition-all duration-500 ease-out transform hover:scale-105 active:scale-95 text-[rgb(1,104,126)]">Join The Waitlist</button>
      </div>
    </div>
   );
}
 
export default Home;