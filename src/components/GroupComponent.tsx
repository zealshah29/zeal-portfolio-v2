import { FunctionComponent, useCallback, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  blogTitleBackground?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  blogTitleBackground,
  propGap,
}) => {
  const onFrameContainerClick = useCallback(() => {
    window.open(
      "https://zealshah29.github.io/open-source-documentation/2024/01/17/How-to-contribute-to-someone's-repository-on-github.html"
    );
  }, []);

  return (
    <div
      className={`flex-1 rounded-xl bg-gray-100 flex flex-col items-center justify-center p-2.5 gap-[5px] cursor-pointer text-left text-11xl text-white font-nunito sm:flex-[unset] sm:self-stretch MoTab:flex-[unset] MoTab:self-stretch ${className}`}
      onClick={onFrameContainerClick}
    >
      <img
        className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[167.5px] shrink-0 object-cover"
        alt=""
        src={blogTitleBackground}
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
  );
};

export default GroupComponent;
