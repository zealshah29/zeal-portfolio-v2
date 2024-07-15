import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavbarBlog from "../components/NavbarBlog";
import FrameComponent from "../components/FrameComponent";

const Blog: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkTextClick = useCallback(() => {
    navigate("/work");
  }, [navigate]);

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
    <div className="w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start gap-[10px] text-center text-[55px] text-gray-100 font-nunito-sans">
      <NavbarBlog
        showMenuIcon={false}
        navbarBlogPadding="13px 70px"
        navbarBlogHeight="63px"
        onHomeTextClick={onHomeTextClick}
        onWorkTextClick={onWorkTextClick}
      />
      <div className="self-stretch overflow-y-auto shrink-0 flex flex-col items-center justify-start py-10 px-0 gap-[10px] lg:gap-[10px] lg:pt-[35px] lg:pb-[35px] lg:box-border md:gap-[10px] md:pt-[30px] md:pb-[30px] md:box-border sm:gap-[10px] sm:pt-5 sm:pb-5 sm:box-border">
        <div className="self-stretch relative tracking-[0.1em] leading-[40px] font-extrabold lg:text-26xl md:text-21xl sm:text-16xl mq350small:text-41xl">
          BLOGS
        </div>
        <div className="self-stretch overflow-hidden shrink-0 flex flex-col items-center justify-center py-[26px] px-[30px]">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 px-[100px] gap-[40px] lg:pt-0 lg:pb-0 lg:box-border md:gap-[30px] md:py-0 md:px-[60px] md:box-border sm:flex-1 sm:flex-col sm:gap-[20px] sm:py-0 sm:px-[50px] sm:box-border MoTab:flex-col MoTab:pl-[50px] MoTab:pr-[50px] MoTab:box-border">
            <FrameComponent
              rectangle6="/rectangle-61@2x.png"
              howToFindABeginnerFriendl="How to find a beginner-friendly project on GitHub"
              jan222024="Jan 22, 2024"
              onFrameContainerClick={onFrameContainerClick}
            />
            <FrameComponent
              rectangle6="/rectangle-62@2x.png"
              howToFindABeginnerFriendl="How to contribute to someone's repository on GitHub"
              jan222024="Jan 17, 2024"
              onFrameContainerClick={onFrameContainerClick1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;