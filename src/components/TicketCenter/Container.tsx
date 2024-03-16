// import React from 'react'
import "./ticket_style.scss";
import Ticket from "./Ticket";

import img1 from "../../assets/rockets/rocket-1.png";
import img2 from "../../assets/rockets/rocket-2.png";
import img3 from "../../assets/rockets/rocket-3.png";

const cardDetails = [
  {
    ticketName: "Standard Ticket",
    price: "1 000 000",
    img: img1,
    color: "#ffac2f",
    serviceAvailable: ["yes", "yes", "yes", "no", "no"],
  },
  {
    ticketName: "Vip Ticket",
    price: "5 000 000",
    img: img2,
    color: "#ff8307",
    serviceAvailable: ["yes", "yes", "yes", "yes", "no"],
  },
  {
    ticketName: "Executive Ticket",
    price: "10 000 000",
    img: img3,
    color: "#ff5507",
    serviceAvailable: ["yes", "yes", "yes", "yes", "yes"],
  },
];

const Container = () => {
  return (
    <div className="w-full flex justify-between items-center">
      {cardDetails.map((card, index) => (
        <Ticket key={index} {...card} />
      ))}
    </div>
  );
};

export default Container;
