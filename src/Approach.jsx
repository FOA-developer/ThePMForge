const Approach = () => {
  return ( 
    <div className="bg-[rgb(2,44,83)] mt-20 text-white flex flex-col gap-5 pl-6">
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
      </div>
    </div>
   );
}
 
export default Approach;