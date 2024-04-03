import { FunctionComponent } from "react";

export type PhoneType = {
  phone?: string;
  phone1?: string;
  infoSumitiancomLink?: string;
};

const Phone: FunctionComponent<PhoneType> = ({
  phone,
  phone1,
  infoSumitiancomLink,
}) => {
  return (
    <div className="flex-1 rounded-2xl bg-white shadow-[0px_4px_13px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden flex flex-col items-center justify-start py-[2rem] pr-[1.875rem] pl-[2rem] gap-[1.25rem] min-w-[25.25rem] min-h-[14rem] max-w-full text-center text-[1.25rem] text-grey-grey-03 font-gilroy border-[1px] border-solid border-grey-grey-08 mq800:min-w-full mq1350:min-h-[auto]">
      <div className="h-[3.5rem] rounded-lg bg-primary-1 overflow-hidden shrink-0 flex flex-row items-center justify-center p-[0.75rem] box-border">
        <img
          className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={phone}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[0.5rem]">
        <div className="self-stretch relative leading-[116%] mq450:text-[1rem] mq450:leading-[1.188rem]">
          {phone1}
        </div>
        <div className="self-stretch relative leading-[110%] text-grey-grey-01 whitespace-nowrap mq450:text-[1rem] mq450:leading-[1.125rem]">
          {infoSumitiancomLink}
        </div>
      </div>
    </div>
  );
};

export default Phone;
