import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import './feature-university.css'; // Make sure this path is correct

const FeaturedUniversity: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="featured-university-container">
      <section className="text-section">
        <h1 className="title" style={{ color: "#FF5573", fontWeight: 'bold' }}>
          Featured Universities
        </h1>
        <div className="description">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.
        </div>
      </section>
      <div className="university-cards-container">
        {[...Array(4)].map((_, index) => (
          <div className="university-card" key={index} onClick={() => navigate('/institution-details')}>
            <img src="/frame-1686560972@2x.png" alt="University" className="university-image" />
            <div className="card-info">
              <div>

              <h3 className="university-name">University Name</h3>
              <h5 className="university-location">City, State, Country</h5>
              </div>
              <div className="university-logo">Logo</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedUniversity;
