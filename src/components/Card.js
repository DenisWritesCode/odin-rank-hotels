import Rating from "./Rating";

function Card({ name, location, price, stars }) {
  return (
    <div className="hotel">
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Price: {price} Per Night</p>
      <Rating stars={stars} />
    </div>
  );
}

export default Card;
