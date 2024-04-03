import Search from "@mui/icons-material/Search";
import { FunctionComponent } from "react";

const ApplicationFilter: FunctionComponent = () => {
  return (
    <div className="w-[1680px] rounded-xl bg-lavenderblush max-w-full flex flex-col items-start justify-start pt-[6px] px-20 pb-4 box-border tracking-[normal] mq1125:pl-10 mq1125:pr-10 mq1125:box-border">
      <section className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-left text-21xl text-text font-gilroy">
        <div className="self-stretch rounded-t-xl rounded-b-none flex flex-row items-center justify-center py-[18px] px-5 box-border max-w-full">
          <h3 className="m-0 w-[564px] relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-5xl mq800:text-13xl">
            Search suitable Course for you
          </h3>
        </div>
        <div className="self-stretch rounded-3xs bg-white box-border flex flex-row flex-wrap items-center justify-center max-w-full [row-gap:20px] border-[1px] border-solid border-darkgray-200">
          <form className="m-0 flex-1 flex flex-row items-start justify-center min-w-[929px] max-w-full [row-gap:20px] mq1300:flex-wrap mq1300:min-w-full">
          
            <div className="flex-1 box-border flex flex-col items-start justify-start py-6 px-[30px] min-w-[268px] max-w-full border-r-[1px] border-solid border-darkgray-200">
              <div className="w-[113px] h-9 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-9 w-9 relative min-h-[36px]"
                  alt=""
                  src="/book.svg"
                />
                <input
                  className="w-[250px] [border:none] [outline:none] font-gilroy text-9xl bg-[transparent] h-[34px] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[250px] p-0 mq450:text-3xl"
                  placeholder="Course"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col items-start justify-start py-6 px-[30px] min-w-[268px] max-w-full border-r-[1px] border-solid border-darkgray-200">
              <div className="w-[113px] h-9 flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="h-9 w-9 relative min-h-[36px]"
                  alt=""
                  src="/school.svg"
                />
                <input
                  className="w-[250px] [border:none] [outline:none] font-gilroy text-9xl bg-[transparent] h-[34px] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[250px] p-0 mq450:text-3xl"
                  placeholder="Intake"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col items-start justify-start py-6 px-[30px] min-w-[268px] max-w-full border-r-[1px] border-solid border-darkgray-200">
              <div className="w-[113px] h-9 flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="h-9 w-9 relative min-h-[36px]"
                  alt=""
                  src="/calendar.svg"
                />
                <input
                  className="w-[250px] [border:none] [outline:none] font-gilroy text-9xl bg-[transparent] h-[34px] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[250px] p-0 mq450:text-3xl"
                  placeholder="Year"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col items-start justify-start py-6 px-[30px] min-w-[268px] max-w-full border-r-[1px] border-solid border-darkgray-200">
              <div className="w-[113px] h-9 flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="h-9 w-9 relative min-h-[36px]"
                  alt=""
                  src="/bool.svg"
                />
                <input
                  className="w-[250px] [border:none] [outline:none] font-gilroy text-9xl bg-[transparent] h-[34px] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[250px] p-0 mq450:text-3xl"
                  placeholder="State/Province"
                  type="text"
                />
              </div>
            </div>
           
          </form>
          <div className="h-[84px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-crimson-100 flex flex-row items-center justify-start py-[17px] px-5 box-border">
            <div className="self-stretch flex flex-row items-center justify-start relative gap-[10px]">
              <Search/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationFilter;
