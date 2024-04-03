import { FunctionComponent, useEffect, useState } from "react";
import HomePage from "./home-page";
import WhatWeCanDo from "./what-we-do/what-we-can-do";
import OurStatistics from "./our-statistics/our-statistics";
import MostSearchedCountries from "./most-search-country/most-searched-countries";
import FeaturedUniversity from "./featured-university";
import HowItWorks from "./how-it-works/how-it-works";
import WhatStudentSays from "./What-student-say/what-student-says";
import FAQ from "../faq/f-a-q";
import Confetti from 'react-confetti';

const Home: FunctionComponent = () => {
  const [confetti, setConfetti] = useState(false); // For controlling the display of confetti

  useEffect(() => {
    if (!(localStorage.getItem('isHomeLoaded') === 'true')) {
      setConfetti(true);
      const timer = setTimeout(() => {
        setConfetti(false);
      }, 5000);
      localStorage.setItem('isHomeLoaded', 'true');

      return () => clearTimeout(timer);
    }
  }, [])
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
{confetti && <Confetti width={windowSize.width} height={windowSize.height} />}
      <div className="content-wrapper">
        <HomePage />
        <WhatWeCanDo />
        <OurStatistics />
        <div className="responsive-content">
          <MostSearchedCountries />
          <FeaturedUniversity />
          <HowItWorks />
          <WhatStudentSays />
        </div>
        <FAQ />
      </div>
    </>
  );
};

export default Home;
