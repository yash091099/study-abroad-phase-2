import { FunctionComponent } from "react";
import PersonalInfo from "./personal-info";
import MailingAddress from "./mailing-address";
import PassportInfo from "./passport-info";

const ProfilePerdonalDetailsForm: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-md bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-start justify-start tracking-[normal] mq1350:h-auto">
      <main className="w-full flex flex-col items-start justify-start p-[1.5rem] box-border gap-[1rem] max-w-full mq450:gap-[1rem_4rem] mq1150:gap-[2rem_4rem]">
        <PersonalInfo />
        <MailingAddress mailingAddress="Mailing Address" />
        <MailingAddress mailingAddress="Permanent Address" />
        <PassportInfo />
        <footer className="self-stretch flex flex-col items-center justify-start py-[0rem] px-[1.25rem]">
          <div className="rounded-lg bg-primary-1 flex flex-col items-center justify-center p-[0.938rem] border-[1px] border-solid border-primary-1">
            <button className="cursor-pointer [border:none] py-[0rem] px-[0rem] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start box-border gap-[0.5rem]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative object-cover hidden"
                alt=""
                src="/icon--main8@2x.png"
              />
              <div className="relative text-[1.25rem] leading-[1.375rem] font-gilroy text-white text-left inline-block min-w-[4.063rem] mq450:text-[1rem] mq450:leading-[1.125rem]">
                Submit
              </div>
              <img
                className="h-[1.5rem] w-[1.5rem] relative"
                alt=""
                src="/chevronsright3.svg"
              />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ProfilePerdonalDetailsForm;