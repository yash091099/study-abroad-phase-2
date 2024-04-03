import { FunctionComponent } from "react";

const Heading: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-base text-grey-1 font-gilroy mq800:flex-wrap">
      <div className="w-[379px] flex flex-col items-start justify-start gap-[8px] max-w-full">
        <h3 className="m-0 self-stretch h-8 relative text-7xl leading-[39px] font-normal font-inherit text-text inline-block mq450:text-2xl">
          MA by Research English Studies
        </h3>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <div className="h-5 w-5 relative rounded-[50%] bg-gainsboro-200" />
          <div className="relative leading-[19px] inline-block min-w-[119px]">
            University Name
          </div>
        </div>
        <div className="h-5 flex flex-row items-start justify-start gap-[6px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="lazy"
            alt=""
            src="/mappin1.svg"
          />
          <div className="relative leading-[19px] inline-block min-w-[113px]">
            Manchester, UK
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start text-lg">
        <div className="flex flex-row items-start justify-start gap-[1px]">
          <div className="relative leading-[22px] inline-block min-w-[72px]">
            Shortlist
          </div>
          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
            <div className="w-[26px] h-[15px] relative">
              <div className="absolute top-[1.2px] left-[2.4px] rounded-[15.36px] bg-darkcyan w-6 h-3" />
              <div className="absolute top-[calc(50%_-_7.5px)] left-[16px] rounded-[16.55px] bg-primary-2 shadow-[0px_1.2px_3.55px_rgba(0,_0,_0,_0.37)] w-3.5 h-3.5 z-[1]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
