import { FunctionComponent } from "react";
import ContainerWithChevronsRightAndB from "../container-with-chevrons-right-and-b";
import SocialAuthContainer from "../social-auth-container";

const SignupModal: FunctionComponent = () => {
  return (
    <div className="w-[1457px] bg-white max-w-full flex flex-row items-center justify-start py-16 px-[120px] box-border gap-[30px] tracking-[normal] text-left text-xl text-black2 font-gilroy lg:flex-wrap mq750:gap-[30px_15px] mq750:pl-[60px] mq750:pr-[60px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="h-[666px] w-[582px] flex flex-col items-start justify-between min-w-[582px] max-w-full lg:flex-1 mq1050:min-w-full">
        <img
          className="w-[189.2px] h-[59.5px] relative object-cover"
          loading="lazy"
          alt=""
          src="/5-9115681@2x.png"
        />
        <img
          className="self-stretch h-[518px] relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/frame-16865613341.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-[40px] min-w-[393px] max-w-full mq750:gap-[20px_40px] mq750:min-w-full">
        <header className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-13xl text-black2 font-gilroy">
          <h2 className="m-0 h-[39px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap">
            CREATE YOUR ACCOUNT
          </h2>
        </header>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start p-2.5 box-border max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-[27px] max-w-full">
              <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[30px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <ContainerWithChevronsRightAndB
                    propHeight="24px"
                    propLineHeight="30px"
                    propLineHeight1="24px"
                  />
                  <div className="self-stretch rounded-lg shadow-[0px_2px_8px_rgba(0,_0,_0,_0.5)] flex flex-row items-center justify-start py-[19px] px-6 border-[1px] border-solid border-silver-200">
                    <input
                      className="w-[186px] [border:none] [outline:none] font-gilroy text-xl bg-[transparent] h-6 relative text-black2 text-left inline-block p-0 mq450:text-base"
                      placeholder="Enter your Full Name"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch rounded-lg shadow-[0px_2px_8px_rgba(0,_0,_0,_0.5)] flex flex-row items-center justify-start py-[19px] px-6 border-[1px] border-solid border-silver-200">
                    <input
                      className="w-[145px] [border:none] [outline:none] font-gilroy text-xl bg-[transparent] h-6 relative text-black2 text-left inline-block p-0 mq450:text-base"
                      placeholder="Enter your Email"
                      type="text"
                    />
                  </div>
                </div>
                <div className="rounded-lg bg-crimson-100 flex flex-col items-center justify-center py-[18px] px-[58px]">
                  <button className="cursor-pointer [border:none] py-0 px-0 bg-[transparent] h-5 flex flex-row items-center justify-start box-border gap-[4px]">
                    <img
                      className="h-5 w-5 relative object-cover hidden"
                      alt=""
                      src="/icon--main@2x.png"
                    />
                    <div className="relative text-xl leading-[22px] font-gilroy text-white text-left inline-block min-w-[76px] whitespace-nowrap mq450:text-base mq450:leading-[18px]">
                      SIgn Up
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/chevronsright.svg"
                    />
                  </button>
                </div>
              </form>
              <div className="w-[486px] h-[25px] relative leading-[30px] inline-block max-w-full mq450:text-base">
                <span>{`By Signing up you agree to our `}</span>
                <span className="text-primary-2">Terms and Conditions</span>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[15.5px] text-center text-9xl mq750:flex-wrap">
                <img
                  className="h-px w-[262.5px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-23.svg"
                />
                <h3 className="m-0 w-[29px] relative text-inherit leading-[42px] font-normal font-inherit inline-block min-w-[29px] mq450:text-3xl mq450:leading-[34px]">
                  or
                </h3>
                <img
                  className="h-px w-[262.5px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-24.svg"
                />
              </div>
              <SocialAuthContainer
                authMethodText="Sign up with"
                propMinWidth="112px"
                propHeight="24px"
                propLineHeight="30px"
              />
              <div className="w-[321px] h-[25px] relative leading-[30px] inline-block max-w-full mq450:text-base">
                <span>{`Already have an account ? `}</span>
                <span className="text-primary-1">SIGN IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
