import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Card4 from "./card4";
import Card3 from "./card3";
import Blog2 from "./blog2";

const CareerPathResult: FunctionComponent = () => {
  return (
    <div className="mb-4 w-[90vw] max-w-full flex flex-col items-center justify-center gap-[36px] tracking-[normal] text-left text-9xl text-darkslategray-200 font-gilroy mq450:gap-[18px_36px] mx-auto">
    <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq1150:flex-wrap">
      <h3 className="m-0 h-[34px] w-[436px] relative text-inherit tracking-[-0.2px] leading-[42px] font-normal font-inherit inline-block max-w-full mq450:text-3xl">
        We found 16 suitable paths for you
      </h3>
      <div className="h-[50px] w-[348px] flex flex-row items-center justify-start gap-[18px] max-w-full text-7xl">
        <h3 className="m-0 h-8 relative text-inherit tracking-[-0.2px] leading-[39px] font-normal font-inherit inline-block min-w-[89px] mq450:text-2xl">
          Sort by
        </h3>
        <Form.Select className="self-stretch flex-1 font-gilroy text-xl text-darkgray-300">
          <option disabled selected>Select</option>
          <option>Content 1</option>
          <option>Content 2</option>
          <option>Content 3</option>
        </Form.Select>
      </div>
    </div>
    <section className="self-stretch flex flex-row items-start justify-center gap-[20px] max-w-full text-left text-29xl text-primary-1 font-gilroy mq1350:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start gap-[60px] shrink-0 [debug_commit:f6aba90] mq800:gap-[30px_60px] mq1150:min-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-1 pl-0 box-border gap-[20px] min-h-[604px] max-w-full">
          <Card4 />
          <Card4 />
          <Card4 />
          <Card4 />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[3px] pl-0 box-border gap-[46px] max-w-full mq800:gap-[23px_46px]">
          <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[611px] pl-0 box-border gap-[24px] max-w-full mq450:pr-5 mq450:box-border mq800:pr-[152px] mq800:box-border mq1350:pr-[305px] mq1350:box-border">
            <h1 className="m-0 self-stretch h-[59px] relative text-inherit font-normal font-inherit inline-block mq450:text-10xl mq800:text-19xl">
              Popular Courses
            </h1>
            <div className="flex flex-row items-center justify-center gap-[28px] max-w-full mq800:flex-wrap">
              <button className="cursor-pointer [border:none] py-2.5 px-[50px] bg-white rounded-46xl shadow-[0px_4px_12px_rgba(153,_153,_153,_0.36)] flex flex-row items-center justify-center hover:bg-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative text-5xl leading-[54px] font-gilroy text-text text-left whitespace-nowrap mq450:text-lgi mq450:leading-[43px]">
                  Undergraduate
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2.5 px-[50px] bg-primary-1 rounded-46xl shadow-[0px_4px_12px_rgba(153,_153,_153,_0.36)] flex flex-row items-center justify-center hover:bg-crimson-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative text-5xl leading-[54px] font-gilroy text-white text-left whitespace-nowrap mq450:text-lgi mq450:leading-[43px]">
                  Postgraduate
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch h-[579px] flex flex-row flex-wrap items-center justify-center relative gap-[27px_23px] max-w-full">
            <Card3 />
            <Card3 propLeft="615px" propTop="0px" />
            <Card3 propLeft="0px" propTop="202px" />
            <Card3 propLeft="615px" propTop="202px" />
            <Card3 propLeft="0px" propTop="404px" />
            <Card3 propLeft="615px" propTop="404px" />
          </div>
        </div>
      </div>
      <div className="w-[452px] flex flex-col items-center justify-start gap-[24px] min-w-[452px] shrink-0 [debug_commit:f6aba90] text-center text-5xl text-black2 mq800:min-w-full mq1350:flex-1">
        <div className="self-stretch flex flex-col items-center justify-start max-w-full">
          <div className="self-stretch rounded-17xl bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-center justify-start py-[30px] px-[29px] max-w-full border-[1px] border-solid border-lightgray-200 mq1350:self-stretch mq1350:w-auto">
            <div className="self-stretch flex flex-col items-center justify-start gap-[30px] max-w-full">
              <div className="w-[347px] flex flex-col items-center justify-start gap-[28px] max-w-full">
                <div className="self-stretch relative leading-[42px] mq450:text-lgi mq450:leading-[34px]">
                  Look at all the Universities
                </div>
                <button className="cursor-pointer [border:none] py-[22px] px-[18px] bg-crimson-100 rounded-lg flex flex-col items-center justify-center">
                  <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                    <img
                      className="h-5 w-5 relative object-cover hidden"
                      alt=""
                      src="/icon--main8@2x.png"
                    />
                    <div className="relative text-5xl leading-[22px] font-gilroy text-white text-left mq450:text-lgi mq450:leading-[18px]">
                      Explore all Courses
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/chevronsright.svg"
                    />
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center gap-[15.5px] text-9xl mq450:flex-wrap">
                <img
                  className="h-px w-[166px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-231.svg"
                />
                <h3 className="m-0 w-[29px] relative text-inherit leading-[42px] font-normal font-inherit inline-block min-w-[29px] mq450:text-3xl mq450:leading-[34px]">
                  or
                </h3>
                <img
                  className="h-px w-[166px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-231.svg"
                />
              </div>
              <div className="h-11 flex flex-row items-center justify-center gap-[26px]">
                <img
                  className="h-11 w-11 relative overflow-hidden shrink-0 min-h-[44px]"
                  loading="lazy"
                  alt=""
                  src="/fluentpeoplechat16regular.svg"
                />
                <div className="relative leading-[42px] mq450:text-lgi mq450:leading-[34px]">
                  Chat with Our Advisor
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-center justify-start py-[50px] px-[30px] gap-[16px] max-w-full text-primary-1 border-[1px] border-solid border-lightgray-200 mq800:pt-[21px] mq800:pb-[21px] mq800:box-border mq1150:pt-8 mq1150:pb-8 mq1150:box-border">
          <div className="h-8 flex flex-row items-center justify-center gap-[8px]">
            <img
              className="h-8 w-8 relative min-h-[32px]"
              loading="lazy"
              alt=""
              src="/list.svg"
            />
            <div className="flex flex-col items-center justify-start pt-[1.5px] px-0 pb-0">
              <div className="h-[29px] relative leading-[35px] inline-block mq450:text-lgi">
                Related Blogs
              </div>
            </div>
          </div>
          <Blog2 />
          <Blog2 />
        </div>
      </div>
    </section>
  </div>
  );
};

export default CareerPathResult;
