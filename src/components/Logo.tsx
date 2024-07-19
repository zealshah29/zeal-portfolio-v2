import { FunctionComponent } from "react";

export type LogoType = {
  className?: string;
};

const Logo: FunctionComponent<LogoType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[392px] max-w-full h-[322px] text-center text-51xl text-dimgray font-sen ${className}`}
    >
      <b className="absolute top-[12.76%] left-[calc(50%_-_117px)] hidden w-[235px]">
        Zeal Shah
      </b>
    </div>
  );
};

export default Logo;