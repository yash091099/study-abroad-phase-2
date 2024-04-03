import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ContainerWithChevronsRightAndBType = {
  /** Style props */
  propHeight?: CSSProperties["height"];
  propLineHeight?: CSSProperties["lineHeight"];
  propLineHeight1?: CSSProperties["lineHeight"];
};

const ContainerWithChevronsRightAndB: FunctionComponent<
  ContainerWithChevronsRightAndBType
> = ({ propHeight, propLineHeight, propLineHeight1 }) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  const enterYourMobileStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight1,
    };
  }, [propLineHeight1]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[17px] max-w-full text-left text-xl text-black2 font-gilroy mq750:flex-wrap">
      <button className="cursor-pointer py-[13px] px-[11px] bg-[transparent] h-[62px] rounded-lg shadow-[0px_2px_8px_rgba(0,_0,_0,_0.5)] box-border overflow-x-auto flex flex-row items-center justify-start gap-[8.5px] border-[1px] border-solid border-silver-200">
        <img
          className="h-9 w-9 relative overflow-hidden shrink-0"
          alt=""
          src="/twemojiflagindia.svg"
        />
        <img
          className="h-[7px] w-3.5 relative shrink-0"
          alt=""
          src="/vector-27.svg"
        />
        <div
          className="w-8 relative text-xl font-gilroy text-black2 text-left inline-block whitespace-nowrap mq450:text-base"
          style={labelStyle}
        >
          +91
        </div>
      </button>
      <div className="flex-1 rounded-lg shadow-[0px_2px_8px_rgba(0,_0,_0,_0.5)] box-border flex flex-row items-center justify-start py-[19px] px-6 min-w-[235px] whitespace-nowrap max-w-full border-[1px] border-solid border-silver-200">
        <div
          className="w-[235px] relative inline-block"
          style={enterYourMobileStyle}
        >
          Enter your Mobile Number
        </div>
      </div>
    </div>
  );
};

export default ContainerWithChevronsRightAndB;
