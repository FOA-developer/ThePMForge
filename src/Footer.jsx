import logo from './assets/image (11).png'
import bg from './assets/bg-image.png';

const Footer = () => {
  return ( 
    <div style={{ backgroundImage: `url(${bg})` }} className="border-t-1 bg-[rgb(11,41,95)] pt-4 text-white font-inter">
      <div className="w-[90%] m-auto grid grid-cols-1 gap-4 md:gap-15 md:grid-cols-3 lg:grid-cols-4 p-2">
        <div className="col-span-1 md:col-span-2 lg:col-span-2"> 
          <div className="flex items-center gap-3 pt-2">
            <img src={logo} className="w-12 h-12 rounded-full " alt= "logo"/>
            <h1 className="font-inter font-bold text-sm text-[rgb(220,249,253)]">ThePMForge</h1>
          </div>
          <p className="text-sm pt-3">An execution intelligence organization. Studying why projects fail and turning real insights into structured systems.</p>
        </div>
        <div className="text-sm text-left md:pl-6">
          <h3 className="font-semibold pb-1 md:pb-2 md:pt-17 text-[rgb(220,249,253)]">NAVIGATE</h3>
          <p className="pb-1"><a href="#approach">Approach</a></p>
          <p className="pb-1"><a href="#about">About</a></p>
        </div>
        <div className="text-sm text-left"> 
          <h3 className="font-semibold pb-1 text-[rgb(220,249,253)] lg:pt-17">CONNECT</h3>
          <p className="pb-1 md:pt-1"><a href="https://www.linkedin.com/company/thepmforge/ " target="_blank">Linkedin</a></p>
          <p className=" md:pt-1"><a href="">X</a></p>
          <p className=" md:pt-1"><a href="">Instagram</a></p>
        </div>
      </div>
      <div>
        <p className="text-center text-[12px] pt-6 md:pt-8 text-[rgb(220,249,253)] pb-4">© 2026 ThePMForge. All rights reserved.</p>
      </div>
    </div>
   );
}
export default Footer;