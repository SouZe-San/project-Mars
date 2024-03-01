import { useState, useEffect } from "react";
import "./gallery_style.scss";
// Images Importing
import img1 from "../../assets/gallery_image/mars_1.jpeg";
import img2 from "../../assets/gallery_image/mars_2.jpg";
import img3 from "../../assets/gallery_image/mars_3.jpg";
import img4 from "../../assets/gallery_image/mars_4.webp";

// interface btnProps {
//   whatBtnClicked: "" | "rightBtn" | "leftBtn";
// }

const Gallery = ({ whatBtnClicked }: { whatBtnClicked: btnProps }) => {
  const images = [img1, img2, img4, img3, img1, img2, img4];

  const [hoveredIndex, setHoveredIndex] = useState<number>(1);
  // const [currentHovered, setCurrentHovered] = useState<number>(1);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(1);
    // setHoveredIndex(currentHovered);
  };

  useEffect(() => {
    console.log(whatBtnClicked);
  }, [whatBtnClicked]);

  return (
    <div className="h-full overflow-hidden relative">
      <h1 className="header_tag mb-12">Gallery or Marsian Life</h1>

      <div className="card_container relative flex justify-center">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`card ${hoveredIndex === index ? "currentHovered" : ""}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
              // onChange={() => setHoveredIndex(currentHovered)}
            >
              <h3 className="card_no">00{index + 1}</h3>
              <img src={image} alt="mars" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
