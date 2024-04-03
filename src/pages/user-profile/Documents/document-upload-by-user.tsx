import { FunctionComponent } from "react";

const DocumentUploadByUser: FunctionComponent = () => {
  return (
    <div className="w-[1680px] rounded-md bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] max-w-full flex flex-row flex-wrap items-start justify-start tracking-[normal] [row-gap:20px] text-left text-mini font-light-basic-typography-paragraph-small">
      <div className="h-[350px] w-72 flex flex-row items-start justify-start p-6 box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
            <div className="h-10 rounded-md bg-primary-1 flex flex-row items-start justify-start p-2 box-border">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/filetext1.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <h3 className="m-0 self-stretch relative text-inherit leading-[21px] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Documents
              </h3>
              <div className="self-stretch relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Incomplete
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
            <div className="h-10 rounded-md bg-whitesmoke-600 shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-start justify-start p-2 box-border">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/filecheck.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <h3 className="m-0 self-stretch relative text-inherit leading-[21px] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Consent Form
              </h3>
              <div className="self-stretch relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Incomplete
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[351px] w-px relative box-border ml-[-0.5px] border-r-[1px] border-solid border-gainsboro-600 mq1225:w-full mq1225:h-px" />
      <section className="flex-1 flex flex-col items-start justify-start p-6 box-border gap-[64px] min-w-[905px] max-w-full shrink-0 ml-[-0.5px] text-left text-3xl text-midnightblue font-light-basic-typography-paragraph-small mq750:gap-[32px_64px] mq1050:min-w-full mq450:gap-[16px_64px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px_32px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
            <h1 className="m-0 w-[277px] relative text-inherit leading-[24px] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 mq450:text-lg mq450:leading-[19px]">
              Documents
            </h1>
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-lg">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq1225:flex-wrap">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full">
                <h2 className="m-0 relative text-inherit font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[99px]">
                  Document 1
                </h2>
                <div className="h-11 w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full text-sm font-gilroy border-[1px] border-solid border-gainsboro-600">
                  <div className="self-stretch flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[7px] px-3.5 box-border max-w-full gap-[20px]">
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <h3 className="m-0 h-[17px] relative text-inherit leading-[21px] font-normal font-inherit inline-block min-w-[63px]">{`Pan card `}</h3>
                      <div className="h-3 relative text-3xs leading-[16px] text-slategray inline-block whitespace-nowrap">
                        acceptable formats: JPEG, JPG or PNG.
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/fileupload.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full">
                <h2 className="m-0 relative text-inherit font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[99px]">
                  Document 1
                </h2>
                <div className="h-11 w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full text-sm font-gilroy border-[1px] border-solid border-gainsboro-600">
                  <div className="self-stretch flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[7px] px-3.5 box-border max-w-full gap-[20px]">
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <h3 className="m-0 h-[17px] relative text-inherit leading-[21px] font-normal font-inherit inline-block min-w-[63px]">{`Pan card `}</h3>
                      <div className="h-3 relative text-3xs leading-[16px] text-slategray inline-block whitespace-nowrap">
                        acceptable formats: JPEG, JPG or PNG.
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/fileupload.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq1225:flex-wrap">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full">
                <h2 className="m-0 relative text-inherit font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[99px]">
                  Document 1
                </h2>
                <div className="h-11 w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full text-sm font-gilroy border-[1px] border-solid border-gainsboro-600">
                  <div className="self-stretch flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[7px] px-3.5 box-border max-w-full gap-[20px]">
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <h3 className="m-0 h-[17px] relative text-inherit leading-[21px] font-normal font-inherit inline-block min-w-[63px]">{`Pan card `}</h3>
                      <div className="h-3 relative text-3xs leading-[16px] text-slategray inline-block whitespace-nowrap">
                        acceptable formats: JPEG, JPG or PNG.
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/fileupload.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full">
                <h2 className="m-0 relative text-inherit font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[99px]">
                  Document 1
                </h2>
                <div className="h-11 w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full text-sm font-gilroy border-[1px] border-solid border-gainsboro-600">
                  <div className="self-stretch flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[7px] px-3.5 box-border max-w-full gap-[20px]">
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <h3 className="m-0 h-[17px] relative text-inherit leading-[21px] font-normal font-inherit inline-block min-w-[63px]">{`Pan card `}</h3>
                      <div className="h-3 relative text-3xs leading-[16px] text-slategray inline-block whitespace-nowrap">
                        acceptable formats: JPEG, JPG or PNG.
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/fileupload.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5">
          <div className="rounded-lg bg-primary-1 flex flex-col items-center justify-center p-[15px] border-[1px] border-solid border-primary-1">
            <button className="cursor-pointer [border:none] py-0 px-0 bg-[transparent] h-5 flex flex-row items-center justify-start box-border gap-[8px]">
              <img
                className="h-5 w-5 relative object-cover hidden"
                alt=""
                src="/icon--main8@2x.png"
              />
              <div className="relative text-xl leading-[22px] font-gilroy text-white text-left inline-block min-w-[65px] mq450:text-base mq450:leading-[18px]">
                Submit
              </div>
              <img
                className="h-6 w-6 relative"
                alt=""
                src="/chevronsright3.svg"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentUploadByUser;
