import { useEffect } from "react";

// style import
import "./style.scss";

const Exploration = () => {
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

  return (
    <>
      {/* Header Part */}
      <h2 className="header_tag">Planet Mars Exploration</h2>

      {/* Dot Part */}

      <div className="particle_container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      {/* Text box part */}

      <div className="text_box-container">
        <div className="text_box">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, sint.</p>
        </div>
        <div className="text_box">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, sint.</p>
        </div>
        <div className="text_box">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, sint.</p>
        </div>
      </div>

      {/* Guide */}

      <div className="absolute right_blob blob" id="white-blob"></div>
    </>
  );
};

export default Exploration;
