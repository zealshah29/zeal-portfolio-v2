import { FunctionComponent } from "react";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 shadow-[0px_2px_25px_rgba(0,_0,_0,_0.05)] bg-white flex flex-col items-start justify-center py-[30px] px-10 gap-[20px] text-left text-lg text-black font-nunito border-[0.1px] border-solid border-gray-400 lg:w-[550px] md:w-[450px] sm:w-[300px] ${className}`}
    >
      <div className="self-stretch relative text-sm tracking-[0.1em] text-gray-500 flex items-center h-[52px] shrink-0 lg:text-smi md:text-2xs sm:text-3xs">
        May, 2023 - July, 2023
      </div>
      <b className="self-stretch relative text-5xl tracking-[0.1em] leading-[30px] font-nunito-sans lg:text-3xl md:text-xl sm:text-lg">{`Developer Intern | Barclays `}</b>
      <div className="self-stretch relative tracking-[0.1em] leading-[20px] lg:text-mini md:text-xs">
        Worked on OTC trade regulatory reporting platform solution within
        Markets Post Trade and developed a utility to identify and improve the
        performance of long-running database transactions, featuring
        configurable queries, email alerts, and user actions.
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-center text-dodgerblue lg:gap-[10px] md:gap-[8px] sm:gap-[5px]">
        <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            JAVA 8
          </div>
        </div>
        <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            Spring Boot
          </div>
        </div>
        <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            MS SQL
          </div>
        </div>
        <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            Apache Maven
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;