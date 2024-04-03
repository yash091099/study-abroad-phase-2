import { FunctionComponent } from "react";

const ProfileWorkBackground: FunctionComponent = () => {
  return (
    <div className="w-[1392px] max-w-full flex flex-col items-start justify-start p-6 box-border gap-[64px] tracking-[normal] mq750:gap-[32px_64px] mq450:gap-[16px_64px]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px_32px]">
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px_32px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
            <h3 className="m-0 w-[277px] relative text-3xl leading-[24px] font-semibold font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center shrink-0 mq450:text-lg mq450:leading-[19px]">
              Work Experience
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
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full">
                <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[67px]">
                  Job title
                </div>
                <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                    placeholder="Enter your Institution name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full">
                <div className="w-[133px] relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center">
                  Company Name
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
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full">
                <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[73px]">
                  Location
                </div>
                <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                    placeholder="Enter Specialization"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full">
                <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[114px]">
                  Job Summary
                </div>
                <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                    placeholder="Enter Specialization"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq1125:flex-wrap">
              <div className="flex-[0.9698] overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full mq1125:flex-1">
                <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[103px]">
                  Joining Date
                </div>
                <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                    placeholder="Enter your Score"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[430px] max-w-full mq750:min-w-full mq1125:flex-1">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px] mq750:flex-wrap">
                  <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[92px]">
                    Worked till
                  </div>
                  <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                      placeholder="Enter year of completion"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[209px] gap-[12px] mq750:pl-[104px] mq750:pr-[104px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <input type="checkbox" style={{cursor: 'pointer'}} className="h-[18px] w-[18px] relative rounded box-border border-[1px] border-solid border-primary-1" />
                  <div className="w-[196px] relative text-base leading-[19px] font-gilroy text-dimgray-600 text-center inline-block">
                    I am currently working here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full mq750:gap-[16px_32px]">
          <div className="self-stretch flex flex-row items-center justify-start max-w-full mq450:gap-[36px_18px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start max-w-full">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[6px] mq450:flex-wrap">
                <img
                  className="h-[34px] w-[34px] relative min-h-[34px]"
                  loading="lazy"
                  alt=""
                  src="/plus2.svg"
                />
                <h3 className="m-0 relative text-3xl font-semibold font-gilroy text-primary-1 text-left mq450:text-lg">{`Add More work experience `}</h3>
              </button>
            </button>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-5">
        <div className="flex flex-row items-start justify-center gap-[10px]">
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
          <button className="cursor-pointer p-[15px] bg-[transparent] rounded-lg flex flex-col items-center justify-center border-[1px] border-solid border-primary-1">
            <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[7px]">
              <img
                className="h-5 w-5 relative object-cover hidden"
                alt=""
                src="/icon--main8@2x.png"
              />
              <div className="relative text-xl leading-[22px] font-gilroy text-primary-1 text-left inline-block min-w-[41px] mq450:text-base mq450:leading-[18px]">
                Skip
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
    </div>
  );
};

export default ProfileWorkBackground;
