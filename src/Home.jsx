import heroImage from './assets/download (2).jpg';

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-24 xl:pt-32 pb-10 lg:pb-16">

      {/* ── LEFT: text content ── */}
      <div className="flex-1 flex flex-col justify-center pt-6  px-6 sm:px-10 lg:px-16 ">
        <h3 className="font-inter font-semibold text-xs text-[rgb(11,41,95)] tracking-wide">
          EXECUTION INTELLIGENCE ORGANIZATION
        </h3>
        <h1 className="font-display font-bold text-4xl md:text-5xl  pt-4 text-[rgb(11,41,95)] leading-tight ">
          Execution fails more than strategy. We study
          <span className="font-display italic"> why.</span>
        </h1>
        <p className="font-inter pt-2 text-sm md:text-base text-[rgb(11,41,95)] max-w-[520px]">
          ThePMForge brings together experienced project and program operators in curated roundtables to uncover real execution breakdowns and turn them into structured, practical systems for better delivery.
        </p>
        <div className="flex flex-row gap-4 pt-10 items-center flex-wrap">
          <button className="bg-[rgb(11,41,95)] font-medium text-sm rounded-full text-white px-5 py-3 transition-all duration-500 ease-out transform hover:scale-105 active:scale-95">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScGlUTQCNadu03JH7oueH5JjgLxs8OPcFwn-KVr2nfTjYqcsw/viewform?usp=dialog" target="_blank">Request an Invite</a>
          </button>
          <button className="font-medium text-sm rounded-full text-[rgb(11,41,95)] border border-[rgb(11,41,95)] px-5 py-3 transition-all duration-500 ease-out transform hover:scale-105 active:scale-95">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdaOyVybQwJpmyMuLK_TKJgIj7K2ncyn8Sh5q91SSVT_mcFyw/viewform?usp=publish-editor" target="_blank">Join The Waitlist</a>
          </button>
        </div>
      </div>

      {/* ── RIGHT: image panel ── */}
      <div className="w-[95%] lg:w-[50%] h-[400px] mx-auto my-auto px-8 pt-10 lg:pt-0">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <img
            src={heroImage}
            alt="Roundtable operators session"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
