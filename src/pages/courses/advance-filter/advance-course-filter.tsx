import { FunctionComponent } from "react";
import FrameComponent13 from "./frame-component13";
import ScholarshipList from "./scholarship-list";
import Search from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const AdvanceCourseFilter: FunctionComponent = () => {
  const navigate=useNavigate()
  return (
    <div className="mb-4 mx-auto w-[90vw] flex flex-col items-center justify-center gap-[70px] tracking-[normal] text-left text-37xl text-text font-gilroy mq450:gap-[17px_70px] mq900:gap-[35px_70px]">
      <div className="w-full flex flex-row items-center justify-between gap-[20px] mq900:flex-wrap">
        <div className="h-[54px] w-[295.5px] flex flex-row items-start justify-start gap-[20px]">
          <img
            className="h-[54px] w-[67.5px] relative overflow-hidden shrink-0 min-h-[54px]"
            loading="lazy"
            alt=""
            src="/fa6solidgraduationcap.svg"
          />
          <h1>Courses</h1>
        </div>
        <div className="w-[474px] flex flex-row items-start justify-start max-w-full text-7xl">
          <div className="h-[] flex-1 rounded-23xl bg-white box-border flex flex-row items-center justify-start py-1.5 pr-[156px] pl-[19px] gap-[18px] whitespace-nowrap max-w-full border-[1px] border-solid border-silver-100 mq900:pr-[78px] mq900:box-border">
            <img className="h-10 w-10 relative" alt="" src="/search.svg" />
            <div className="flex-1 relative leading-[54px]">
              Search Scholarships
            </div>
          </div>
        </div>
      </div>
      <section className="w-full  flex flex-col items-center justify-center gap-[92px] text-left text-13xl text-text font-gilroy mq450:gap-[23px_92px] mq900:gap-[46px_92px]">
        <div className="w-full rounded-xl bg-lavenderblush flex flex-col items-center justify-start pt-[20px] px-20 pb-14 box-border gap-[24px] mq1275:pt-5 mq1275:pb-9 mq1275:box-border mq900:pl-10 mq900:pr-10 mq900:pb-[23px] mq900:box-border">
        <div className="w-[104.875rem] rounded-xl bg-lavenderblush flex flex-col items-start justify-start py-[2rem] px-[5rem] box-border gap-[0.75rem] max-w-full mq1275:pl-[2.5rem] mq1275:pr-[2.5rem] mq1275:box-border">
          <div className="self-stretch rounded-t-xl rounded-b-none flex flex-row items-center justify-center py-[1.125rem] px-[0rem] text-left text-[2.5rem] text-text  ">
            <h3 className="m-0 h-[3.063rem] w-[20.938rem] relative text-inherit font-normal font-inherit inline-block mq750:text-[2rem] mq450:text-[1.5rem] font-gilroy-semibold">
              Search Courses
            </h3>
          </div>
          <div className="self-stretch rounded-3xs bg-white box-border flex flex-row flex-wrap items-center justify-center max-w-full [row-gap:20px] border-[1px] border-solid border-darkgray-200">
          <div className="flex-1 flex flex-row items-start justify-center min-w-[58rem] max-w-full [row-gap:20px] mq1275:flex-wrap mq1275:min-w-full font-gilroy-medium">
          <div className="flex-1 box-border flex flex-col items-start justify-start py-[1.5rem] px-[1.875rem] min-w-[22.313rem] max-w-full border-r-[1px] border-solid border-darkgray-200 mq750:min-w-full">
            <div className="w-full h-[2.25rem] flex flex-row items-center justify-start gap-[1.25rem] ">
              <img
                className="h-[2.25rem] w-[2.25rem] relative min-h-[2.25rem]"
                alt=""
                src="/book.svg"
              />
              <input
                className="w-[calc(100%_-_36px)] [border:none] [outline:none]   text-[1.75rem] bg-[transparent] h-[2.125rem] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[3.375rem] p-0 mq450:text-[1.375rem]"
                placeholder="Course"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 box-border flex flex-col items-start justify-start py-[1.5rem] px-[1.875rem] max-w-full border-r-[1px] border-solid border-darkgray-200 mq750:min-w-full">
            <div className="w-full h-[2.25rem] flex flex-row items-center justify-start gap-[1.25rem]">
              <img
                className="h-[2.25rem] w-[2.25rem] relative min-h-[2.25rem]"
                alt=""
                src="/school.svg"
              />
              <input
                className="w-[calc(100%_-_36px)] [border:none] [outline:none]   text-[1.75rem] bg-[transparent] h-[2.125rem] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[2.938rem] p-0 mq450:text-[1.375rem]"
                placeholder="Intake"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-[1.5rem] px-[1.875rem] box-border min-w-[22.313rem] max-w-full mq750:min-w-full">
            <div className="h-[2.25rem] flex flex-row items-center justify-start gap-[1.25rem]">
              <img
                className="h-[2.25rem] w-[2.25rem] relative min-h-[2.25rem]"
                loading="lazy"
                alt=""
                src="/calendar.svg"
              />
                <input
                className="w-[calc(100%_-_36px)] [border:none] [outline:none]   text-[1.75rem] bg-[transparent] h-[2.125rem] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[2.938rem] p-0 mq450:text-[1.375rem]"
                placeholder="Year"
                type="text"
              />
            </div>
          </div>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/courses-list")}
          className="h-[5.25rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-crimson-100 flex flex-row items-center justify-start py-[1.063rem] px-[1.25rem] box-border"
        >
          <div className="self-stretch flex flex-row items-center justify-start relative gap-[0.625rem]">
            <Search />
          </div>
        </div>          
        </div>
        </div>
          <img
            className="w-full h-px relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/vector-251.svg"
          />
         
          <div style={{display:"flex",flexDirection:"row"}} className="flex flex-col md:flex-row items-start justify-between gap-4 w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-4">
              <FrameComponent13 studyArea="Study Area" />
              <FrameComponent13 studyArea="Discipline Area" propLineHeight="42px" propMinWidth="unset" />
              <FrameComponent13 studyArea="Duration" propLineHeight="unset" propMinWidth="112px" />
            </div>

            <div className="flex-1 flex flex-col items-start justify-start gap-4">
              <div className="text-lg leading-relaxed">Program Level</div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full text-9xl text-grey-1">
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            <input type="checkbox" />

                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[30px] max-w-full mq450:text-3xl">
                              UG
                            </div>
                          </div>
                        
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            <input type="checkbox" />

                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[28px] max-w-full mq450:text-3xl">{`PG `}</div>
                          </div>
                         
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            <input type="checkbox" />

                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] leading-[42px] inline-block min-w-[288px] max-w-full mq450:text-3xl">
                              UG+PG 
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[42px] max-w-full mq450:text-3xl">
                              PHD
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[114px] max-w-full mq450:text-3xl">
                              Foundation
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] leading-[42px] inline-block min-w-[209px] max-w-full mq450:text-3xl">
                              Short Term Programs
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] leading-[42px] inline-block min-w-[189px] max-w-full mq450:text-3xl">
                              Pathway programs
                            </div>
                          </div>
                        </div>
            </div>

            <div className="flex-1 flex flex-col items-start justify-start gap-4">
              <div className="text-lg leading-relaxed">Requirements</div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full text-9xl text-grey-1">
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[34px] max-w-full mq450:text-3xl">
                              PTE
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[48px] max-w-full mq450:text-3xl">
                              IELTS
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[97px] max-w-full mq450:text-3xl">
                              TOEFL iBT
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] leading-[42px] inline-block min-w-[210px] max-w-full mq450:text-3xl">
                              Duolingo English Test
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[37px] max-w-full mq450:text-3xl">
                              SAT
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[41px] max-w-full mq450:text-3xl">
                              GRE
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[59px] max-w-full mq450:text-3xl">
                              GMAT
                            </div>
                          </div>
                          {/* <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] leading-[42px] inline-block min-w-[272px] max-w-full mq450:text-3xl">
                              Without English Proficiency
                            </div>
                          </div> */}
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[128px] max-w-full mq450:text-3xl">
                              Without GRE
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[146px] max-w-full mq450:text-3xl">
                              Without GMAT
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[148px] max-w-full mq450:text-3xl">
                              Without Maths
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] inline-block min-w-[139px] max-w-full mq450:text-3xl">
                              STEM Courses
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq900:flex-wrap">
                            <div className="h-6 w-12 relative">
                            
                            <input type="checkbox" />
                            </div>
                            <div className="h-[24px] flex-1 relative tracking-[-0.2px] leading-[42px] inline-block min-w-[216px] max-w-full mq450:text-3xl">
                              Scholarship Available
                            </div>
                          </div>
                        </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start text-primary-1">
            <div className="h-[39px] relative [text-decoration:underline] inline-block min-w-[124px] mq450:text-lgi mq900:text-7xl">
              Clear all
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center py-0 pr-5 pl-[21px]">
          <button onClick={()=>{navigate('/courses')}} className="cursor-pointer py-[18px] px-[45px] bg-white rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-primary-1">
            <div className="flex flex-row items-start justify-start py-px px-0">
              <div className="relative text-3xl leading-[22px] font-gilroy text-primary-1 text-left inline-block min-w-[62px] mq450:text-lg mq450:leading-[18px]">
                Close
              </div>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdvanceCourseFilter;
