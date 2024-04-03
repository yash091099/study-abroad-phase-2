import { FunctionComponent } from "react";
import Blog5 from "./blog5";
import { useNavigate } from "react-router-dom";

const IELTSReadingAnswerSample: FunctionComponent = () => {
  const navigate=useNavigate()
  return (
    <div className="w-[1680px] ml-10 max-w-full flex flex-row items-start justify-start gap-[25px] tracking-[normal] text-left text-xs text-primary-1 font-gilroy mq1350:flex-wrap">
      <section className="flex-1 flex flex-col items-start justify-start gap-[94px] min-w-[782px] max-w-full text-left text-5xl text-text font-gilroy mq450:gap-[23px_94px] mq800:gap-[47px_94px] mq1150:min-w-full">
        <div className="h-[29px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[5px] max-w-full">
          <div onClick={()=>{navigate('/')}} style={{cursor:"pointer"}} className="h-[29px] relative tracking-[-0.2px] inline-block min-w-[65px]">
            Home
          </div>
          <img
            className="h-7 w-7 relative"
            loading="lazy"
            alt=""
            src="/chevronright.svg"
          />
          <div onClick={()=>{navigate('/exam-ielts')}} style={{cursor:"pointer"}}  className="h-[29px] relative tracking-[-0.2px] inline-block min-w-[70px]">
            Exams
          </div>
          <img
            className="h-7 w-7 relative"
            loading="lazy"
            alt=""
            src="/chevronright.svg"
          />
          <div className="h-[29px] relative tracking-[-0.2px] inline-block min-w-[119px] whitespace-nowrap">
            IELTS Exam
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full text-33xl">
          <h1 className="m-0 w-[882px] h-[63px] relative text-inherit font-normal font-inherit inline-block max-w-full box-border pr-5 mq450:text-12xl mq800:text-23xl">
            Topic 1 name IELTS Reading Answers
          </h1>
          <div className="self-stretch rounded-21xl bg-gray-400 flex flex-row items-start justify-start py-10 px-[38px] box-border max-w-full text-25xl mq1350:pt-5 mq1350:pb-5 mq1350:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[58px] max-w-full mq800:gap-[29px_58px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <h2 className="m-0 relative text-inherit leading-[54px] font-normal font-inherit inline-block min-w-[108px] mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                  Topic
                </h2>
                <div className="self-stretch h-[1176px] relative text-9xl leading-[42px] text-black2 inline-block mq450:text-3xl mq450:leading-[34px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                  the printiner including versions of Lorem
                  Ipsum.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-9xl text-black2">
                <h2 className="m-0 w-[473px] relative text-25xl leading-[54px] font-normal font-inherit text-text inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                  Questions and Answers
                </h2>
                <div className="self-stretch h-[1176px] relative leading-[42px] inline-block mq450:text-3xl mq450:leading-[34px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industro ding versions of Lorem
                  Ipsum.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="self-stretch h-[1176px] relative leading-[42px] inline-block mq450:text-3xl mq450:leading-[34px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[452px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[452px] max-w-full mq800:min-w-full mq1350:flex-1">
        <div className="self-stretch flex flex-col items-end justify-start gap-[168px] max-w-full mq450:gap-[84px_168px]">
          <div className="w-[38px] flex flex-row items-start justify-end py-0 px-[5px] box-border">
            <div className="flex-1 rounded-11xl bg-whitesmoke-500 flex flex-row items-start justify-start py-[6.5px] px-2.5 border-[1px] border-solid border-whitesmoke-500">
              <div className="relative inline-block min-w-[5px]">1</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-center text-5xl mq450:gap-[16px_32px]">
            <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[50px] px-[29px] gap-[16px] max-w-full border-[1px] border-solid border-lightgray-200 mq450:pt-8 mq450:pb-8 mq450:box-border">
              <div className="w-[297px] h-8 flex flex-row items-center justify-center gap-[7px]">
                <img
                  className="h-8 w-8 relative min-h-[32px]"
                  loading="lazy"
                  alt=""
                  src="/list.svg"
                />
                <div className="h-[29px] flex-1 relative inline-block mq450:text-lgi">
                  IELTS READING SAMPLE
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-primary-2">
                <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                  <div className="w-[347px] relative [text-decoration:underline] leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                    <ul className="m-0 font-inherit text-inherit pl-8">
                      <li>Topic Name</li>
                    </ul>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                  <div className="w-[347px] relative [text-decoration:underline] leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                    <ul className="m-0 font-inherit text-inherit pl-8">
                      <li>Topic Name</li>
                    </ul>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                  <div className="w-[347px] relative [text-decoration:underline] leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                    <ul className="m-0 font-inherit text-inherit pl-8">
                      <li>Topic Name</li>
                    </ul>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                  <div className="w-[347px] relative [text-decoration:underline] leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                    <ul className="m-0 font-inherit text-inherit pl-8">
                      <li>Topic Name</li>
                    </ul>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                  <div className="w-[347px] relative [text-decoration:underline] leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                    <ul className="m-0 font-inherit text-inherit pl-8">
                      <li>Topic Name</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[50px] px-[30px] gap-[16px] max-w-full border-[1px] border-solid border-lightgray-200 mq450:pt-5 mq450:pb-5 mq450:box-border mq1150:pt-[21px] mq1150:pb-[21px] mq1150:box-border mq1350:pt-8 mq1350:pb-8 mq1350:box-border">
              <div className="h-8 flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-8 w-8 relative min-h-[32px]"
                  loading="lazy"
                  alt=""
                  src="/list.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <div className="h-[29px] relative leading-[35px] inline-block mq450:text-lgi">
                    Related Blogs
                  </div>
                </div>
              </div>
              <Blog5 />
              <Blog5 />
              <Blog5 />
              <Blog5 />
            </div>
            <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[50px] px-[29px] gap-[16px] max-w-full text-black2 border-[1px] border-solid border-lightgray-200 mq800:pt-8 mq800:pb-8 mq800:box-border">
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
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-[22.5px] box-border gap-[10px] max-w-full">
                  <div className="self-stretch relative leading-[31px] mq450:text-lgi mq450:leading-[25px]">
                    Let’s look at the scholarships available for you
                  </div>
                  <button className="cursor-pointer [border:none] py-[22px] px-[18px] bg-crimson-100 rounded-lg flex flex-col items-center justify-center box-border max-w-full">
                    <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                      <img
                        className="h-5 w-5 relative object-cover hidden"
                        alt=""
                        src="/icon--main8@2x.png"
                      />
                      <div className="relative text-5xl leading-[22px] font-gilroy text-white text-left mq450:text-lgi mq450:leading-[18px]">
                        Explore all Scholarships
                      </div>
                      <img
                        className="h-6 w-6 relative"
                        alt=""
                        src="/chevronsright.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[15.5px] text-9xl mq450:flex-wrap">
                <img
                  className="h-px w-[166px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-231.svg"
                />
                <div className="w-[29px] relative leading-[42px] inline-block min-w-[29px] mq450:text-3xl mq450:leading-[34px]">
                  or
                </div>
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
      </div>
    </div>
  );
};

export default IELTSReadingAnswerSample;
