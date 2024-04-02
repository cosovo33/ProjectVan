import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import ReservationForm from "./Reservaton";
import { Paper } from "@mui/material";

const Home = ( {vans }) => {
  return (
    <div className="home-container" id='home'>
      <Navbar />
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" /> {/* top orange background image */}
        </div>
      {/* <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
         <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div> 
      </div> */}
      <div className="reservation-form-container">
        {/* Apply Paper component to create floating effect */}
        <Paper elevation={3} id="paper" className="reservation-paper">
          {/* Pass vans prop to ReservationForm component */}
          <ReservationForm vans={vans} />
        </Paper>
        </div>
    </div>
  );
};

export default Home;
