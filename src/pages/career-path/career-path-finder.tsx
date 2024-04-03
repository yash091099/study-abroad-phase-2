import { FunctionComponent, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const CareerPathFinderFilter: FunctionComponent = () => {
  const navigate = useNavigate();
  const [latestQualification, setLatestQualification] = useState('');
  const [specialization, setSpecialization] = useState('');

  const qualificationOptions = [
    'Latest Qualification 1',
    'Latest Qualification 2',
    'Latest Qualification 3',
  ];

  const specializationOptions = [
    'Specialization 1',
    'Specialization 2',
    'Specialization 3',
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-[35px] tracking-[normal] text-left text-37xl text-text font-gilroy mq450:gap-[17px_35px]">
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq1300:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[20px] max-w-full mq800:flex-wrap">
          <img
            className="h-[54px] w-[67.5px] relative overflow-hidden shrink-0 min-h-[54px]"
            loading="lazy"
            alt=""
            style={{marginLeft: '10px'}}
            src="/fa6solidgraduationcap.svg"
          />
          <h1 >
            Career Path Finder
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq800:flex-wrap">
          <button className="cursor-pointer py-1.5 pr-[21px] pl-[19px] bg-white h-[] rounded-23xl box-border flex flex-row items-center justify-start gap-[18px] whitespace-nowrap max-w-full border-[1px] border-solid border-silver-100 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgray-400">
            <img className="h-10 w-10 relative" alt="" src="/search.svg" />
            <div className="w-[374px] relative text-7xl leading-[54px] font-gilroy text-text text-left inline-block">
              Search Courses and universities
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-1.5 px-5 bg-primary-1 h-[66px] rounded-23xl flex flex-row items-center justify-start box-border gap-[14px] whitespace-nowrap hover:bg-crimson-200">
            <div className="relative text-7xl leading-[54px] font-gilroy text-white text-left inline-block min-w-[89px]">
              Sort By
            </div>
            <img className="h-8 w-8 relative" alt="" src="/floatright.svg" />
          </button>
        </div>
      </div>
      <section className="self-stretch flex flex-col items-center justify-center max-w-full text-left text-53xl text-crimson-100 font-gilroy">
        <div className="w-[1615px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[113px] max-w-full mq450:gap-[113px_28px] mq800:gap-[113px_56px] mq1300:flex-wrap">
          <div className="h-[416px] flex-1 relative overflow-hidden min-w-[590px] max-w-full mq800:min-w-full">
            <img
              className="absolute h-[61.28%] w-[85.67%] top-[3.67%] right-[6.38%] bottom-[35.05%] left-[7.95%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/background-complete1.svg"
            />
            <img
              className="absolute h-[55.73%] w-[83.94%] top-[11.67%] right-[8.03%] bottom-[32.6%] left-[8.04%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/background-simple1.svg"
            />
            <img
              className="absolute h-[25.63%] w-[5.1%] top-[3.77%] right-[46.59%] bottom-[70.6%] left-[48.3%] max-w-full overflow-hidden max-h-full z-[1]"
              loading="lazy"
              alt=""
              src="/flag.svg"
            />
            <div className="absolute h-[40.76%] w-[90.86%] top-[57.24%] right-[3.53%] bottom-[0%] left-[5.61%] z-[1]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <img
                  className="absolute h-full w-[17.09%] top-[0px] right-[0%] bottom-[0px] left-[82.91%] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/group3.svg"
                />
                <img
                  className="absolute h-[73.12%] w-[14.37%] top-[17.54%] right-[85.63%] bottom-[9.34%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-19.svg"
                />
              </div>
            </div>
            <img
              className="absolute h-[54.46%] w-[83.94%] top-[45.54%] right-[16.05%] bottom-[0%] left-[0.01%] max-w-full overflow-hidden max-h-full z-[2]"
              alt=""
              src="/floor.svg"
            />
            <img
              className="absolute h-[76.79%] w-[23.45%] top-[20.89%] right-[62.08%] bottom-[2.32%] left-[14.47%] max-w-full overflow-hidden max-h-full z-[3]"
              loading="lazy"
              alt=""
              src="/character.svg"
            />
            <img
              className="absolute h-[13.44%] w-[9.85%] top-[7.22%] right-[83.65%] bottom-[79.33%] left-[6.5%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/speech-bubble.svg"
            />
          </div>
          <div className="w-[575px] flex flex-col items-start justify-start pt-[202px] px-0 pb-0 box-border min-w-[575px] max-w-full mq450:pt-[131px] mq450:box-border mq800:min-w-full mq1300:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full">
              <h1 className="m-0 w-[321px] h-[89px] relative text-inherit font-normal font-inherit flex items-center max-w-full mq450:text-24xl mq800:text-39xl">{`Confused `}</h1>
              <h2 className="m-0 self-stretch h-[106px] relative text-25xl font-normal font-inherit inline-block mq450:text-7xl mq800:text-16xl">
                <p className="m-0">About Your Career Path?</p>
                <p className="m-0">Let Us Light the Way!</p>
              </h2>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center max-w-full text-33xl text-text">
          <div className="self-stretch rounded-xl bg-lavenderblush flex flex-col items-center justify-center py-[26px] px-20 box-border min-h-[282px] max-w-full mq450:gap-[16px_32px] mq1125:pl-10 mq1125:pr-10 mq1125:box-border">
            <div className="self-stretch flex flex-col items-center justify-center max-w-full mq800:gap-[16px_32px]">
              <div className="self-stretch flex flex-col items-center justify-center gap-[16px] max-w-full">
                <div className="self-stretch rounded-t-xl rounded-b-none flex flex-row items-center justify-center py-[18px] px-5">
                  <h1 className="m-0 h-16 w-[592px] relative text-inherit font-normal font-inherit inline-block mq450:text-12xl mq800:text-23xl">
                    Search Your Career Path
                  </h1>
                </div>
                <div className="self-stretch rounded-3xs bg-white box-border flex flex-row flex-wrap items-center justify-center max-w-full [row-gap:20px] text-9xl text-gray-100 border-[1px] border-solid border-darkgray-200">
                  <div className="flex-1 flex flex-row items-start justify-center min-w-[929px] max-w-full [row-gap:20px] mq1300:flex-wrap mq1300:min-w-full">
                    <div className="flex-1 box-border flex flex-col items-start justify-start py-6 px-[29px] min-w-[465px] max-w-full border-r-[1px] border-solid border-darkgray-200 mq800:min-w-full">
                      <Form.Select
                        className="self-stretch font-gilroy text-9xl text-gray-100 gap-[20px] mq800:flex-wrap"
                        value={latestQualification}
                        onChange={(e) => setLatestQualification(e.target.value)}
                      >
                        <option value="">Select Latest Qualification</option>
                        {qualificationOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                    <div className="flex-1 box-border flex flex-col items-start justify-start py-6 px-[29px] min-w-[465px] max-w-full border-r-[1px] border-solid border-darkgray-200 mq800:min-w-full">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      
                      </div>
                      <Form.Select
                        className="self-stretch font-gilroy text-9xl text-gray-100 gap-[20px] mq800:flex-wrap"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                      >
                        <option value="">Select Specialization</option>
                        {specializationOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                  </div>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate('/career-path-result')}
                    className="h-[84px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-crimson-100 flex flex-row items-center justify-start py-[17px] px-5 box-border "
                  >
                    <div className="self-stretch flex flex-row items-center justify-start relative gap-[10px]">
                      <div className="h-[62.4%] w-[62.4%] absolute !m-[0] top-[10.6%] right-[27%] bottom-[27%] left-[10.6%] rounded-[50%] box-border z-[1] border-[0px] border-solid border-white" />
                      <SearchIcon />
                    </div>
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

export default CareerPathFinderFilter;