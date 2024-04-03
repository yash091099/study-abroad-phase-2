import { FunctionComponent } from "react";
import ApplicationSubmit from "../application-submit";

const DocumentUploadByEdulley: FunctionComponent = () => {
  return (
    <div className="w-[1680px] max-w-full flex flex-col items-start justify-start gap-[34px] tracking-[normal] mq450:gap-[17px_34px]">
      <section className="self-stretch rounded-5xl bg-whitesmoke-800 box-border flex flex-col items-start justify-start py-6 px-[19px] gap-[32px] max-w-full text-left text-5xl text-black2 font-gilroy border-[1px] border-solid border-gainsboro-600 mq450:gap-[16px_32px] mq825:pt-5 mq825:pb-5 mq825:box-border">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
          <div className="w-[347px] flex flex-col items-start justify-start gap-[2px] max-w-full">
            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-normal font-inherit mq450:text-lgi mq450:leading-[27px]">
              MA by Research English Studies
            </h3>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-grey-1 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  <div className="h-5 w-5 relative rounded-[50%] bg-gainsboro-200" />
                  <div className="relative leading-[19px] inline-block min-w-[119px]">
                    University Name
                  </div>
                </div>
                <div className="h-6 relative text-xl leading-[30px] text-black2 inline-block whitespace-nowrap box-border pr-1.5 mq450:text-base">
                  CU : Conventry
                </div>
                <div className="relative text-5xl leading-[34px] text-primary-1 whitespace-nowrap pr-1.5 mq450:text-lgi mq450:leading-[27px]">
                  98765/23-24
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
          </div>
          <img
            className="h-9 w-9 relative object-contain"
            loading="lazy"
            alt=""
            src="/chevrondown1.svg"
          />
        </div>
        <ApplicationSubmit
          applicationSubmittedToIns="Application Submitted to Institution"
          cUCoventrySubmitpng="CU Coventry submit.png"
        />
        <ApplicationSubmit
          applicationSubmittedToIns="Conditional Offer"
          cUCoventrySubmitpng="Student_name_Conditionaloffersubmit.png"
          propWidth="437px"
          propAlignSelf="stretch"
        />
      </section>
      <section className="self-stretch bg-whitesmoke-800 flex flex-col items-start justify-start max-w-full text-left text-5xl text-black2 font-gilroy mq450:gap-[16px_32px]">
        <div className="self-stretch rounded-xl box-border flex flex-col items-start justify-start py-6 px-[19px] max-w-full border-[1px] border-solid border-gainsboro-600 mq450:gap-[16px_32px]">
          <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start max-w-full">
              <h3 className="m-0 w-[344px] relative text-inherit leading-[34px] font-normal font-inherit inline-block mq450:text-lgi mq450:leading-[27px]">
                BSc (Hons) Applied Biosciences
              </h3>
            </div>
            <img
              className="h-9 w-9 relative min-h-[36px]"
              loading="lazy"
              alt=""
              src="/chevrondown-11.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentUploadByEdulley;
