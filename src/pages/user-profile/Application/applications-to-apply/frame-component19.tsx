import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent19Type = {
  sep2024?: string;
  veryHigh?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent19: FunctionComponent<FrameComponent19Type> = ({
  sep2024,
  veryHigh,
  propBackgroundColor,
  propColor,
  propMinWidth,
}) => {
  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const veryHighStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0 gap-[8px] text-left text-lg text-grey-1 font-gilroy">
      <div className="flex flex-row items-center justify-start">
        <div className="relative leading-[22px] inline-block min-w-[77px] whitespace-nowrap">
          {sep2024}
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] py-1.5 px-[13.5px] bg-limegreen-300 rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen-200"
        style={frameButtonStyle}
      >
        <div
          className="relative text-lg leading-[22px] font-gilroy text-limegreen-100 text-left inline-block min-w-[78px] whitespace-nowrap"
          style={veryHighStyle}
        >
          {veryHigh}
        </div>
      </button>
    </div>
  );
};

export default FrameComponent19;
