import image from './assets/founder.jpeg';
import bg_image from './assets/bg-image.png';

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${bg_image})` }} className="text-white flex flex-col md:flex-row gap-6 justify-center items-center md:items-center lg:justify-start lg:items-center py-12 px-4 sm:px-4 md:px-8">
      <div className="relative w-full max-w-[280px] md:w-auto md:max-w-[250px] md:mx-auto lg:w-auto lg:max-w-[380px] lg:mx-auto">
        <div className="absolute -right-4 -top-4 h-16 w-16 border-t-2 border-r-2 border-[rgb(1,104,126)]"></div>
        <img src={image} alt="about" className="object-cover block w-full h-auto md:h-[380px] rounded-xl" />
        <div className="absolute -left-4 -bottom-4 h-16 w-16 border-b-2 border-l-2 border-[rgb(1,104,126)]"></div>
        <p className="font-inter font-semibold text-sm text-[rgb(220,249,253)]  pt-3 hidden md:block">Oghosa Agbonlahor, Founder</p>
      </div>
      <p className="font-inter font-semibold text-sm text-[rgb(220,249,253)]  pt-3 md:hidden ">Oghosa Agbonlahor, Founder</p>
      <div className="w-full md:w-[60%] lg:w-[70%] max-w-[820px] text-left md:pb-3 pt-10 md:pt-20">
        <h3 className="font-inter font-medium text-xs text-[rgb(220,249,253)]">FOUNDED ON EXPERIENCE</h3>
        <h1 className="font-display font-semibold text-2xl pt-5 pb-6">Built From Real <span className="font-display italic">Execution Experience.</span></h1>
        <p className="font-inter pl-2 pb-10 font-light"><span className="font-semibold"> Oghosa Agbonlahor</span> is an execution operator focused on one thing: understanding why projects fail in the real world.<br></br><br></br>He has supported 200+ training sessions reaching 5,000+ learners, working inside high-pressure delivery environments where execution, not planning,determines outcomes.<br></br><br></br>ThePMForge is built from that reality: bringing operators together to break down real execution failures and convert them into practical systems.<br></br><br></br>Because the problem isn’t planning. It’s execution.</p>
        <div className="w-full max-w-[450px] border-t border-[rgb(220,249,253)]">
          <p className=" pt-4 font-inter font-light text-sm text-left text-[rgb(220,249,253)] hover:underline">
            <a href="https://www.linkedin.com/in/oghosa-agbonlahor/">Connect on Linkedin</a>
          </p>
        </div>
      </div>
    </div>
   );
}
 
export default About;