import { AiOutlineFile, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { GiSuitcase, GiTie } from 'react-icons/gi';
import { VscGithub } from 'react-icons/vsc';

function Intro() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-white uppercase md:max-h-screen">
      {/* intro-left */}
      <div className="relative intro-left bg-gradient-to-b from-orange-light to-orange-dark md:pt-56 pt-12 pb-9">
        <p className="build absolute bottom-0 md:bottom-full md:-translate-y-1/4 h-fit translate-y-1/2 md:top-10 left-1/2 -translate-x-1/2 md:left-full font-extrabold text-white font-Montserrat tracking-widest z-50">#BUILD</p>
        <div className="h-fit w-full mb-10">
          <p className="intro-line-para text-base md:text-xl font-medium">programmer &</p>
          <p className="intro-line-para text-base md:text-xl font-medium">full-stack developer</p>
          <p className="intro-name capitalize tracking-widest mb-4 whitespace-nowrap">raziqAli</p>
        </div>
        <div className="uppercase cursor-pointer px-8 hover:px-9 transition-all duration-200 py-5 bg-black w-fit mb-8 text-xs tracking-widest font-light" onClick={() => {
          document.getElementById('about')?.scrollIntoView(true);
        }}>about me ?</div>
        <div className="uppercase cursor-pointer ml-16 px-8 hover:px-9 transition-all duration-200 py-5 border border-white w-fit text-xs tracking-widest font-light mb-10 md:mb-30 inline-flex gap-1" onClick={() => {
          document.getElementById('portfolio')?.scrollIntoView(true);
        }}>
          <p>my projects</p>
          <GiSuitcase className="h-4 w-4"/>
        </div>
      </div>
      {/* intro-right */}
      <div className="intro-right relative bg-black-light bg-opacity-95 md:min-h-screen">
        <div className="absolute w-11/12 lg:w-10/12 bottom-0 h-1/2 bg-yellow-light "></div>
        <div className="absolute left-0 top-1/4 md:top-1/3 w-3/4 md:w-5/6 lg:w-3/4 shadow-2xl shadow-gray">
          <div className="relative h-full w-full">
            <img src="/raziq_portfolio.jpg" alt="hello" className="shadow-2xl shadow-black" />
            <div className="p-2 absolute top-1/3 left-0 bg-black -translate-x-full shadow-2xl shadow-gray">
              <VscGithub className="w-full h-auto p-2 cursor-pointer" onClick={() => { window.open('https://github.com/raziqali0306') }} />
              <AiOutlineLinkedin className="w-full h-auto p-2 cursor-pointer" onClick={() => { window.open('https://www.linkedin.com/in/raziq-ali-1ab48b21b/') }} />
              <GiTie className="w-full h-auto p-2 cursor-pointer" onClick={() => { window.open('https://docs.google.com/document/d/1WteofTZvM-Ka3pV8MIT8HszNrGt1PAjhsv0qODHhb3A/edit?usp=sharing') }} />
              <AiOutlineInstagram className="w-full h-auto p-2 cursor-pointer" onClick={() => { window.open('https://www.instagram.com/raziq_ali_143/') }} />
            </div>
            <div className="p-2 absolute top-0 right-0 bg-black translate-x-full shadow-2xl shadow-gray grid md:invisible">
              <VscGithub className="w-full h-auto p-2 cursor-pointer " onClick={() => { window.open('https://github.com/raziqali0306') }} />
              <AiOutlineLinkedin className="w-full h-auto p-2 cursor-pointer" onClick={() => { window.open('https://www.linkedin.com/in/raziq-ali-1ab48b21b/') }} />
              <GiTie className="w-full h-auto p-2 cursor-pointer" onClick={() => { window.open('https://docs.google.com/document/d/1WteofTZvM-Ka3pV8MIT8HszNrGt1PAjhsv0qODHhb3A/edit?usp=sharing') }} />
              <AiOutlineInstagram className="w-full h-auto p-2 cursor-pointer" onClick={() => { window.open('https://www.instagram.com/raziq_ali_143/') }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;