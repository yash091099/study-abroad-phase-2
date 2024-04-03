import React from 'react';
import Blog3 from "./blog3";
import FrameComponent14 from "./frame-component14";
import './blogs.css';

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <div style={{ display: "flex" }}>
          <img
            className="blogs-icon"
            src="/fluentdocumentqueuemultiple24filled.svg"
            alt="Icon"
          />
          <h1>Blogs</h1>
        </div>
        <div className="blogs-search">
          <input type="text" placeholder="Search Blogs" />
        </div>
      </div>
      <section className="blogs-main">
        <div className="blogs-row">
          <Blog3 />
          <Blog3 />
          <Blog3 />
          <FrameComponent14
            lookAtAllTheCoursesAtUniv="Look at all the courses at University name"
            exploreAllCourses="Explore all Courses"
          />
        </div>
        <div className="blogs-row">
          <Blog3 />
          <Blog3 />
          <Blog3 />
          <FrameComponent14
            lookAtAllTheCoursesAtUniv="Let’s look at the scholarships available for you"
            exploreAllCourses="Explore all Scholarships"
          />
        </div>
      </section>
    </div>
  );
};

export default Blogs;
