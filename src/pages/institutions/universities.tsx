// Universities.tsx
import { FunctionComponent } from 'react';
import './Universities.css'; // Ensure the path to your CSS file is correct
import { useNavigate } from 'react-router-dom';

const UniversityCard: FunctionComponent = () => {
  const navigate=useNavigate()
  // Logic to handle clicks or other interactions can be added here
  return (
    <div className="university-card" onClick={() => navigate('/institution-details')}>
      <img
        className="university-image"
        alt="University"
        src="/frame-1686560972@2x.png"
      />
      <div className="university-info">
        <h3 className="university-name">University Name</h3>
        <div className="university-logo">
          <img
            alt="University Logo"
            src="/university-logo.png" // Placeholder path for university logo
          />
        </div>
      </div>
      <p className="university-country">Country</p>
    </div>
  );
};

const Universities: FunctionComponent = () => {
  return (
    <div className="universities-container">
      <header className="universities-header">
        <div style={{display:"flex"}}>

        <img
          className="university-icon"
          alt="Building"
          src="/claritybuildingsolid.svg"
        />
        <h1 style={{marginLeft:"10px"}}>Universities</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search universities" />
          <button className="search-button">
            <img alt="Search" src="/search.svg" />
          </button>
        </div>
      </header>
      <section className="university-cards-container">
        {Array.from({ length: 25 }).map((_, index) => (
          <UniversityCard  key={index} />
        ))}
      </section>
    </div>
  );
};

export default Universities;
