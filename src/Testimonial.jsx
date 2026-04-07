const Testimonial = () => {
  return ( 
    <div className="bg-white text-[rgb(11,41,95)] pt-20">
      <h3 className="font-inter font-semibold text-xs text-center pb-5">EARLY SIGNALS</h3>
      <h1 className="font-display font-bold text-center text-4xl w-[80%] m-auto">Early Signals from the Field</h1>
      <div className="md:flex-row flex flex-col">
        <div className="flex flex-col gap-4 pt-6 md:w-[70%] font-inter items-center justify-center">
          <div className="flex flex-col gap-3 w-[80%] border-t-1 mt-4 pt-6">
            <h3 className="font-semibold text-left">ROUNDTABLE SIGNAL</h3>
            <p className="text-sm">We’re already seeing early validation for ThePMForge through curated operator roundtables and a growing network of practitioners engaging around real execution challenges.</p>
          </div>
          <div className="flex flex-col gap-3 w-[80%] border-t-1 mt-4 pt-6">
            <h3 className="font-semibold text-left">COMMUNITY SIGNAL</h3>
            <p className="text-sm md:pb-12">A growing network of practitioners is engaging around these conversations, not driven by noise, but by the relevance of the problem.</p>
          </div>
        </div>
        <div className="bg-white pt-5 md:m-auto md:border-1 md:rounded-xl md:w-[30%] w-[80%] h-40 md:h-65 border-t-1 md:mr-10 mt-6 border-[rgb(11,41,95)] m-auto flex flex-col justify-start px-6 py-4">
          <span className="md:asolute text-[40px] md:text-[56px] leading-none font-display md:block hidden">"</span>
          <p className="text-justify italic font-display [word-spacing:0.1x] font-medium  md:text-left">This is the kind of conversation we don't usually get to have real execution challenges, not just theory.</p>
          <div className="font-inter font-light text-xs pt-3 text-left md:border-t-1 md:mt-10 lg:mt-15">
            <p>-Roundtable Invitee</p>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Testimonial;