import { FunctionComponent } from "react";

const Blog: FunctionComponent = () => {
  return (
    <div className="w-[382px] rounded-xl bg-white box-border flex flex-col items-start justify-start max-w-full shrink-0 text-left text-sm text-black2 font-gilroy border-[1px] border-solid border-silver-200">
      <div className="self-stretch h-[260px] flex flex-row items-start justify-end p-4 box-border relative">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/joiner@2x.png"
        />
        <div className="h-8 w-8 rounded-lg bg-lavenderblush box-border flex flex-row items-start justify-start py-[9px] px-2 gap-[10px] z-[1] border-[1px] border-solid border-gainsboro-300">
          <img
            className="h-3.5 w-3.5 relative"
            loading="lazy"
            alt=""
            src="/share.svg"
          />
          <div className="w-[42px] relative leading-[116%] font-semibold hidden">
            Share
          </div>
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden min-h-[14px]"
            alt=""
            src="/icon.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center p-6 text-xs text-grey-grey-04 font-light-basic-typography-paragraph-small">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="h-3.5 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start gap-[3px]">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                  loading="lazy"
                  alt=""
                  src="/calender.svg"
                />
                <div className="relative leading-[116%] font-medium inline-block min-w-[77px]">
                  12, June 2023
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-lavenderblush flex flex-col items-start justify-start py-[3px] px-2.5 text-black2">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[14px] font-medium inline-block min-w-[21px]">
                    Tag
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-lg leading-[140%] font-gilroy text-grey-grey-01">
            Lorem Ipsum dolor sit amet, Lorem ips ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
