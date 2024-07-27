import { FunctionComponent, useCallback } from "react";

export type ClubsType = {
  className?: string;
  prop?: string;
  headOfDesignAndCoreMember?: string;
  may2022April2023?: string;
  googleDeveloperStudentsCl?: string;
};

const Clubs: FunctionComponent<ClubsType> = ({
  className = "",
  prop,
  headOfDesignAndCoreMember,
  may2022April2023,
  googleDeveloperStudentsCl,
}) => {
  const onFrameContainerClick = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLCRMIe5FDPsd0gVs500xeOewfySTsmEjf&si=BUynwY901MiITsXL"
    );
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    window.open(
      "https://developers.google.com/machine-learning/crash-course/ml-intro"
    );
  }, []);

  const onFrameContainerClick2 = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLdW8AKJtqW7u7JKzkiXsDxNFlOrmjGwDJ&si=HKCiFU8FGsC3mnfZ"
    );
  }, []);

  const onFrameContainerClick3 = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLAwxTw4SYaPlTr1MmjkAZXVv8Su2CfY7D&si=MpbJuzj3PbVBX20T"
    );
  }, []);

  const onFrameContainerClick4 = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=8dZA9geeHPV1m-RB"
    );
  }, []);

  const onFrameContainerClick5 = useCallback(() => {
    window.open(
      "https://drive.google.com/file/d/1iLm81RWiM21qfMiwjgnJmWdgYaCld4uM/view?usp=sharing"
    );
  }, []);

  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-center py-[30px] px-[50px] gap-[30px] text-center text-lg text-gray-100 font-nunito ${className}`}
    >
      <div
        className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] cursor-pointer lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border"
        onClick={onFrameContainerClick}
      >
        <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
          System Design
        </div>
      </div>
      <div
        className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] cursor-pointer lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border"
        onClick={onFrameContainerClick1}
      >
        <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
          Machine Learning
        </div>
      </div>
      <div
        className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] cursor-pointer lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border"
        onClick={onFrameContainerClick2}
      >
        <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
          Bitcoin Technology
        </div>
      </div>
      <div
        className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] cursor-pointer lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border"
        onClick={onFrameContainerClick3}
      >
        <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
          Product Design
        </div>
      </div>
      <div
        className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] cursor-pointer lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border"
        onClick={onFrameContainerClick4}
      >
        <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
          Database Management System
        </div>
      </div>
      <div
        className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] cursor-pointer lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border"
        onClick={onFrameContainerClick5}
      >
        <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
          Object Oriented Programming
        </div>
      </div>
    </div>
  );
};

export default Clubs;