import { useState, useEffect } from "react";

import "./circle-processBar.scss";

interface propsTypes {
  limit: number;
  percentage: number;
}
const CircularProgress = ({ limit, percentage }: propsTypes) => {
  const [stoke, setStroke] = useState(452);

  useEffect(() => {
    if (stoke >= limit) {
      const interval = setInterval(() => {
        setStroke((prev) => {
          return (prev = prev - 1);
        });
      }, 4);
      return () => clearInterval(interval);
    }
  }, [stoke, limit]);

  return (
    <div className="time_box">
      <svg>
        <circle
          cy="60"
          cx="80"
          r="72"
          style={{
            fill: `${stoke === 0 ? "#db1f1fe0" : "transparent"}`,
            stroke: `${stoke === 0 ? "#db1f1fe0" : "rgb(255, 135, 14)"}`,
            strokeDashoffset: `${stoke}`,
          }}
        ></circle>
      </svg>

      <div className="time">{percentage}%</div>
    </div>
  );
};

export default CircularProgress;
