import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LogoType = {
  className?: string;

  /** Style props */
  logoWidth?: CSSProperties["width"];
  logoHeight?: CSSProperties["height"];
  logoPosition?: CSSProperties["position"];
  logoTop?: CSSProperties["top"];
  logoLeft?: CSSProperties["left"];
};

const Logo: FunctionComponent<LogoType> = ({
  className = "",
  logoWidth,
  logoHeight,
  logoPosition,
  logoTop,
  logoLeft,
}) => {
  const logoStyle: CSSProperties = useMemo(() => {
    return {
      width: logoWidth,
      height: logoHeight,
      position: logoPosition,
      top: logoTop,
      left: logoLeft,
    };
  }, [logoWidth, logoHeight, logoPosition, logoTop, logoLeft]);

  return (
    <div
      className={`w-[200px] h-[141px] text-center text-81xl text-dimgray-300 font-sen ${className}`}
      style={logoStyle}
    >
      <b className="absolute top-[11.49%] left-[calc(50%_-_108px)]">Zeal</b>
    </div>
  );
};

export default Logo;
