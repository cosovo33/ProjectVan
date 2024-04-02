import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Navbar from "./Navbar";
import ReservationForm from "./Reservaton";
import { Paper } from "@mui/material";

const Home = ( {vans }) => {
  return (
    <div className="home-container" id='home'>
      <Navbar />
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" /> {/* top orange background image */}
        </div>
      <div className="reservation-form-container">
        {/* Apply Paper component to create floating effect */}
        <Paper elevation={3} id="paper" className="reservation-paper">
          {/* Pass vans prop to ReservationForm component */}
           <ReservationForm vans={vans} /> {/*vans prop object is passed to the reservationForm component */}
        </Paper>
        </div>
    </div>
  );
};

export default Home;
