import { FunctionComponent } from "react";
import './most-searched-countries.css'; // Make sure this path is correct

const MostSearchedCountries: FunctionComponent = () => {
  return (
    <div className="most-searched-countries-container">
      <h1 className="section-title"  style={{color:"#FF5573",fontWeight:'bold'}}>Most Searched Countries</h1>
      <div className="cards-container">
        {/* Ensure these image paths are correct */}
        <div className="card">
          <img className="card-image" src="/usa.png" alt="USA" />
          {/* <h2 className="card-title">USA</h2> */}
        </div>
        <div className="card">
          <img className="card-image" src="/uk.png" alt="UK" />
          {/* <h2 className="card-title">UK</h2> */}
        </div>
        <div className="card">
          <img className="card-image" src="/canada.png" alt="Canada" />
          {/* <h2 className="card-title">Canada</h2> */}
        </div>
       
      </div>
      <div className="cards-container">
        {/* Ensure these image paths are correct */}
        <div className="card">
          <img className="card-image" src="/australia.png" alt="Australia" />
          {/* <h2 className="card-title">Australia</h2> */}
        </div>
        <div className="card">
          <img className="card-image" src="/france.png" alt="France" />
          {/* <h2 className="card-title">France</h2> */}
        </div>
        <div className="card">
          <img className="card-image" src="/ireland.png" alt="Ireland" />
        </div>
      </div>
      <div className="view-all-button">
        <button className="button">
          View all
          <img className="button-icon" src="/chevronsright.svg" alt="View all" />
        </button>
      </div>
    </div>
  );
};

export default MostSearchedCountries;
