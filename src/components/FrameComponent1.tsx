import { FunctionComponent, useCallback } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const onFrameContainerClick = useCallback(() => {
    window.open("https://github.com/zealshah29/Eduvibe-Frontend");
  }, []);

  return (
    <div
      className={`rounded-xl bg-gray-100 flex flex-col items-center justify-center p-5 gap-[20px] cursor-pointer text-left text-11xl text-white font-nunito-sans ${className}`}
      onClick={onFrameContainerClick}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover sm:self-stretch sm:w-auto sm:h-[100px] MoTab:self-stretch MoTab:w-auto MoTab:h-[100px]"
        alt=""
        src="/rectangle-85@2x.png"
      />
      <div className="w-[665px] flex flex-col items-start justify-start gap-[17px] MoTab:self-stretch MoTab:w-auto">
        <b className="self-stretch relative lg:text-8xl md:text-6xl sm:text-2xl">
          EduVibe Website - UI UX Design
        </b>
        <div className="w-[665px] relative text-2xl tracking-[0.1em] inline-block font-nunito lg:text-lg md:text-base sm:text-xs MoTab:self-stretch MoTab:w-auto">
          <span>{`Worked in a team of 7 on an educational website to aid students in self-study. It has 3 features - `}</span>
          <b>Organize</b>
          <span>{` the study materials, `}</span>
          <b>Plan</b>
          <span>{` the work, and enhance the `}</span>
          <b>Focus</b>
          <span>{`. `}</span>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[15px] text-center text-lg text-gray-100 font-nunito">
        <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            React
          </div>
        </div>
        <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            Figma
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
