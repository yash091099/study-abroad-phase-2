import { FunctionComponent } from "react";

const Card4: FunctionComponent = () => {
  return (
    <div className="w-[589px] rounded-lg bg-white shadow-[0px_4px_11px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-center py-6 px-[26px] box-border gap-[22px] max-w-full text-left text-lg text-grey-1 font-gilroy">
      <div className="self-stretch flex flex-row items-center justify-start text-7xl text-text">
        <div className="w-[291px] flex flex-col items-start justify-start">
          <h3 className="m-0 self-stretch h-8 relative text-inherit leading-[39px] font-normal font-inherit inline-block mq450:text-2xl">
            Bachelors in Accounting
          </h3>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start max-w-full">
        <div className="flex flex-row items-start justify-start gap-[57px] max-w-full mq450:flex-wrap mq450:gap-[57px_28px]">
          <div className="h-[55px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/solarwalletlinear1.svg"
              />
              <div className="relative leading-[22px] inline-block min-w-[63px]">
                Fees ($)
              </div>
            </div>
            <div className="h-[25px] relative text-xl leading-[30px] text-primary-1 inline-block mq450:text-base">
              $ 7.70k - $54.40k / year
            </div>
          </div>
          <div className="h-[55px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/iontimeoutline1.svg"
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
      <div className="flex flex-row items-center justify-start gap-[38px] max-w-full mq450:flex-wrap mq450:gap-[38px_19px]">
        <div className="flex flex-col items-start justify-center gap-[8px] min-w-[146px] mq450:flex-1">
          <div className="h-[21px] relative text-mid leading-[26px] text-text inline-block min-w-[128px]">
            Career outcome
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[22px] inline-block min-w-[97px] whitespace-nowrap">
              Accountant
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[22px] whitespace-nowrap">
              Financial Analyst
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[22px] whitespace-nowrap">
              Marketing Analyst
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[8px] min-w-[151px] text-primary-1 mq450:flex-1">
          <div className="h-[21px] relative text-mid leading-[26px] text-text inline-block min-w-[104px]">
            Average CTC
          </div>
          <div className="h-[22px] relative leading-[27px] inline-block">{`$ 25.70k - $54.40k `}</div>
          <div className="h-[22px] relative leading-[27px] inline-block">{`$ 25.70k - $54.40k `}</div>
          <div className="h-[22px] relative leading-[27px] inline-block">{`$ 25.70k - $54.40k `}</div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
