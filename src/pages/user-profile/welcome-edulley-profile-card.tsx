import { FunctionComponent } from "react";

const WelcomeProfileCard: FunctionComponent = () => {
  return (
    <div className="w-[1680px] rounded-xl bg-lavenderblush max-w-full flex flex-col items-start justify-start py-6 px-20 box-border tracking-[normal] mq850:pl-10 mq850:pr-10 mq850:box-border">
      <section className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-left text-21xl text-text font-gilroy">
        <div className="self-stretch rounded-t-xl rounded-b-none flex flex-row items-center justify-start py-1 px-2.5 box-border max-w-full">
          <div className="w-[687px] flex flex-col items-start justify-center max-w-full">
            <h2 className="m-0 w-[372px] relative text-inherit leading-[123.7%] font-normal font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[30px] mq850:text-13xl mq850:leading-[40px]">
              Welcome to Edulley!
            </h2>
            <div className="self-stretch relative text-5xl mt-2 leading-[0%] text-primary-1 mq450:text-lgi">
              You are just a few steps away from submitting your application
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-t-xl rounded-b-none flex flex-row items-center justify-between py-2 px-2.5 gap-[20px] text-4xl mq850:flex-wrap">
          <div className="w-[179px] relative inline-block mq450:text-lg">
            Name : Karl John
          </div>
          <div className="w-64 relative inline-block mq450:text-lg">
            Email : adcd@email.com
          </div>
          <div className="h-7 relative whitespace-pre-wrap inline-block mq450:text-lg">
            Phone : 9876543210
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeProfileCard;
