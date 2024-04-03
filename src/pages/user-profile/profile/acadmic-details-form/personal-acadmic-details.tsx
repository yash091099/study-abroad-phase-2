import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Th from "./th";

const PersonalAcadmicDetails: FunctionComponent = () => {
  return (
    <form className="m-0 w-[1392px] max-w-full flex flex-col items-start justify-start p-6 box-border gap-[12px] tracking-[normal] mq700:gap-[16px_32px]">
      <div className="w-[801px] overflow-hidden flex flex-row flex-wrap items-center justify-start py-0 pr-5 pl-0 box-border gap-[32px] max-w-full mq450:gap-[16px]">
        <div className="w-[313px] relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center">
          Please select your Highest Education
        </div>
        <Form.Select className="w-[27.25rem] font-light-basic-typography-paragraph-small text-[0.938rem] text-grey-1 max-w-full" >
              <option value="" selected disabled>Select Highest Education</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Select>       </div>
      <section className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full mq650:gap-[32px_64px] mq450:gap-[16px_64px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq650:gap-[16px_32px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
            <div className="w-[277px] relative text-3xl leading-[24px] font-semibold font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center shrink-0 mq450:text-lg mq450:leading-[19px]">
              10th
            </div>
            <div className="flex flex-row items-center justify-end">
              <div className="flex flex-row items-start justify-start">
                <div className="h-12 rounded-md box-border flex flex-row items-center justify-center py-[13px] px-[25px] gap-[16px] border-[1px] border-solid border-primary-1">
                  <img
                    className="h-3 w-3 relative"
                    loading="lazy"
                    alt=""
                    src="/path.svg"
                  />
                  <div className="relative text-mid tracking-[0.43px] leading-[22px] font-medium font-light-basic-typography-paragraph-small text-primary-1 text-left inline-block min-w-[34px]">
                    Edit
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq650:min-w-full mq700:flex-wrap">
                <div className="w-[141px] relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center">
                  Institution Name
                </div>
                <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                    placeholder="Enter your Institution name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq650:flex-wrap mq650:min-w-full">
                <div className="w-[51px] relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center">
                  Board
                </div>
                <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                  <div className="flex-1 rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                      placeholder="Enter Board name"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq650:flex-wrap mq650:min-w-full">
                <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[82px]">
                  Score (%)
                </div>
                <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                    placeholder="Enter your Score"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq650:min-w-full mq700:flex-wrap">
                <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                  Year of completion
                </div>
                <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                    placeholder="Enter year of completion"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border min-w-[430px] max-w-full gap-[20px] mq650:min-w-full mq700:flex-wrap">
                <div className="relative text-lg font-medium font-light-basic-typography-paragraph-small text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[120px]">
                  Specialization
                </div>
                <div className="w-[436px] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[38px] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 box-border font-light-basic-typography-paragraph-small text-mini text-darkgray-500 min-w-[250px] max-w-full"
                    placeholder="Enter Specialization"
                    type="text"
                  />
                </div>
              </div>
              <div className="h-[21px] flex-1 overflow-hidden min-w-[430px] max-w-full mq650:min-w-full" />
            </div>
          </div>
        </div>
        <Th seniorSecondary11th12th="Senior Secondary (11th-12th)" />
        <Th
          seniorSecondary11th12th="UG (Undergraduate)"
          propWidth="277px"
          propDisplay="flex"
        />
        <Th
          seniorSecondary11th12th="PG (Postgraduate)"
          propWidth="277px"
          propDisplay="flex"
        />
      </section>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-5">
        <div className="rounded-lg bg-primary-1 flex flex-col items-center justify-center p-[15px] border-[1px] border-solid border-primary-1">
          <button className="cursor-pointer [border:none] py-0 px-0 bg-[transparent] h-5 flex flex-row items-center justify-start box-border gap-[8px]">
            <img
              className="h-5 w-5 relative object-cover hidden"
              alt=""
              src="/icon--main8@2x.png"
            />
            <div className="relative text-xl leading-[22px] font-gilroy text-white text-left inline-block min-w-[65px] mq450:text-base mq450:leading-[18px]">
              Submit
            </div>
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/chevronsright3.svg"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PersonalAcadmicDetails;
