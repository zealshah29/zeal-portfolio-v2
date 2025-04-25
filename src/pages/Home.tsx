import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import AndroidMenuHome from "../components/AndroidMenuHome";
import PortalDrawer from "../components/PortalDrawer";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isAndroidMenuOpen, setAndroidMenuOpen] = useState(false);

  const onWorkClick = useCallback(() => {
    navigate("/work");
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const openAndroidMenu = useCallback(() => {
    setAndroidMenuOpen(true);
  }, []);

  const closeAndroidMenu = useCallback(() => {
    setAndroidMenuOpen(false);
  }, []);

  const onRESUMETextClick = useCallback(() => {
    window.open(
      "https://drive.google.com/file/d/1Ehcm-TaR_wcG-Q7kl-DfBPwZwJhPssGt/view?usp=drivesdk"
    );
  }, []);

  const onLinkedInIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/zeal-shah-60214b121/");
  }, []);

  const onGitHubIconClick = useCallback(() => {
    window.open("https://github.com/zealshah29");
  }, []);

  return (
    <>
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-center text-left text-mini text-blue font-nunito lg:h-auto sm:flex-col">
        <header
          className="self-stretch bg-white box-border h-14 overflow-hidden shrink-0 flex flex-row items-end justify-between py-[13px] px-[70px] text-center text-xl text-dimgray font-sen border-[0.5px] border-solid border-gainsboro-100"
          id="homenav"
        >
          <b className="relative">Zeal Shah</b>
          <nav className="m-0 w-[313px] flex flex-row items-center justify-between text-center text-lg text-black font-nunito sm:hidden MoTab:hidden">
            <b className="relative text-dodgerblue">Home</b>
            <Link
              className="cursor-pointer [text-decoration:none] relative text-[inherit]"
              to="/work"
              onClick={onWorkClick}
            >
              Work
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] relative text-[inherit]"
              to="/blog"
              onClick={onBlogClick}
            >
              Blog
            </Link>
          </nav>
          <nav
            className="m-0 h-9 w-9 relative overflow-hidden shrink-0 hidden cursor-pointer sm:flex MoTab:flex"
            onClick={openAndroidMenu}
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
            />
            <img
              className="absolute h-3/6 w-9/12 top-[25%] right-[12.5%] bottom-[25%] left-[12.5%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
          </nav>
        </header>
        <div className="self-stretch h-[49px] bg-white box-border flex flex-row items-center justify-between py-3.5 px-10 border-[0.5px] border-solid border-gainsboro-300 sm:flex sm:self-stretch sm:w-auto">
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
          className="self-stretch relative [background:linear-gradient(90deg,_rgba(66,_133,_244,_0.9),_rgba(150,_100,_148,_0.9)_21.18%,_rgba(234,_67,_53,_0.9)_41.46%,_rgba(243,_128,_29,_0.9)_58.96%,_rgba(251,_188,_5,_0.9)_79.65%,_rgba(52,_168,_83,_0.9))] h-[41px]"
          id="decorative"
        />
        <section
          className="self-stretch bg-white flex flex-row flex-wrap items-center justify-center py-[15px] px-[100px] text-center text-21xl text-black font-nunito-sans border-b-[0.3px] border-solid border-gray-200"
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
          className="self-stretch bg-white flex flex-row items-center justify-center py-10 px-[120px] gap-[200px] text-justify text-2xl text-black font-nunito lg:gap-[100px] md:flex-row md:flex-wrap md:gap-[50px] md:pl-[70px] md:pr-[70px] md:box-border sm:flex-row sm:flex-wrap sm:pl-[50px] sm:pr-[50px] sm:box-border MoTab:flex-col MoTab:gap-[50px] MoTab:pl-[50px] MoTab:pr-[50px] MoTab:box-border"
          id="content"
        >
          <div className="w-[417px] relative tracking-[0.1em] flex items-center shrink-0 lg:w-[380px] md:text-lg md:text-justify md:w-[280px] sm:text-mini sm:text-justify sm:w-[250px] MoTab:text-base MoTab:text-justify">
            <span className="w-full">
              <span>Hi, I am Zeal Shah. I’m a</span>
              <b> software development engineer</b>
              <span>{` who loves turning ideas into reality! Whether I'm designing sleek user interfaces, crafting elegant code, or brainstorming and learning the next big thing, I bring a blend of creativity, passion and precision to every project. `}</span>
            </span>
          </div>
          <img
            className="w-[319px] relative rounded-lg h-[313px] object-cover lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-60 sm:h-60 MoTab:w-[250px] MoTab:h-[250px]"
            alt=""
            src="/zz5lqevsmy@2x.png"
          />
        </section>
        <div className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center py-[30px] px-[50px] text-center text-xl text-gray-600 border-t-[0.3px] border-solid border-gray-200 sm:pt-[30px] sm:pb-[30px] sm:box-border">
          <div className="relative tracking-[0.1em] lg:w-[380px] md:text-mini md:text-center md:w-[280px] sm:text-xs sm:text-center sm:w-[250px] MoTab:text-smi MoTab:text-center">
            <span className="font-medium">{`This website is designed by `}</span>
            <b className="text-black">Zeal Shah</b>
            <span className="font-medium">{` and powered by `}</span>
            <b className="text-black">AI</b>
          </div>
        </div>
      </div>
      {isAndroidMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeAndroidMenu}
        >
          <AndroidMenuHome onClose={closeAndroidMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Home;
