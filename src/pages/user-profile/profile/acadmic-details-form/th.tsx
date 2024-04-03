import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ThType = {
  seniorSecondary11th12th?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const Th: FunctionComponent<ThType> = ({
  seniorSecondary11th12th,
  propWidth,
  propDisplay,
}) => {
  const seniorSecondary11th12thStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq650:gap-[16px_32px]">
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq650:flex-wrap">
        <h3
          className="m-0 relative text-3xl leading-[24px] font-semibold font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left mq450:text-lg mq450:leading-[19px]"
          style={seniorSecondary11th12thStyle}
        >
          {seniorSecondary11th12th}
        </h3>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end">
          <div className="flex flex-row items-start justify-start">
            <div className="h-12 rounded-md box-border flex flex-row items-center justify-center py-[13px] px-[25px] gap-[16px] border-[1px] border-solid border-primary-1">
              <img className="h-3 w-3 relative" alt="" src="/path.svg" />
              <div className="relative text-mid tracking-[0.43px] leading-[22px] font-medium font-light-basic-typography-paragraph-small text-primary-1 text-left inline-block min-w-[34px]">
                Edit
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq650:min-w-full mq700:flex-wrap">
            <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Institution Name
            </div>
            <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                placeholder="Enter your Institution name"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq650:flex-wrap mq650:min-w-full">
            <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[51px]">
              Board
            </div>
            <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
              <div className="flex-1 rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                  placeholder="Enter Board name"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq650:flex-wrap mq650:min-w-full">
            <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[82px]">
              Score (%)
            </div>
            <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                placeholder="Enter your Score"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq650:min-w-full mq700:flex-wrap">
            <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Year of completion
            </div>
            <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                placeholder="Enter year of completion"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq650:min-w-full mq700:flex-wrap">
            <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[120px]">
              Specialization
            </div>
            <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                placeholder="Enter Specialization"
                type="text"
              />
            </div>
          </div>
          <div className="h-[21px] flex-1 overflow-hidden min-w-[430px] max-w-full mq650:min-w-full" />
        </div>
      </div>
    </form>
  );
};

export default Th;
