import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./gallery_style.scss";
// Images Importing
import img1 from "../../assets/gallery_image/mars_1.jpeg";
import img2 from "../../assets/gallery_image/mars_2.jpg";
import img3 from "../../assets/gallery_image/mars_3.jpg";
import img4 from "../../assets/gallery_image/mars_4.webp";

const Gallery = ({
  whatBtnClicked,
  setWhatBtnClicked,
}: {
  whatBtnClicked: btnProps;
  setWhatBtnClicked: React.Dispatch<React.SetStateAction<btnProps>>;
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const images = [img1, img2, img4, img3, img1, img2, img4];

  const containerRef = useRef<HTMLDivElement>(null);

  const [currentHovered, setCurrentHovered] = useState<number>(1);
  const [hoveredIndex, setHoveredIndex] = useState<number>(currentHovered);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    // setHoveredIndex(1);
    setHoveredIndex(currentHovered);
  };

  useEffect(() => {
    if (containerRef.current) {
      if (whatBtnClicked.whatSideClicked === "rightBtn") {
        containerRef.current.style.transform = `translateX(-${whatBtnClicked.posNumber * 15}%)`;
        setCurrentHovered(hoveredIndex + 1);
        setHoveredIndex(hoveredIndex + 1);
      } else if (whatBtnClicked.whatSideClicked === "leftBtn") {
        const currentTransform = containerRef.current.style.transform;

        // Extract the translateX value from the current transform
        const match = currentTransform.match(/translateX\(([-0-9]+)%\)/);
        const currentTranslateX = match ? parseFloat(match[1]) : 0;

        containerRef.current.style.transform = `translateX(${currentTranslateX + 15}%)`;
        setCurrentHovered(hoveredIndex - 1);
        setHoveredIndex(hoveredIndex - 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [whatBtnClicked]);

  useEffect(() => {
    if (inView) {
      const interval = setTimeout(() => {
        if (whatBtnClicked.posNumber < 5) {
          setWhatBtnClicked({
            posNumber: whatBtnClicked.posNumber + 1,
            whatSideClicked: "rightBtn",
          });
        } else {
          setWhatBtnClicked({
            posNumber: 0,
            whatSideClicked: "",
          });
          setCurrentHovered(1);
          setHoveredIndex(currentHovered);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [whatBtnClicked, inView]);

  return (
    <div className="h-full overflow-hidden relative" ref={ref}>
      <h1 className="header_tag mb-12">Gallery or Marsian Life</h1>

      <div className="card_container relative flex justify-center" ref={containerRef}>
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`card ${hoveredIndex === index ? "currentHovered" : ""}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
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
