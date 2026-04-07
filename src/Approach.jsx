import bg_image from './assets/bg-image.png';

const Approach = () => {
  return ( 
    <div style={{ backgroundImage: `url(${bg_image})` }} className="text-white flex flex-col md:justify-center md:items-center gap-15 pl-6 pr-6 pb-20">
      <div className="mx-auto w-full max-w-[900px] md:w-[80%] lg:w-[60%]">
        <div className="pt-20">
          <h3 className="font-inter text-sm font-semibold tracking-wide text-[rgb(220,249,253)]">THE PROBLEM</h3>
          <ul className=" pl-5 pt-5 flex flex-col gap-3 font-display font-medium text-lg md:text-xl">
            <li>Projects fail despite solid plans.</li>
            <li>Teams misalign mid-execution.</li>
            <li>Stakeholders derail delivery.</li>
            <li>Frameworks don't solve real-world complexity.</li>
          </ul>
          <h2 className="italic font-display font-semibold text-lg pt-3 pl-5 text-[rgb(220,249,253)] md:text-lg">The problem isn't planning. It's execution.</h2>
        </div>
        <div className="pt-20 md:pt-15" >
          <h3 className="font-inter text-sm font-semibold tracking-wide text-[rgb(220,249,253)]">WHO WE ARE</h3>
          <h2 className="font-display font-medium pt-5 pl-5 text-2xl">ThePMForge is an <span className="font-bold"> execution intelligence </span>organization.</h2>
          <p className="text-[rgb(220,249 253)] font-inter font-semibold pl-5 pt-3 text-sm md:text-base">We study real execution what breaks, why it breaks, and how experienced operators navigate it.</p>
          <div className="flex flex-col gap-4 pt-6">
            <div className="flex flex-row gap-3 items-center pl-5">
              <div className="w-1 h-6 bg-[rgb(1,104,126)]" ></div>
              <h3 className="text-xs font-inter text-[rgb(220,249,253)] font-semibold md:text-sm">No theory. No generic frameworks.</h3>
            </div>
            <div className="flex flex-row gap-3 items-center pl-5">
              <div className="w-1 h-6 bg-[rgb(1,104,126)]" ></div>
              <h3 className="text-xs font-inter text-[rgb(220,249,253)] font-semibold md:text-sm">Just real-world execution insight.</h3>
            </div>
        </div>
      </div>
      <div className="pt-15">
          <h3 className="font-inter text-sm font-semibold tracking-wide text-[rgb(220,249,253)] pt-5">THE SYSTEM</h3>
          <p className="text-[rgb(220,249,253)] font-inter font-semibold pl-5 pt-5 text-sm">We operate through a system.</p>
          <div className="flex flex-col gap-6 pt-6">
            <div className="mx-auto w-full md:ml-10 max-w-[400px] md:max-w-[550px] lg:max-w-[650px] bg-white pr-2 h-30 border-3 mb-2 border-[rgb(1,104,126)] rounded-xl flex flex-row gap-4 items-center pl-5">
              <div className="font-semibold font-inter text-sm text-[rgb(11,41,95)] rounded-full bg-[rgb(229,240,242)] p-3">
                01
              </div>
              <div className="flex flex-col gap-2 md:pr-3">
                <h3 className="font-inter text-sm font-semibold text-[rgb(11,41,95)] md:text-base">Curated Roundtables</h3>
                <p className="text-[rgb(11,41,95)] font-inter text-xs md:text-sm">Small, invite-only sessions with experienced operators sharing unfiltered delivery realities.</p>
              </div>
            </div>
            <div className="mx-auto md:ml-10 w-full max-w-[400px] md:max-w-[550px] lg:max-w-[650px] bg-white pr-2 h-30 border-3 mb-2 border-[rgb(1,104,126)] rounded-xl flex flex-row gap-4 items-center pl-5">
              <div className="font-semibold font-inter text-sm text-[rgb(11,41,95)] rounded-full bg-[rgb(229,240,242)] p-3">
                02
              </div>
              <div className="flex flex-col gap-2 md:pr-3">
                <h3 className="font-inter text-sm font-semibold text-[rgb(11,41,95)] md:text-base">Insight Extraction</h3>
                <p className="text-[rgb(11,41,95)] font-inter text-xs md:text-sm">Capturing recurring patterns, failure points, and the key decisions that changed outcomes.</p>
              </div>
            </div>
            <div className="mx-auto md:ml-10 w-full max-w-[400px] md:max-w-[550px] lg:max-w-[650px] bg-white h-30 border-3 mb-2 pr-2 border-[rgb(1,104,126)] rounded-xl flex flex-row gap-4 items-center pl-5">
              <div className="font-semibold font-inter text-sm text-[rgb(11,41,95)] rounded-full bg-[rgb(229,240,242)] p-3">
                03
              </div>
              <div className="flex flex-col gap-2 md:pr-3">
                <h3 className="font-inter text-sm font-semibold text-[rgb(11,41,95)] md:text-base">Execution Intelligence</h3>
                <p className="text-[rgb(11,41,95)] font-inter text-xs md:text-sm">Turning real operator insights into practical frameworks and tools for better delivery.</p>
              </div>
            </div>
          </div>
      </div>
      <div className="pl-5 pt-15">
          <h3 className="font-inter text-sm font-semibold tracking-wide text-[rgb(220,249,253)]">WHAT YOU GET</h3>
          <ul className="list-disc ml-5 font-display font-medium pt-6 flex flex-col gap-3 tracking-wide pr-3 mr-2 md:tracking-normal md:text-xl">
            <li>Access to curated execution roundtables</li>
            <li>Exposure to real operator experiences</li>
            <li>Early access to emerging execution systems</li>
            <li>A network of serious operators focused on delivery</li>
          </ul>
      </div>
      <div className="pt-10 pl-5 md:pt-15">
          <h3 className="pt-4 font-inter text-sm font-semibold tracking-wide text-[rgb(220,249,253)]">WHO IS THIS FOR</h3>
          <ul className="pl-2 pt-6 flex flex-col gap-3 font-display font-medium tracking-wide pr-3 mr-2 md:text-xl md:tracking-normal">
            <li className="before:content-['✓'] before:mr-2">Project Managers delivering complex work</li>
            <li className="before:content-['✓'] before:mr-2">Program Managers handling cross-functional execution</li>
            <li className="before:content-['✓'] before:mr-2">Operators responsible for outcomes</li>
          </ul>
      </div>
      </div>
    </div>
   );
}
 
export default Approach;