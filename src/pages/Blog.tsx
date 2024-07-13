import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AndroidMenuBlog from "../components/AndroidMenuBlog";
import PortalDrawer from "../components/PortalDrawer";
import GroupComponent from "../components/GroupComponent";

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

  const onFrameContainerClick = useCallback(() => {
    window.open(
      "https://zealshah29.github.io/open-source-documentation/2024/01/22/How-to-find-begginer-friendly-projects-on-github.html"
    );
  }, []);

  return (
    <>
      <div className="w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start gap-[10px] text-center text-lg text-black font-cinzel-decorative">
        <div className="self-stretch bg-white box-border h-[63px] overflow-hidden shrink-0 flex flex-row items-center justify-between py-[13px] px-[70px] border-[0.5px] border-solid border-gainsboro-100">
          <b className="relative">Z</b>
          <div className="w-[314px] flex flex-row items-center justify-between font-nunito MoTab:hidden">
            <div className="relative cursor-pointer" onClick={onHomeTextClick}>
              Home
            </div>
            <div className="relative cursor-pointer" onClick={onWorkTextClick}>
              Work
            </div>
            <b className="relative text-blueviolet">Blog</b>
          </div>
          <img
            className="h-9 w-9 relative overflow-hidden shrink-0 hidden cursor-pointer MoTab:flex"
            alt=""
            src="/menu.svg"
            onClick={openAndroidMenuBlog}
          />
        </div>
        <div className="self-stretch overflow-y-auto shrink-0 flex flex-col items-center justify-start py-10 px-0 gap-[10px] text-[55px] text-gray-100 font-nunito-sans lg:gap-[10px] lg:pt-[35px] lg:pb-[35px] lg:box-border md:gap-[10px] md:pt-[30px] md:pb-[30px] md:box-border sm:gap-[10px] sm:pt-5 sm:pb-5 sm:box-border">
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
              <GroupComponent blogTitleBackground="/rectangle-62@2x.png" />
            </div>
          </div>
        </div>
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
