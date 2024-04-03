import { FunctionComponent } from "react";
import FrameComponent17 from "./frame-component17";
import FrameComponent16 from "./frame-component16";
import FrameComponent15 from "./frame-component15";
import "./ielts-exam.css";
import { useNavigate } from "react-router-dom";
const IELTSEXAM: FunctionComponent = () => {
  const navigate=useNavigate()
  return (
    <div className="ielts-exam-container">
      <div className="w-[570px] h-[29px] flex flex-row items-start ml-3 py-0 px-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[5px] max-w-full">
          <div onClick={()=>navigate('/')} className="h-[29px] cursor-pointer relative tracking-[-0.2px] inline-block min-w-[60px]">
            Home
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
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[22px] box-border max-w-full text-left text-53xl text-text font-gilroy">
        <div className="flex-1 flex flex-col items-end justify-start pt-[206px] px-[120px] pb-[41px] box-border relative gap-[151px] max-w-full mq800:gap-[38px_151px] mq800:pt-[134px] mq800:px-[30px] mq800:pb-[27px] mq800:box-border mq1125:gap-[75px_151px] mq1125:pl-[60px] mq1125:pr-[60px] mq1125:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-14@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="w-[472px] flex flex-col items-start justify-start max-w-full">
              <h1 className="m-0 h-[89px] relative text-inherit font-normal font-inherit inline-block max-w-full z-[1] mq450:text-24xl mq800:text-39xl">
                IELTS EXAM
              </h1>
              <h1 className="m-0 self-stretch h-[63px] relative text-33xl font-normal font-inherit inline-block z-[1] mq450:text-12xl mq800:text-23xl">
                Complete Overview
              </h1>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-end justify-start z-[1] mq450:gap-[15px_31px]">
            <div className="rounded-lg bg-crimson-100 flex flex-col items-center justify-center py-[22px] px-[18px]">
              <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                <img
                  className="h-5 w-5 relative object-cover hidden"
                  alt=""
                  src="/icon--main10@2x.png"
                />
                <div className="relative text-5xl leading-[22px] font-gilroy text-white text-left mq450:text-lgi mq450:leading-[18px]">
                  Download IELTS Guide
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
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-33xl text-text font-gilroy">
        <div className="w-[1680px] flex flex-col items-start justify-start gap-[28px] max-w-full">
          <div className="w-[full] h-[63px] relative inline-block max-w-full mq450:text-12xl mq800:text-23xl">{`IELTS Exam 2024-25`}</div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[25px] max-w-full text-25xl mq1350:flex-wrap">
            <div className="flex-1 rounded-21xl bg-gray-400 flex flex-row items-start justify-start py-10 px-[38px] box-border max-w-full mq1125:min-w-full mq1350:pt-5 mq1350:pb-5 mq1350:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[58px] max-w-full mq800:gap-[29px_58px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <h2>Overview</h2>
                  <div className="self-stretch h-[209px] relative leading-[42px] inline-block text-9xl text-black2 mq450:text-3xl mq450:leading-[34px]">
                    <div>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce scelerisque vel nibh eget pellentesque. Ut ac odio sed velit pellentesque malesuada. Donec tempor elit quis maximus convallis. Phasellus hendrerit nisl felis, et bibendum metus laoreet id. Duis ultrices tempor aliquam. Pellentesque luctus a velit eget porttitor `}</div>
                    <div className="text-13xl text-primary-1">Read More</div>
                  </div>
                </div>
                <div className="mt-10 self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <h2>Why IELTS</h2>
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <h2 className="mt-[70px] w-[451px] relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    IELTS Test Format
                  </h2>
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[13px] pb-[13.5px] pr-[74px] pl-[75px] box-border max-w-full text-xl text-primary-1 mq1125:pl-[37px] mq1125:pr-[37px] mq1125:box-border">
                    <div className="flex-1 flex flex-row items-end justify-center pt-[26.5px] px-[19px] pb-[23px] box-border relative gap-[40px] max-w-full mq800:gap-[40px_20px] mq800:pt-5 mq800:pb-5 mq800:box-border mq1125:flex-wrap">
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-31xl flex items-center justify-center z-[0]">
                        <img
                          className="h-full w-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.016)]"
                          alt=""
                          src="/vector-281.svg"
                        />
                      </div>
                      <FrameComponent17
                        frame1686561276="/frame-1686561276.svg"
                        listening="Listening"
                        minutes="30 minutes"
                        sections="4 Sections"
                        questions="40 Questions"
                      />
                      <div className="flex-[0.7949] rounded-15xl bg-white shadow-[0px_4px_24px_rgba(0,_0,_0,_0.15)] flex flex-col items-center justify-start pt-6 px-4 pb-[34px] box-border gap-[11px] min-w-[153px] max-w-[156px] z-[1] mq450:flex-1">
                        <img
                          className="self-stretch h-[131px] relative max-w-full overflow-hidden shrink-0"
                          alt=""
                          src="/frame-1686561276-1.svg"
                        />
                        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[13px] gap-[4px]">
                          <div className="flex flex-col items-center justify-start">
                            <div className="relative leading-[32px] inline-block min-w-[78px] whitespace-nowrap mq450:text-base mq450:leading-[26px]">
                              Reading
                            </div>
                            <div className="relative text-base leading-[32px] text-grey-1 text-center inline-block min-w-[80px] whitespace-nowrap">
                              60 minutes
                            </div>
                          </div>
                          <div className="h-7 relative text-base leading-[12px] text-grey-1 text-center inline-block">
                            <p className="[margin-block-start:0] [margin-block-end:4px]">
                              3 Sections
                            </p>
                            <p className="m-0">40 Questions</p>
                          </div>
                        </div>
                      </div>
                      <FrameComponent17
                        frame1686561276="/frame-1686561276-2.svg"
                        listening="Speaking"
                        minutes="11-14 minutes"
                        sections="3 parts"
                        questions="Talk to Examiner"
                        propMinHeight="424px"
                        propMinWidth="93px"
                        propMinWidth1="96px"
                      />
                      <div className="flex-[0.8205] rounded-15xl bg-white shadow-[0px_4px_24px_rgba(0,_0,_0,_0.15)] flex flex-col items-center justify-start pt-6 px-3.5 pb-[34px] box-border min-w-[153px] max-w-[156px] z-[1] mq450:flex-1">
                        <img
                          className="w-[124px] h-[131px] relative"
                          alt=""
                          src="/frame-1686561276-3.svg"
                        />
                        <div className="self-stretch flex flex-col items-center justify-start gap-[4px] z-[1] mt-[-9px]">
                          <div className="flex flex-col items-center justify-start">
                            <div className="relative leading-[20px] mq450:text-base mq450:leading-[16px]">
                              <p className="m-0">{`Writing `}</p>
                              <p className="m-0">Academic</p>
                            </div>
                            <div className="relative text-base leading-[32px] text-grey-1 text-center inline-block min-w-[80px]">
                              60 minutes
                            </div>
                          </div>
                          <div className="self-stretch relative text-sm leading-[12px] text-grey-1 text-center">
                            <p className="[margin-block-start:0] [margin-block-end:4px]">
                              Task 1: Chart, Map or process
                            </p>
                            <p className="m-0">Task 2: Essay</p>
                          </div>
                        </div>
                      </div>
                      <FrameComponent17
                        frame1686561276="/frame-1686561276-4.svg"
                        listening="Writing"
                        minutes="60 minutes"
                        sections="Task 1 : letter"
                        questions="Task 2: Essay"
                        propMinHeight="362px"
                        propMinWidth="71px"
                        propMinWidth1="80px"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-black2">
                  <h2>IELTS Syllabus</h2>
                  <div className="self-stretch h-[336px] relative text-9xl leading-[42px] inline-block mq450:text-3xl mq450:leading-[34px]">
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
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-sm font-inter">
                    {/* <div className="w-[716px] bg-white overflow-x-auto shrink-0 flex flex-col items-start justify-start p-[0.5px] box-border max-w-full">
                      <div className="w-[699.1px] flex flex-row items-start justify-start">
                        <div className="w-[174.8px] box-border flex flex-row items-start justify-start py-[29.5px] px-[12.5px] border-[1px] border-solid border-gray-600">
                          <div className="bg-white flex flex-row items-start justify-start py-0 px-0">
                            <b className="relative tracking-[0.6px] inline-block min-w-[56.9px] shrink-0 [debug_commit:f6aba90]">
                              Section
                            </b>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start max-w-full">
                          <div className="flex-1 box-border flex flex-row items-start justify-start p-[12.5px] min-w-[114px] border-[1px] border-solid border-gray-600">
                            <div className="bg-white flex flex-col items-start justify-start">
                              <b className="relative tracking-[0.6px] inline-block min-w-[77.7px]">
                                Number of
                              </b>
                              <b className="relative tracking-[0.6px] inline-block min-w-[107.4px]">
                                Questions and
                              </b>
                              <b className="relative tracking-[0.6px] inline-block min-w-[68px]">
                                Duration 
                              </b>
                            </div>
                          </div>
                          <div className="flex-1 box-border flex flex-row items-start justify-start py-[29.5px] px-[12.5px] min-w-[114px] z-[1] ml-[-0.1px] border-[1px] border-solid border-gray-600">
                            <div className="bg-white flex flex-row items-start justify-start py-0 px-0">
                              <b className="relative tracking-[0.6px] inline-block min-w-[60.3px] shrink-0 [debug_commit:f6aba90]">
                                Content
                              </b>
                            </div>
                          </div>
                        </div>
                        <div className="w-[174.8px] box-border flex flex-row items-start justify-start py-[29.5px] px-[12.5px] border-[1px] border-solid border-gray-600">
                          <div className="bg-white flex flex-row items-start justify-start py-0 px-0">
                            <b className="relative tracking-[0.6px] inline-block min-w-[64.6px] shrink-0 [debug_commit:f6aba90]">
                              Remarks
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="w-[699.1px] h-[307px] overflow-x-auto shrink-0 flex flex-row items-start justify-start text-base">
                        <div className="w-[174.8px] box-border shrink-0 flex flex-row items-start justify-start py-[145px] px-[12.5px] text-sm border-[1px] border-solid border-gray-600">
                          <div className="bg-white flex flex-row items-start justify-start py-0 px-0">
                            <div className="relative tracking-[0.6px] inline-block min-w-[65.6px] shrink-0 [debug_commit:f6aba90]">
                              Listening
                            </div>
                          </div>
                        </div>
                        <div className="w-[349.5px] shrink-0 flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-col items-start justify-start pt-[67.5px] px-[12.5px] pb-[83.5px] gap-[22px] border-[1px] border-solid border-gray-600">
                            <div className="h-5 bg-white flex flex-row items-start justify-start py-0 px-0 box-border whitespace-nowrap">
                              <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] inline-block min-w-[127.8px] shrink-0 [debug_commit:f6aba90]">
                                Four recordings
                              </div>
                            </div>
                            <div className="h-5 bg-white flex flex-row items-start justify-start py-0 px-0 box-border whitespace-nowrap">
                              <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] inline-block min-w-[106px] shrink-0 [debug_commit:f6aba90]">
                                40 questions
                              </div>
                            </div>
                            <div className="h-[72px] bg-white flex flex-row items-start justify-start py-0 px-0 box-border">
                              <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] shrink-0 [debug_commit:f6aba90]">
                                <p className="m-0">30 minutes + 10</p>
                                <p className="m-0">minutes (transfer</p>
                                <p className="m-0">time)</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start py-32 px-[12.5px] z-[1] ml-[-0.1px] text-sm border-[1px] border-solid border-gray-600">
                            <div className="bg-white flex flex-col items-start justify-start">
                              <div className="relative tracking-[0.6px] inline-block min-w-[101.2px]">
                                Four recorded
                              </div>
                              <div className="relative tracking-[0.6px] inline-block min-w-[118.4px]">
                                monologues and
                              </div>
                              <div className="relative tracking-[0.6px] inline-block min-w-[105.1px]">
                                conversations.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch w-[174.8px] box-border shrink-0 flex flex-row items-start justify-start pt-[15.5px] px-[12.5px] pb-[15px] border-[1px] border-solid border-gray-600">
                          <div className="h-44 bg-white flex flex-row items-start justify-start py-0 px-0 box-border">
                            <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] shrink-0 [debug_commit:f6aba90]">
                              <p className="m-0">A correct answer</p>
                              <p className="m-0">is awarded one</p>
                              <p className="m-0">mark, and the</p>
                              <p className="m-0">final score is</p>
                              <p className="m-0">provided as a</p>
                              <p className="m-0">band score in the</p>
                              <p className="m-0">range of 1-9.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[699.1px] flex flex-row items-start justify-start text-base">
                        <div className="w-[174.8px] box-border flex flex-row items-start justify-start py-[137px] px-[12.5px] text-sm border-[1px] border-solid border-gray-600">
                          <div className="bg-white flex flex-row items-start justify-start py-0 px-0">
                            <div className="relative tracking-[0.6px] inline-block min-w-[58.2px] shrink-0 [debug_commit:f6aba90]">
                              Reading
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start max-w-full">
                          <div className="flex-1 box-border flex flex-col items-start justify-start pt-[106.5px] px-[12.5px] pb-[106px] gap-[22px] min-w-[114px] min-h-[291px] border-[1px] border-solid border-gray-600">
                            <div className="h-5 bg-white flex flex-row items-start justify-start py-0 px-0 box-border whitespace-nowrap">
                              <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] inline-block min-w-[106px] shrink-0 [debug_commit:f6aba90]">
                                40 questions
                              </div>
                            </div>
                            <div className="h-5 bg-white flex flex-row items-start justify-start py-0 px-0 box-border whitespace-nowrap">
                              <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] inline-block min-w-[90.6px] shrink-0 [debug_commit:f6aba90]">
                                60 minutes
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 box-border flex flex-row items-start justify-start py-[103px] px-[12.5px] min-w-[114px] z-[1] ml-[-0.1px] text-sm border-[1px] border-solid border-gray-600">
                            <div className="bg-white flex flex-col items-start justify-start">
                              <div className="relative tracking-[0.6px] inline-block min-w-[114.2px]">
                                Three passages
                              </div>
                              <div className="relative tracking-[0.6px] inline-block min-w-[95.2px]">
                                which can be
                              </div>
                              <div className="relative tracking-[0.6px]">
                                analytical, factual,
                              </div>
                              <div className="relative tracking-[0.6px] inline-block min-w-[97px]">
                                discursive, or
                              </div>
                              <div className="relative tracking-[0.6px] inline-block min-w-[84.5px]">
                                descriptive.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[291px] w-[174.8px] box-border flex flex-row items-start justify-start pt-[15.5px] px-[12.5px] pb-[15px] z-[2] border-[1px] border-solid border-gray-600">
                          <div className="h-[202px] bg-white flex flex-row items-start justify-start py-0 px-0 box-border">
                            <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] shrink-0 [debug_commit:f6aba90]">
                              <p className="m-0">Each correct</p>
                              <p className="m-0">answer is</p>
                              <p className="m-0">awarded one</p>
                              <p className="m-0">mark, and the</p>
                              <p className="m-0">final score is</p>
                              <p className="m-0">provided as a</p>
                              <p className="m-0">band score in the</p>
                              <p className="m-0">range of 1-9.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[699.1px] flex flex-row items-start justify-start">
                        <div className="w-[174.8px] box-border flex flex-row items-start justify-start py-[137px] px-[12.5px] z-[1] border-[1px] border-solid border-gray-600">
                          <div className="bg-white flex flex-row items-start justify-start py-0 px-0">
                            <div className="relative tracking-[0.6px] inline-block min-w-[51px] shrink-0 [debug_commit:f6aba90]">
                              Writing
                            </div>
                          </div>
                        </div>
                        <div className="h-[291px] flex-1 relative max-w-full">
                          <div className="absolute top-[0px] left-[0px] box-border w-[174.8px] flex flex-row items-start justify-start py-[137px] px-[12.5px] z-[2] border-[1px] border-solid border-gray-600">
                            <div className="bg-white flex flex-row items-start justify-start py-0 px-0 whitespace-nowrap">
                              <div className="relative tracking-[0.6px] inline-block min-w-[80px] shrink-0 [debug_commit:f6aba90]">
                                60 minutes
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-[0px] left-[174.7px] box-border w-[174.8px] flex flex-col items-start justify-start pt-[15.5px] px-[12.5px] pb-[31.5px] gap-[22px] z-[3] text-base border-[1px] border-solid border-gray-600">
                            <div className="h-[150px] bg-white flex flex-row items-start justify-start py-0 px-0 box-border">
                              <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] shrink-0 [debug_commit:f6aba90]">
                                <p className="m-0">Task1: Summarize</p>
                                <p className="m-0">or describe a</p>
                                <p className="m-0">table, graph,</p>
                                <p className="m-0">chart, or diagram</p>
                                <p className="m-0">in at least 150</p>
                                <p className="m-0">words.</p>
                              </div>
                            </div>
                            <div className="h-[72px] bg-white flex flex-row items-start justify-start py-0 px-0 box-border">
                              <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] shrink-0 [debug_commit:f6aba90]">
                                <p className="m-0">Task2: Short</p>
                                <p className="m-0">essay task of at</p>
                                <p className="m-0">least 250 words.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[174.8px] box-border flex flex-row items-start justify-start py-[111.5px] px-[12.5px] z-[4] border-[1px] border-solid border-gray-600">
                          <div className="bg-white flex flex-col items-start justify-start">
                            <div className="relative tracking-[0.6px]">
                              The contribution of
                            </div>
                            <div className="relative tracking-[0.6px]">
                              Task 2 is twice that
                            </div>
                            <div className="relative tracking-[0.6px]">
                              of Task 1 in the final
                            </div>
                            <div className="relative tracking-[0.6px] inline-block min-w-[98.2px]">
                              writing score.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[699.1px] overflow-x-auto flex flex-row items-start justify-start">
                        <div className="w-[174.8px] box-border shrink-0 flex flex-row items-start justify-start py-[236px] px-[12.5px] z-[3] border-[1px] border-solid border-gray-600 mq800:pt-[153px] mq800:pb-[153px] mq800:box-border">
                          <div className="bg-white flex flex-row items-start justify-start py-0 px-0">
                            <div className="relative tracking-[0.6px] inline-block min-w-[70.8px] shrink-0 [debug_commit:f6aba90]">
                              Speaking 
                            </div>
                          </div>
                        </div>
                        <div className="w-[349.5px] shrink-0 flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-row items-start justify-start py-[236px] px-[12.5px] z-[4] border-[1px] border-solid border-gray-600 mq800:pt-[153px] mq800:pb-[153px] mq800:box-border">
                            <div className="bg-white flex flex-row items-start justify-start py-0 px-0 whitespace-nowrap">
                              <div className="relative tracking-[0.6px] inline-block min-w-[116px] shrink-0 [debug_commit:f6aba90]">
                                11 to 14 minutes
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-[15.5px] px-[12.5px] pb-[31.5px] gap-[22px] z-[5] ml-[-0.1px] text-base border-[1px] border-solid border-gray-600 mq800:pb-5 mq800:box-border">
                            <div className="h-[98px] bg-white flex flex-row items-start justify-start py-0 px-0 box-border">
                              <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] shrink-0 [debug_commit:f6aba90]">
                                <p className="m-0">Face-to-face</p>
                                <p className="m-0">interview with</p>
                                <p className="m-0">three parts which</p>
                                <p className="m-0">are recorded.</p>
                              </div>
                            </div>
                            <div className="h-[98px] bg-white flex flex-row items-start justify-start py-0 px-0 box-border">
                              <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] shrink-0 [debug_commit:f6aba90]">
                                <p className="m-0">The first part</p>
                                <p className="m-0">involves</p>
                                <p className="m-0">answering short</p>
                                <p className="m-0">questions.</p>
                              </div>
                            </div>
                            <div className="h-[202px] bg-white flex flex-row items-start justify-start py-0 px-0 box-border">
                              <div className="mt-[-3px] relative tracking-[0.6px] leading-[26px] shrink-0 [debug_commit:f6aba90]">
                                <p className="m-0">The second part</p>
                                <p className="m-0">involves speaking</p>
                                <p className="m-0">at length about a</p>
                                <p className="m-0">general topic,</p>
                                <p className="m-0">followed by a</p>
                                <p className="m-0">structured</p>
                                <p className="m-0">discussion in the</p>
                                <p className="m-0">third part.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[174.8px] box-border shrink-0 flex flex-row items-start justify-start py-[185px] pr-3 pl-[12.5px] z-[6] border-[1px] border-solid border-gray-600 mq800:pt-[120px] mq800:pb-[120px] mq800:box-border">
                          <div className="bg-white flex flex-col items-start justify-start">
                            <div className="relative tracking-[0.6px]">
                              Each part of the test
                            </div>
                            <div className="relative tracking-[0.6px]">
                              assesses speaking
                            </div>
                            <div className="relative tracking-[0.6px] inline-block min-w-[119.8px]">
                              skills in different
                            </div>
                            <div className="relative tracking-[0.6px] inline-block min-w-[70.4px]">
                              ways, like
                            </div>
                            <div className="relative tracking-[0.6px]">
                              interaction pattern,
                            </div>
                            <div className="relative tracking-[0.6px]">
                              task input, and test
                            </div>
                            <div className="relative tracking-[0.6px] inline-block min-w-[92.9px]">
                              taker output.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* ... Your component JSX ... */}
                    <div className="table-container mt-[150px]">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Section</th>
                            <th>Number of Questions and Duration</th>
                            <th>Content</th>
                            <th>Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Section">Listening</td>
                            <td data-label="Number of Questions and Duration">
                              Four recordings, 40 questions, 30 minutes + 10
                              minutes (transfer time)
                            </td>
                            <td data-label="Content">
                              Four recorded monologues and conversations.
                            </td>
                            <td data-label="Remarks">
                              A correct answer is awarded one mark, and the
                              final score is provided as a band score in the
                              range of 1-9.
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Section">Reading</td>
                            <td data-label="Number of Questions and Duration">
                              40 questions <br />
                              60 minutes
                            </td>
                            <td data-label="Content">
                              Three passages which can be analytical, factual,
                              discursive, or descriptive.
                            </td>
                            <td data-label="Remarks">
                              Each correct answer is awarded one mark, and the
                              final score is provided as a band score in the
                              range of 1-9.
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Section">Writing</td>
                            <td data-label="Number of Questions and Duration">
                              60 minutes
                            </td>
                            <td data-label="Content">
                              Task1: Summarize or describe a table, graph,
                              chart, or diagram in at least 150 words.
                              <br />
                              Task2: Short essay task of at least 250 words.
                            </td>
                            <td data-label="Remarks">
                              The contribution of Task 2 is twice that of Task 1
                              in the final writing score.
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Section">Speaking </td>
                            <td data-label="Number of Questions and Duration">
                              11 to 14 minutes{" "}
                            </td>
                            <td data-label="Content">
                              Face-to-face interview with three parts which are
                              recorded.
                              <br />
                              The first part involves answering short questions.
                              <br />
                              The second part involves speaking at length about
                              a general topic, followed by a structured
                              discussion in the third part.
                            </td>
                            <td data-label="Remarks">
                              Each part of the test assesses speaking skills in
                              different ways, like interaction pattern, task
                              input, and test taker output.
                            </td>
                          </tr>
                          {/* Repeat for other rows */}
                        </tbody>
                      </table>
                    </div>
                    {/* ... Your component JSX ... */}
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                    <h2>IELTS Preparation</h2>
                    <div className="self-stretch h-[1996px] relative leading-[42px] inline-block shrink-0 text-9xl mq450:text-3xl mq450:leading-[34px]">
                      <p className="[margin-block-start:0] [margin-block-end:10px]">
                        You should take a practice test because that is the best
                        way to identify your weaknesses. It is crucial for
                        students to understand what to expect from the test
                        format before they start practicing. Reviewing each
                        section's test content, questions, and task types can
                        help students become more familiar with it. The last
                        piece of advice is to start exam preparation at least
                        three to six months in advance.
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px]">
                        Below are a few things you need to keep in mind while
                        preparing for the IELTS exam:
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px] text-13xl">
                        &nbsp;
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px] text-13xl">
                        Polish your reading
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px]">
                        The IELTS reading module is challenging not because
                        reading is hard but because it necessitates in-depth
                        reading within a constrained time frame. For people to
                        succeed in this part, several methods are suggested.
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px]">
                        Some advice reading the questions first, noting the
                        answers as they occur in the passage, and then answering
                        them. Another is to read the passage's topic, read each
                        paragraph's first and last lines, and then go on to the
                        questions to comprehend where the specific answer is
                        while reading the complete passage. You must put several
                        methods into practice to ascertain which method suits
                        you the best.
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px] text-13xl">
                        &nbsp;
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px] text-13xl">
                        Assess yourself and determine your level
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px]">
                        Doing mock tests to find your weaknesses is the first
                        part of assessing yourself that you must constantly
                        undergo to direct your preparation and revision efforts
                        in the right direction. This is helpful when taking a
                        test like the IELTS since it can show you what structure
                        to use, what words and vocabulary to use, and how to
                        place words in a well-constructed sentence.
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px]">
                        &nbsp;
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px] text-13xl">{`Focus on skill improvement `}</p>
                      <p className="[margin-block-start:0] [margin-block-end:10px] whitespace-pre-wrap">
                        As you have become more fluent in English and improved
                        your language proficiency, now is the time to improve
                        your listening abilities by becoming accustomed to
                        sound, environment, and speakers. Include your friends
                        and family in your plan; let them assist you in
                        identifying any potential red flags. It will be easier
                        for you to gain impartial knowledge of how you're
                        performing if you have a reliable source of feedback.
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px]">
                        &nbsp;
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px] text-13xl">
                        Practice whenever you can
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px]">
                        You can learn numerous words that will help you enhance
                        your spoken and listening English by interacting with
                        various types of people. Your practice sessions don't
                        have to take place during set hours. Your regular
                        routine can include them, making it more interesting,
                        enjoyable, and productive.
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:10px]">
                        &nbsp;
                      </p>
                  
                      <p className="m-0">&nbsp;</p>
                    </div>
                   
                  </div>
                </div>
                {/* <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <h2>Documents Required for IELTS</h2>
                  <div className="self-stretch h-[984px] relative text-9xl leading-[42px] text-black2 inline-block mq450:text-3xl mq450:leading-[34px]">
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                      To register and appear for the IELTS exam, applicants will
                      be asked to submit the required documents. To successfully
                      complete the IELTS registration process, students need to
                      submit these documents and also carry the same submitted
                      documents on the test day to the test centre.
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                      &nbsp;
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                      Documents Required to Complete the Registration Process :
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                      &nbsp;
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                      <span className="font-gilroy">{`Valid Passport- `}</span>
                      <span>
                        The only identification document that is considered
                        valid is the passport of the individual. Other national
                        IDs like one’s Adhaar card can be used but it is
                        recommended to use the passport. Having an updated and
                        recent passport is essential and a great requirement.
                      </span>
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                      <span className="font-gilroy">Personal Information-</span>
                      <span>
                        {" "}
                        candidates will be asked to fill up some personal
                        details and they are advised to thoroughly re-check the
                        given information and make sure it matches the
                        information mentioned in their IDs.
                      </span>
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                      &nbsp;
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                      Documents to Carry on the Test Day
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                      The most crucial item to bring on the day of the IELTS
                      test is identification, either a passport or a national ID
                      depending on which candidate used while registering for
                      the test. The same form of identification is required for
                      the IELTS Speaking test as well.
                    </p>
                    <p className="m-0">
                      Before entering the test centre, the test staff will check
                      IDs and documents, and the IELTS Speaking Test examiner
                      will check them again. However, on the day of the exam,
                      students don't need to carry any passport photos because
                      the IELTS test centre will take the picture when
                      applicants register.
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-[16px] max-w-full">
                  <h2>IELTS Registration</h2>
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
                  <div className="self-stretch flex flex-col items-end justify-start py-0 pr-3 pl-0 box-border gap-[25px] max-w-full text-53xl text-white">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[14px] max-w-full mq1125:flex-wrap">
                      <div className="flex-[0.9562] flex flex-col items-end justify-start py-0 pr-4 pl-0 box-border relative gap-[14px] min-w-[274px] min-h-[417px] max-w-full mq450:flex-1">
                        <div className="w-full h-[395px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-whitesmoke-400" />
                        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6">
                          <div className="h-[169px] w-[133.5px] relative z-[1]">
                            <img
                              className="absolute top-[0px] left-[128px] w-[22.5px] h-[23px]"
                              loading="lazy"
                              alt=""
                              src="/vector-29.svg"
                            />
                            <img
                              className="absolute h-full top-[0px] bottom-[0px] left-[17px] max-h-full w-[111px]"
                              alt=""
                              src="/vector-115.svg"
                            />
                            <div className="absolute top-[21px] left-[58px] tracking-[0.03em] uppercase z-[1] mq450:text-24xl mq800:text-39xl">
                              1
                            </div>
                            <img
                              className="absolute top-[93px] left-[47px] w-[52px] h-[52px] overflow-hidden z-[1]"
                              loading="lazy"
                              alt=""
                              src="/healthiconsiexammultiplechoice.svg"
                            />
                          </div>
                        </div>
                        <FrameComponent16
                          prepare="Prepare"
                          registerInstructions="Register Instructions"
                          noticeToTestTakers="Notice to test takers"
                          informationForTestTakers="Information for test-takers"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[46px] box-border relative gap-[12px] min-w-[274px] max-w-full text-center text-23xl text-black2 mq450:pb-[30px] mq450:box-border">
                        <div className="w-full h-[395px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-whitesmoke-400" />
                        <FrameComponent15
                          vector1="/vector-1-11.svg"
                          prop="2"
                          materialSymbolsadsClick="/materialsymbolsadsclick.svg"
                        />
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[11px] pr-[67px] pl-[66px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                          <h2 className="m-0 h-[51px] flex-1 relative text-inherit tracking-[0.03em] uppercase font-normal font-inherit inline-block z-[1] mq450:text-6xl mq800:text-15xl">
                            Select
                          </h2>
                        </div>
                        <div className="w-[343px] h-[116px] relative text-5xl tracking-[0.03em] text-gray-700 text-left inline-block max-w-full z-[1] mq450:text-lgi">
                          <ul className="m-0 font-inherit text-inherit pl-8">
                            <li className="mb-0">Select Your IELTS</li>
                            <li className="mb-0">
                              Academic or General Training
                            </li>
                            <li>{`Test date & Location`}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex-[0.8658] flex flex-col items-end justify-start pt-0 pb-[104px] pr-[49px] pl-0 box-border relative gap-[14px] min-w-[274px] max-w-full mq450:pr-5 mq450:pb-[68px] mq450:box-border mq450:flex-1">
                        <div className="w-full h-[395px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-whitesmoke-400" />
                        <div className="w-[244.5px] h-[169px] flex flex-row items-start justify-end py-0 pr-[55.5px] pl-[55px] box-border">
                          <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-[21px] px-8 pb-6 relative z-[1]">
                            <img
                              className="h-[23px] w-[22.5px] absolute !m-[0] top-[0px] right-[0px]"
                              alt=""
                              src="/vector-29.svg"
                            />
                            <img
                              className="h-full w-[111px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full"
                              alt=""
                              src="/vector-1-2.svg"
                            />
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <div className="h-[76px] flex flex-row items-start justify-start py-0 px-1 box-border">
                                <div className="h-[89px] relative tracking-[0.03em] uppercase inline-block min-w-[40px] shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-24xl mq800:text-39xl">
                                  3
                                </div>
                              </div>
                              <img
                                className="w-12 h-12 relative overflow-hidden shrink-0 [debug_commit:f6aba90] z-[1]"
                                loading="lazy"
                                alt=""
                                src="/mingcuteusereditfill.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-23xl text-black2">
                          <div className="self-stretch flex flex-row items-start justify-end py-0 px-11 mq450:pl-5 mq450:pr-5 mq450:box-border">
                            <h2 className="m-0 h-[51px] relative text-inherit tracking-[0.03em] uppercase font-normal font-inherit inline-block z-[1] mq450:text-6xl mq800:text-15xl">
                              Register
                            </h2>
                          </div>
                          <div className="self-stretch h-[58px] relative text-5xl tracking-[0.03em] leading-[35px] text-gray-700 inline-block z-[1] mq450:text-lgi">
                            <ul className="m-0 font-inherit text-inherit pl-8">
                              <li className="mb-0">Create your Profile</li>
                              <li>Submit your Application</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[1111px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                      <div className="w-[743px] flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                        <div className="flex-[0.9753] flex flex-col items-end justify-start pt-0 pb-[46px] pr-[9px] pl-0 box-border relative gap-[14px] min-w-[237px] max-w-full mq450:pb-[30px] mq450:box-border mq450:flex-1">
                          <div className="w-full h-[395px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-whitesmoke-400" />
                          <FrameComponent15
                            vector1="/vector-1-3.svg"
                            prop="4"
                            materialSymbolsadsClick="/solarcardbold@2x.png"
                            propAlignSelf="unset"
                            propPadding="unset"
                            propWidth="324.5px"
                          />
                          <FrameComponent16
                            prepare="Secure "
                            registerInstructions="Secure your place"
                            noticeToTestTakers="Credit card Payment"
                            informationForTestTakers="Bank deposit ot Transfer within 72 hours"
                            propWidth="170px"
                            propHeight="116px"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-end justify-start relative gap-[14px] min-w-[237px] min-h-[417px] max-w-full">
                          <div className="w-full h-[395px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-whitesmoke-400" />
                          <div className="w-[342.5px] h-[169px] flex flex-row items-start justify-center max-w-full">
                            <div className="self-stretch w-[133.5px] flex flex-row items-start justify-start pt-[21px] px-8 pb-6 box-border relative z-[1]">
                              <img
                                className="h-[23px] w-[22.5px] absolute !m-[0] top-[0px] right-[0px]"
                                alt=""
                                src="/vector-29.svg"
                              />
                              <img
                                className="h-full w-[111px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full"
                                alt=""
                                src="/vector-1-4.svg"
                              />
                              <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="h-[76px] flex flex-row items-start justify-start py-0 pr-[5px] pl-[3px] box-border">
                                  <div className="h-[89px] relative tracking-[0.03em] uppercase inline-block min-w-[40px] shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-24xl mq800:text-39xl">
                                    5
                                  </div>
                                </div>
                                <img
                                  className="w-12 h-12 relative overflow-hidden shrink-0 [debug_commit:f6aba90] z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/letsiconsdoneringroundfill.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-23xl text-black2">
                            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[23px]">
                              <h2 className="m-0 h-[51px] relative text-inherit tracking-[0.03em] uppercase font-normal font-inherit inline-block z-[1] mq450:text-6xl mq800:text-15xl">
                                Confirmation
                              </h2>
                            </div>
                            <div className="self-stretch h-[87px] relative text-5xl tracking-[0.03em] leading-[35px] text-gray-700 inline-block z-[1] mq450:text-lgi">
                              <ul className="m-0 font-inherit text-inherit pl-8">
                                <li className="mb-0">
                                  Check your E-mail for Registration
                                </li>
                                <li>Payment Confirmation</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <h2>IELTS EXAM FEE</h2>
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <h2>IELTS EXAM DATE 2024</h2>
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <h2>IELTS TEST CENTERS</h2>
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
                </div> */}
              </div>
            </div>
            <div className="w-[452px] flex flex-col items-start justify-start gap-[32px] min-w-[452px] max-w-full text-center text-5xl text-primary-1 mq450:gap-[16px_32px] mq800:min-w-full mq1350:flex-1">
              <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[50px] px-[29px] gap-[16px] max-w-full border-[1px] border-solid border-lightgray-200 mq800:pt-[21px] mq800:pb-[21px] mq800:box-border mq1350:pt-8 mq1350:pb-8 mq1350:box-border">
                <div className="h-8 flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="h-8 w-8 relative min-h-[32px]"
                    loading="lazy"
                    alt=""
                    src="/list.svg"
                  />
                  <div className="h-[29px] relative inline-block mq450:text-lgi">
                    Table of Contents
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-black2">
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full text-primary-1 border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Overview</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Why IELTS</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Test Format</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Syllabus</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Preparation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Eligibility</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Documents Required</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Registration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Exam Fee</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Exam dates 2024</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS test centres</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full z-[1] border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS E-Book</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full z-[2] border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Band Descriptors</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full z-[3] border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Speaking test</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full z-[4] border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Reading test</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full z-[5] border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>General Reading test</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full z-[6] border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>General Writing Task</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full z-[7] border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Essay</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full z-[8] border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>IELTS Result</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full z-[9] border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>GPA</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                <div className="flex flex-row items-center justify-start gap-[15.5px] text-9xl mq800:flex-wrap">
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
                <div className="flex flex-row items-center justify-center gap-[26px] mq450:flex-wrap">
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

export default IELTSEXAM;
