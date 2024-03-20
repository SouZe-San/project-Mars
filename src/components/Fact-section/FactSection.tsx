import Facts from "./Facts";
import "./style.scss";
// import React from 'react'

const Facts_Arr: factsProps[] = [
  {
    index: 11,
    title: "Small Planet",
    des: "Mars, a small planet in our solar system, possesses a thin atmosphere primarily composed of carbon dioxide, nitrogen, and argon gases.",
  },
  {
    index: 2,
    title: "Forth Rock",
    des: "The fourth rock from the sun, Mars, surprises with a thin atmosphere choked by carbon dioxide, alongside wisps of nitrogen and argon",
  },
  {
    index: 3,
    title: "Ragged Terrain",
    des: "The ragged terrain of Mars, characterized by rugged, uneven surfaces and cratered landscapes, reflects the planet's turbulent geological history and extensive impact events.",
  },
  {
    index: 4,
    title: "Mars Atmosphere",
    des: "Mars has a thin atmosphere made up mostly of carbon dioxide[CO2], nitrogen[N2], and argon[Ar] gases, and a small amount of water vapor.",
  },
];

const FactSection = () => {
  return (
    <div className="">
      <div className="fact-section grid grid-cols-4 gap-40">
        {Facts_Arr.map((fact: factsProps) => {
          return <Facts key={fact.index} fact={fact} />;
        })}
      </div>
      <div className="fact-section grid grid-cols-4">
        <div className="note col-span-2 col-end-4 ">
          <div style={{ boxShadow: "#fdfdfda4 5rem 2rem 13rem 7rem", borderRadius: "50%" }}>
            <p className="absolute w-[10%] text-[1.25rem]">
              Note: Hover on the circle for read more
            </p>
          </div>
        </div>
        <Facts
          fact={{
            index: 5,
            title: "Longer Days",
            des: "Mars experiences longer days compared to Earth due to its slightly slower rotation on its axis, with each Martian day, or sol, lasting approximately 24.6 Earth hours.",
          }}
        />
      </div>
    </div>
  );
};

export default FactSection;
