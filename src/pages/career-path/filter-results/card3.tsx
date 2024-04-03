import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Card3Type = {
  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const Card3: FunctionComponent<Card3Type> = ({ propLeft, propTop }) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className="w-[588px] !m-[0] absolute top-[0px] left-[0px] rounded-lg bg-white shadow-[0px_4px_11px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start py-6 px-[26px] box-border gap-[18px] max-w-full text-left text-7xl text-text font-gilroy"
      style={cardStyle}
    >
      <div className="w-[379px] flex flex-col items-start justify-start gap-[2px] max-w-full">
        <h3 className="m-0 self-stretch h-8 relative text-inherit leading-[39px] font-normal font-inherit inline-block mq450:text-2xl">
          MA by Research English Studies
        </h3>
        <div className="flex flex-row items-start justify-start gap-[6px] text-base text-grey-1">
          <div className="h-5 w-5 relative rounded-[50%] bg-gainsboro-200" />
          <div className="relative leading-[19px]">University Name, USA</div>
        </div>
      </div>
      <div className="w-[286px] h-[55px] flex flex-row items-start justify-between gap-[20px] text-lg text-grey-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/solarwalletlinear.svg"
            />
            <div className="relative leading-[22px] inline-block min-w-[63px]">
              Fees ($)
            </div>
          </div>
          <div className="h-[25px] relative text-xl leading-[30px] text-primary-1 inline-block mq450:text-base">
            $ 57.70k / year
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <div className="flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[6px]">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/iontimeoutline.svg"
            />
            <div className="relative leading-[22px] inline-block min-w-[72px]">
              Duration
            </div>
          </div>
          <div className="h-[25px] relative text-xl text-primary-1 inline-block min-w-[97px] mq450:text-base">
            48 months
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
