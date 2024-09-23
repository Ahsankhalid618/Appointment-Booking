import React from "react";
import image from "../images/doctor.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Your Way!
        </h1>
        <p>
        Start your journey towards optimal health with our comprehensive services designed to empower you. From personalized wellness plans to innovative treatments, we're here to help you unlock your best self. Don't wait—transform your health today!
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
