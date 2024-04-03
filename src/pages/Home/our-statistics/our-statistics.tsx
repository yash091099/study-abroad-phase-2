import { FunctionComponent } from "react";
import './OurStatistics.css';

const OurStatistics: FunctionComponent = () => {
  return (
    <div className="our-statistics-container w-full relative bg-white flex-row items-center justify-between py-3_125rem px-1_25rem box-border tracking-normal">
      <section className="text-section md:w-50 flex flex-col items-start justify-center px-4 md:px-0">
        <div className="flex-1 flex flex-col items-start justify-start" style={{paddingBottom:"9rem"}}>
          <div className="gap-4" style={{marginTop: '200px'}}>
            <h1 style={{color:"#FF5573",fontWeight:'bold'}} className="m-0 text-3.5xl font-gilroy-bold">
              Our Statistics
            </h1>
            <div className="text-lg leading-[160%] text-grey-grey-01 " >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here
            </div>
          </div>
        </div>
      </section>
      <section className="image-section md:flex w-50 justify-end">
        <img src="/statistics.png" alt="Our Statistics" />
      </section>
    </div>
  );
};

export default OurStatistics;
