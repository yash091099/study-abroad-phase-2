// WhatStudentSays.tsx
import { FunctionComponent, useState } from 'react';
import './WhatStudentSays.css'; // Ensure the path to your CSS file is correct

const StudentReviewCard: FunctionComponent<{ image: string; name: string; review: string; stars: number }> = ({
  image,
  name,
  review,
  stars,
}) => {
  const starElements = Array.from({ length: stars }, (_, index) => (
    <img key={index} src="/star.svg" alt="Star" className="star-image-what-student" />
  ));

  return (
    <div className="student-review-card-what-student">
      <img src={image} alt={name} className="student-image-what-student" />
      <div className="review-content-what-student">
        <h3 className="student-name-what-student">{name}</h3>
        <div className="stars-what-student">{starElements}</div>
        <p className="student-review-what-student">{review}</p>
      </div>
    </div>
  );
};

const WhatStudentSays: FunctionComponent = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const videoClickHandler = () => {
    setVideoPlaying(true);
  };

  return (
    <div className="what-student-says-container-what-student">
      <h1 className="title-what-student"  style={{color:"#FF5573",fontWeight:'bold'}}>What Students say about us</h1>
      <p className="description-what-student">
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here      </p>
      <div className="content-container-what-student">
        <div className="video-container-what-student" onClick={videoClickHandler}>
          {!isVideoPlaying && (
            <>
              <img src="/video-review.svg" alt="Video Thumbnail" className="video-thumbnail-what-student" />
              <button className="play-button-what-student"></button>
            </>
          )}
          {isVideoPlaying && (
            <iframe
              className="youtube-video-what-student"
              src="https://www.youtube.com/embed/a9H_cn0mnhc?autoplay=1"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="reviews-container-what-student">
          {/* Repeat this block for each review */}
          <StudentReviewCard
            image="/ellipse-1@2x.png"
            name="Student Name"
            review="It is a long established fact that a reader will be distracted..."
            stars={5}
          />
          <StudentReviewCard
            image="/ellipse-1@2x.png"
            name="Student Name"
            review="It is a long established fact that a reader will be distracted..."
            stars={5}
          />
          <StudentReviewCard
            image="/ellipse-1@2x.png"
            name="Student Name"
            review="It is a long established fact that a reader will be distracted..."
            stars={5}
          />
          <StudentReviewCard
            image="/ellipse-1@2x.png"
            name="Student Name"
            review="It is a long established fact that a reader will be distracted..."
            stars={5}
          />
          {/* ... more reviews */}
        </div>
      </div>
    </div>
  );
};

export default WhatStudentSays;
