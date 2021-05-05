function Rating({ stars }) {
  const starsDis = [];

  // There can be 5 stars. Iterate over stars, fillisng them in. If not stars,
  // make up to 5 with empty ones.
  for (let total = 5, current = stars; total > 0; --total) {
    if (current) {
      starsDis.push("fas fa-star");
      --current;
    } else {
      starsDis.push("far fa-star");
    }
  }

  return (
    <p>
      Rating:{" "}
      {starsDis.map((star) => {
        return <i className={star}></i>;
      })}
    </p>
  );
}

export default Rating;
