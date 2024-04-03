import React from 'react';
import './contact-us.css'

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h1>Get in touch with us</h1>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.
        </p>
        <button>Explore all Courses</button>
      </div>
      <div className="contact-us-image">
        <img src="/contact-us-1.png" alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactUs;
