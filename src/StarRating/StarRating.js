import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div style={{ fontSize: "24px", color: "#FFD700" }}>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};


export default StarRating;