// HowItWorks.tsx
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import './HowItWorks.css'; // Ensure the path to your CSS file is correct

const Card: FunctionComponent<{ image: string; title: string; description: string }> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="card" style={{border:"0px"}}>
      <img src={image} alt={title} className="card-image-how-it-work" />
      <div className="card-content-how-it-work">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="how-it-works-container">
      <h1 className="title"  style={{color:"#FF5573",fontWeight:'bold'}}>How it works</h1>
      <p className="description">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br/>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
      </p>
      <div className="cards-container">
        {/* Replace with your actual data */}
        <Card
          image="/find-course.png"
          title="Find courses"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <Card
          image="/apply.png"
          title="Apply & Receive offers"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <Card
          image="/chat-with-us.png"
          title="Chat with us"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
