import { FunctionComponent } from "react";
import './contact-us-form.css'
const ContactUsForm: FunctionComponent = () => {
  return (
    <div className="w-[1920px] max-w-full flex flex-row items-start justify-center py-[34px] px-0 box-border tracking-[normal]">
      <section className="w-[1680px] rounded-2xl overflow-hidden shrink-0 flex flex-row items-start justify-start py-11 pr-10 pl-11 box-border gap-[116px] max-w-full text-left text-xs text-grey-grey-04 font-gilroy mq800:gap-[116px_58px] mq800:pt-[29px] mq800:pb-[29px] mq800:box-border mq450:gap-[116px_29px] mq1350:flex-wrap mq1350:pl-[22px] mq1350:box-border">
        <img
          className="h-[480px] w-[480px] relative overflow-hidden shrink-0 max-w-full mq1350:flex-1"
          loading="lazy"
          alt=""
          src="/contact-us-2.png"
        />
        <div className="h-3.5 w-[416px] hidden flex-row items-center justify-start py-0 px-[3px] box-border max-w-full">
          <div className="self-stretch relative leading-[116%]">Label</div>
        </div>
        <div className="w-[416px] hidden flex-row items-center justify-start py-0 px-1 box-border max-w-full text-grey-grey-03">
          <div className="h-3.5 relative leading-[116%] inline-block">
            Error Message
          </div>
        </div>
        <div className="w-[416px] hidden flex-row items-center justify-start py-0 px-1 box-border max-w-full">
          <div className="h-3.5 relative inline-block">Phone Number</div>
        </div>
        <div className="w-[416px] hidden flex-row items-center justify-start py-0 px-1 box-border max-w-full text-grey-grey-03">
          <div className="h-3.5 relative leading-[116%] inline-block">
            Error Message
          </div>
        </div>
        <div className="h-3.5 w-[416px] hidden flex-row items-center justify-start py-0 px-[3px] box-border max-w-full">
          <div className="self-stretch relative leading-[116%]">Label</div>
        </div>
        <div className="w-[416px] hidden flex-row items-center justify-start py-0 px-1 box-border max-w-full text-gray-gray-03">
          <div className="h-3.5 relative leading-[14px] inline-block">
            Error Message
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[65px] px-0 pb-0 box-border min-w-[650px] max-w-full mq800:min-w-full mq450:pt-[42px] mq450:box-border">
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
            <h1 className="m-0 self-stretch relative text-13xl leading-[46px] font-normal font-gilroy text-grey-grey-01 text-left mq800:text-7xl mq800:leading-[37px] mq450:text-lgi mq450:leading-[28px]">
              Get in touch with us
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full mq1150:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[315px] max-w-full">
                <div className="w-[416px] hidden flex-row items-center justify-start py-0 px-1 box-border max-w-full">
                  <div className="relative text-xs leading-[116%] font-gilroy text-grey-grey-04 text-left">
                    Label
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-whitesmoke-100 box-border flex flex-row items-center justify-start py-[18.5px] px-[15px] gap-[12px] max-w-full border-[1px] border-solid border-grey-grey-09">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                    alt=""
                    src="/email1.svg"
                  />
                  <input
                    className="w-full [border:none] [outline:none] font-gilroy text-sm bg-[transparent] h-4 flex-1 relative leading-[116%] text-grey-grey-03 text-left inline-block min-w-[250px] max-w-full p-0"
                    placeholder="First Name"
                    type="text"
                  />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                    alt=""
                    src="/email1.svg"
                  />
                </div>
                <div className="w-[416px] hidden flex-row items-center justify-start py-0 px-1 box-border max-w-full">
                  <div className="relative text-xs leading-[116%] font-gilroy text-grey-grey-03 text-left">
                    Error Message
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[315px] max-w-full">
                <div className="w-[416px] hidden flex-row items-center justify-start py-0 px-1 box-border max-w-full">
                  <div className="relative text-xs leading-[116%] font-gilroy text-grey-grey-04 text-left">
                    Label
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-whitesmoke-100 box-border flex flex-row items-center justify-start py-[18.5px] px-[15px] gap-[12px] max-w-full border-[1px] border-solid border-grey-grey-09">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                    alt=""
                    src="/email1.svg"
                  />
                  <input
                    className="w-full [border:none] [outline:none] font-gilroy text-sm bg-[transparent] h-4 flex-1 relative leading-[116%] text-grey-grey-03 text-left inline-block min-w-[250px] max-w-full p-0"
                    placeholder="Last Name"
                    type="text"
                  />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                    alt=""
                    src="/email1.svg"
                  />
                </div>
                <div className="w-[416px] hidden flex-row items-center justify-start py-0 px-1 box-border max-w-full">
                  <div className="h-3.5 relative text-xs leading-[116%] font-gilroy text-grey-grey-03 text-left inline-block">
                    Error Message
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full mq1150:flex-wrap">
              <div className="flex-1 rounded-lg bg-whitesmoke-100 box-border flex flex-row items-start justify-start py-[18.5px] px-[15px] gap-[12px] min-w-[315px] max-w-full border-[1px] border-solid border-grey-grey-09">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                  alt=""
                  src="/email1.svg"
                />
                <input
                  className="w-full [border:none] [outline:none] font-gilroy text-sm bg-[transparent] h-4 flex-1 relative leading-[116%] text-grey-grey-03 text-left inline-block min-w-[250px] max-w-full p-0"
                  placeholder="Enter your email"
                  type="text"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                  alt=""
                  src="/email1.svg"
                />
              </div>
              <div className="flex-1 rounded-lg bg-whitesmoke-100 box-border overflow-x-auto flex flex-row items-start justify-start py-[16.5px] px-[15px] gap-[12px] min-w-[315px] max-w-full border-[1px] border-solid border-grey-grey-09">
                <img
                  className="h-5 w-5 relative shrink-0 object-cover min-h-[20px]"
                  alt=""
                  src="/image-1@2x.png"
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/drop-down.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                  <div className="w-px h-[11px] relative bg-grey-grey-08" />
                </div>
                <div className="w-[376px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                  <div className="self-stretch relative text-sm leading-[116%] font-gilroy text-grey-grey-03 text-left">
                    Enter phone number
                  </div>
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/email1.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-whitesmoke-100 box-border flex flex-row items-start justify-start py-4 px-[19px] gap-[12px] min-h-[88px] max-w-full border-[1px] border-solid border-grey-grey-09">
              <div className="flex-1 relative text-sm leading-[116%] font-gilroy text-grey-grey-03 text-left inline-block max-w-full">
                Your message
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/email2.svg"
              />
            </div>
            <button className="cursor-pointer [border:none] py-[11px] px-[38px] bg-crimson-100 h-[46px] rounded-lg flex flex-row items-start justify-start box-border gap-[5px]">
              <img
                className="h-5 w-5 relative object-cover hidden"
                alt=""
                src="/icon--main2@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div className="relative text-lg leading-[19px] font-gilroy text-white text-left inline-block min-w-[46px]">
                  Send
                </div>
              </div>
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/chevronsright.svg"
              />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUsForm;
