import { FunctionComponent } from "react";
import { ToggleButton } from "react-bootstrap";
import { Switch } from "@mui/material";
import './course-listing.css'
const Card1: FunctionComponent = () => {
  return (
    <div className="self-stretch m-2 rounded-lg bg-white shadow-[0px_4px_11px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start py-6 px-[26px] box-border gap-[18px] max-w-full text-left text-lg text-grey-1 font-gilroy">
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-base mq800:flex-wrap">
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
        <div className="flex flex-col items-end justify-start gap-[4px] text-lg">
  <div className="flex flex-row items-center justify-start gap-[6px]">
    <div className="relative leading-[22px] inline-block min-w-[79px] mt-2">
      Compare
    </div>
    <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
      <div className="w-[26px] h-[10px] " style={{marginBottom:"20px"}}>
        <Switch  />
      </div>
    </div>
  </div>
  <div className="flex flex-row items-center justify-start gap-[1px]">
    <div className="relative leading-[22px] inline-block min-w-[72px] mt-3">
      Shortlist
    </div>
    <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
      <div className="w-[26px] h-[15px] relative">
        <Switch />
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="flex flex-row items-start justify-start gap-[12px] max-w-full mq800:flex-wrap">
        <div className="rounded-xl bg-lavenderblush flex flex-row items-start justify-start py-1.5 px-4 whitespace-nowrap">
          <div className="relative leading-[22px]">
            <span>61</span>
            <span> University QS World Ranking</span>
          </div>
        </div>
        <div className="rounded-xl bg-lavenderblush flex flex-row items-start justify-start py-1.5 px-4 whitespace-nowrap">
          <div className="w-[285px] relative leading-[22px] inline-block">
            <span>61</span>
            <span> Times Higher Education Ranking</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq1150:flex-wrap">
        <div className="w-[689px] flex flex-row items-start justify-start gap-[57px] max-w-full mq800:flex-wrap mq800:gap-[57px_28px]">
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
              $ 57.70k / year
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
          <div className="h-[55px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/iontimeoutline1.svg"
              />
              <div className="relative leading-[22px]">Application Fee</div>
            </div>
            <div className="h-[25px] relative text-xl leading-[30px] text-primary-1 inline-block min-w-[31px] whitespace-nowrap mq450:text-base">
              $ 0
            </div>
          </div>
          <div className="h-[60px] flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[77px] flex-1 flex flex-row items-center justify-start gap-[1px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/iontimeoutline1.svg"
              />
              <div className="flex-1 relative leading-[22px]">Intake</div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-1.5 gap-[8px]">
              <button className="cursor-pointer [border:none] py-1 px-[7px] bg-powderblue rounded flex flex-row items-center justify-center hover:bg-lightblue">
                <div className="relative text-lg leading-[22px] font-gilroy text-primary-2 text-left inline-block min-w-[49px]">
                  Open
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-1 px-[7px] bg-gainsboro-400 w-[49px] rounded flex flex-row items-center justify-center box-border hover:bg-silver-300">
                <div className="relative text-lg leading-[22px] font-gilroy text-grey-1 text-left inline-block min-w-[34px]">
                  Sep
                </div>
              </button>
            </div>
          </div>
        </div>
        <button className="cursor-pointer p-[15px] bg-[transparent] rounded-lg flex flex-col items-center justify-center border-[1px] border-solid border-primary-1">
          <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
            <img
              className="h-5 w-5 relative object-cover hidden"
              alt=""
              src="/icon--main9@2x.png"
            />
            <div className="relative text-xl leading-[22px] font-gilroy text-primary-1 text-left inline-block min-w-[113px] mq450:text-base mq450:leading-[18px]">
              View Details
            </div>
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/chevronsright-11.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card1;
