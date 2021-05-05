import Rating from "./Rating";

function Card({ index, name, location, price, stars, handleDelete }) {
  return (
    <div className="hotel">
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Price: {price} Per Night</p>
      <Rating stars={stars} />
      <p>
        <i
          className="fas fa-trash"
          onClick={() => {
            handleDelete(index);
          }}
        ></i>
      </p>
    </div>
  );
}

export default Card;
