import ArrowIcon from "../Arrow/ArrowIcon";

// import React from 'react'

const NewsItems = ({
  news,
  color,
  currentIndex,
  index,
}: {
  news: string;
  color: string;
  currentIndex: number;
  index: number;
}) => {
  return (
    <div
      className={`outer ${color + "Before"} relative rounded-2xl ${
        currentIndex === index ? "scale-100" : "scale-[.85]"
      }`}
    >
      <div className="news-card pb-16 pt-8">
        <div className="news-star">⭐</div>
        <div className="card-cut flex">
          <div className="rotate-180 order-2">
            <ArrowIcon />
          </div>

          <ArrowIcon />
        </div>
        <div className="card-body px-16">
          <div className="card-date">23-32-2323</div>
          <div className="card-bod">{news}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
