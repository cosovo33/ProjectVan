import React from "react";
import Agenda from "./svg/Agenda";
import EmailEnvelope from "./svg/EmailEnvelope";
import DeliveryTruck from "./svg/SvgComponent";


const Work = () => {
  // list object to display the svg icons with
  const workInfoData = [
    {
      icon: <Agenda/>,
      title: "fees estimation",
      text: "Fill the reservation form to estimate the transportaion fees. Choose your van, number of warehousemen and the necessary details.",
    } , 
     {
      icon: <EmailEnvelope/>,
      title: "Reservation invoice",
      text: "Check the transportaion fees and confirm the reservation.We will send you an invoice via mail.",
    },
    {
      icon: <DeliveryTruck/>,
      title: "Fast Deliveries",
      text: "Our professional drivers and warehousemen will arrive within 30 mins of the scheduled Date.",
    }
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
              {data.icon}
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
