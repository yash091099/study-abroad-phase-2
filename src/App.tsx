import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/Home/home-page";
import WhatWeCanDo from "./pages/Home/what-we-do/what-we-can-do";
import OurStatistics from "./pages/Home/our-statistics/our-statistics";
import MostSearchedCountries from "./pages/Home/most-search-country/most-searched-countries";
import FAQ from "./pages/faq/f-a-q";
import RefundPolicy from "./pages/refund-policy";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsAndCondition from "./pages/terms-and-condition";
import Sop from "./pages/sop/sop";
import ProfilePerdonalDetailsForm from "./pages/user-profile/profile/personal-details-form/profile-perdonal-details-form";
import Home from "./pages/Home";
import CareerPathFinderFilter from "./pages/career-path/career-path-finder";
import CareerPathResult from "./pages/career-path/filter-results/career-path-result";
import CoursesFilter from "./pages/courses/filter/courses-filter";
import AdvanceCourseFilter from "./pages/courses/advance-filter/advance-course-filter";
import CoursesListing from "./pages/courses/course-listing/courses-listing";
import ComparisionTable from "./pages/courses/comparision-table";
import Universities from "./pages/institutions/universities";
import InstitutionDetails from "./pages/institutions/institution-details";
import Scolarship from "./pages/scolarship/scolarship";
import Blogs from "./pages/blogs/blog-listing/blogs";
import BlogDetails from "./pages/blogs/blog-detail/blog-details";
import IELTSEXAM from "./pages/Exams/IELTS-exam/ielts-exam";
import IELTSESSAYSAMPLE from "./pages/Exams/IELTS-essay/ielts-essay";
import CueCard from "./pages/Exams/ielts-cue-card";
import IELTSReadingAnswerSample from "./pages/Exams/IELTS-reading/ielts-reading";
import Profile from "./pages/user-profile";
import Application from "./pages/user-profile/Application";
import Contact from "./pages/contactUs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);



  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/career-path" element={<CareerPathFinderFilter />} />
      <Route path="/career-path-result" element={<CareerPathResult />} />
      <Route path="/courses" element={<CoursesFilter />} />
      <Route path="/courses-advance-filter" element={<AdvanceCourseFilter />} />
      <Route path="/courses-list" element={<CoursesListing />} />
      <Route path="/compare" element={<ComparisionTable />} />
      <Route path="/institutions" element={<Universities />} />
      <Route path="/institution-details" element={<InstitutionDetails />} />
      <Route path="/scholarship" element={<Scolarship />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/exam-ielts" element={<IELTSEXAM />} />
      <Route path="/ielts-topic" element={<IELTSReadingAnswerSample />} />
      <Route path="/ielts-cue-card" element={<CueCard/>} />
      <Route path="/ielts-essay" element={<IELTSESSAYSAMPLE />} />
      <Route path="/profile" element={<Profile />} />
    
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-condition" element={<TermsAndCondition />} />
      <Route path="/application" element={<Application />} />
     
    </Routes>
  );
}
export default App;
