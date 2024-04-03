import { FunctionComponent } from "react";
import Search from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import './course.css'
const CoursesFilter: FunctionComponent = () => {
  const navigate=useNavigate()
  return (
    <div className="mb-4 mx-auto w-[90vw] flex flex-col items-center justify-start gap-[70px] tracking-[normal] text-left text-37xl text-text font-gilroy mq450:gap-[17px_70px] mq1125:gap-[35px_70px]">
      <div className="w-full flex flex-row items-center justify-between max-w-full gap-[20px] mq800:flex-wrap">
        <div className="h-[54px] w-[295.5px] flex flex-row items-start justify-start gap-[20px]">
          <img
            className="h-[54px] w-[67.5px] relative overflow-hidden shrink-0 min-h-[54px]"
            loading="lazy"
            alt=""
            src="/fa6solidgraduationcap.svg"
          />
          <h1 >
            Courses
          </h1>
        </div>
        <div className="w-[474px] flex flex-row items-start justify-start max-w-full text-7xl">
          <div className="h-[] flex-1 rounded-23xl bg-white box-border flex flex-row items-center justify-start py-1.5 pr-[156px] pl-[19px] gap-[18px] whitespace-nowrap max-w-full border-[1px] border-solid border-silver-100 mq800:pr-[78px] mq800:box-border">
            <img className="h-10 w-10 relative" alt="" src="/search.svg" />
            <div className="flex-1 relative leading-[54px]">
            <input className="w-[221px] [border:none] [outline:none] bg-[transparent] h-[54px] flex-1 relative text-7xl text-left inline-block p-0" type="text" placeholder="Search Course" />
            </div>
          </div>
        </div>
      </div>
      <form className="m-0 w-full flex flex-col items-center justify-start max-w-full">
        <div className="w-full rounded-xl bg-lavenderblush flex flex-col items-center justify-start py-[26px] px-20 box-border min-h-[263px] max-w-full mq1125:pl-10 mq1125:pr-10 mq1125:box-border">
          <div className="w-full flex flex-col items-center justify-start gap-[12px] max-w-full">
            <div className="w-full rounded-t-xl rounded-b-none flex flex-row items-center justify-center py-[18px] px-5 box-border max-w-full">
              <h3 className="m-0 w-[564px] relative text-21xl font-normal font-gilroy text-text text-left inline-block max-w-full mq450:text-5xl mq800:text-13xl">
                Search suitable Course for you
              </h3>
            </div>
            <div className="w-full rounded-3xs bg-white box-border flex flex-row flex-wrap items-center justify-center max-w-full [row-gap:20px] border-[1px] border-solid border-darkgray-200">
              <div className="flex-1 flex flex-row items-start justify-center min-w-[929px] max-w-full [row-gap:20px] mq1300:flex-wrap mq1300:min-w-full">
            
                <div className="flex-1 box-border flex flex-col items-center justify-start py-6 px-[30px] min-w-[268px] max-w-full border-r-[1px] border-solid border-darkgray-200">
                  <div className="w-[113px] h-9 flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="h-9 w-9 relative min-h-[36px]"
                      alt=""
                      src="/book.svg"
                    />
                    <input
                      className="w-[full] [border:none] [outline:none] font-gilroy text-9xl bg-[transparent] h-[34px] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[34px] p-0 mq450:text-3xl"
                      placeholder="Course"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex-1 box-border flex flex-col items-center justify-start py-6 px-[30px] min-w-[268px] max-w-full border-r-[1px] border-solid border-darkgray-200">
                  <div className="w-[113px] h-9 flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="h-9 w-9 relative min-h-[36px]"
                      alt=""
                      src="/school.svg"
                    />
                    <input
                      className="w-[full] [border:none] [outline:none] font-gilroy text-9xl bg-[transparent] h-[34px] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[34px] p-0 mq450:text-3xl"
                      placeholder="Intake"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex-1 box-border flex flex-col items-center justify-start py-6 px-[30px] min-w-[268px] max-w-full border-r-[1px] border-solid border-darkgray-200">
                  <div className="w-[113px] h-9 flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="h-9 w-9 relative min-h-[36px]"
                      alt=""
                      src="/calendar.svg"
                    />
                    <input
                      className="w-[full] [border:none] [outline:none] font-gilroy text-9xl bg-[transparent] h-[34px] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[34px] p-0 mq450:text-3xl"
                      placeholder="Year"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex-1 box-border flex flex-col items-center justify-start py-6 px-[30px] min-w-[268px] max-w-full border-r-[1px] border-solid border-darkgray-200">
                  <div className="w-[113px] h-9 flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="h-9 w-9 relative min-h-[36px]"
                      alt=""
                      src="/mappin.svg"
                    />
                    <input
                      className="w-[full] [border:none] [outline:none] font-gilroy text-9xl bg-[transparent] h-[34px] flex-1 relative tracking-[-0.2px] text-gray-100 text-left inline-block min-w-[34px] p-0 mq450:text-3xl"
                      placeholder="Country"
                      type="text"
                    />
                  </div>
                </div>
               
              </div>
              <div style={{cursor: "pointer"}} onClick={()=>navigate('/courses-list')}  className="h-[84px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-crimson-100 flex flex-row items-center justify-start py-[17px] px-5 box-border">
                <div className="self-stretch flex flex-row items-center justify-start relative gap-[10px]">
                  {/* <img className="h-[50px] w-[50px] relative" alt="" /> */}
                  <Search/>
                  <div className="h-[62.4%] w-[62.4%] absolute !m-[0] top-[10.6%] right-[27%] bottom-[27%] left-[10.6%] rounded-[50%] box-border z-[1] border-[0px] border-solid border-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer py-[18px] px-[17px] bg-white h-[60px] rounded-lg box-border flex flex-col items-center justify-center z-[1] mt-[-30px] border-[1px] border-solid border-primary-1 mq450:w-[calc(100%_-_40px)]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
            <div onClick={() => navigate('/courses-advance-filter')} className="relative text-3xl leading-[22px] font-gilroy text-primary-1 text-left mq450:text-lg mq450:leading-[18px]">
              Advanced Search
            </div>
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/plus1.svg"
            />
          </div>
        </button>
      </form>
    </div>
  );
};

export default CoursesFilter;