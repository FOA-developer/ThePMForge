const Final = () => {
  return ( 
    <div className = "flex flex-col justify-center text-center pt-20 items-center bg-[rgb(248,249,250)] text-[rgb(1,104,126)] pb-24">
      <div className="flex w-[80%] flex-col">
        <h3 className="font-inter font-semibold text-xs ">READY TO JOIN</h3>
        <h1 className="font-display font-bold text-2xl pt-5 ">Join a curated network focused <span className="font-display italic">real execution.</span></h1>
        <p className="font-inter pt-4 text-s">Access insights, conversations, and frameworks built from real delivery experience.</p>
      </div>
      <div className="flex flex-row gap-5 pt-10 items-center">
        <button className="bg-[rgb(1,104,126)] font-mediium text-sm rounded-full text-white p-3 transition-all duration-500 ease-out transform hover:scale-105 active:scale-95">Request an Invite</button>
        <button className="font-medium text-sm rounded-full border-[rgb(1,104,126)] border-1 p-3 transition-all duration-500 ease-out transform hover:scale-105 active:scale-95 text-[rgb(1,104,126)]">Join The Waitlist</button>
      </div>
    </div>
   );m
}
 
export default Final;