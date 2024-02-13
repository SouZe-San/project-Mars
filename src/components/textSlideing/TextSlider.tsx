// import React from 'react'
import "./style.scss";
import marSvg from "../../assets/iconSvg/mars.svg";
const TextSlider = ({ text }: { text: string }) => {
  const repeatText = (index: number, cls: string): JSX.Element[] => {
    const returnArray: JSX.Element[] = [];

    for (let i: number = 0; i < 3; i++) {
      if (i === index) {
        returnArray.push(
          <span className={`${cls} text-red-500`}>
            {text} <img src={marSvg} alt="" />
          </span>
        );
      } else {
        returnArray.push(
          <span className={cls}>
            {text} <img src={marSvg} alt="" />
          </span>
        );
      }
    }

    return returnArray;
  };
  return (
    <>
      <div className="marquee">
        <div className="front TextRow track ">{repeatText(1, "-r")}</div>
      </div>
      <div className="marquee">
        <div className="front TextRow track ">{repeatText(2, "-twox")}</div>
      </div>
      <div className="marquee">
        <div className="front TextRow track ">{repeatText(1, "-r")}</div>
      </div>
    </>
  );
};

export default TextSlider;
