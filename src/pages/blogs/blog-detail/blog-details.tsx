import { FunctionComponent } from "react";
import Blog4 from "./blog4";
import ExploreAll from "./explore-all";

const BlogDetails: FunctionComponent = () => {
  return (
    <div className="mb-4 mx-auto w-[90vw] flex flex-col items-center justify-center gap-[20px] tracking-[normal] text-left text-37xl text-text font-gilroy mq450:gap-[17px_70px] mq900:gap-[35px_70px]">
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px]">
        <div className="h-14 flex flex-row items-center justify-start gap-[20px]">
          <img
            className="h-14 w-14 relative overflow-hidden shrink-0 min-h-[56px]"
            loading="lazy"
            alt=""
            src="/fluentdocumentqueuemultiple24filled.svg"
          />
          <h1 >
            Blogs
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start max-w-full text-7xl">
          <div className="h-[] rounded-23xl bg-white box-border flex flex-row items-center justify-start py-1.5 pr-[217px] pl-[19px] gap-[18px] whitespace-nowrap max-w-full border-[1px] border-solid border-silver-100 mq450:pr-5 mq450:box-border">
            <img
              className="h-10 w-10 relative"
              loading="lazy"
              alt=""
              src="/search.svg"
            />
            <h1 className="m-0 relative text-inherit leading-[54px] font-normal font-inherit">
            <input className="w-[221px] [border:none] [outline:none] bg-[transparent] h-[54px] flex-1 relative text-7xl text-left inline-block p-0" type="text" placeholder="Search Blogs" />
            </h1>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full text-left text-21xl text-text font-gilroy mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full mq800:gap-[17px_34px] mq1150:min-w-full">
          <div className="w-[997px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[5px] max-w-full">
            <h2 className="m-0 self-stretch h-[98px] relative text-inherit font-normal font-inherit inline-block mq450:text-3xl mq600:text-12xl">
              Transforming the landscape of Education with revolutionary
              technology
            </h2>
            <div className="w-[882px] h-4 flex flex-row items-center justify-start max-w-full text-sm text-grey-1">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/calender1.svg"
                  />
                  <div className="relative leading-[116%] inline-block min-w-[85px]">
                    12, June 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1175px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[40px] max-w-full text-sm text-black2 mq800:gap-[20px_40px]">
            <div className="self-stretch h-[541px] rounded-2xl overflow-hidden shrink-0 flex flex-row items-start justify-end p-4 box-border relative">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/rectangle-621@2x.png"
              />
              <div  style={{cursor:"pointer"}} className="h-[42px] rounded-lg bg-lavenderblush flex flex-row items-start justify-start p-3.5 box-border gap-[10px] z-[1]">
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-lg text-grey-grey-03 font-light-basic-typography-paragraph-small">
              <div className="w-[790px] hidden flex-col items-start justify-start py-0 px-6 box-border gap-[16px] max-w-full">
                <div className="self-stretch h-[108px] relative leading-[150%] font-medium inline-block">
                  Donec sollicitudin molestie malesuada. Cras ultricies ligula
                  sed magna dictum porta. Sed porttitor lectus nibh. Vivamus
                  suscipit tortor eget felis porttitor volutpat. Sed porttitor
                  lectus nibh. Praesent sapien massa, convallis a pellentesque
                  nec, egestas non nisi. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui.
                </div>
                <div className="self-stretch h-[135px] relative leading-[150%] font-medium inline-block">
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                  Cras ultricies ligula sed magna dictum porta. Proin eget
                  tortor risus. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim. Donec sollicitudin molestie malesuada.
                  Vivamus magna justo, lacinia eget consectetur sed, convallis
                  at tellus. Curabitur aliquet quam id dui posuere blandit.
                  Curabitur aliquet quam id dui posuere blandit
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <h3 className="m-0 flex-1 relative text-inherit leading-[150%] font-medium font-inherit inline-block max-w-full">
                  Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula. Cras ultricies ligula sed magna
                  dictum porta. Curabitur non nulla sit amet nisl tempus
                  convallis quis ac lectus. Praesent sapien massa, convallis a
                  pellentesque nec, egestas non nisi. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula.
                </h3>
              </div>
              <div className="self-stretch rounded-2xl bg-lavenderblush flex flex-row items-start justify-start p-6 box-border gap-[32px] max-w-full text-xl text-text font-gilroy mq800:gap-[32px_16px] mq1150:flex-wrap">
                <img
                  className="h-14 w-14 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/quote.svg"
                />
                <h2 className="m-0 flex-1 relative text-inherit leading-[150%] font-normal font-inherit inline-block min-w-[662px] max-w-full mq450:text-base mq450:leading-[24px] mq800:min-w-full">
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                  at sem. Pellentesque in ipsum id orci porta dapibus.
                </h2>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <h3 className="m-0 h-[162px] flex-1 relative text-inherit leading-[150%] font-medium font-inherit inline-block max-w-full">
                  <p className="m-0">
                    Donec rutrum congue leo eget malesuada. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia Curae; Donec velit neque, auctor sit amet aliquam
                    vel, ullamcorper sit amet ligula. Cras ultricies ligula sed
                    magna dictum porta. Curabitur non nulla sit amet nisl tempus
                    convallis quis ac lectus. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Donec velit neque, auctor sit amet aliquam vel,
                    ullamcorper sit amet ligula.
                  </p>
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 gap-[20px] text-grey-1 font-small-semi-bold mq800:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="relative leading-[116%] font-semibold inline-block min-w-[37px]">{`Tags: `}</div>
              </div>
              <button className="cursor-pointer [border:none] py-2 px-4 bg-lavenderblush rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro-500">
                <div className="w-[77px] relative text-xs leading-[14px] font-semibold font-gilroy text-grey-1 text-center flex items-center justify-center min-w-[77px]">
                  Study in USA
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2 px-4 bg-lavenderblush rounded-lg flex flex-row items-start justify-start hover:bg-gainsboro-500">
                <div className="w-[30px] relative text-xs leading-[14px] font-semibold font-gilroy text-grey-1 text-center flex items-center justify-center min-w-[30px]">
                  IELTS
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2 px-4 bg-lavenderblush rounded-lg flex flex-row items-start justify-start hover:bg-gainsboro-500">
                <div className="relative text-xs leading-[14px] font-semibold font-gilroy text-grey-1 text-center inline-block min-w-[38px]">
                  Lorem
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2 px-4 bg-lavenderblush rounded-lg flex flex-row items-start justify-start hover:bg-gainsboro-500">
                <div className="w-[39px] relative text-xs leading-[14px] font-semibold font-gilroy text-grey-1 text-center flex items-center justify-center min-w-[39px]">
                  Ipsum
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2 px-4 bg-lavenderblush rounded-lg flex flex-row items-start justify-start hover:bg-gainsboro-500">
                <div className="w-[73px] relative text-xs leading-[14px] font-semibold font-gilroy text-grey-1 text-center flex items-center justify-center min-w-[73px]">
                  Collaborate
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2 px-4 bg-lavenderblush rounded-lg flex flex-row items-start justify-start hover:bg-gainsboro-500">
                <div className="w-[51px] relative text-xs leading-[14px] font-semibold font-gilroy text-grey-1 text-center flex items-center justify-center min-w-[51px]">
                  Reading
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2 px-4 bg-lavenderblush rounded-lg flex flex-row items-start justify-start hover:bg-gainsboro-500">
                <div className="w-9 relative text-xs leading-[14px] font-semibold font-gilroy text-grey-1 text-center flex items-center justify-center min-w-[36px]">
                  Study
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[30px] max-w-full grid-cols-[repeat(3,_minmax(286px,_1fr))] mq800:grid-cols-[minmax(286px,_1fr)] mq1150:justify-center mq1150:grid-cols-[repeat(2,_minmax(286px,_497px))]">
            <Blog4 />
            <Blog4 />
            <Blog4 />
          </div>
        </div>
        <div className="w-[452px] flex flex-col items-start justify-start gap-[24px] min-w-[452px] max-w-full text-center text-9xl text-black2 mq800:min-w-full mq1350:flex-1">
          <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[30px] px-[29px] max-w-full border-[1px] border-solid border-lightgray-200 mq450:pt-5 mq450:pb-5 mq450:box-border">
            <div className="self-stretch flex flex-col items-center justify-start gap-[30px] max-w-full">
              <ExploreAll
                lookAtAllTheCoursesAtUniv="Look at all the courses at University name "
                exploreAllCourses="Explore all Courses"
              />
              <div className="self-stretch flex flex-row items-center justify-start gap-[15.5px] mq450:flex-wrap">
                <img
                  className="h-px w-[166px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-231.svg"
                />
                <h1 className="m-0 w-[29px] relative text-inherit leading-[42px] font-normal font-inherit inline-block min-w-[29px] mq450:text-3xl mq450:leading-[34px]">
                  or
                </h1>
                <img
                  className="h-px w-[166px] relative"
                  loading="lazy"
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
                <h1 className="m-0 relative text-inherit leading-[42px] font-normal font-inherit mq450:text-lgi mq450:leading-[34px]">
                  Chat with Our Advisor
                </h1>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[50px] px-[29px] gap-[16px] max-w-full text-5xl border-[1px] border-solid border-lightgray-200 mq800:pt-8 mq800:pb-8 mq800:box-border">
            <div className="h-8 flex flex-row items-center justify-center gap-[8px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="lazy"
                alt=""
                src="/healthiconsmoneybagoutline.svg"
              />
              <h1 className="m-0 relative text-inherit leading-[29px] font-normal font-inherit mq450:text-lgi">
                Scholarships
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] max-w-full">
              <img
                className="w-[340px] h-[340px] relative overflow-hidden shrink-0 max-w-full"
                loading="lazy"
                alt=""
                src="/32318753-7923176-1.svg"
              />
              <ExploreAll
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
              <h1 className="m-0 w-[29px] relative text-inherit leading-[42px] font-normal font-inherit inline-block min-w-[29px] mq450:text-3xl mq450:leading-[34px]">
                or
              </h1>
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
              <h1 className="m-0 relative text-inherit leading-[42px] font-normal font-inherit mq450:text-lgi mq450:leading-[34px]">
                Chat with Our Advisor
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
