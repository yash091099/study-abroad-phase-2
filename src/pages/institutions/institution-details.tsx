import { FunctionComponent, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import './institution.css'
const InstitutionDetails: FunctionComponent = () => {
  const [feyoutubeIconChecked, setFeyoutubeIconChecked] = useState(true);
  return (
    <div className="w-[90vw] mb-5 h-[3000.5px] max-w-full tracking-[normal] text-left text-5xl text-text font-gilroy mq800:h-auto mq800:min-h-[3366.5]">
      <div className="absolute h-[0.86%] w-[22.13%] top-[12%] right-[71.13%] bottom-[99.14%] left-[6.75%] flex flex-row items-start justify-start gap-[5px] max-w-full mq450:hidden">
        <div className="relative tracking-[-0.2px] inline-block min-w-[65px]">
          Home
        </div>
        <img
          className="h-7 w-7 relative"
          loading="lazy"
          alt=""
          src="/chevronright.svg"
        />
        <div className="w-[118px] relative tracking-[-0.2px] inline-block">
          Institutions
        </div>
        <img
          className="h-7 w-7 relative"
          loading="lazy"
          alt=""
          src="/chevronright.svg"
        />
        <div className="flex-1 relative tracking-[-0.2px] whitespace-nowrap">
          University Name
        </div>
      </div>
      <img
        className="absolute h-[50vh] w-[100vw] top-[15.81%] right-[0%] bottom-[74.04%] left-[0%] max-w-full  max-h-full "
        alt=""
        src="/image-12@2x.png"
      />
      <section className="absolute top-[43.64%]  w-[100%] flex flex-col items-start justify-start gap-[113px] max-w-full text-left text-[33.6px] text-dimgray-300 font-gilroy">
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] z-[1] mq800:flex-wrap">
          <div className="w-[480px] flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
              <div className="w-28 flex flex-row items-start justify-start">
                <div className="h-28 flex-1 flex flex-row items-start justify-start relative gap-[16.799999237060547px]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-gainsboro-200" />
                  <div className="absolute !m-[0] top-[calc(50%_-_20.5px)] left-[calc(50%_-_38.8px)] inline-block min-w-[78px] z-[1] mq450:text-xl mq800:text-8xl">
                    Logo
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[233px] max-w-full text-29xl text-white">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[54px] font-normal font-inherit mq450:text-10xl mq450:leading-[32px] mq800:text-19xl mq800:leading-[43px]">
                    University Name
                  </h1>
                  <div className="w-[188px] relative text-9xl inline-block box-border pr-5 mq450:text-3xl">
                    City, Country
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[286px] flex flex-col items-end justify-start">
            <div className="self-stretch rounded-lg bg-crimson-100 flex flex-col items-center justify-center py-[22px] px-[18px]">
              <div className="self-stretch h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                <img
                  className="h-5 w-5 relative object-cover hidden"
                  alt=""
                  src="/icon--main2@2x.png"
                />
                <div className="flex-1 relative text-5xl leading-[22px] font-gilroy text-white text-left mq450:text-lgi mq450:leading-[18px]">
                  Download Brochure
                </div>
                <img
                  className="h-6 w-6 relative"
                  alt=""
                  src="/chevronsright.svg"
                />
              </div>
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[25px] max-w-full text-25xl text-text mq1350:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start  max-w-full mq1150:min-w-full">
            <div className="self-stretch rounded-21xl bg-gray-200 flex flex-row items-start justify-start py-10 px-[38px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[58px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <h2 className="m-0 relative text-inherit leading-[54px] font-normal font-inherit mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    Overview
                  </h2>
                  <div className="self-stretch h-[209px] relative leading-[42px] inline-block text-9xl text-black2 mq450:text-3xl mq450:leading-[34px]">
                    <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce scelerisque vel nibh eget pellentesque. Ut ac odio sed velit pellentesque malesuada. Donec tempor elit quis maximus convallis. Phasellus hendrerit nisl felis, et bibendum metus laoreet id. Duis ultrices tempor aliquam. Pellentesque luctus a velit eget porttitor `}</span>
                    <span className="text-13xl text-primary-1">Read More</span>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <h2 className="m-0 w-[494px] relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    Admission Requirements
                  </h2>
                  <div className="self-stretch h-[336px] relative text-9xl leading-[42px] text-black2 inline-block mq450:text-3xl mq450:leading-[34px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi mollis dui nec neque rutrum bibendum. Donec in
                    ultricies turpis. Fusce scelerisque vel nibh eget
                    pellentesque. Ut ac odio sed velit pellentesque malesuada.
                    Donec tempor elit quis maximus convallis. Phasellus
                    hendrerit nisl felis, et bibendum metus laoreet id. Duis
                    ultrices tempor aliquam. Pellentesque luctus a velit eget
                    porttitor. Nam eu accumsan urna. In fermentum nulla in quam
                    convallis, in viverra justo pulvinar. Quisque volutpat enim
                    vel lectus condimentum, sed consectetur mauris lacinia. Ut
                    elementum massa vitae dolor sollicitudin, quis faucibus
                    sapien laoreet. Ut arcu purus, varius eget elit sed,
                    efficitur finibus purus.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <h2 className=" w-[312px] relative text-inherit leading-[54px] font-normal font-inherit inline-block mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    University Stats
                  </h2>
                  <div className="self-stretch h-[236px] relative text-9xl leading-[42px] text-black2 inline-block mq450:text-3xl mq450:leading-[34px]">
                    <img src="/university-details.png" className="max-w-full" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-29xl">
                  <h1 className="m-0 w-[791px] relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[32px] mq800:text-19xl mq800:leading-[43px]">
                    What's unique about the university?
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-center gap-[21px] mq1150:flex-wrap">
                    <div className="flex-1 rounded-2xl bg-white shadow-[0px_4px_24px_rgba(203,_125,_125,_0.25)] box-border flex flex-col items-center justify-center pt-[30.299999999999272px] px-[35px] pb-[10.200000000000728px] min-w-[214px] max-w-[266px] text-center text-4xl text-text font-gilroy border-[1px] border-solid border-salmon">
                      <div className="self-stretch h-[186.5px] flex flex-col items-center justify-center gap-[20px]">
                        <img
                          className="w-[176.1px] h-[138.5px] relative"
                          loading="lazy"
                          alt=""
                          src="/frame-1686561099.svg"
                        />
                        <div className="self-stretch h-7 relative inline-block mq450:text-lg">
                          Award Name
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-2xl bg-white shadow-[0px_4px_24px_rgba(203,_125,_125,_0.25)] box-border flex flex-col items-center justify-center pt-[30.299999999999272px] px-[35px] pb-[10.200000000000728px] min-w-[214px] max-w-[266px] text-center text-4xl text-text font-gilroy border-[1px] border-solid border-salmon">
                      <div className="self-stretch h-[186.5px] flex flex-col items-center justify-center gap-[20px]">
                        <img
                          className="w-[176.1px] h-[138.5px] relative"
                          loading="lazy"
                          alt=""
                          src="/frame-1686561099.svg"
                        />
                        <div className="self-stretch h-7 relative inline-block mq450:text-lg">
                          Award Name
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-2xl bg-white shadow-[0px_4px_24px_rgba(203,_125,_125,_0.25)] box-border flex flex-col items-center justify-center pt-[30.299999999999272px] px-[15px] pb-[10.200000000000728px] min-w-[214px] max-w-[266px] text-center text-4xl text-text font-gilroy border-[1px] border-solid border-salmon">
                      <div className="self-stretch h-[186.5px] flex flex-col items-center justify-center gap-[20px]">
                        <img
                          className="w-[176.1px] h-[138.5px] relative"
                          loading="lazy"
                          alt=""
                          src="/frame-1686561099.svg"
                        />
                        <div className="self-stretch h-7 relative inline-block mq450:text-lg">
                          Award Name
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-2xl bg-white shadow-[0px_4px_24px_rgba(203,_125,_125,_0.25)] box-border flex flex-col items-center justify-center pt-[30.299999999999272px] px-[35px] pb-[10.200000000000728px] min-w-[214px] max-w-[266px] text-center text-4xl text-text font-gilroy border-[1px] border-solid border-salmon">
                      <div className="self-stretch h-[186.5px] flex flex-col items-center justify-center gap-[20px]">
                        <img
                          className="w-[176.1px] h-[138.5px] relative"
                          loading="lazy"
                          alt=""
                          src="/frame-1686561099.svg"
                        />
                        <div className="self-stretch h-7 relative inline-block mq450:text-lg">
                          Award Name
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" p-5 self-stretch flex flex-col items-start justify-start gap-[46px] max-w-full text-37xl">
              <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq800:flex-wrap">
                  <div className="h-[54px] flex flex-row items-start justify-start gap-[20px]">
                    <img
                      className="h-[54px] w-[67.5px] relative overflow-hidden shrink-0 min-h-[54px]"
                      loading="lazy"
                      alt=""
                      src="/fa6solidgraduationcap.svg"
                    />
                    <h1 className="m-0 relative text-inherit leading-[54px] font-normal font-inherit mq450:text-15xl mq450:leading-[32px] mq800:text-26xl mq800:leading-[43px]">
                      Courses
                    </h1>
                  </div>
                  <div className="h-16 rounded-lg flex flex-col items-center justify-center py-3.5 px-[18px] box-border text-13xl text-primary-1">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="h-5 w-5 relative object-cover hidden"
                        alt=""
                        src="/icon--main2@2x.png"
                      />
                      <div className="relative leading-[22px] inline-block min-w-[124px] mq450:text-lgi mq450:leading-[13px] mq800:text-7xl mq800:leading-[18px]">
                        Show All
                      </div>
                      <img
                        className="h-9 w-9 relative"
                        loading="lazy"
                        alt=""
                        src="/chevronsright-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[28px] max-w-full mq800:flex-wrap">
                  <button className="cursor-pointer [border:none] py-2.5 px-[50px] bg-white rounded-46xl shadow-[0px_4px_12px_rgba(153,_153,_153,_0.36)] flex flex-row items-center justify-center hover:bg-gainsboro-100">
                    <div className="relative text-5xl leading-[54px] font-gilroy text-text text-left whitespace-nowrap mq450:text-lgi mq450:leading-[43px]">
                      Undergraduate
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2.5 px-[50px] bg-white rounded-46xl shadow-[0px_4px_12px_rgba(153,_153,_153,_0.36)] flex flex-row items-center justify-center hover:bg-gainsboro-100">
                    <div className="relative text-5xl leading-[54px] font-gilroy text-text text-left whitespace-nowrap mq450:text-lgi mq450:leading-[43px]">
                      Postgraduate
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2.5 px-[50px] bg-primary-1 rounded-46xl shadow-[0px_4px_12px_rgba(153,_153,_153,_0.36)] flex flex-row items-center justify-center hover:bg-crimson-200">
                    <div className="relative text-5xl leading-[54px] font-gilroy text-white text-left inline-block min-w-[113px] whitespace-nowrap mq450:text-lgi mq450:leading-[43px]">
                      Doctorate
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="self-stretch h-[579px] flex flex-row flex-wrap items-start justify-start relative gap-[27px_23px] max-w-full">
                <div className="w-[588px] !m-[0] absolute top-[0px] left-[0px] rounded-lg bg-white shadow-[0px_4px_11px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start py-6 px-[26px] box-border gap-[18px] max-w-full text-left text-7xl text-text font-gilroy">
                  <div className="w-[379px] flex flex-col items-start justify-start gap-[2px] max-w-full">
                    <div className="self-stretch h-8 relative leading-[39px] inline-block mq450:text-2xl">
                      MA by Research English Studies
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[6px] text-base text-grey-1">
                      <div className="h-5 w-5 relative rounded-[50%] bg-gainsboro-200" />
                      <div className="relative leading-[19px]">
                        University Name, USA
                      </div>
                    </div>
                  </div>
                  <div className="w-[286px] h-[55px] flex flex-row items-start justify-between gap-[20px] text-lg text-grey-1">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                      <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/solarwalletlinear.svg"
                        />
                        <div className="relative leading-[22px] inline-block min-w-[63px]">
                          Fees ($)
                        </div>
                      </div>
                      <div className="h-[25px] relative text-xl leading-[30px] text-primary-1 inline-block mq450:text-base">
                        $ 57.70k / year
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                      <div className="flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[6px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/iontimeoutline.svg"
                        />
                        <div className="relative leading-[22px] inline-block min-w-[72px]">
                          Duration
                        </div>
                      </div>
                      <div className="h-[25px] relative text-xl text-primary-1 inline-block min-w-[97px] mq450:text-base">
                        48 months
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[452px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[452px] max-w-full text-center text-5xl text-black2 mq800:min-w-full mq1350:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] flex flex-col items-start justify-start py-[30px] px-[29px] border-[1px] border-solid border-lightgray-200">
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-[20.5px] gap-[30px]">
                  <img
                    className="self-stretch h-[350px] relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/24237566-6922092-11.svg"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start gap-[28px]">
                    <div className="self-stretch h-[84px] relative leading-[42px] inline-block mq450:text-lgi mq450:leading-[34px]">
                      Confused about our Career path?
                    </div>
                    <button className="cursor-pointer [border:none] py-[22px] px-[18px] bg-crimson-100 self-stretch rounded-lg flex flex-col items-center justify-center">
                      <div className="self-stretch h-5 flex flex-row items-center justify-between py-0 px-0 box-border gap-[-20px]">
                        <img
                          className="h-5 w-5 relative object-cover hidden z-[1]"
                          alt=""
                          src="/icon--main5@2x.png"
                        />
                        <div className="w-[341px] relative text-5xl leading-[22px] font-gilroy text-white text-left inline-block shrink-0 max-w-[108%] mq450:text-lgi mq450:leading-[18px]">
                          Explore Career path finder
                        </div>
                        <img
                          className="h-6 w-6 relative z-[1]"
                          alt=""
                          src="/chevronsright.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[30px] px-[29px] max-w-full border-[1px] border-solid border-lightgray-200">
                <div className="self-stretch flex flex-col items-center justify-start gap-[30px] max-w-full">
                  <div className="w-[347px] flex flex-col items-center justify-start gap-[28px] max-w-full">
                    <div className="self-stretch relative leading-[42px] mq450:text-lgi mq450:leading-[34px]">{`Look at all the courses at University name `}</div>
                    <button className="cursor-pointer [border:none] py-[22px] px-[18px] bg-crimson-100 rounded-lg flex flex-col items-center justify-center">
                      <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                        <img
                          className="h-5 w-5 relative object-cover hidden"
                          alt=""
                          src="/icon--main5@2x.png"
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
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.5px] text-9xl mq450:flex-wrap">
                    <img
                      className="h-px w-[166px] relative"
                      alt=""
                      src="/vector-231.svg"
                    />
                    <div className="w-[29px] relative leading-[42px] inline-block min-w-[29px] mq450:text-3xl mq450:leading-[34px]">
                      or
                    </div>
                    <img
                      className="h-px w-[166px] relative"
                      alt=""
                      src="/vector-231.svg"
                    />
                  </div>
                  <div className="h-11 flex flex-row items-center justify-start gap-[26px]">
                    <img
                      className="h-11 w-11 relative overflow-hidden shrink-0 min-h-[44px]"
                      alt=""
                      src="/fluentpeoplechat16regular.svg"
                    />
                    <div className="relative leading-[42px] mq450:text-lgi mq450:leading-[34px]">
                      Chat with Our Advisor
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-row items-start justify-start py-[30px] px-[29px] max-w-full text-left text-9xl text-dimgray-300 border-[1px] border-solid border-lightgray-200">
                <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
                  <div className="w-[327.5px] flex flex-row items-start justify-start max-w-full">
                    <div className="flex-1 flex flex-row items-end justify-start gap-[30px] max-w-full mq450:flex-wrap">
                      <div className="w-[93.5px] flex flex-row items-start justify-start">
                        <div className="h-[93.5px] flex-1 flex flex-row items-start justify-start relative gap-[14.024999618530273px]">
                          <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-gainsboro-200" />
                          <div className="absolute !m-[0] top-[calc(50%_-_17.05px)] left-[calc(50%_-_32.45px)] leading-[42px] inline-block min-w-[67px] z-[1] mq450:text-3xl">
                            Logo
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[10.700000000000728px] box-border min-w-[133px] text-center text-black2">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch h-[34px] relative leading-[42px] inline-block mq450:text-3xl">
                            University name
                          </div>
                          <div className="h-6 relative text-xl leading-[30px] inline-block min-w-[115px] mq450:text-base">
                            City, country
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[11.4px] mq450:flex-wrap">
                    <div className="h-[27.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                      <img
                        className="w-[26px] h-[26px] relative rounded-[4.33px] overflow-hidden shrink-0"
                        alt=""
                        src="/fefacebook.svg"
                      />
                    </div>
                    <div className="h-[27.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                      <img
                        className="w-[26px] h-[26px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/skilliconsinstagram.svg"
                      />
                    </div>
                    <div className="h-[27.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                      <input
                        className="accent-red m-0 w-[26px] h-[26px] relative rounded-[4.33px] overflow-hidden shrink-0"
                        checked={feyoutubeIconChecked}
                        type="checkbox"
                        onChange={(event) =>
                          setFeyoutubeIconChecked(event.target.checked)
                        }
                      />
                    </div>
                    <div className="h-[27.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                      <img
                        className="w-[26px] h-[26px] relative rounded-[4.33px] overflow-hidden shrink-0"
                        alt=""
                        src="/simpleiconsx.svg"
                      />
                    </div>
                    <Form.Select className="font-gilroy text-base text-primary-1" />
                    <button className="cursor-pointer py-[5px] px-[7px] bg-primary-1 w-[100px] rounded-md box-border flex flex-row items-start justify-start gap-[3px] border-[1px] border-solid border-primary-1">
                      <div className="h-[17.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                        <img
                          className="w-4 h-4 relative"
                          alt=""
                          src="/world.svg"
                        />
                      </div>
                      <div className="relative text-base leading-[19px] font-gilroy text-white text-left inline-block min-w-[65px]">
                        {" "}
                        Website
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] flex flex-col items-start justify-start py-[50px] px-[29px] gap-[16px] border-[1px] border-solid border-lightgray-200">
                <div className="h-[29px] flex flex-row items-start justify-center gap-[8px]">
                  <img className="h-7 w-7 relative" alt="" src="/trophy.svg" />
                  <div className="relative leading-[29px] mq450:text-lgi">
                    University Ranking
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-between pt-[30.200000000000728px] px-0 pb-[10.299999999999272px] gap-[20px] border-b-[1px] border-solid border-lightgray-100 mq450:flex-wrap mq450:justify-center">
                    <img
                      className="h-[59.5px] w-[148px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/image-fill.svg"
                    />
                    <div className="relative leading-[42px] inline-block min-w-[114px] mq450:text-lgi mq450:leading-[34px]">
                      501-600th
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between py-[28.5px] px-0 gap-[20px] z-[1] mt-[-1px] border-b-[1px] border-solid border-lightgray-100 mq450:flex-wrap mq450:justify-center">
                    <div className="h-[63px] flex flex-row items-center justify-start py-0 pr-16 pl-0 box-border gap-[10px]">
                      <img
                        className="h-[63px] w-[63px] relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/image-13@2x.png"
                      />
                      <div className="h-[29px] w-[68px] relative leading-[35px] inline-block min-w-[68px] mq450:text-lgi">
                        By QS
                      </div>
                    </div>
                    <div className="relative leading-[42px] inline-block min-w-[108px] mq450:text-lgi mq450:leading-[34px]">
                      651-700th
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[50px] px-[29px] gap-[16px] max-w-full border-[1px] border-solid border-lightgray-200">
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
                    <button className="cursor-pointer [border:none] py-[4px] px-[18px] bg-crimson-100 rounded-lg flex flex-col items-center justify-center box-border max-w-full">
                      <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                        <img
                          className="h-5 w-5 relative object-cover hidden"
                          alt=""
                          src="/icon--main6@2x.png"
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
                    alt=""
                    src="/vector-231.svg"
                  />
                  <div className="w-[29px] relative leading-[42px] inline-block min-w-[29px] mq450:text-3xl mq450:leading-[34px]">
                    or
                  </div>
                  <img
                    className="h-px w-[166px] relative"
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
      </section>
    </div>
  );
};

export default InstitutionDetails;
