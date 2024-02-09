import { useEffect, useState } from "react";

// style import
import "./style.scss";

const Exploration = () => {
  //
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const TourText = [
    { id: 1, text: "Text for Div 1" },
    { id: 2, text: "Text for Div 2" },
    { id: 3, text: "Text for Div 3" },
  ];

  //Random Positioning dot
  const dotPosition = (): void => {
    const dots = document.querySelectorAll<HTMLDivElement>(".dot");
    const dotContainer = document.querySelector<HTMLDivElement>(".particle_container");
    const dotContainerWidth = dotContainer?.offsetWidth;
    const dotContainerHeight = dotContainer?.offsetHeight;
    if (dotContainerWidth && dotContainerHeight) {
      dots.forEach((element) => {
        const x = Math.floor(Math.random() * dotContainerWidth);
        const y = Math.floor(Math.random() * dotContainerHeight);
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
      });
    }
  };

  useEffect(() => {
    dotPosition();
  }, []);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const renderDivs = (): JSX.Element[] => {
    const divs: JSX.Element[] = [];
    for (let i = 1; i <= 3; i++) {
      divs.push(
        <span
          className="dot"
          key={i}
          onMouseEnter={() => handleHover(i)}
          onMouseLeave={handleLeave}
        ></span>
      );
    }
    return divs;
  };

  return (
    <>
      {/* Header Part */}
      <h2 className="header_tag">Planet Mars Exploration</h2>

      {/* Dot Part */}

      <div className="particle_container size_container">{renderDivs()}</div>

      {/* Text box part */}

      <div className="text_box-container size_container">
        {TourText.map((div) => (
          <div key={div.id} className={`text_box ${hoveredIndex === div.id ? "hovered" : ""}`}>
            <p>{div.text}</p>
          </div>
        ))}
      </div>

      {/* Guide */}

      <div className="absolute right_blob blob" id="white-blob"></div>
    </>
  );
};

export default Exploration;
