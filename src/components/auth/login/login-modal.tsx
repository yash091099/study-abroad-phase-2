import { FunctionComponent } from "react";
import ContainerWithChevronsRightAndB from "../container-with-chevrons-right-and-b";
import SocialAuthContainer from "../social-auth-container";

const LoginModal: FunctionComponent = () => {
  return (
    <div className="w-[1527px] bg-white max-w-full flex flex-row items-center justify-start py-[90px] px-[120px] box-border gap-[100px] tracking-[normal] text-left text-13xl text-black2 font-gilroy mq750:gap-[100px_25px] mq750:pl-[30px] mq750:pr-[30px] mq750:box-border mq1225:flex-wrap mq1225:gap-[100px_50px] mq1225:pl-[60px] mq1225:pr-[60px] mq1225:box-border">
      <div className="h-[666px] w-[582px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[100px] min-w-[582px] max-w-full mq750:gap-[50px_100px] mq1050:min-w-full mq450:gap-[25px_100px] mq1225:flex-1">
        <img
          className="w-[189.2px] h-[59.5px] relative object-cover"
          loading="lazy"
          alt=""
          src="/5-911568@2x.png"
        />
        <img
          className="self-stretch h-[518px] relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/frame-1686561334.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-[40px] min-w-[393px] max-w-full mq750:gap-[20px_40px] mq750:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h2 className="m-0 h-[39px] relative text-inherit font-normal font-inherit inline-block min-w-[117px] mq750:text-7xl mq450:text-lgi">
            SIGN IN
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-9xl">
          <div className="self-stretch flex flex-col items-start justify-start p-2.5 box-border max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-[27px] max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[30px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <ContainerWithChevronsRightAndB />
                </div>
                <button className="cursor-pointer [border:none] py-[18px] px-[35px] bg-crimson-100 rounded-lg flex flex-col items-center justify-center">
                  <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                    <img
                      className="h-5 w-5 relative object-cover hidden"
                      alt=""
                      src="/icon--main1@2x.png"
                    />
                    <div className="relative text-xl leading-[22px] font-gilroy text-white text-left inline-block min-w-[118px] mq450:text-base mq450:leading-[18px]">
                      Request OTP
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/chevronsright.svg"
                    />
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[17px] mq750:flex-wrap">
                <img
                  className="h-px w-[262.5px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-23.svg"
                />
                <h3 className="m-0 w-[26px] relative text-inherit leading-[42px] font-normal font-inherit inline-block min-w-[26px] mq450:text-3xl mq450:leading-[34px]">
                  or
                </h3>
                <img
                  className="h-px w-[262.5px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-24.svg"
                />
              </div>
              <SocialAuthContainer authMethodText="Sign in with" />
              <div className="h-[25px] relative text-xl text-left inline-block mq450:text-base">
                <span>{`Don’t have an account? `}</span>
                <span className="text-primary-1">SIGN UP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
