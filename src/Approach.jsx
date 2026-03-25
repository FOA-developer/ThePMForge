const Approach = () => {
  return ( 
    <div className="bg-[rgb(2,44,83)] text-white flex flex-col gap-15 pl-6">
      <div className="pt-20 ">
        <h3 className="font-inter text-xs font-semibold text-[rgb(1,104,126)]">THE PROBLEM</h3>
        <ul className=" pl-5 pt-5 flex flex-col gap-3">
          <li className="font-display font-medium text-lg">Projects fail despite solid plans.</li>
          <li className="font-display font-medium text-lg">Teams misalign mid-execution.</li>
          <li className="font-display font-medium text-lg">Stakeholders derail delivery.</li>
          <li className="font-display font-medium text-lg">Frameworks don't solve real-world complexity.</li>
        </ul>
        <h2 className="italic font-display font-semibold text-lg pt-3 pl-5 text-[rgb(1,104,126)]">The problem isn't planning. It's execution.</h2>
      </div>
      <div className="pt-6" >
        <h3 className="font-inter text-xs font-semibold text-[rgb(1,104,126)]">WHO WE ARE</h3>
        <h2 className="font-display font-medium pt-5 pl-5 text-2xl">ThePMForge is an <span className="font-bold"> execution intelligence </span>organization.</h2>
        <p className="text-[rgb(1,104,126)] font-inter pl-5 pt-3 text-sm">We study real execution what breaks, why it breaks, and how experienced operators navigate it.</p>
        <div className="flex flex-col gap-4 pt-6">
          <div className="flex flex-row gap-3 items-center pl-5">
            <div className="w-1 h-6 bg-[rgb(1,104,126)]" ></div>
            <h3 className="text-xs font-inter text-[rgb(1,104,126)] font-semibold">No theory. No generic frameworks.</h3>
          </div>
          <div className="flex flex-row gap-3 items-center pl-5">
            <div className="w-1 h-6 bg-[rgb(1,104,126)]" ></div>
            <h3 className="text-xs font-inter text-[rgb(1,104,126)] font-semibold">Just real-world execution insight.</h3>
          </div>
       </div>
     </div>
     <div>
        <h3 className="font-inter text-xs font-semibold text-[rgb(1,104,126)]">THE SYSTEM</h3>
        <p className="text-[rgb(1,104,126)] font-inter pl-5 pt-5 text-sm">We operate through a system.</p>
        <div className="flex flex-col gap-6 pt-6">
          <div className="ml-10 bg-white w-lg pr-2 h-30 border-3 mb-2 border-[rgb(1,104,126)] rounded-xl flex flex-row gap-4 items-center pl-5">
            <div className="font-semibold font-inter text-sm text-[rgb(1,104,126)] rounded-full bg-[rgb(229,240,242)] p-3">
              01
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-inter text-sm font-semibold text-[rgb(1,104,126)]">Curated Roundtables</h3>
              <p className="text-[rgb(1,104,126)] font-inter text-xs">Small, invite-only sessions with experienced operators sharing unfiltered delivery realities.</p>
            </div>
          </div>
          <div className="ml-10 bg-white w-lg pr-2 h-30 border-3 mb-2 border-[rgb(1,104,126)] rounded-xl flex flex-row gap-4 items-center pl-5">
            <div className="font-semibold font-inter text-sm text-[rgb(1,104,126)] rounded-full bg-[rgb(229,240,242)] p-3">
              02
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-inter text-sm font-semibold text-[rgb(1,104,126)]">Insight Extraction</h3>
              <p className="text-[rgb(1,104,126)] font-inter text-xs">Capturing recurring patterns, failure modes, and the key decisions that changed outcomes.</p>
            </div>
          </div>
          <div className="ml-10 bg-white w-lg h-30 border-3 mb-2 pr-2 border-[rgb(1,104,126)] rounded-xl flex flex-row gap-4 items-center  pl-5">
            <div className="font-semibold font-inter text-sm text-[rgb(1,104,126)] rounded-full bg-[rgb(229,240,242)] p-3">
              03
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-inter text-sm font-semibold text-[rgb(1,104,126)]">Execution Intelligence</h3>
              <p className="text-[rgb(1,104,126)] font-inter text-xs">Turning real operator insights into practical frameworks and tools for better delivery.</p>
            </div>
          </div>
        </div>
     </div>
     <div className="pt- ">
        <h3 className="font-inter text-xs font-semibold text-[rgb(1,104,126)]">WHAT YOU GET</h3>
        <ul className="list-dist pl-5 pt-5 flex flex-col gap-3">
          <li className="font-display font-medium text-lg">Execution-focused roundtable discussions</li>
          <li className="font-display font-medium text-lg">Practical frameworks for delivery challenges</li>
          <li className="font-display font-medium text-lg">Stakeholders derail delivery.</li>
          <li className="font-display font-medium text-lg">Support for diagnosing struggling projects</li>
        </ul>
      </div>
    </div>
   );
}
 
export default Approach;