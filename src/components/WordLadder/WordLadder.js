import React from "react";
import "../../styles/WordLadder.scss";

const WordLadder = ({ ladder }) => {
  const isScrollable = ladder.length > 8;

  return (
    <div
      className={`word-ladder ${isScrollable ? "scrollable" : ""}`}
      role="list"
      tabIndex={0}
    >
      {ladder.map((word, index) => (
        <div className="word-ladder__item" role="listitem" key={index}>
          {word}
        </div>
      ))}
    </div>
  );
};

export default WordLadder;
