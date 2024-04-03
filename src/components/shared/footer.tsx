import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import './footer.css';
const Footer: FunctionComponent = () => {
  const navigate=useNavigate();

  return (
    <div style={{position: 'relative', bottom: 0}} className="  w-[100vw] bg-primary-1 max-w-full overflow-hidden flex flex-col items-center justify-start pt-12 px-0 pb-0 box-border gap-[40px] tracking-[normal] text-left text-lg text-white font-gilroy mq480:gap-[20px_40px]">
      <div className="w-[100vw] overflow-x-auto flex flex-row items-center justify-between py-0 px-5 box-border gap-[20px] max-w-full">
        <img style={{cursor: 'pointer'}}  onClick={()=>navigate('/')}
          className="h-[180px] w-[180px] relative shrink-0 object-contain"
          loading="lazy"
          alt=""
          src="/4@2x.png"
        />
        <div className="w-[155px] shrink-0 flex flex-col items-start justify-center gap-[30px]">
          <div className="w-[134px] h-[136px] flex flex-col items-start justify-start gap-[24px]">
            <div className="relative leading-[120%] inline-block min-w-[125px]">
              Download now
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px]">
              <img style={{cursor: 'pointer'}} 
                className="self-stretch h-10 relative rounded-[5.67px] max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/frame-1000003797@2x.png"
              />
              <img style={{cursor: 'pointer'}} 
                className="self-stretch h-10 relative rounded-[5.67px] max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/frame-1000003798@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0 gap-[8px] text-base">
            <div className="flex flex-row items-center justify-start py-6 px-0">
              <div className="relative leading-[110%] inline-block min-w-[120px] whitespace-nowrap">
                Connect with us
              </div>
            </div>
            <div  className="flex flex-row items-center justify-start gap-[16px]">
              <div style={{cursor: 'pointer'}}  className="h-10 w-10 rounded-lg box-border flex flex-row items-center justify-center  px-[11px] border-[1px] border-solid border-white">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/instagram.svg"
                />
              </div>
              <div style={{cursor: 'pointer'}}  className="h-10 w-10 rounded-lg box-border flex flex-row items-center justify-center  px-[11px] border-[1px] border-solid border-white">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/fb.svg"
                />
              </div>
              <div style={{cursor: 'pointer'}}  className="h-10 w-10 rounded-lg box-border flex flex-row items-center justify-center  px-[11px] border-[1px] border-solid border-white">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/linkedin.svg"
                />
              </div>
            </div>
            <div  className="self-stretch hidden flex-col items-start justify-start pt-6 px-0 pb-0 text-sm border-t-[1px] border-solid border-gray-gray-03">
              <div className="w-[387px] flex flex-col items-start justify-start gap-[12px] max-w-[255%] shrink-0">
                <div className="self-stretch rounded-21xl bg-gray-gray-02 shadow-[4px_4px_64px_rgba(0,_0,_0,_0.04)] box-border flex flex-col items-start justify-center py-1 pr-[3px] pl-[23px] min-h-[50px] whitespace-nowrap border-[1px] border-solid border-gray-gray-03">
                  <div className="self-stretch h-3.5 relative leading-[100%] inline-block">
                    Enter your email
                  </div>
                </div>
                <div className="w-[133px] h-[50px] rounded-21xl bg-white flex flex-row items-center justify-center py-3 px-[35px] box-border gap-[12px] text-base text-primary-primary-01">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/email.svg"
                  />
                  <div className="h-4 flex-1 relative leading-[100%] uppercase inline-block whitespace-nowrap">
                    Sign Up
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/email.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[165px] shrink-0 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] text-sm">
          <div className="flex flex-row items-center justify-center gap-[6px]">
            <div className="h-10 w-10 rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-start justify-start  py-[11px] px-[11px] border-[1px] border-solid border-white">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/phone.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0 gap-[8px]">
              <div className="relative leading-[116%] inline-block min-w-[44px]">
                Phone
              </div>
              <div className="relative text-base leading-[110%] inline-block min-w-[106px] whitespace-nowrap">
                +1 23 456 7980
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[12px]">
            <div className="h-10 w-10 rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px]  px-[11px] border-[1px] border-solid border-white">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/mail.svg"
              />
            </div>
            <div className="w-[113px] flex flex-col items-start justify-start py-0 px-0 box-border gap-[8px]">
              <div className="relative leading-[116%] inline-block min-w-[29px]">
                Mail
              </div>
              <div className="relative text-base leading-[18px] inline-block min-w-[125px] whitespace-nowrap">
                info@Edulley.com
              </div>
            </div>
          </div>
          <div className="self-stretch hidden flex-row items-center justify-center gap-[12px] text-xs text-gray-gray-06">
            <div className="h-10 rounded-lg bg-grey-grey-02 overflow-hidden flex flex-row items-start justify-start p-3 box-border">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/map.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="h-3.5 relative leading-[116%] inline-block">
                Address
              </div>
              <div className="h-[18px] relative text-base leading-[110%] text-white flex items-center">
                Colorado Springs, CO 80904
              </div>
            </div>
          </div>
        </div>
        <div className="w-[165px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border gap-[8px]">
          <div className="flex flex-row items-center justify-start py-6 px-0">
            <div className="relative leading-[22px] inline-block min-w-[81px] whitespace-nowrap">
              Countries
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[76px] pl-0 gap-[20px] text-base">
            <div className="self-stretch h-[18px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Exclusive Partnership</li>
              </ul>
            </div>
            <div className="w-[86px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Partners</li>
              </ul>
            </div>
            <div className="w-[82px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Careers</li>
              </ul>
            </div>
            <div className="w-[54px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>USA</li>
                </ul>
              </span>
            </div>
            <div className="w-11 relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li className="w-[25px]">UK</li>
                </ul>
              </span>
            </div>
            <div className="w-[87px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>Canada</li>
                </ul>
              </span>
            </div>
            <div className="relative leading-[18px] inline-block min-w-[89px] whitespace-nowrap">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Australia</li>
              </ul>
            </div>
            <div className="w-[77px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>Ireland</li>
                </ul>
              </span>
            </div>
            <div className="w-[107px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="w-[62px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>FAQs</li>
              </ul>
            </div>
            <div className="w-[119px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>E-commerce</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[165px]  shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[80px] box-border gap-[8px]">
          <div className="flex flex-row items-center justify-start py-0 px-0">
            <div className="relative leading-[22px] py-6 inline-block min-w-[60px]">
              Others
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[41px] pl-0 gap-[20px] text-base">
            <div className="self-stretch h-[18px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Exclusive Partnership</li>
              </ul>
            </div>
            <div className="w-[86px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Partners</li>
              </ul>
            </div>
            <div className="w-[82px] relative leading-[110%] hidden">
              <ul  className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Careers</li>
              </ul>
            </div>
            <div className="relative leading-[110%] inline-block min-w-[124px] whitespace-nowrap">
              <ul style={{cursor:'pointer'}} onClick={() => navigate('/privacy-policy')} className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="w-[54px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul style={{cursor:'pointer'}} onClick={() => navigate('/terms-and-condition')}  className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>{`T&C`}</li>
                </ul>
              </span>
            </div>
            <div className="relative leading-[110%] inline-block min-w-[123px] whitespace-nowrap">
              <ul style={{cursor:'pointer'}} onClick={() => navigate('/refund-policy')}  className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Refund Policy</li>
              </ul>
            </div>
            <div className="w-[107px] relative leading-[110%] ">
              <ul style={{cursor:'pointer'}} onClick={() => navigate('/contact-us')}  className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="w-[62px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>FAQs</li>
              </ul>
            </div>
            <div className="w-[119px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>E-commerce</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[165px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-center justify-start py-6 px-0">
            <div className="relative leading-[22px] inline-block min-w-[82px] whitespace-nowrap">
              Company
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[55px] pl-0 gap-[20px] text-base">
            <div className="self-stretch h-[18px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Exclusive Partnership</li>
              </ul>
            </div>
            <div className="w-[86px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Partners</li>
              </ul>
            </div>
            <div className="relative leading-[18px] inline-block min-w-[76px]">
              <ul style={{cursor:'pointer'}} onClick={() => navigate('/career-path')} className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Career</li>
              </ul>
            </div>
            <div className="w-[87px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul style={{cursor:'pointer'}} onClick={() => navigate('/courses')}  className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>Courses</li>
                </ul>
              </span>
            </div>
            <div className="self-stretch relative leading-[18px]">
              <ul style={{cursor:'pointer'}} onClick={() => navigate('/institutions')} className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Institutions</li>
              </ul>
            </div>
            <div className="relative leading-[18px] inline-block min-w-[110px] whitespace-nowrap">
              <ul style={{cursor:'pointer'}} onClick={() => navigate('/scholarship')}  className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Scholarship</li>
              </ul>
            </div>
            <div className="w-[55px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul style={{cursor:'pointer'}} onClick={() => navigate('/faq')}  className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>FAQ</li>
                </ul>
              </span>
            </div>
            <div className="w-[58px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul style={{cursor:'pointer'}} onClick={() => navigate('/blog')}  className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>Blog</li>
                </ul>
              </span>
            </div>
            <div className="w-[74px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Pricing</li>
              </ul>
            </div>
            <div className="w-[107px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="w-[62px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>FAQs</li>
              </ul>
            </div>
            <div className="w-[119px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>E-commerce</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[165px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-center justify-start py-6 px-0">
            <div className="relative leading-[22px] inline-block min-w-[59px]">
              EXAMS
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[95px] pl-0 gap-[20px] text-base">
            <div className="self-stretch h-[18px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Exclusive Partnership</li>
              </ul>
            </div>
            <div className="w-[86px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Partners</li>
              </ul>
            </div>
            <div className="w-[61px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul style={{cursor:'pointer'}} onClick={() => navigate('/exam-ielts')} className="m-0 font-inherit text-inherit pl-[21px]">
                  <li className=" w-[170px]">IELTS</li>
                </ul>
              </span>
            </div>
            <div className="relative leading-[18px] inline-block min-w-[70px]">
              <ul style={{cursor:'not-allowed'}} className="m-0 font-inherit text-inherit pl-[21px]">
                <li>TOEFL</li>
              </ul>
            </div>
            <div className="w-[51px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul  style={{cursor:'not-allowed'}}  className="m-0 font-inherit text-inherit pl-[21px]">
                  <li className=" w-[170px]">PTE</li>
                </ul>
              </span>
            </div>
            <div className="w-[55px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul  style={{cursor:'not-allowed'}}  className="m-0 font-inherit text-inherit pl-[21px]">
                  <li className=" w-[170px]">GRE</li>
                </ul>
              </span>
            </div>
            <div className="relative leading-[18px] inline-block min-w-[68px]">
              <ul  style={{cursor:'not-allowed'}}  className="m-0 font-inherit text-inherit pl-[21px]">
                <li >GMAT</li>
              </ul>
            </div>
            <div className="w-[53px] relative leading-[18px] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <ul  style={{cursor:'not-allowed'}}  className="m-0 font-inherit text-inherit pl-[21px]">
                  <li >DET</li>
                </ul>
              </span>
            </div>
            <div className="w-[74px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Pricing</li>
              </ul>
            </div>
            <div className="w-[107px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="w-[62px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>FAQs</li>
              </ul>
            </div>
            <div className="w-[119px] relative leading-[110%] hidden">
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li>E-commerce</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-sm">
        <div className="self-stretch bg-primary-1 flex flex-row items-center justify-center p-3 border-t-[1px] border-solid border-white">
          <div className="w-[405px]  relative leading-[100%] flex items-center">
            Copyright © 2023 | All rights reserved by Edulley
          </div>
          <div className="h-3 hidden flex-row items-start justify-start gap-[10px] text-xs">
            <div className="h-3 relative leading-[100%] flex items-center">
              <span>
                <ul className="m-0 font-inherit text-inherit pl-4">
                  <li>Privacy Policy</li>
                </ul>
              </span>
            </div>
            <div className="self-stretch w-[90px] relative leading-[100%] hidden items-center">
              <span>
                <ul className="m-0 font-inherit text-inherit pl-4">
                  <li>Terms Of Use</li>
                </ul>
              </span>
            </div>
            <div className="self-stretch relative leading-[100%] flex items-center">
              <span className="[line-break:anywhere]">
                <ul className="m-0 font-inherit text-inherit pl-4">
                  <li>Sitemap</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
