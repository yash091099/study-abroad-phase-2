import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import Card1 from './card1';
import Slider from '@mui/material/Slider';
import { Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import './course-listing.css'; // Ensure this is the correct path to your CSS file
// import CompareCourseModal from '../compare-course-modal/compare-course-modal';
import { useNavigate } from 'react-router-dom';
const CoursesListing = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const [highestQualification, setHighestQualification] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');
  const [stateOfResidence, setStateOfResidence] = useState('');
  const [gradingSystem12th, setGradingSystem12th] = useState('');
  const [score12th, setScore12th] = useState('');
  const [gradingSystemUG, setGradingSystemUG] = useState('');
  const [scoreUG, setScoreUG] = useState('');
  const [backlogs, setBacklogs] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [englishProficiencyExam, setEnglishProficiencyExam] = useState('');
  const [otherExam, setOtherExam] = useState('');
  const [programLevel, setProgramLevel] = useState('');
  const [ieltsScore, setIeltsScore] = useState([6, 9]);
  const [tuitionFee, setTuitionFee] = useState([10000, 50000]);
  const handleIeltsChange = (event, newValue) => {
    setIeltsScore(newValue);
  };

  const handleTuitionChange = (event, newValue) => {
    setTuitionFee(newValue);
  };
  const navigate=useNavigate()
  return (
    <Container fluid className="courses-listing-container">
      <Row className="align-items-center justify-content-between mt-4 mb-2">
        <Col md={9}><h3>657 Courses Found</h3></Col>
        <Col md={3} className="d-flex justify-content-end">
          <Form.Control type="search" placeholder="Search courses..." />
        </Col>
      </Row>
      <Row className="align-items-center justify-content-between mb-4">
        <Col md={6}>
          {/* Pagination can be added here */}
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Button style={{background:'crimson'}} onClick={() => navigate('/compare')}>Compare Courses</Button>
          {/* <Button style={{background:'crimson'}} onClick={toggleModal}>Compare Courses</Button> */}
        </Col>
      </Row>
      <Row>
        <Col md={7}>
          {[...Array(6)].map((_, index) => (
            <Card1 key={index} />
          ))}
        </Col>
<Col md={5} className="filter-section">
    <div className=" flex flex-col items-start justify-start py-1.5 px-0 box-border gap-[24px] ">
            <div className="self-stretch flex flex-row items-start justify-start py-2.5 px-0 text-13xl text-grey-1">
              <h2 className="m-0 h-10 w-[108px] relative text-inherit tracking-[-0.2px] font-normal font-inherit inline-block box-border pr-5 mq450:text-lgi mq800:text-7xl">
                Filters
              </h2>
            </div>
            <div className="self-stretch rounded-7xl bg-lavenderblush flex flex-col items-start justify-start p-5 box-border gap-[30px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h3 className="m-0 h-[34px] relative text-inherit tracking-[-0.2px] leading-[42px] font-normal font-inherit inline-block min-w-[118px] mq450:text-3xl">
                  Eligibility
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-xl text-grey-1">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full">
                    <div className="h-6 relative tracking-[-0.2px] leading-[30px] inline-block mq450:text-base">
                      Highest Qualification Studies
                    </div>
                    <Form.Select className="self-stretch font-gilroy text-xl text-darkgray-300" >
                      <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                      

                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq800:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[199px]">
                    <div className="h-6 relative tracking-[-0.2px] leading-[30px] inline-block mq450:text-base">
                      Country of Residence
                    </div>
                    <Form.Select className="self-stretch h-[50px] font-gilroy text-xl text-darkgray-300" >
                    <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[199px]">
                    <div className="h-6 relative tracking-[-0.2px] leading-[30px] inline-block mq450:text-base">
                      State of Residence
                    </div>
                    <Form.Select className="self-stretch h-[50px] font-gilroy text-xl text-darkgray-300" >
                    <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq800:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[199px]">
                    <div className="w-[295px] h-6 relative tracking-[-0.2px] leading-[30px] inline-block mq450:text-base">
                      Grading System (12th)
                    </div>
                    <Form.Select className="self-stretch h-[50px] font-gilroy text-xl text-darkgray-300" >
                    <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[199px]">
                  <div className="w-[295px] h-6 relative tracking-[-0.2px] leading-[30px] inline-block mq450:text-base">
                      Score (12th)
                    </div>
                    <Form.Select className="self-stretch h-[50px] font-gilroy text-xl text-darkgray-300" >
                    <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq800:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[199px]">
                  <div className="w-[295px] h-6 relative tracking-[-0.2px] leading-[30px] inline-block mq450:text-base">
                      Grading System (UG)
                    </div>
                    <Form.Select className="self-stretch h-[50px] font-gilroy text-xl text-darkgray-300" >
                    <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[199px]">
                    <div className="h-6 relative tracking-[-0.2px] leading-[30px] inline-block min-w-[96px] mq450:text-base">
                      Score (UG)
                    </div>
                    <Form.Select className="self-stretch h-[50px] font-gilroy text-xl text-darkgray-300" >
                    <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="h-6 relative tracking-[-0.2px] leading-[30px] inline-block mq450:text-base">
                    Backlogs (if any)
                  </div>
                  <Form.Select className="self-stretch font-gilroy text-xl text-darkgray-300" >
                  <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="h-6 relative tracking-[-0.2px] leading-[30px] inline-block mq450:text-base">
                    Work Experirnce
                  </div>
                  <Form.Select className="self-stretch font-gilroy text-xl text-darkgray-300" >
                  <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="h-6 relative tracking-[-0.2px] leading-[30px] inline-block mq450:text-base">{`English Proficiency Exam `}</div>
                  <Form.Select className="self-stretch font-gilroy text-xl text-darkgray-300" >
                  <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="h-6 relative tracking-[-0.2px] leading-[30px] inline-block min-w-[106px] mq450:text-base">{`Other Exam `}</div>
                  <Form.Select className="self-stretch font-gilroy text-xl text-darkgray-300" >
                  <option disabled selected>
                        Select
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Form.Select>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <button className="cursor-pointer py-[15px] px-[29px] bg-[transparent] rounded-lg flex flex-col items-center justify-center border-[1px] border-solid border-primary-1">
                    <div className="w-[55px] h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                      <img
                        className="h-5 w-5 relative object-cover hidden min-h-[20px]"
                        alt=""
                        src="/icon--main9@2x.png"
                      />
                      <div className="flex-1 relative text-xl leading-[22px] font-gilroy text-primary-1 text-left mq450:text-base mq450:leading-[18px]">
                        Reset
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-[15px] px-4 bg-crimson-100 rounded-lg flex flex-col items-center justify-center">
                    <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
                      <img
                        className="h-5 w-5 relative object-cover hidden"
                        alt=""
                        src="/icon--main9@2x.png"
                      />
                      <div className="relative text-xl leading-[22px] font-gilroy text-white text-left inline-block min-w-[113px] mq450:text-base mq450:leading-[18px]">
                        Apply Filters
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
            </div>
            <div className="self-stretch rounded-7xl bg-lavenderblush flex flex-col items-start justify-start p-5 box-border gap-[30px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start">
                <h3 className="m-0 h-[34px] relative text-inherit tracking-[-0.2px] font-normal font-inherit inline-block mq450:text-3xl">
                  Universities
                </h3>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-grey-1 mq800:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[385px] max-w-full mq450:min-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq800:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[13px] min-w-[351px] max-w-full mq450:min-w-full mq800:flex-wrap">
                       <div className="h-[22px] w-[22px] relative">
                      <input
                        className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
                        type="checkbox"
                      />
                      <input
                        className="m-0 absolute h-[71.36%] w-[71.36%] top-[14.55%] right-[14.09%] bottom-[14.09%] left-[14.55%] rounded-sm box-border z-[1] border-[1px] border-solid border-primary-1"
                        type="checkbox"
                      />
                    </div>                      <h3 className="m-0 h-[34px] flex-1 relative text-inherit tracking-[-0.2px] leading-[42px] font-normal font-inherit inline-block min-w-[161px] max-w-full mq450:text-3xl">
                        University Name
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center py-[3px] px-[11px]">
                      <div className="h-[34px] relative tracking-[-0.2px] inline-block min-w-[18px] mq450:text-3xl">
                        8
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq800:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[13px] min-w-[351px] max-w-full mq450:min-w-full mq800:flex-wrap">
                       <div className="h-[22px] w-[22px] relative">
                      <input
                        className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
                        type="checkbox"
                      />
                      <input
                        className="m-0 absolute h-[71.36%] w-[71.36%] top-[14.55%] right-[14.09%] bottom-[14.09%] left-[14.55%] rounded-sm box-border z-[1] border-[1px] border-solid border-primary-1"
                        type="checkbox"
                      />
                    </div>                      <h3 className="m-0 h-[34px] flex-1 relative text-inherit tracking-[-0.2px] leading-[42px] font-normal font-inherit inline-block min-w-[161px] max-w-full mq450:text-3xl">
                        University Name
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center py-[3px] px-[11px]">
                      <div className="h-[34px] relative tracking-[-0.2px] inline-block min-w-[18px] mq450:text-3xl">
                        8
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq800:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[13px] min-w-[351px] max-w-full mq450:min-w-full mq800:flex-wrap">
                       <div className="h-[22px] w-[22px] relative">
                      <input
                        className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
                        type="checkbox"
                      />
                      <input
                        className="m-0 absolute h-[71.36%] w-[71.36%] top-[14.55%] right-[14.09%] bottom-[14.09%] left-[14.55%] rounded-sm box-border z-[1] border-[1px] border-solid border-primary-1"
                        type="checkbox"
                      />
                    </div>                      <h3 className="m-0 h-[34px] flex-1 relative text-inherit tracking-[-0.2px] leading-[42px] font-normal font-inherit inline-block min-w-[161px] max-w-full mq450:text-3xl">
                        University Name
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center py-[3px] px-[11px]">
                      <div className="h-[34px] relative tracking-[-0.2px] inline-block min-w-[18px] mq450:text-3xl">
                        8
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq800:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[13px] min-w-[351px] max-w-full mq450:min-w-full mq800:flex-wrap">
                       <div className="h-[22px] w-[22px] relative">
                      <input
                        className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
                        type="checkbox"
                      />
                      <input
                        className="m-0 absolute h-[71.36%] w-[71.36%] top-[14.55%] right-[14.09%] bottom-[14.09%] left-[14.55%] rounded-sm box-border z-[1] border-[1px] border-solid border-primary-1"
                        type="checkbox"
                      />
                    </div>                      <h3 className="m-0 h-[34px] flex-1 relative text-inherit tracking-[-0.2px] leading-[42px] font-normal font-inherit inline-block min-w-[161px] max-w-full mq450:text-3xl">
                        University Name
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center py-[3px] px-[11px]">
                      <div className="h-[34px] relative tracking-[-0.2px] inline-block min-w-[18px] mq450:text-3xl">
                        8
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq800:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[13px] min-w-[351px] max-w-full mq450:min-w-full mq800:flex-wrap">
                       <div className="h-[22px] w-[22px] relative">
                      <input
                        className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
                        type="checkbox"
                      />
                      <input
                        className="m-0 absolute h-[71.36%] w-[71.36%] top-[14.55%] right-[14.09%] bottom-[14.09%] left-[14.55%] rounded-sm box-border z-[1] border-[1px] border-solid border-primary-1"
                        type="checkbox"
                      />
                    </div>                      <h3 className="m-0 h-[34px] flex-1 relative text-inherit tracking-[-0.2px] leading-[42px] font-normal font-inherit inline-block min-w-[161px] max-w-full mq450:text-3xl">
                        University Name
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center py-[3px] px-[11px]">
                      <div className="h-[34px] relative tracking-[-0.2px] inline-block min-w-[18px] mq450:text-3xl">
                        8
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq800:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[13px] min-w-[351px] max-w-full mq450:min-w-full mq800:flex-wrap">
                       <div className="h-[22px] w-[22px] relative">
                      <input
                        className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
                        type="checkbox"
                      />
                      <input
                        className="m-0 absolute h-[71.36%] w-[71.36%] top-[14.55%] right-[14.09%] bottom-[14.09%] left-[14.55%] rounded-sm box-border z-[1] border-[1px] border-solid border-primary-1"
                        type="checkbox"
                      />
                    </div>                      <h3 className="m-0 h-[34px] flex-1 relative text-inherit tracking-[-0.2px] leading-[42px] font-normal font-inherit inline-block min-w-[161px] max-w-full mq450:text-3xl">
                        University Name
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center py-[3px] px-[11px]">
                      <div className="h-[34px] relative tracking-[-0.2px] inline-block min-w-[18px] mq450:text-3xl">
                        8
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[358px] w-1.5 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-mid bg-gainsboro-200 w-1.5 h-[350px]" />
                  <div className="absolute top-[0px] left-[0px] rounded-mid bg-crimson-300 w-1.5 h-[51px] z-[1]" />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-7xl bg-lavenderblush flex flex-col items-start justify-start p-5 box-border gap-[30px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h3 className="m-0 h-[34px] relative text-inherit tracking-[-0.2px] leading-[42px] font-normal font-inherit inline-block mq450:text-3xl">
                  Program level
                </h3>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-grey-1 mq800:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[385px] max-w-full mq450:min-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full mq800:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[13px] min-w-[351px] max-w-full mq450:min-w-full mq800:flex-wrap">
                       <div className="h-[22px] w-[22px] relative">
                      <input
                        className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
                        type="checkbox"
                      />
                      <input
                        className="m-0 absolute h-[71.36%] w-[71.36%] top-[14.55%] right-[14.09%] bottom-[14.09%] left-[14.55%] rounded-sm box-border z-[1] border-[1px] border-solid border-primary-1"
                        type="checkbox"
                      />
                    </div>                      <h3 className="m-0 h-[34px] flex-1 relative text-inherit tracking-[-0.2px] font-normal font-inherit inline-block min-w-[146px] max-w-full mq450:text-3xl">
                        Post Graduate
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center py-[3px] px-[11px]">
                      <div className="h-[34px] relative tracking-[-0.2px] inline-block min-w-[18px] mq450:text-3xl">
                        8
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-12 w-1.5 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-mid bg-gainsboro-200 w-full h-full" />
                  <div className="absolute top-[0px] left-[0px] rounded-mid bg-crimson-300 w-full h-full z-[1]" />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-7xl bg-lavenderblush flex flex-col items-start justify-start p-5 gap-[30px]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <h3 className="m-0 h-[34px] relative text-inherit tracking-[-0.2px] font-normal font-inherit inline-block mq450:text-3xl">
                  ILETS Score
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-center text-xs text-white">
                <div className="self-stretch h-[41px] flex flex-col items-end justify-start gap-[6px]">
                  <div className="w-[278px] flex-1 flex flex-row items-start justify-end py-0 px-[26px] box-border">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="self-stretch rounded flex flex-row items-start justify-start pt-0 pb-[0.4000000000014552px] pr-2 pl-0">
                        <img
                          className="h-[28.6px] w-[31px] relative"
                          loading="lazy"
                          alt=""
                          src="/bg.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 ml-[-24px]">
                          <div className="relative inline-block min-w-[16px] whitespace-nowrap z-[1]">
                            6.5
                          </div>
                        </div>
                      </div>
                      <div className="h-[29px] w-[31px] relative rounded">
                        <img
                          className="relative w-[31px] h-[28.6px]"
                          loading="lazy"
                          alt=""
                          src="/bg.svg"
                        />
                        <div className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_8.5px)] inline-block min-w-[18px] z-[1]">
                          8.5
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-1.5 relative">
                    <div className="absolute top-[0px] left-[0px] rounded-81xl bg-dimgray-400 w-full h-full" />
                    <div className="absolute top-[0px] left-[393px] rounded-81xl bg-primary-1 w-[195px] h-1.5 z-[1]" />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[39px] pl-0 relative gap-[20px] text-left text-5xs text-black2 font-inter mq450:flex-wrap">
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] bottom-[-12px] left-[-2px] inline-block min-w-[4px] h-full z-[1]">
                      1
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] right-[-8px] bottom-[-12px] inline-block min-w-[11px] h-full z-[1]">
                      1.5
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] bottom-[-12px] left-[calc(50%_-_2.5px)] inline-block min-w-[5px] h-full z-[1]">
                      2
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] right-[-9px] bottom-[-12px] inline-block min-w-[12px] z-[1]">
                      3.5
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] right-[-3px] bottom-[-12px] inline-block min-w-[6px] h-full z-[1]">
                      3
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] right-[-9px] bottom-[-12px] inline-block min-w-[12px] z-[1]">
                      3.5
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] right-[-3px] bottom-[-12px] inline-block min-w-[6px] h-full z-[1]">
                      4
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] right-[-9px] bottom-[-12px] inline-block min-w-[12px] z-[1]">
                      4.5
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] bottom-[-12px] left-[calc(50%_-_2.5px)] inline-block min-w-[5px] h-full z-[1]">
                      5
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] right-[-9px] bottom-[-12px] inline-block min-w-[12px] z-[1]">
                      5.5
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] bottom-[-12px] left-[calc(50%_-_2.5px)] inline-block min-w-[5px] h-full z-[1]">
                      6
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] right-[-9px] bottom-[-12px] inline-block min-w-[12px] z-[1]">
                      6.5
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] bottom-[-12px] left-[calc(50%_-_2.5px)] inline-block min-w-[5px] h-full z-[1]">
                      7
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq450:w-full mq450:h-px">
                    <div className="absolute !m-[0] right-[-8px] bottom-[-12px] inline-block min-w-[11px] h-full z-[1]">
                      7.5
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] text-center mq450:w-full mq450:h-px">
                    <div className="w-full absolute !m-[0] right-[-3px] bottom-[-12px] inline-block min-w-[5px] h-full z-[1]">
                      8
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] text-center mq450:w-full mq450:h-px">
                    <div className="w-3 absolute !m-[0] right-[-6px] bottom-[-12px] inline-block min-w-[12px] z-[1]">
                      8.5
                    </div>
                  </div>
                  <div className="h-full w-px !m-[0] absolute top-[0px] right-[0px] bottom-[0px] rounded-12xs bg-black2 flex flex-row items-start justify-start opacity-[0.2] text-center">
                    <div className="absolute !m-[0] bottom-[-12px] left-[calc(50%_-_2.5px)] inline-block min-w-[5px] h-full z-[1]">
                      9
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-7xl bg-lavenderblush flex flex-col items-start justify-start p-5 box-border gap-[30px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <h3 className="m-0 h-[34px] relative text-inherit tracking-[-0.2px] font-normal font-inherit inline-block mq450:text-3xl">
                  Tuition Fee
                </h3>
                <div className="w-[132px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-lg text-grey-1">
                  <div className="self-stretch flex flex-row items-start justify-start relative gap-[13px]">
                    <div className="h-[22px] w-[22px] relative">
                      <input
                        className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
                        type="checkbox"
                      />
                      <input
                        className="m-0 absolute h-[71.36%] w-[71.36%] top-[14.55%] right-[14.09%] bottom-[14.09%] left-[14.55%] rounded-sm box-border z-[1] border-[1px] border-solid border-primary-1"
                        type="checkbox"
                      />
                    </div>
                    <div className="w-[456px] absolute !m-[0] top-[0px] right-[-359px] tracking-[-0.2px] leading-[27px] inline-block">
                      Above 100k
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-center text-xs text-white">
                <div className="self-stretch flex flex-col items-end justify-start gap-[6px] max-w-full">
                  <div className="w-[566px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <div className="w-[344px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                      <div className="h-[29px] w-[31px] relative rounded">
                        <img
                          className="relative w-[31px] h-[28.6px]"
                          loading="lazy"
                          alt=""
                          src="/bg.svg"
                        />
                        <div className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_10.5px)] inline-block min-w-[21px] z-[1]">
                          30k
                        </div>
                      </div>
                      <div className="h-[29px] w-[31px] relative rounded">
                        <img
                          className="relative w-[31px] h-[28.6px]"
                          loading="lazy"
                          alt=""
                          src="/bg.svg"
                        />
                        <div className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_10.5px)] inline-block min-w-[22px] z-[1]">
                          80k
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-1.5 relative">
                    <div className="absolute top-[0px] left-[0px] rounded-81xl bg-dimgray-400 w-full h-full" />
                    <div className="absolute top-[0px] left-[188px] rounded-81xl bg-primary-1 w-[314px] h-1.5 z-[1]" />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start relative gap-[61.70000000000032px] text-5xs text-black2 font-inter mq450:gap-[61.7px_15px] mq800:flex-wrap mq800:gap-[61.7px_31px]">
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] text-left mq800:w-full mq800:h-px">
                    <div className="absolute !m-[0] bottom-[-12px] left-[calc(50%_-_2.5px)] inline-block min-w-[6px] h-full z-[1]">
                      0
                    </div>
                  </div>
                  <div className="h-1 w-px relative rounded-12xs bg-black2 opacity-[0.2] mq800:w-full mq800:h-px">
                    <div className="absolute top-[calc(50%_+_4px)] left-[calc(50%_-_1.5px)] hidden w-full h-full">
                      1
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq800:w-full mq800:h-px">
                    <div className="w-[15px] absolute !m-[0] right-[-8px] bottom-[-12px] inline-block min-w-[15px] z-[1]">
                      20k
                    </div>
                  </div>
                  <div className="h-1 w-px relative rounded-12xs bg-black2 opacity-[0.2] mq800:w-full mq800:h-px">
                    <div className="absolute top-[calc(50%_+_4px)] left-[calc(50%_-_2.5px)] hidden w-full h-full">
                      3
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq800:w-full mq800:h-px">
                    <div className="w-[15px] absolute !m-[0] right-[-8px] bottom-[-12px] inline-block min-w-[15px] z-[1]">
                      40k
                    </div>
                  </div>
                  <div className="h-1 w-px relative rounded-12xs bg-black2 opacity-[0.2] mq800:w-full mq800:h-px">
                    <div className="absolute top-[calc(50%_+_4px)] left-[calc(50%_-_1.5px)] hidden w-full h-full">
                      5
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq800:w-full mq800:h-px">
                    <div className="w-[15px] absolute !m-[0] right-[-8px] bottom-[-12px] inline-block min-w-[15px] z-[1]">
                      60k
                    </div>
                  </div>
                  <div className="h-1 w-px relative rounded-12xs bg-black2 opacity-[0.2] mq800:w-full mq800:h-px">
                    <div className="absolute top-[calc(50%_+_4px)] left-[calc(50%_-_1.5px)] hidden w-full h-full">
                      7
                    </div>
                  </div>
                  <div className="h-1 w-px rounded-12xs bg-black2 flex flex-row items-start justify-start relative opacity-[0.2] mq800:w-full mq800:h-px">
                    <div className="w-[15px] absolute !m-[0] right-[-8px] bottom-[-12px] inline-block min-w-[15px] z-[1]">
                      80k
                    </div>
                  </div>
                  <div className="h-1 w-px relative rounded-12xs bg-black2 opacity-[0.2] mq800:w-full mq800:h-px">
                    <div className="absolute top-[calc(50%_+_4px)] left-[calc(50%_-_2.5px)] hidden w-full h-full">
                      9
                    </div>
                  </div>
                  <div className="h-full w-px !m-[0] absolute top-[0px] right-[0px] bottom-[0px] rounded-12xs bg-black2 flex flex-row items-start justify-start opacity-[0.2]">
                    <div className="w-[19px] absolute !m-[0] bottom-[-12px] left-[calc(50%_-_9.5px)] inline-block min-w-[19px] z-[1]">
                      100k
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</Col>


      </Row>
      <Modal show={modalIsOpen} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Compare Courses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <CompareCourseModal /> */}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CoursesListing;
