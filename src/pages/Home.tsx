import { FunctionComponent, useCallback } from "react";
import NavbarHome from "../components/NavbarHome";

const Home: FunctionComponent = () => {
  const onRESUMETextClick = useCallback(() => {
    window.open(
      "https://drive.google.com/file/d/1QKfTg4IxINo5708_-KW1kGMgXLrsZtfZ/view?usp=sharing"
    );
  }, []);

  const onLinkedInIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/zeal-shah-60214b121/");
  }, []);

  const onGitHubIconClick = useCallback(() => {
    window.open("https://github.com/zealshah29");
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[0px_410px] text-left text-mini text-blue font-nunito lg:h-auto sm:flex-row">
      <NavbarHome />
      <div className="h-[49px] w-[1551px] bg-white box-border flex flex-row items-center justify-between py-3.5 px-10 border-[0.5px] border-solid border-gainsboro-300 sm:flex">
        <div className="w-[110px] relative h-[31px]">
          <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 box-border w-[110px] h-[31px] border-[1px] border-solid border-blue" />
          <div
            className="absolute top-[5.5px] left-[21px] tracking-[0.1em] cursor-pointer"
            onClick={onRESUMETextClick}
          >
            RESUME
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[20px]">
          <img
            className="w-[25px] relative h-[25px] object-cover cursor-pointer"
            alt=""
            src="/linkedin@2x.png"
            onClick={onLinkedInIconClick}
          />
          <img
            className="w-[25px] relative h-[25px] object-cover cursor-pointer"
            alt=""
            src="/github@2x.png"
            onClick={onGitHubIconClick}
          />
        </div>
      </div>
      <div
        className="w-[1512px] relative [background:linear-gradient(90deg,_rgba(66,_133,_244,_0.9),_rgba(150,_100,_148,_0.9)_21.18%,_rgba(234,_67,_53,_0.9)_41.46%,_rgba(243,_128,_29,_0.9)_58.96%,_rgba(251,_188,_5,_0.9)_79.65%,_rgba(52,_168,_83,_0.9))] h-[41px]"
        id="decorative"
      />
      <section
        className="w-[1511px] bg-white flex flex-row flex-wrap items-center justify-center py-[15px] px-[100px] box-border text-center text-21xl text-black font-nunito-sans"
        id="heading"
      >
        <h1
          className="m-0 flex-1 relative text-inherit tracking-[0.02em] leading-[70px] font-bold font-inherit lg:leading-[60px] md:text-11xl md:leading-[45px] sm:text-xl sm:leading-[30px] sm:self-stretch sm:h-auto"
          id="headline"
        >
          <p className="m-0">
            <span className="text-lightgray">I am a</span>
            <span>{` critical thinker `}</span>
            <span className="text-lightgray">and</span>
            <span className="text-black"> fast learner</span>
            <span className="text-lightgray">,</span>
          </p>
          <p className="m-0 text-lightgray">
            <span className="text-black">{` `}</span>
            <span className="text-lightgray">{`crafting `}</span>
            <span className="text-black">innovative</span>
            <span> solutions.</span>
          </p>
        </h1>
      </section>
      <section
        className="flex-1 bg-white flex flex-row flex-wrap items-center justify-center py-10 px-[120px] gap-[50px_250px] text-left text-2xl text-black font-nunito sm:flex-col MoTab:flex-col"
        id="content"
      >
        <div className="w-[417px] relative tracking-[0.1em] flex items-center shrink-0 lg:w-[380px] md:text-lg md:w-[280px] sm:text-mini sm:text-justify sm:w-[250px] MoTab:text-base MoTab:text-justify">
          <span className="w-full">
            <span>Hi, I am Zeal Shah. I’m a</span>
            <b> software development engineer</b>
            <span>{` who loves turning ideas into reality! Whether I'm designing sleek user interfaces, crafting elegant code, or brainstorming and learning the next big thing, I bring a blend of creativity, passion and precision to every project. `}</span>
          </span>
        </div>
        <img
          className="w-[408px] relative h-[400px] object-cover lg:w-[300px] lg:h-[300px] md:w-[300px] md:h-[300px] sm:w-60 sm:h-60 MoTab:w-[280px] MoTab:h-[280px]"
          alt=""
          src="/zz5lqevsmy@2x.png"
        />
        <div className="flex-1 relative text-mini tracking-[0.1em] text-dimgray-200 text-center lg:w-[380px] md:text-xs md:text-justify md:w-[280px] sm:text-3xs sm:text-justify sm:w-[250px] sm:flex-[unset] sm:self-stretch MoTab:text-2xs MoTab:text-justify MoTab:flex-[unset] MoTab:self-stretch">
          I designed this website using Figma and brought it to life with
          Locofy.ai.
        </div>
      </section>
    </div>
  );
};

export default Home;
