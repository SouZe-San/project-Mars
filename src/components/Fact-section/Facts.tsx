// import React from 'react'

const Facts = ({ fact }: { fact: factsProps }) => {
  return (
    <div className="rounded-full facts">
      <h1>
        Fact <span className="mr-4">0{fact.index}: </span>
        {fact.title}
      </h1>
      <p>{fact.des}</p>
    </div>
  );
};

export default Facts;
