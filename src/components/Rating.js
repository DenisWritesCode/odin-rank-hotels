import { useState } from "react";

function Rating({ stars }) {
  const [starsCount, setStarsCount] = useState(stars);
  const starsDis = [];

  // There can be 5 stars. Iterate over stars, filling them in. If not stars,
  // make up to 5 with empty ones.
  function createStars(starsCS) {
    for (let total = 5, current = starsCS; total > 0; --total) {
      if (current) {
        starsDis.push("fas fa-star");
        --current;
      } else {
        starsDis.push("far fa-star");
      }
    }
  }

  createStars(starsCount); //initial

  function handleClick(index) {
    if (starsDis[index] === "fas fa-star") {
      setStarsCount(starsCount - 1);
    } else {
      setStarsCount(starsCount + 1);
    }
  }

  return (
    <p>
      Rating:{" "}
      {starsDis.map((star, index) => {
        return (
          <i
            key={index}
            className={star}
            onClick={() => {
              handleClick(index);
            }}
          ></i>
        );
      })}
    </p>
  );
}

export default Rating;
