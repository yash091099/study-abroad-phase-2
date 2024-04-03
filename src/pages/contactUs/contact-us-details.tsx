import { FunctionComponent } from "react";
import Phone from "./phone";

const ContactUsDetails: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-start py-[2.5rem] px-[1.25rem] box-border tracking-[normal]">
      <section className="w-[105rem] flex flex-row items-start justify-start gap-[2rem] max-w-full text-center text-[1.25rem] text-grey-grey-03 font-gilroy mq800:gap-[2rem_1rem] mq1350:flex-wrap">
        <Phone
          phone="/phone1.svg"
          phone1="Phone"
          infoSumitiancomLink="+1 23 456 7980"
        />
        <Phone
          phone="/mail1.svg"
          phone1="Mail"
          infoSumitiancomLink="info@Sumitian.com"
        />
        <div className="flex-1 rounded-2xl bg-white shadow-[0px_4px_13px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden flex flex-col items-center justify-start pt-[2rem] pb-[1.563rem] pr-[1.875rem] pl-[2rem] gap-[1.25rem] min-w-[25.25rem] max-w-full border-[1px] border-solid border-grey-grey-08 mq800:min-w-full">
          <div className="h-[3.5rem] rounded-lg bg-primary-1 overflow-hidden shrink-0 flex flex-row items-center justify-center p-[0.75rem] box-border">
            <img
              className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/map1.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[0.5rem]">
            <div className="self-stretch relative leading-[116%] mq450:text-[1rem] mq450:leading-[1.188rem]">
              Address
            </div>
            <div className="self-stretch relative leading-[150%] text-grey-grey-01 mq450:text-[1rem] mq450:leading-[1.5rem]">
              <p className="m-0">3474 Don Jackson Lane,</p>
              <p className="m-0">Port Huron, MI 48060</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsDetails;
