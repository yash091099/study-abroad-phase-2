import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const PersonalInfo: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full text-left text-[1.125rem] text-grey-1 font-light-basic-typography-paragraph-small mq800:gap-[1rem_2rem]">
      <header className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] text-left text-[1.375rem] text-primary-1 font-light-basic-typography-paragraph-small">
        <h3 className="m-0 w-[17.313rem] relative text-inherit leading-[1.5rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 whitespace-nowrap">
          Personal Information
        </h3>
        <div className="flex flex-row items-center justify-end text-[1.063rem]">
          <div className="flex flex-row items-start justify-start">
            <div className="h-[3rem] rounded-md box-border flex flex-row items-center justify-center py-[0.813rem] px-[1.563rem] gap-[1rem] border-[1px] border-solid border-primary-1">
              <img
                className="h-[0.75rem] w-[0.75rem] relative"
                loading="lazy"
                alt=""
                src="/path.svg"
              />
              <div className="relative tracking-[0.43px] leading-[1.375rem] font-medium inline-block min-w-[2.125rem]">
                Edit
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem] max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.438rem]">
              Full Name
            </div>
            <div className="w-[27.25rem] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[2.375rem] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border font-light-basic-typography-paragraph-small text-[0.938rem] text-grey-1 min-w-[15.625rem] max-w-full"
                placeholder="Enter Full Name"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.938rem]">
              Gender
            </div>
            <Form.Select className="w-[27.25rem] font-light-basic-typography-paragraph-small text-[0.938rem] text-grey-1 max-w-full" >
              <option selected disabled value={""}>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </Form.Select>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem] max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Contact Number
            </div>
            <div className="w-[27.25rem] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[2.375rem] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border font-light-basic-typography-paragraph-small text-[0.938rem] text-grey-1 min-w-[15.625rem] max-w-full"
                placeholder="Enter Contact Number"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[4.375rem]">
              Email ID
            </div>
            <div className="w-[27.25rem] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[2.375rem] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border font-light-basic-typography-paragraph-small text-[0.938rem] text-grey-1 min-w-[15.625rem] max-w-full"
                placeholder="Enter Email Address"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem] max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[6.688rem]">
              Date of Birth
            </div>
            <div className="w-[27.25rem] rounded-md box-border flex flex-row items-center justify-start max-w-full text-[0.938rem] border-[1px] border-solid border-gainsboro-600">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border gap-[0.75rem] max-w-full">
                <div className="flex-1 relative leading-[1.5rem] inline-block max-w-[calc(100%_-_36px)]">
                  26 March 1998
                </div>
                <img
                  className="h-[1.5rem] w-[1.5rem] relative"
                  alt=""
                  src="/calendar1.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[7.563rem]">
              Marital Status
            </div>
            <Form.Select className="w-[27.25rem] font-light-basic-typography-paragraph-small text-[0.938rem] text-grey-1 max-w-full" >
              <option selected disabled value={""}>Select Marital Status</option>
              <option value={"single"}>Single</option>
              <option value={"married"}>Married</option>

             
            </Form.Select>          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
