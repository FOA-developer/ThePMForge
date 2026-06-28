import bg_image from './assets/bg-image.png';

const Approach = () => {
  return (
    <div
      id="approach"
      style={{ backgroundImage: `url(${bg_image})` }}
      className="text-white bg-cover bg-center"
    >
      <div className="mx-auto px-20 py-20">

        {/* ── THE PROBLEM ── */}
        <div className="flex flex-col lg:flex-row lg:gap-16 items-start">
          <div className="lg:w-[160px] lg:shrink-0 mb-5 lg:mb-0 lg:pt-1">
            <h3 className="font-inter text-sm font-semibold tracking-wide text-[rgb(220,249,253)]">THE PROBLEM</h3>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
              <p className="font-display font-medium text-lg md:text-xl">Projects fail despite solid plans.</p>
              <p className="font-display font-medium text-lg md:text-xl">Teams misalign mid-execution.</p>
              <p className="font-display font-medium text-lg md:text-xl">Stakeholders derail delivery.</p>
              <p className="font-display font-medium text-lg md:text-xl">Frameworks don't solve real-world complexity.</p>
            </div>
            <div className="border-l-2 border-[rgb(1,104,126)] pl-4 mt-8">
              <h2 className="italic font-display font-semibold text-lg text-[rgb(220,249,253)]">
                The problem isn't planning. It's execution.
              </h2>
            </div>
          </div>
        </div>

        {/* ── SECTION DIVIDER ── */}
        <div className="border-t border-white/20 mt-16 lg:mt-20"></div>

        {/* ── WHO WE ARE ── */}
        <div className="flex flex-col lg:flex-row lg:gap-16 items-start mt-16 lg:mt-20">
          <div className="lg:w-[160px] lg:shrink-0 mb-5 lg:mb-0 lg:pt-1">
            <h3 className="font-inter text-sm font-semibold tracking-wide text-[rgb(220,249,253)]">WHO WE ARE</h3>
          </div>
          <div className="flex-1">
            <h2 className="font-display font-medium text-2xl md:text-3xl">
              ThePMForge is an <span className="font-bold">execution intelligence</span> organization.
            </h2>
            <p className="text-[rgb(220,249,253)] font-inter font-semibold pt-3 text-sm md:text-base">
              We study real execution what breaks, why it breaks, and how experienced operators navigate it.
            </p>
            <div className="flex flex-col gap-3 pt-5">
              <div className="flex flex-row gap-3 items-center">
                <div className="w-1 h-6 bg-[rgb(1,104,126)] shrink-0"></div>
                <h3 className="text-xs font-inter text-[rgb(220,249,253)] font-semibold md:text-sm">No theory. No generic frameworks.</h3>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="w-1 h-6 bg-[rgb(1,104,126)] shrink-0"></div>
                <h3 className="text-xs font-inter text-[rgb(220,249,253)] font-semibold md:text-sm">Just real-world execution insight.</h3>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION DIVIDER ── */}
        <div className="border-t border-white/20 mt-16 lg:mt-20"></div>

        {/* ── THE SYSTEM ── */}
        <div className="flex flex-col lg:flex-row lg:gap-16 items-start mt-16 lg:mt-20">
          <div className="lg:w-[160px] lg:shrink-0 mb-5 lg:mb-0 lg:pt-1">
            <h3 className="font-inter text-sm font-semibold tracking-wide text-[rgb(220,249,253)]">THE SYSTEM</h3>
            <p className="text-[rgb(220,249,253)] font-inter font-semibold pt-2 text-sm">We operate through a system.</p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white border-2 border-[rgb(1,104,126)] rounded-xl p-5 flex flex-col gap-3">
              <div className="font-semibold font-inter text-sm text-[rgb(11,41,95)] rounded-full bg-[rgb(229,240,242)] p-3 w-fit">01</div>
              <h3 className="font-inter text-sm font-semibold text-[rgb(11,41,95)] md:text-base">Curated Roundtables</h3>
              <p className="text-[rgb(11,41,95)] font-inter text-xs md:text-sm">Small, invite-only sessions with experienced operators sharing unfiltered delivery realities.</p>
            </div>
            <div className="bg-white border-2 border-[rgb(1,104,126)] rounded-xl p-5 flex flex-col gap-3">
              <div className="font-semibold font-inter text-sm text-[rgb(11,41,95)] rounded-full bg-[rgb(229,240,242)] p-3 w-fit">02</div>
              <h3 className="font-inter text-sm font-semibold text-[rgb(11,41,95)] md:text-base">Insight Extraction</h3>
              <p className="text-[rgb(11,41,95)] font-inter text-xs md:text-sm">Capturing recurring patterns, failure points, and the key decisions that changed outcomes.</p>
            </div>
            <div className="bg-white border-2 border-[rgb(1,104,126)] rounded-xl p-5 flex flex-col gap-3">
              <div className="font-semibold font-inter text-sm text-[rgb(11,41,95)] rounded-full bg-[rgb(229,240,242)] p-3 w-fit">03</div>
              <h3 className="font-inter text-sm font-semibold text-[rgb(11,41,95)] md:text-base">Execution Intelligence</h3>
              <p className="text-[rgb(11,41,95)] font-inter text-xs md:text-sm">Turning real operator insights into practical frameworks and tools for better delivery.</p>
            </div>
          </div>
        </div>

        {/* ── SECTION DIVIDER ── */}
        <div className="border-t border-white/20 mt-16 lg:mt-20"></div>

        {/* ── WHAT YOU GET + WHO IS THIS FOR ── */}
        <div className="flex flex-col lg:flex-row lg:gap-16 mt-16 lg:mt-20">
          <div className="flex-1 mb-12 lg:mb-0">
            <h3 className="font-inter text-sm font-semibold tracking-wide text-[rgb(220,249,253)]">WHAT YOU GET</h3>
            <ul className="list-disc ml-5 font-display font-medium pt-6 flex flex-col tracking-wide md:text-lg">
              <li className="py-3 border-b border-white/20">Access to curated execution roundtables</li>
              <li className="py-3 border-b border-white/20">Exposure to real operator experiences</li>
              <li className="py-3 border-b border-white/20">Early access to emerging execution systems</li>
              <li className="py-3 border-b border-white/20">A network of serious operators focused on delivery</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-inter text-sm font-semibold tracking-wide text-[rgb(220,249,253)]">WHO IS THIS FOR</h3>
            <ul className="pl-2 pt-6 flex flex-col font-display font-medium tracking-wide md:text-lg">
              <li className="before:content-['✓'] before:mr-2 py-3 border-b border-white/20">Project Managers delivering complex work</li>
              <li className="before:content-['✓'] before:mr-2 py-3 border-b border-white/20">Program Managers handling cross-functional execution</li>
              <li className="before:content-['✓'] before:mr-2 py-3 border-b border-white/20">Operators responsible for outcomes</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Approach;
