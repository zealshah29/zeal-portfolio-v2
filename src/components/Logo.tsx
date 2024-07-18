import { FunctionComponent } from "react";

export type LogoType = {
  className?: string;
};

const Logo: FunctionComponent<LogoType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[200px] h-[141px] text-center text-81xl text-dimgray font-sen ${className}`}
    >
      <b className="absolute top-[11.49%] left-[calc(50%_-_108px)]">Zeal</b>
    </div>
  );
};

export default Logo;
