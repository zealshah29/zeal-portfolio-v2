import { FunctionComponent } from "react";

export type GroupComponent3Type = {
  className?: string;
  rectangle8?: string;
  portfolioWebsiteVersion2?: string;
  thisIsTheSecondVersionOfM?: string;
  locofyai?: string;
  figma?: string;
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  className = "",
  rectangle8,
  portfolioWebsiteVersion2,
  thisIsTheSecondVersionOfM,
  locofyai,
  figma,
}) => {
  return (
    <div
      className={`rounded-xl bg-gray-100 flex flex-col items-center justify-center p-5 gap-[20px] text-left text-11xl text-white font-nunito-sans ${className}`}
    >
      <img
        className="self-stretch relative rounded max-w-full overflow-hidden h-[213px] shrink-0 object-cover sm:self-stretch sm:w-auto sm:h-[100px] MoTab:self-stretch MoTab:w-auto MoTab:h-[100px]"
        alt=""
        src={rectangle8}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
        <b className="self-stretch relative lg:text-8xl md:text-6xl sm:text-2xl">
          {portfolioWebsiteVersion2}
        </b>
        <div className="w-[665px] relative text-2xl tracking-[0.1em] font-nunito inline-block lg:text-lg md:text-base sm:text-xs MoTab:self-stretch MoTab:w-auto">
          {thisIsTheSecondVersionOfM}
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[15px] text-center text-lg text-gray-100 font-nunito">
        <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            {locofyai}
          </div>
        </div>
        <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            {figma}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
