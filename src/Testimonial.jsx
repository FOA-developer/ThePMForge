const Testimonial = () => {
  return ( 
    <div className="bg-white text-[rgb(1,104,126)] pt-20 pl-6">
      <h3 className="font-inter font-semibold text-xs text-center pb-5">EARLY SIGNALS</h3>
      <h1 className="font-display font-bold text-center text-4xl">Early Signals from the Field</h1>
      <div className="flex flex-col gap-4 pt-6 font-inter items-center justify-center">
        <div className="flex flex-col gap-3 w-[80%] border-t-1 mt-6 pt-6">
          <h3 className="font-semibold text-left">ROUNDTABLE SIGNAL</h3>
          <p className="text-sm">We've already started testing this approach through curated discussions on execution challenges bringing together operators to share real delivery experiences. The response has validated the demand for this kind of structured, insight-driven exchange.</p>
        </div>
        <div className="flex flex-col gap-3 w-[80%] border-t-1 mt-6 pt-6">
          <h3 className="font-semibold text-left">COMMUNITY SIGNAL</h3>
          <p className="text-sm">A growing network of practitioners is actively engaging around execution-focused conversations and insights. Real practitioners, real problems, real signal not manufactured engagement.</p>
        </div>
        <div className="bg-white w-[80%] h-50 border-t-1 mt-6 pt-6 border-[rgb(1,104,126)] flex flex-col">
          <div className="font-display">
          <p className="text-center p-3">This is the kind of conversation we don't usually get to have—real execution challenges, not just theory.</p>
          </div>
          <div className="font-inter font-light text-sm pt-3 pl-3">
            <p>-Community Participant</p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Testimonial;