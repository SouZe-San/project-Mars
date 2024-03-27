// import React from 'react'
import img from "../../assets/hero-section/arrow.svg";
import "./style.scss";
const Contacts = () => {
  return (
    <div className="contacts">
      <div className="absolute left_blob blob"></div>
      <h3>For additional questions, please contact Question.Answer@mars.com</h3>
      <div className="cum-to-us">
        Contact Us
        <img src={img} alt="-->" />
      </div>
    </div>
  );
};

export default Contacts;
