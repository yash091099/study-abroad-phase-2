import { FunctionComponent } from "react";

const LOR: FunctionComponent = () => {
  return (
    <div className="w-[1920px] max-w-full flex flex-col items-start justify-start gap-[30px] tracking-[normal] text-left text-5xl text-text font-gilroy">
      <div className="w-[582px] h-[29px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[4.5px] max-w-full">
          <div className="h-[29px] relative tracking-[-0.2px] inline-block min-w-[65px]">
            Home
          </div>
          <img
            className="h-7 w-7 relative"
            loading="lazy"
            alt=""
            src="/chevronright.svg"
          />
          <div className="relative tracking-[-0.2px] leading-[29px] whitespace-nowrap">
            Study Abroad
          </div>
          <img
            className="h-7 w-7 relative"
            loading="lazy"
            alt=""
            src="/chevronright.svg"
          />
          <div className="w-[52px] relative tracking-[-0.2px] leading-[29px] inline-block">
            Blog
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[30px] box-border max-w-full text-left text-53xl text-white font-gilroy">
        <div className="flex-1 flex flex-col items-start justify-start pt-[206px] px-[120px] pb-64 box-border relative max-w-full mq800:pt-[134px] mq800:px-[30px] mq800:pb-[166px] mq800:box-border mq1125:pl-[60px] mq1125:pr-[60px] mq1125:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-131@2x.png"
          />
          <h1 className="m-0 w-[886px] h-[89px] relative text-inherit font-normal font-inherit inline-block max-w-full z-[1] mq450:text-24xl mq800:text-39xl">
            Letter of Recommendation
          </h1>
          <h1 className="m-0 w-[506px] h-[63px] relative text-33xl font-normal font-inherit inline-block max-w-full z-[1] mq450:text-12xl mq800:text-23xl">
            All you need to know!
          </h1>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-33xl text-text font-gilroy">
        <div className="w-[1680px] flex flex-col items-start justify-start gap-[27px] max-w-full">
          <h1 className="m-0 w-[638px] h-16 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-12xl mq800:text-23xl">
            Letter of Recommendation
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start gap-[25px] max-w-full text-25xl mq1350:flex-wrap">
            <div className="flex-1 rounded-21xl bg-gray-200 flex flex-row items-start justify-start py-10 px-[38px] box-border max-w-full mq1125:min-w-full mq1350:pt-5 mq1350:pb-5 mq1350:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[58px] max-w-full mq800:gap-[29px_58px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <h2 className="m-0 w-[727px] relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    What is Letter of Recommendation?
                  </h2>
                  <div className="self-stretch h-[209px] relative leading-[42px] inline-block text-9xl text-black2 mq450:text-3xl mq450:leading-[34px]">
                    <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce scelerisque vel nibh eget pellentesque. Ut ac odio sed velit pellentesque malesuada. Donec tempor elit quis maximus convallis. Phasellus hendrerit nisl felis, et bibendum metus laoreet id. Duis ultrices tempor aliquam. Pellentesque luctus a velit eget porttitor `}</span>
                    <span className="text-13xl text-primary-1">Read More</span>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <h2 className="m-0 w-[495px] relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    Why do we need a LOR?
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <h2 className="m-0 relative text-inherit leading-[54px] font-normal font-inherit mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    Types of LOR
                  </h2>
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full text-9xl text-black2">
                    <div className="h-[916px] flex-1 relative leading-[42px] inline-block max-w-full mq450:text-3xl mq450:leading-[34px]">
                      <p className="[margin-block-start:0] [margin-block-end:34px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce scelerisque vel nibh eget pellentesque. Ut ac odio sed velit pellentesque malesuada. `}</p>
                      <ol className="m-0 text-inherit pl-[37px]">
                        <li className="mb-0">
                          <span className="font-gilroy">Academic LOR :</span>
                          <span>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi mollis dui nec neque rutrum bibendum.
                            Donec in ultricies turpis. Fusce scelerisque vel
                            nibh eget pellentesque. Ut ac odio sed velit
                            pellentesque malesuada. Donec tempor elit quis
                            maximus convallis. Phasellus hendrerit nisl felis,
                            et bibendum metus laoreet id. Duis ultrices tempor
                            aliquam. Pellentesque luctus a velit eget porttitor.
                            Nam eu accumsan urna. In fermentum nulla in quam
                            convallis, in viverra justo pulvinar. Quisque
                            volutpat enim vel lectus condimentum, sed
                            consectetur mauris lacinia. Ut elementum massa vitae
                            dolor sollicitudin, quis faucibus sapien laoreet. Ut
                            arcu purus, varius eget elit sed, efficitur finibus
                            purus.
                          </span>
                        </li>
                        <li>
                          <span className="font-gilroy">
                            Professional LOR :
                          </span>
                          <span className="font-gilroy">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi mollis dui nec neque rutrum bibendum.
                            Donec in ultricies turpis. Fusce scelerisque vel
                            nibh eget pellentesque. Ut ac odio sed velit
                            pellentesque malesuada. Donec tempor elit quis
                            maximus convallis. Phasellus hendrerit nisl felis,
                            et bibendum metus laoreet id. Duis ultrices tempor
                            aliquam. Pellentesque luctus a velit eget porttitor.
                            Nam eu accumsan urna. In fermentum nulla in quam
                            convallis, in viverra justo pulvinar. Quisque
                            volutpat enim vel lectus condimentum, sed
                            consectetur mauris lacinia. Ut elementum massa vitae
                            dolor sollicitudin, quis faucibus sapien laoreet. Ut
                            arcu purus, varius eget elit sed, efficitur finibus
                            purus.
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <h2 className="m-0 w-[873px] relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    How to Write a Letter of Recommendation?
                  </h2>
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full text-9xl text-black2 mq800:gap-[38px_19px]">
                    <div className="h-[336px] flex-1 relative leading-[42px] inline-block max-w-full mq450:text-3xl mq450:leading-[34px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi mollis dui nec neque rutrum bibendum. Donec in
                      ultricies turpis. Fusce scelerisque vel nibh eget
                      pellentesque. Ut ac odio sed velit pellentesque malesuada.
                      Donec tempor elit quis maximus convallis. Phasellus
                      hendrerit nisl felis, et bibendum metus laoreet id. Duis
                      ultrices tempor aliquam. Pellentesque luctus a velit eget
                      porttitor. Nam eu accumsan urna. In fermentum nulla in
                      quam convallis, in viverra justo pulvinar. Quisque
                      volutpat enim vel lectus condimentum, sed consectetur
                      mauris lacinia. Ut elementum massa vitae dolor
                      sollicitudin, quis faucibus sapien laoreet. Ut arcu purus,
                      varius eget elit sed, efficitur finibus purus.
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq800:gap-[16px_32px]">
                  <h2 className="m-0 self-stretch relative text-inherit leading-[54px] font-normal font-inherit mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    Format of LOR
                  </h2>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full text-9xl text-black2 mq800:gap-[18px_36px]">
                    <div className="self-stretch h-[336px] relative leading-[42px] inline-block mq450:text-3xl mq450:leading-[34px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi mollis dui nec neque rutrum bibendum. Donec in
                      ultricies turpis. Fusce scelerisque vel nibh eget
                      pellentesque. Ut ac odio sed velit pellentesque malesuada.
                      Donec tempor elit quis maximus convallis. Phasellus
                      hendrerit nisl felis, et bibendum metus laoreet id. Duis
                      ultrices tempor aliquam. Pellentesque luctus a velit eget
                      porttitor. Nam eu accumsan urna. In fermentum nulla in
                      quam convallis, in viverra justo pulvinar. Quisque
                      volutpat enim vel lectus condimentum, sed consectetur
                      mauris lacinia. Ut elementum massa vitae dolor
                      sollicitudin, quis faucibus sapien laoreet. Ut arcu purus,
                      varius eget elit sed, efficitur finibus purus.
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-3xl">
                      <div className="w-[777px] flex flex-row items-end justify-start max-w-full">
                        <div className="h-[570px] w-[177px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border mq800:hidden">
                          <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[25px]">
                            <div className="w-[119px] h-[99px] flex flex-row items-start justify-start gap-[4px]">
                              <div className="flex-1 flex flex-col items-start justify-start pt-9 px-0 pb-0">
                                <div className="self-stretch h-[27px] relative leading-[33px] inline-block min-w-[87px] mq450:text-lg">
                                  Starting
                                </div>
                              </div>
                              <img
                                className="h-[99px] w-7 relative"
                                loading="lazy"
                                alt=""
                                src="/vector-113.svg"
                              />
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[17.333333333333332px] text-right">
                              <div className="flex-1 flex flex-row items-start justify-start gap-[9px] text-center">
                                <div className="flex flex-col items-start justify-start pt-[58px] px-0 pb-0">
                                  <div className="h-[27px] relative inline-block min-w-[125px] mq450:text-lg">
                                    Introduction
                                  </div>
                                </div>
                                <img
                                  className="h-[146px] w-7 relative"
                                  loading="lazy"
                                  alt=""
                                  src="/vector-26.svg"
                                />
                              </div>
                              <div className="self-stretch h-[103px] flex flex-row items-start justify-start gap-[9px]">
                                <div className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0">
                                  <div className="self-stretch relative leading-[22px] mq450:text-lg mq450:leading-[18px]">
                                    Body/Quality and Skills
                                  </div>
                                </div>
                                <img
                                  className="h-[103px] w-7 relative"
                                  loading="lazy"
                                  alt=""
                                  src="/vector-32.svg"
                                />
                              </div>
                              <div className="h-[102px] flex flex-row items-start justify-start gap-[9px]">
                                <div className="flex flex-col items-start justify-start pt-10 px-0 pb-0">
                                  <div className="relative leading-[22px] inline-block min-w-[113px] whitespace-nowrap mq450:text-lg mq450:leading-[18px]">
                                    Conclusion
                                  </div>
                                </div>
                                <img
                                  className="h-[102px] w-7 relative"
                                  loading="lazy"
                                  alt=""
                                  src="/vector-42.svg"
                                />
                              </div>
                              <div className="h-[42px] flex flex-row items-start justify-start gap-[9px]">
                                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                                  <div className="h-[27px] relative leading-[33px] inline-block min-w-[76px] mq450:text-lg">
                                    Closing
                                  </div>
                                </div>
                                <img
                                  className="h-[42px] w-7 relative"
                                  loading="lazy"
                                  alt=""
                                  src="/vector-62.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-[calc(100%_-_177px)] text-left text-lg text-white mq800:max-w-full">
                          <div className="self-stretch bg-primary-2 flex flex-col items-start justify-start py-3 px-0 gap-[2px] text-center">
                            <div className="w-[126px] h-[22px] relative leading-[27px] inline-block">
                              <ul className="m-0 font-inherit text-inherit pl-6">
                                <li>Sender Info</li>
                              </ul>
                            </div>
                            <div className="w-[69px] h-[22px] relative leading-[27px] inline-block">
                              <ul className="m-0 font-inherit text-inherit pl-6">
                                <li>Date</li>
                              </ul>
                            </div>
                            <div className="w-[145px] h-[22px] relative leading-[27px] inline-block">
                              <ul className="m-0 font-inherit text-inherit pl-6">
                                <li>Receiver’s Info</li>
                              </ul>
                            </div>
                            <div className="w-[116px] h-[22px] relative leading-[27px] inline-block">
                              <ul className="m-0 font-inherit text-inherit pl-6">
                                <li>Salutation</li>
                              </ul>
                            </div>
                          </div>
                          <div className="self-stretch [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_#00949b] flex flex-row items-start justify-start py-3 px-0 box-border max-w-full">
                            <div className="h-[132px] flex-1 relative leading-[27px] inline-block max-w-full">
                              <ul className="m-0 font-inherit text-inherit pl-6">
                                <li>
                                  In this introduction part, the person writing
                                  the LOR should explain their relationship with
                                  the student they are writing the LOR for. For
                                  example, if the recommender has known them as
                                  a professor or employer etc. Also, the
                                  recommender needs to mention their general
                                  impression of the student/employee and the
                                  time they have known them
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="self-stretch [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#00949b] flex flex-row items-start justify-start py-3 px-0 box-border max-w-full">
                            <div className="h-[88px] flex-1 relative leading-[27px] inline-block max-w-full">
                              <ul className="m-0 font-inherit text-inherit pl-6">
                                <li>
                                  The recommender needs to argue why this
                                  particular student or employee is the best
                                  candidate for the position they are applying
                                  for. Here they can mention the student’s
                                  educational background, achievements,
                                  activities and relevant personality traits
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="self-stretch [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#00949b] flex flex-row items-start justify-start py-3 px-0 box-border max-w-full">
                            <div className="h-[88px] flex-1 relative leading-[27px] inline-block max-w-full">
                              <ul className="m-0 font-inherit text-inherit pl-6">
                                <li>
                                  The recommender needs to add a strong closing
                                  statement that vouches for the student’s
                                  performance ability. Then they need to end the
                                  letter with the usual formalities, like adding
                                  their name, contact details and phone number.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="self-stretch [background:linear-gradient(rgba(0,_0,_0,_0.4),_rgba(0,_0,_0,_0.4)),_#00949b] flex flex-row items-start justify-start py-3 px-0 box-border max-w-full">
                            <div className="flex-1 relative leading-[22px] inline-block max-w-full">
                              <ul className="m-0 font-inherit text-inherit pl-6">
                                <li>Closing and Signature</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <h2 className="m-0 w-[751px] relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    What skills to be highlighted in LOR ?
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <h2 className="m-0 w-[511px] relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    Why are LOR important ?
                  </h2>
                  <div className="self-stretch h-[168px] relative text-9xl leading-[42px] text-black2 inline-block mq450:text-3xl mq450:leading-[34px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce scelerisque vel nibh eget pellentesque. Ut ac odio sed velit pellentesque malesuada. Donec tempor elit quis maximus convallis. Phasellus hendrerit nisl felis, et bibendum metus laoreet id. `}</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <h2 className="m-0 w-[511px] relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    Common mistakes in LOR
                  </h2>
                  <div className="self-stretch h-[168px] relative text-9xl leading-[42px] text-black2 inline-block mq450:text-3xl mq450:leading-[34px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce scelerisque vel nibh eget pellentesque. Ut ac odio sed velit pellentesque malesuada. Donec tempor elit quis maximus convallis. Phasellus hendrerit nisl felis, et bibendum metus laoreet id. `}</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <h2 className="m-0 w-[540px] relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    What makes a good LOR ?
                  </h2>
                  <div className="self-stretch h-[168px] relative text-9xl leading-[42px] text-black2 inline-block mq450:text-3xl mq450:leading-[34px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce scelerisque vel nibh eget pellentesque. Ut ac odio sed velit pellentesque malesuada. Donec tempor elit quis maximus convallis. Phasellus hendrerit nisl felis, et bibendum metus laoreet id. `}</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <h2 className="m-0 relative text-inherit leading-[54px] font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    Word limit in LOR
                  </h2>
                  <div className="self-stretch h-[168px] relative text-9xl leading-[42px] text-black2 inline-block mq450:text-3xl mq450:leading-[34px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce scelerisque vel nibh eget pellentesque. Ut ac odio sed velit pellentesque malesuada. Donec tempor elit quis maximus convallis. Phasellus hendrerit nisl felis, et bibendum metus laoreet id. `}</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] text-9xl text-primary-2">
                  <h2 className="m-0 relative text-25xl leading-[54px] font-normal font-inherit text-text mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[43px]">
                    Useful links
                  </h2>
                  <div className="self-stretch relative [text-decoration:underline] leading-[42px] mq450:text-3xl mq450:leading-[34px]">
                    How to send LORs to universities abroad
                  </div>
                  <div className="self-stretch relative [text-decoration:underline] leading-[42px] mq450:text-3xl mq450:leading-[34px]">
                    Sample Academic LOR for MS courses
                  </div>
                  <div className="self-stretch relative [text-decoration:underline] leading-[42px] mq450:text-3xl mq450:leading-[34px]">
                    Sample professional LOR for MBA
                  </div>
                  <div className="self-stretch relative [text-decoration:underline] leading-[42px] mq450:text-3xl mq450:leading-[34px]">
                    Sample LOR for UG applicants
                  </div>
                  <div className="self-stretch relative [text-decoration:underline] leading-[42px] mq450:text-3xl mq450:leading-[34px]">
                    A complete guide on Date format
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[452px] flex flex-col items-start justify-start gap-[32px] min-w-[452px] max-w-full text-center text-5xl text-primary-1 mq450:gap-[16px_32px] mq800:min-w-full mq1350:flex-1">
              <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[50px] px-[29px] gap-[16px] max-w-full border-[1px] border-solid border-lightgray-200 mq800:pt-8 mq800:pb-8 mq800:box-border">
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
                        <li>What is LOR ?</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Why do you need a LOR ?</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Types of LOR</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>{`How to write a LOR `}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Format of a LOR</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 pr-[35px] pl-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="flex-1 relative leading-[31px] inline-block max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>What skills to be highlighted in LOR ?</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Why are LOR important ?</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Common mistakes in LOR</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>What makes a good LOR ?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-17xl bg-gray-200 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.11)] box-border flex flex-col items-start justify-start py-[50px] px-[29px] gap-[16px] max-w-full text-primary-2 border-[1px] border-solid border-lightgray-200 mq450:pt-8 mq450:pb-8 mq450:box-border">
                <div className="h-8 flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="h-8 w-8 relative min-h-[32px]"
                    loading="lazy"
                    alt=""
                    src="/list-1.svg"
                  />
                  <div className="relative leading-[29px] mq450:text-lgi">
                    Sample of LOR
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left">
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative [text-decoration:underline] leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Sample LOR for MBA</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative [text-decoration:underline] leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Sample LOR for MS</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative [text-decoration:underline] leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Sample LOR for Bachelors</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative [text-decoration:underline] leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Sample LOR for PhD</li>
                      </ul>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-start py-3 px-0 max-w-full border-b-[1px] border-solid border-grey-1">
                    <div className="w-[347px] relative [text-decoration:underline] leading-[31px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
                      <ul className="m-0 font-inherit text-inherit pl-8">
                        <li>Sample LOR for other courses</li>
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

export default LOR;
