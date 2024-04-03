import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const PassportInfo: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full text-left text-[1.375rem] font-light-basic-typography-paragraph-small mq800:gap-[1rem_2rem]">
      <div className="self-stretch flex flex-row items-center justify-start py-[0.625rem] pr-[84.688rem] pl-[0rem] gap-[1.25rem] mq800:gap-[2rem_1rem] mq800:pr-[21.125rem] mq800:box-border mq450:pr-[1.25rem] mq450:box-border mq1350:pr-[42.313rem] mq1350:box-border">
        <h3 className="m-0 w-[17.313rem] relative text-inherit leading-[1.5rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 mq450:text-[1.125rem] mq450:leading-[1.188rem]">
          Passport Information
        </h3>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-[1.125rem]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem] max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Passport Number
            </div>
            <div className="w-[27.25rem] rounded-md box-border flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-gainsboro-600">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[2.375rem] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border font-light-basic-typography-paragraph-small text-[0.938rem] text-darkgray-500 min-w-[15.625rem] max-w-full"
                placeholder="Enter your Passport Number"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[7.313rem]">
              Issue Country
            </div>
            <Form.Select className="w-[27.25rem] font-light-basic-typography-paragraph-small text-[0.938rem] text-grey-1 max-w-full" >
              <option value="" selected disabled>Select Issue Country</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Select>           </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem] max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.5rem]">
              Issue Date
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
            </div>          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[6.125rem]">
              Expiry Date
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
            </div>          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem] max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[7.125rem]">
              State of Birth
            </div>
            <Form.Select className="w-[27.25rem] font-light-basic-typography-paragraph-small text-[0.938rem] text-grey-1 max-w-full" >
              <option value="" selected disabled>Select State of Birth</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Select>           </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[32.75rem] max-w-full gap-[1.25rem] mq800:flex-wrap mq800:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Country of Birth
            </div>
            <Form.Select className="w-[27.25rem] font-light-basic-typography-paragraph-small text-[0.938rem] text-grey-1 max-w-full" >
              <option value="" selected disabled>Select Country of Birth</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Select>           </div>
        </div>
      </div>
    </section>
  );
};

export default PassportInfo;
