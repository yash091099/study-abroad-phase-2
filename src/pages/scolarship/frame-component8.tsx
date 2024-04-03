import React from 'react';

const FrameComponent8 = ({ prop, letsLookAtTheScholarships, exploreAllScholarships }) => {
  return (
    <div className="frame-8-card">
      <img src={prop} alt="Scholarship" className="frame-8-image" />
      <div className="frame-8-text">{letsLookAtTheScholarships}</div>
      <button className="frame-8-button">{exploreAllScholarships}</button>
    </div>
  );
};

export default FrameComponent8;
