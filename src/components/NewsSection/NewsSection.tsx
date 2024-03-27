import NewsItems from "./NewsItems";
import "./news_style.scss";
// import React from 'react'

const newsData = [
  "NASA chief bill Nelson on the future of human spaceflight",
  "Dead Spacecraft on Mars Spitted frozen in New Photos",
  "NASA's Perseverance Rover Cameras Capture Mars",
];

const colorData = ["red", "yellow", "orange", "blue"];

const NewsRetrieve = (): JSX.Element[] => {
  const newsArray: JSX.Element[] = [];
  for (let i = 0; i < 6; i++) {
    console.log(i);
    newsArray.push(<NewsItems news={newsData[i % 3]} color={colorData[i % 4]} />);
  }
  return newsArray;
};

const NewsSection = () => {
  return (
    <div className="overflow-x-scroll" style={{ scrollbarWidth: "none", borderRadius: "15px" }}>
      <div className=" relative flex gap-10 right-[-10%]">{NewsRetrieve()}</div>
    </div>
  );
};

export default NewsSection;
