// import React from 'react'

const ticketDescription = [
  "1-month intensive personal training",
  "comfortable luxurious seats",
  "open space included",
  "50+ photos and videos recording",
  "unlimited food and drinks",
];
import arrowImg from "../../assets/hero-section/arrow.svg";
const availableIcon = (labelType: string) => {
  return labelType === "yes" ? <>&#10004;</> : <>&#10008;</>;
};

interface TicketProps {
  ticketName: string;
  price: string;
  img: string;
  color: string;
  serviceAvailable: string[];
}

// import imag from "../../assets/rockets/rocket-1.png";
const Ticket = (props: TicketProps) => {
  const { img, ticketName, color, price, serviceAvailable } = props;
  const brCol = color + "59";

  return (
    <div
      className={`ticket`}
      style={{
        borderColor: brCol,
      }}
    >
      <img src={img} alt="Rocket images" className="absolute" />
      <div className="h-full w-full px-12 py-16 grid grid-rows-3  justify-center content-center">
        <div className="ticket-head">
          <div className="ticket-name">
            <h3>{ticketName}</h3>
          </div>
          <div className="ticket-price">
            <h4 style={{ color: color }}>${price}</h4>
          </div>
        </div>
        <div className="ticket-body flex flex-col gap-4">
          {ticketDescription.map((description, index) => (
            <p key={index}>
              {" "}
              <span style={{ color: color }}>{availableIcon(serviceAvailable[index])}</span>{" "}
              {description}
            </p>
          ))}
        </div>
        <div className="ticket-footer">
          <span>Reserve a seat</span>
          <img src={arrowImg} alt="" />
        </div>
      </div>
      <div
        style={{
          boxShadow: `-5rem -5rem 10vw 11rem ${color + "5a"}`,
          content: "",
          position: "absolute",
          width: "3px",
          aspectRatio: 1,
          background: "#ff00000d",
          bottom: 0,
          right: 0,
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default Ticket;
