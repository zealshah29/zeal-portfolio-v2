import { FunctionComponent, useCallback } from "react";

export type FrameComponentType = {
  className?: string;
  rectangle6?: string;
  howToFindABeginnerFriendl?: string;
  jan222024?: string;

  /** Action props */
  onFrameContainerClick?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  rectangle6,
  howToFindABeginnerFriendl,
  jan222024,
  onFrameContainerClick,
}) => {
  const onFrameContainerClick1 = useCallback(() => {
    window.open(
      "https://zealshah29.github.io/open-source-documentation/2024/01/22/How-to-find-begginer-friendly-projects-on-github.html"
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
        src={rectangle6}
      />
      <div className="self-stretch flex flex-col items-start justify-start p-2.5 gap-[5px]">
        <b className="self-stretch relative lg:text-6xl md:text-xl sm:text-mini MoTab:text-xl">
          {howToFindABeginnerFriendl}
        </b>
        <b className="self-stretch relative text-xl inline-block h-[27px] shrink-0 lg:text-lg md:text-mini sm:text-2xs MoTab:text-mini">
          {jan222024}
        </b>
      </div>
    </div>
  );
};

export default FrameComponent;
