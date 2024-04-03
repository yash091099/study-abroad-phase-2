import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent17Type = {
  frame1686561276?: string;
  listening?: string;
  minutes?: string;
  sections?: string;
  questions?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent17: FunctionComponent<FrameComponent17Type> = ({
  frame1686561276,
  listening,
  minutes,
  sections,
  questions,
  propMinHeight,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const listeningStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const minutesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start min-w-[153px] max-w-[156px] min-h-[362px] text-left text-xl text-primary-1 font-gilroy mq1125:min-h-[auto]"
      style={frameDiv7Style}
    >
      <div className="self-stretch h-[296px] rounded-15xl bg-white shadow-[0px_4px_24px_rgba(0,_0,_0,_0.15)] flex flex-col items-center justify-start pt-6 px-4 pb-[34px] box-border gap-[11px] z-[1]">
        <img
          className="self-stretch h-[131px] relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={frame1686561276}
        />
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[13px] gap-[4px]">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[7px]">
            <div
              className="relative leading-[32px] inline-block min-w-[83px] whitespace-nowrap mq450:text-base mq450:leading-[26px]"
              style={listeningStyle}
            >
              {listening}
            </div>
            <div
              className="relative text-base leading-[32px] text-grey-1 text-center inline-block min-w-[80px] whitespace-nowrap"
              style={minutesStyle}
            >
              {minutes}
            </div>
          </div>
          <div className="h-7 relative text-base leading-[12px] text-grey-1 text-center inline-block">
            <p className="[margin-block-start:0] [margin-block-end:4px]">
              {sections}
            </p>
            <p className="m-0">{questions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent17;
