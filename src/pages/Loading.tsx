import { FunctionComponent } from "react";
import { LinearProgress, Box } from "@mui/material";

const Loading: FunctionComponent = () => {
  return (
    <div className="w-full h-[777px] relative bg-white overflow-hidden flex flex-col items-center justify-start p-[50px] box-border text-center text-[120px] text-black font-cinzel-decorative lg:flex-col md:flex-col sm:flex-row sm:flex-wrap">
      <div className="self-stretch flex-1 flex flex-col items-center justify-center relative gap-[10px] lg:pl-0 lg:box-border md:flex-col sm:flex-1 sm:self-stretch sm:h-auto">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center z-[0] sm:self-stretch sm:w-auto sm:flex-1 sm:flex-col">
          <b className="self-stretch w-[1371px] relative flex items-end justify-center shrink-0 lg:text-81xl md:text-[90px] MoTab:text-[80px]">
            Z
          </b>
        </div>
        <Box
          className="w-[8.09%] !m-[0] absolute top-[calc(50%_+_103.5px)] right-[48.65%] left-[43.26%] z-[1]"
          sx={{ width: 104.9 }}
        >
          <LinearProgress variant="indeterminate" />
        </Box>
      </div>
    </div>
  );
};

export default Loading;
