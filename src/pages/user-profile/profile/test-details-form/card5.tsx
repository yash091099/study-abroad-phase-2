import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Card5Type = {
  gMAT?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Card5: FunctionComponent<Card5Type> = ({
  gMAT,
  propHeight,
  propDisplay,
  propMinWidth,
}) => {
  const listDetailsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const gMATStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="self-stretch rounded-xl bg-lavenderblush flex flex-col items-start justify-start py-6 px-[9px] text-left text-7xl font-light-basic-typography-paragraph-small border-[1px] border-solid border-gainsboro-600 mq650:gap-[16px_32px]">
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
        <div
          className="h-8 flex flex-row items-center justify-start gap-[20px]"
          style={listDetailsStyle}
        >
          <img className="h-8 w-8 relative" alt="" src="/listdetails.svg" />
          <div
            className="relative leading-[24px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[76px] mq450:text-2xl mq450:leading-[19px]"
            style={gMATStyle}
          >
            {gMAT}
          </div>
        </div>
        <img className="h-9 w-9 relative" alt="" src="/chevrondown-11.svg" />
      </div>
    </div>
  );
};

export default Card5;
