import { FunctionComponent } from "react";
import Card5 from "./card5";

const ProfileTestes: FunctionComponent = () => {
  return (
    <form className="m-0 w-[1392px] max-w-full flex flex-col items-start justify-start p-6 box-border gap-[64px] tracking-[normal] mq450:gap-[16px_64px] mq725:gap-[32px_64px]">
      <section className="self-stretch rounded-xl box-border flex flex-col items-start justify-start py-6 px-[19px] gap-[32px] max-w-full border-[1px] border-solid border-gainsboro-600 mq650:gap-[16px_32px] mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="h-[34px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[20px]">
              <img
                className="h-8 w-8 relative"
                loading="lazy"
                alt=""
                src="/listdetails.svg"
              />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <h3 className="m-0 relative text-7xl leading-[24px] font-semibold font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[54px] mq450:text-2xl mq450:leading-[19px]">
                  GRE
                </h3>
              </div>
            </div>
          </div>
          <img
            className="h-9 w-9 relative object-contain min-h-[36px]"
            loading="lazy"
            alt=""
            src="/chevrondown1.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[417px] max-w-full gap-[20px] mq650:min-w-full mq725:flex-wrap">
              <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[114px]">
                Overall Score
              </div>
              <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                  placeholder="Enter your Institution name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[417px] max-w-full gap-[20px] mq650:min-w-full mq725:flex-wrap">
              <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[96px]">
                Date of Exam
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
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[417px] max-w-full gap-[20px] mq650:min-w-full mq725:flex-wrap">
              <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[105px]">
                Quantitative
              </div>
              <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                  placeholder="Enter Specialization"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[417px] max-w-full gap-[20px] mq650:flex-wrap mq650:min-w-full">
              <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[56px]">
                Verbal
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
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="w-[641px] overflow-hidden shrink-0 flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px] mq725:flex-wrap">
              <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                Analytical Writing
              </div>
              <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                  placeholder="Enter your Score"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <input
              className="m-0 h-6 w-6 relative rounded box-border border-[1px] border-solid border-primary-1"
              type="checkbox"
            />
            <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              I am yet to take this test
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <input
              className="m-0 h-6 w-6 relative rounded box-border border-[1px] border-solid border-primary-1"
              type="checkbox"
            />
            <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              I am looking for a Waiver
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start gap-[32px] mq650:gap-[16px_32px]">
        <Card5 gMAT="GMAT" />
        <Card5
          gMAT="TOEFL"
          propHeight="32px"
          propDisplay="inline-block"
          propMinWidth="83px"
        />
        <Card5
          gMAT="IELTS"
          propHeight="32px"
          propDisplay="inline-block"
          propMinWidth="71px"
        />
        <Card5
          gMAT="PTE"
          propHeight="32px"
          propDisplay="inline-block"
          propMinWidth="49px"
        />
        <Card5
          gMAT="Duolingo English Test"
          propHeight="unset"
          propDisplay="inline-block"
          propMinWidth="unset"
        />
      </section>
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
    </form>
  );
};

export default ProfileTestes;
