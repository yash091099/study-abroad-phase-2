import { FunctionComponent } from "react";
import Heading from "./heading";
import Fee from "./fee";
import FrameComponent19 from "./frame-component19";
import FrameComponent18 from "./frame-component18";
import Detail from "./detail";

const ApplicationApplyInProgram: FunctionComponent = () => {
  return (
    <div className="w-[1680px] max-w-full flex flex-row items-start justify-start gap-[14px] tracking-[normal] text-center text-9xl text-black2 font-gilroy mq450:gap-[54px_27px] mq1350:flex-wrap">
      <section className="flex-1 flex flex-col items-start justify-start gap-[28px] min-w-[763px] max-w-full text-left text-lg text-grey-1 font-gilroy mq1150:min-w-full">
        <div className="w-[631px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full text-37xl text-text mq800:flex-wrap">
          <img
            className="h-[55px] w-[55px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/lalistalt.svg"
          />
          <div className="h-[70px] flex-1 relative min-w-[348px] max-w-full mq450:min-w-full">
            <img
              className="absolute top-[37px] left-[180px] rounded-31xl w-[222px] h-[23px]"
              loading="lazy"
              alt=""
              src="/vector-221.svg"
            />
            <h1 >
              Shortlisted Courses
            </h1>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_11px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start py-6 px-[10px] box-border gap-[10px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
          <Heading />
          <div className="flex flex-row items-start justify-start gap-[12px] max-w-full mq800:flex-wrap">
            <div className="rounded-xl bg-lavenderblush flex flex-row items-start justify-start py-1.5 px-4 whitespace-nowrap">
              <div className="relative leading-[22px]">
                <span>61</span>
                <span> University QS World Ranking</span>
              </div>
            </div>
            <div className="rounded-xl bg-lavenderblush flex flex-row items-start justify-start py-1.5 px-4 whitespace-nowrap">
              <div className="w-[285px] relative leading-[22px] inline-block">
                <span>61</span>
                <span> Times Higher Education Ranking</span>
              </div>
            </div>
          </div>
          <Fee />
          <div className="h-[27px] relative text-3xl text-text inline-block mq450:text-lg">
            Success Prediction
          </div>
          <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq800:flex-wrap">
            <div className="w-[474px] flex flex-row items-start justify-start gap-[57px] max-w-full mq450:flex-wrap mq800:gap-[57px_28px]">
              <FrameComponent19 sep2024="Sep 2024" veryHigh="Very High" />
              <FrameComponent18 />
              <FrameComponent19
                sep2024="Sep 2025"
                veryHigh="Average"
                propBackgroundColor="#f6d2bb"
                propColor="#e57e38"
                propMinWidth="69px"
              />
            </div>
            <button className="cursor-pointer p-[15px] bg-primary-1 rounded-lg flex flex-col items-center justify-center border-[1px] border-solid border-primary-1">
              <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                <img
                  className="h-5 w-5 relative object-cover hidden"
                  alt=""
                  src="/icon--main10@2x.png"
                />
                <div className="relative text-xl leading-[22px] font-gilroy text-white text-left mq450:text-base mq450:leading-[18px]">
                  Create application
                </div>
                <img
                  className="h-6 w-6 relative"
                  alt=""
                  src="/chevronsright3.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_11px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start py-6 px-[26px] box-border gap-[18px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
          <Heading />
          <div className="flex flex-row items-start justify-start gap-[12px] max-w-full mq800:flex-wrap">
            <div className="rounded-xl bg-lavenderblush flex flex-row items-start justify-start py-1.5 px-4 whitespace-nowrap">
              <div className="relative leading-[22px]">
                <span>61</span>
                <span> University QS World Ranking</span>
              </div>
            </div>
            <div className="rounded-xl bg-lavenderblush flex flex-row items-start justify-start py-1.5 px-4 whitespace-nowrap">
              <div className="w-[285px] relative leading-[22px] inline-block">
                <span>61</span>
                <span> Times Higher Education Ranking</span>
              </div>
            </div>
          </div>
          <Fee />
          <div className="h-[27px] relative text-3xl text-text inline-block mq450:text-lg">
            Success Prediction
          </div>
          <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq800:flex-wrap">
            <div className="w-[474px] flex flex-row items-start justify-start gap-[57px] max-w-full mq450:flex-wrap mq800:gap-[57px_28px]">
              <FrameComponent19
                sep2024="Sep 2024"
                veryHigh="Very High"
                propBackgroundColor="rgba(56, 218, 73, 0.3)"
                propColor="#2bc93c"
                propMinWidth="78px"
              />
              <FrameComponent18 />
              <FrameComponent19
                sep2024="Sep 2025"
                veryHigh="Average"
                propBackgroundColor="#f6d2bb"
                propColor="#e57e38"
                propMinWidth="69px"
              />
            </div>
            <button className="cursor-pointer p-[15px] bg-primary-1 rounded-lg flex flex-col items-center justify-center border-[1px] border-solid border-primary-1">
              <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                <img
                  className="h-5 w-5 relative object-cover hidden"
                  alt=""
                  src="/icon--main10@2x.png"
                />
                <div className="relative text-xl leading-[22px] font-gilroy text-white text-left mq450:text-base mq450:leading-[18px]">
                  Create application
                </div>
                <img
                  className="h-6 w-6 relative"
                  alt=""
                  src="/chevronsright3.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_11px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start py-6 px-[26px] box-border gap-[18px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
          <Heading />
          <div className="flex flex-row items-start justify-start gap-[12px] max-w-full mq800:flex-wrap">
            <div className="rounded-xl bg-lavenderblush flex flex-row items-start justify-start py-1.5 px-4 whitespace-nowrap">
              <div className="relative leading-[22px]">
                <span>61</span>
                <span> University QS World Ranking</span>
              </div>
            </div>
            <div className="rounded-xl bg-lavenderblush flex flex-row items-start justify-start py-1.5 px-4 whitespace-nowrap">
              <div className="w-[285px] relative leading-[22px] inline-block">
                <span>61</span>
                <span> Times Higher Education Ranking</span>
              </div>
            </div>
          </div>
          <Fee />
          <div className="h-[27px] relative text-3xl text-text inline-block mq450:text-lg">
            Success Prediction
          </div>
          <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq800:flex-wrap">
            <div className="w-[474px] flex flex-row items-start justify-start gap-[57px] max-w-full mq450:flex-wrap mq800:gap-[57px_28px]">
              <FrameComponent19
                sep2024="Sep 2024"
                veryHigh="Very High"
                propBackgroundColor="rgba(56, 218, 73, 0.3)"
                propColor="#2bc93c"
                propMinWidth="78px"
              />
              <FrameComponent18 />
              <FrameComponent19
                sep2024="Sep 2025"
                veryHigh="Average"
                propBackgroundColor="#f6d2bb"
                propColor="#e57e38"
                propMinWidth="69px"
              />
            </div>
            <button className="cursor-pointer p-[15px] bg-primary-1 rounded-lg flex flex-col items-center justify-center border-[1px] border-solid border-primary-1">
              <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                <img
                  className="h-5 w-5 relative object-cover hidden"
                  alt=""
                  src="/icon--main10@2x.png"
                />
                <div className="relative text-xl leading-[22px] font-gilroy text-white text-left mq450:text-base mq450:leading-[18px]">
                  Create application
                </div>
                <img
                  className="h-6 w-6 relative"
                  alt=""
                  src="/chevronsright3.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </section>
      <div className="w-[452px] flex flex-col items-start justify-start gap-[24px] min-w-[452px] max-w-full mq800:min-w-full mq1350:flex-1">
        <div className="self-stretch rounded-17xl bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[30px] px-[29px] max-w-full border-[1px] border-solid border-lightgray-200 mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[30px] max-w-full">
            <Detail
              lookAtAllTheCoursesAtUniv="Look at all the courses at University name "
              exploreAllCourses="Explore all Courses"
            />
            <div className="self-stretch flex flex-row items-center justify-start gap-[15.5px] mq450:flex-wrap">
              <img
                className="h-px w-[166px] relative"
                alt=""
                src="/vector-231.svg"
              />
              <h3 className="m-0 w-[29px] relative text-inherit leading-[42px] font-normal font-inherit inline-block min-w-[29px] mq450:text-3xl mq450:leading-[34px]">
                or
              </h3>
              <img
                className="h-px w-[166px] relative"
                alt=""
                src="/vector-231.svg"
              />
            </div>
            <div className="h-11 flex flex-row items-center justify-start gap-[26px] text-5xl">
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
        <div className="self-stretch rounded-17xl bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[50px] px-[29px] gap-[16px] max-w-full text-5xl border-[1px] border-solid border-lightgray-200 mq800:pt-8 mq800:pb-8 mq800:box-border">
          <div className="h-8 flex flex-row items-center justify-center gap-[8px]">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
              loading="lazy"
              alt=""
              src="/healthiconsmoneybagoutline.svg"
            />
            <div className="relative leading-[29px] mq450:text-lgi">
              Scholarships
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px] max-w-full">
            <img
              className="w-[340px] h-[340px] relative overflow-hidden shrink-0 max-w-full"
              loading="lazy"
              alt=""
              src="/32318753-7923176-1.svg"
            />
            <Detail
              lookAtAllTheCoursesAtUniv="Let’s look at the scholarships available for you"
              exploreAllCourses="Explore all Scholarships"
              propWidth="unset"
              propGap="10px"
              propAlignSelf="stretch"
              propPadding="0px 22.5px"
              propLineHeight="31px"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[15.5px] text-9xl mq450:flex-wrap">
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
          <div className="h-11 flex flex-row items-center justify-start gap-[26px]">
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
  );
};

export default ApplicationApplyInProgram;
