import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AndroidMenuBlog from "../components/AndroidMenuBlog";
import PortalDrawer from "../components/PortalDrawer";

const Blog: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isAndroidMenuBlogOpen, setAndroidMenuBlogOpen] = useState(false);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkTextClick = useCallback(() => {
    navigate("/work");
  }, [navigate]);

  const openAndroidMenuBlog = useCallback(() => {
    setAndroidMenuBlogOpen(true);
  }, []);

  const closeAndroidMenuBlog = useCallback(() => {
    setAndroidMenuBlogOpen(false);
  }, []);

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

  const onFrameContainerClick = useCallback(() => {
    window.open(
      "https://zealshah29.github.io/open-source-documentation/2024/01/22/How-to-find-begginer-friendly-projects-on-github.html"
    );
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    window.open(
      "https://zealshah29.github.io/open-source-documentation/2024/01/17/How-to-contribute-to-someone's-repository-on-github.html"
    );
  }, []);

  return (
    <>
      <div className="w-full relative bg-white overflow-y-auto flex flex-col items-center justify-start text-left text-mini text-blue font-nunito">
        <header className="self-stretch bg-white box-border h-14 overflow-hidden shrink-0 flex flex-row items-center justify-between py-[13px] px-[70px] text-center text-xl text-dimgray font-sen border-[0.5px] border-solid border-gainsboro-100">
          <b className="relative">Zeal</b>
          <div className="w-[314px] flex flex-row items-center justify-between text-lg text-black font-nunito sm:hidden MoTab:hidden">
            <div className="relative cursor-pointer" onClick={onHomeTextClick}>
              Home
            </div>
            <div className="relative cursor-pointer" onClick={onWorkTextClick}>
              Work
            </div>
            <b className="relative text-dodgerblue">Blog</b>
          </div>
          <img
            className="h-9 w-9 relative overflow-hidden shrink-0 hidden cursor-pointer md:hidden sm:flex MoTab:flex"
            alt=""
            src="/menu.svg"
            onClick={openAndroidMenuBlog}
          />
        </header>
        <div className="self-stretch h-[49px] bg-white box-border shrink-0 flex flex-row items-center justify-between py-3.5 px-10 border-[0.5px] border-solid border-gainsboro-300 sm:flex">
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
        <main className="self-stretch overflow-y-auto shrink-0 flex flex-col items-center justify-start py-10 px-0 gap-[10px] text-center text-[55px] text-gray-100 font-nunito-sans">
          <div className="self-stretch relative tracking-[0.1em] leading-[40px] font-extrabold lg:text-26xl md:text-21xl sm:text-16xl mq350small:text-41xl">
            BLOGS
          </div>
          <div className="self-stretch overflow-hidden shrink-0 flex flex-col items-center justify-center py-[26px] px-[30px] text-left text-11xl text-white font-nunito">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 px-[100px] gap-[40px] lg:pt-0 lg:pb-0 lg:box-border md:gap-[30px] md:py-0 md:px-[60px] md:box-border sm:flex-1 sm:flex-col sm:gap-[20px] sm:py-0 sm:px-[50px] sm:box-border MoTab:flex-col MoTab:pl-[50px] MoTab:pr-[50px] MoTab:box-border">
              <div
                className="flex-1 rounded-xl bg-gray-100 flex flex-col items-center justify-center p-2.5 gap-[5px] cursor-pointer sm:flex-[unset] sm:self-stretch MoTab:flex-[unset] MoTab:self-stretch"
                onClick={onFrameContainerClick}
              >
                <img
                  className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[167.5px] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-61@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start p-2.5 gap-[5px]">
                  <b className="self-stretch relative lg:text-6xl md:text-xl sm:text-mini MoTab:text-xl">
                    How to find a beginner-friendly project on GitHub
                  </b>
                  <b className="self-stretch relative text-xl inline-block h-[27px] shrink-0 lg:text-lg md:text-mini sm:text-2xs MoTab:text-mini">
                    Jan 22, 2024
                  </b>
                </div>
              </div>
              <div
                className="flex-1 rounded-xl bg-gray-100 flex flex-col items-center justify-center p-2.5 gap-[5px] cursor-pointer sm:flex-[unset] sm:self-stretch MoTab:flex-[unset] MoTab:self-stretch"
                onClick={onFrameContainerClick1}
              >
                <img
                  className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[167.5px] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-62@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start p-2.5 gap-[5px]">
                  <b className="self-stretch relative lg:text-6xl md:text-xl sm:text-mini MoTab:text-xl">
                    How to contribute to someone's repository on GitHub
                  </b>
                  <b className="self-stretch relative text-xl inline-block h-[27px] shrink-0 lg:text-lg md:text-mini sm:text-2xs MoTab:text-mini">
                    Jan 17, 2024
                  </b>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {isAndroidMenuBlogOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeAndroidMenuBlog}
        >
          <AndroidMenuBlog onClose={closeAndroidMenuBlog} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Blog;