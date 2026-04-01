const About = () => {
  return ( 
    <div className="text-white bg-[rgb(2,44,83)] flex flex-col gap-6 pt-6 justify-center items-center pb-12">
      <div className=" border-[rgb(1,104,126)] border-b-1 border-l-1 w-[60%]">

      </div>
      <div className="m-auto w-[80%] text-left border-b-1 pb-10 border-[rgb(1,104,126)]">
        <h3 className="font-inter font-medium text-xs text-[rgb(1,104,126)]">FOUNDED ON EXPERIENCE</h3>
        <h1 className="font-display font-semibold text-2xl pt-5 pb-6">Built From Real <span className="font-display italic">Execution Experience.</span></h1>
        <p className="font-inter p-1 font-light">ThePMForge was created by <span className="font-semibold"> Oghosa Agbonlahor</span>, a program and training operator with experience supporting large-scale learning and execution environments.<br></br><br></br>Through working on programs involving thousands of participants and coordinating delivery across teams, he observed a consistent gap not in planning, but in execution. The frameworks existed. The capability existed. The breakdowns still happened.<br></br><br></br>ThePMForge is built to study that gap to capture real insights from experienced operators and turn them into practical guidance for better project delivery.</p>
      </div>
      <div className="w-[80%]">
        <p className="font-inter font-light text-sm text-left text-[rgb(1,104,126)] hover:text-underline"><a href="">Connect on Linkedin</a></p>
        </div>
    </div>
   );
}
 
export default About;