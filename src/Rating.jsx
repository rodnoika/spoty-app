import React, { useState } from "react";
import "./Rating.css";

const StarRating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < selectedStars}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

const Star = ({ selected = false, onClick }) => (
  <span className={selected ? "star selected" : "star"} onClick={onClick}>
    ★
  </span>
);

export default StarRating;
