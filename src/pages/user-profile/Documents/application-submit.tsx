import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ApplicationSubmitType = {
  applicationSubmittedToIns?: string;
  cUCoventrySubmitpng?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const ApplicationSubmit: FunctionComponent<ApplicationSubmitType> = ({
  applicationSubmittedToIns,
  cUCoventrySubmitpng,
  propWidth,
  propAlignSelf,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const cUCoventrySubmitpngStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="self-stretch rounded-sm bg-white box-border flex flex-col items-start justify-start py-6 px-[19px] gap-[32px] max-w-full text-left text-7xl text-grey-1 font-light-basic-typography-paragraph-small border-[1px] border-solid border-gainsboro-600 mq825:gap-[16px_32px]">
      <div className="self-stretch flex flex-row items-center justify-center max-w-full mq825:gap-[32px_16px]">
        <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] mq1500:flex-wrap">
          <div className="flex flex-row items-center justify-start py-0 pr-[338px] pl-0 box-border gap-[16px] max-w-full lg:flex-wrap mq450:pr-5 mq450:box-border mq825:pr-[169px] mq825:box-border">
            <img
              className="h-8 w-8 relative"
              loading="lazy"
              alt=""
              src="/listdetails1.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[8px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-2xl mq450:leading-[19px]">
                {applicationSubmittedToIns}
              </h3>
              <div className="h-[19px] relative text-base leading-[25px] font-gilroy whitespace-pre-wrap inline-block shrink-0">
                Last uploaded on 23/01/2024 12:20 PM
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] max-w-full mq825:flex-wrap">
            <button className="cursor-pointer py-3 px-[15px] bg-[transparent] h-12 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-1">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center gap-[9px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/squareplus.svg"
                />
                <div className="relative text-mid tracking-[0.43px] leading-[22px] font-medium font-light-basic-typography-paragraph-small text-primary-1 text-left">
                  Add to student platform
                </div>
              </button>
            </button>
            <button className="cursor-pointer py-3 px-[15px] bg-[transparent] h-12 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-1">
              <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/download.svg"
                />
                <div className="relative text-mid tracking-[0.43px] leading-[22px] font-medium font-light-basic-typography-paragraph-small text-primary-1 text-left">
                  Download all files
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-0 px-1 box-border max-w-full text-3xl font-gilroy mq825:gap-[32px_16px]">
        <div className="flex-1 rounded-lgi bg-lavenderblush box-border flex flex-row items-center justify-between py-3.5 px-5 max-w-full gap-[20px] border-[1px] border-solid border-gainsboro-600 mq1500:flex-wrap mq1500:justify-center">
          <div className="w-[826px] flex flex-row items-center justify-start max-w-full">
            <div
              className="flex flex-col items-start justify-center gap-[4px]"
              style={headerStyle}
            >
              <div
                className="h-[27px] relative leading-[33px] inline-block mq450:text-lg"
                style={cUCoventrySubmitpngStyle}
              >
                {cUCoventrySubmitpng}
              </div>
              <div className="h-[19px] relative text-base leading-[25px] whitespace-pre-wrap inline-block shrink-0">
                Uploaded on 23/01/2024 12:20 PM
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] max-w-full mq825:flex-wrap">
            <button className="cursor-pointer py-3 px-[15px] bg-[transparent] h-12 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-1">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center gap-[9px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/squareplus.svg"
                />
                <div className="relative text-mid tracking-[0.43px] leading-[22px] font-medium font-light-basic-typography-paragraph-small text-primary-1 text-left">
                  Add to student platform
                </div>
              </button>
            </button>
            <button className="cursor-pointer py-3 px-[15px] bg-[transparent] h-12 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-1">
              <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/download.svg"
                />
                <div className="relative text-mid tracking-[0.43px] leading-[22px] font-medium font-light-basic-typography-paragraph-small text-primary-1 text-left">
                  Download all files
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSubmit;
