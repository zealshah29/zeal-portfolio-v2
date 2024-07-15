import { FunctionComponent } from "react";

export type GdscType = {
  className?: string;
  prop?: string;
  headOfDesignAndCoreMember?: string;
  may2022April2023?: string;
  googleDeveloperStudentsCl?: string;
};

const Gdsc: FunctionComponent<GdscType> = ({
  className = "",
  prop,
  headOfDesignAndCoreMember,
  may2022April2023,
  googleDeveloperStudentsCl,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start py-0 px-2.5 gap-[30px] text-center text-9xl text-black font-nunito ${className}`}
    >
      <div className="w-[50px] rounded-6xl bg-gainsboro-200 box-border h-[50px] flex flex-col items-center justify-center border-[1px] border-solid border-black lg:w-[45px] lg:h-[45px] md:w-10 md:h-10 sm:w-[30px] sm:h-[30px]">
        <div className="self-stretch relative font-medium flex items-center justify-center h-[40.4px] shrink-0 lg:text-6xl md:text-3xl sm:text-lgi">
          {prop}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center text-left text-gray-100">
        <div className="self-stretch relative lg:text-6xl md:text-3xl sm:text-lgi">
          <span className="font-semibold">{headOfDesignAndCoreMember}</span>
          <span className="text-gray-300">{may2022April2023}</span>
        </div>
        <div className="self-stretch relative text-3xl font-medium lg:text-2xl md:text-lg sm:text-mini">
          {googleDeveloperStudentsCl}
        </div>
      </div>
    </div>
  );
};

export default Gdsc;
