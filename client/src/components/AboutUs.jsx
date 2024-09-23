import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="about-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At Healthcare, we believe that every individual deserves access to exceptional healthcare. Our team of dedicated professionals is committed to providing personalized care that focuses on your unique needs. With state-of-the-art technology and a holistic approach, we strive to enhance your well-being and improve your quality of life. Whether you're seeking preventive care, management of chronic conditions, or guidance on healthy living, we're here to support you every step of the way. Join us in unlocking a healthier future!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
