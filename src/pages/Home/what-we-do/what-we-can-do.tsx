import { FunctionComponent } from 'react';
import FrameComponent2 from './what-we-do-cards';
import './WhatWeCanDo.css';

const WhatWeCanDo: FunctionComponent = () => {
  return (
    <div className="what-we-can-do">
      <div style={{display: 'flex', flexDirection: 'column',justifyContent:"start",width:"100%"}}>

      <h1 className="what-we-can-do-title font-gilroy-bold"  style={{color:"#FF5573",fontWeight:'bold'}}>What we can do for you?</h1>
      <p className="what-we-can-do-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      <p className="what-we-can-do-description">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
      </div>
      <div className="what-we-can-do-grid">
        <FrameComponent2
          prop="/29658253-7605880-1.svg"
          sOPWriting="IELTS "
          guidance="Preparation"
        />
        <FrameComponent2
          prop="/13549587-5292742-1.svg"
          sOPWriting="SOP Writing"
          guidance="Guidance"
        />
        <FrameComponent2
          prop="/19245722-6101665-1.svg"
          sOPWriting="Visa "
          guidance="Guidance"
        />
        <FrameComponent2
          prop="/5911565-2953991-3.svg"
          sOPWriting="Financial"
          guidance="Aid"
        />
        <FrameComponent2
          prop="/23186826-6737707-1.svg"
          sOPWriting="Accommodation"
          guidance="Guidance"
        />
        <FrameComponent2
          prop="/14327665-5474207-1.svg"
          sOPWriting="Online "
          guidance="Learning"
        />
        <FrameComponent2
          prop="/12079893-4905858-1-1.svg"
          sOPWriting="Shortlist"
          guidance="Universities"
        />
        <FrameComponent2
          prop="/24237566-6922092-1.svg"
          sOPWriting="Career path "
          guidance="finder"
        />
      </div>
    </div>
  );
};

export default WhatWeCanDo;
