import { FunctionComponent } from "react";

const FrameComponent7: FunctionComponent = () => {
  return (
    <div className="rounded-lg bg-white shadow-[0px_4px_11px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-center py-6 px-[26px] box-border gap-[18px] max-w-full text-left text-7xl text-text font-gilroy">
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq850:flex-wrap">
        <div className="w-[363px] flex flex-col items-start justify-start max-w-full">
          <h3 className="m-0 self-stretch h-8 relative text-inherit leading-[39px] font-normal font-inherit inline-block mq450:text-2xl">
            Aauw International Fellowship
          </h3>
        </div>
        <img
          className="h-8 w-8 relative rounded-[63.94px] overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/frame-1686560968@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-lg text-grey-1 mq850:flex-wrap">
        <div className="h-[55px] flex flex-col items-start justify-start gap-[8px]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/solarwalletlinear.svg"
            />
            <div className="relative leading-[22px] inline-block min-w-[65px]">
              Amount
            </div>
          </div>
          <div className="h-[25px] relative text-xl leading-[30px] text-primary-1 inline-block min-w-[71px] mq450:text-base">{`$ 57.70k `}</div>
        </div>
        <div className="h-[55px] flex flex-col items-start justify-start gap-[8px]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[1px]">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/iontimeoutline.svg"
            />
            <div className="relative leading-[22px] inline-block min-w-[80px]">
              Deadline
            </div>
          </div>
          <div className="h-[25px] relative text-xl leading-[30px] text-primary-1 inline-block min-w-[117px] mq450:text-base">
            July 07, 2024
          </div>
        </div>
        <div className="h-[55px] w-[280px] flex flex-col items-start justify-start gap-[8px]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/iontimeoutline.svg"
            />
            <div className="relative leading-[22px] inline-block min-w-[59px]">
              Course
            </div>
          </div>
          <div className="self-stretch h-[25px] relative text-xl leading-[30px] text-primary-1 inline-block mq450:text-base">
            UG + PG (Accelerated) Degree
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
