import NewsItems from "./NewsItems";
import "./news_style.scss";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
const newsData = [
  "NASA chief bill Nelson on the future of human spaceflight",
  "Dead Spacecraft on Mars Spitted frozen in New Photos",
  "NASA's Perseverance Rover Cameras Capture Mars",
  "NASA chief bill Nelson on the future of human spaceflight",
  "Dead Spacecraft on Mars Spitted frozen in New Photos",
  "NASA's Perseverance Rover Cameras Capture Mars",
];
const colorData = ["red", "yellow", "orange", "blue"];

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      const interval = setTimeout(() => {
        setCurrentIndex((prv) => (prv < 6 ? prv + 1 : 0));
      }, 3000);
      return () => clearInterval(interval);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, inView]);

  return (
    <div className="overflow-x-scroll" style={{ scrollbarWidth: "none", borderRadius: "15px" }}>
      <div ref={ref} className=" relative flex gap-10 right-[-10%]">
        {newsData.map((news, i) => (
          <NewsItems
            news={news}
            color={colorData[i % 4]}
            key={i}
            currentIndex={currentIndex}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
