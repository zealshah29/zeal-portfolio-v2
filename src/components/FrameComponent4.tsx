import { FunctionComponent } from "react";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 shadow-[0px_2px_25px_rgba(0,_0,_0,_0.05)] bg-white flex flex-col items-start justify-center py-[30px] px-10 gap-[20px] text-left text-lg text-black font-nunito border-[0.1px] border-solid border-gray-400 lg:w-[550px] md:w-[450px] sm:w-[300px] ${className}`}
    >
      <div className="self-stretch relative text-sm tracking-[0.1em] text-gray-500 flex items-center h-[52px] shrink-0 lg:text-smi md:text-2xs sm:text-3xs">
        January, 2024 - May, 2024
      </div>
      <b className="self-stretch relative text-5xl tracking-[0.1em] leading-[30px] font-nunito-sans lg:text-3xl md:text-xl sm:text-lg">{`Research Intern | SVNIT, Surat `}</b>
      <div className="self-stretch relative tracking-[0.1em] leading-[20px] lg:text-mini md:text-xs">
        <span>{`I integrated a PULP_RISCV hardware accelerator with the PULPissimo system for computer vision applications on FPGA platform. The results were impressive, with the hardware accelerator achieving computation speeds `}</span>
        <b>467.8 times faster</b>
        <span> than the CPU.</span>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] text-center text-dodgerblue lg:gap-[10px] md:gap-[8px] sm:gap-[5px]">
        <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            System Verilog
          </div>
        </div>
        <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">{`FPGA `}</div>
        </div>
        <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            Pulpissimo
          </div>
        </div>
        <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            Linux
          </div>
        </div>
        <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
          <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
            Open Source
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
