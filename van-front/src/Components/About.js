import React from "react";
import AboutBackground from "../Assets/about-background.png";
import mapImage from "../Assets/map.webp";

const About = () => {
  return (
    <div className="about-section-container" id='about'>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div id="maps_block-img">
          <img
            src={mapImage}
            loading="lazy"
            alt="Camions en France"
            id="image"
          />
        </div>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">We transport across france</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
