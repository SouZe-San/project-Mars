import { useEffect, useState } from "react";

// style import
import "./style.scss";

const Exploration = () => {
  //
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);

  const TourText = [
    {
      id: 1,
      text: "Mars was named by the ancient Romans for their god of war because reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute - for example, the Egyptians called it 'Her Desher', meaning 'the red one'.",
    },
    {
      id: 2,
      text: "Thin as a sigh, Mars' atmosphere struggles to hold warmth, leaving its rusty plains frozen under a hazy red sky.",
    },
    {
      id: 3,
      text: "Dusty gales whip across a rusty landscape, carving canyons through ancient rock. The thin air shimmers, a silent promise of secrets held within, waiting for rovers to decipher.",
    },
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
