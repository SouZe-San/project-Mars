// import React from 'react'
import "./style.scss";
const TextSlider = ({ text, img }: { text: string; img: string }) => {
  const repeatText = (index: number, cls: string): JSX.Element[] => {
    const returnArray: JSX.Element[] = [];

    for (let i: number = 0; i < 7; i++) {
      if (i === index) {
        returnArray.push(
          <span key={i} className={`${cls} text-red-500`}>
            {text} <img src={img} alt="" />
          </span>
        );
        index = index + 2;
      } else {
        returnArray.push(
          <span key={i} className={cls}>
            {text} <img src={img} alt="" />
          </span>
        );
      }
    }

    return returnArray;
  };
  return (
    <>
      <div className="marquee">
        <div className="front TextRow track ">{repeatText(0, "-r")}</div>
      </div>
      <div className="marquee">
        <div className="front TextRow track ">{repeatText(1, "-twox")}</div>
      </div>
      <div className="marquee">
        <div className="front TextRow track ">{repeatText(0, "-r")}</div>
      </div>
    </>
  );
};

export default TextSlider;
