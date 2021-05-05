import Card from "./Card";

function Hotels() {
  const hotelsList = [
    {
      index: 0,
      name: "One&Only Cape Town",
      location: "Victoria and Alfred Waterfront, CapeTown",
      price: "USD 1,000",
      stars: "5",
    },
    {
      index: 1,
      name: "Taj Cape Town",
      location: "Cape Town City Centre, Cape Town",
      price: "USD 115",
      stars: "4",
    },
    {
      index: 2,
      name: "Marriot Hotel Melrose Arch",
      location: "Johannesburg",
      price: "USD 138",
      stars: "3",
    },
    {
      index: 3,
      name: "Caylel Mountain Resort",
      location: "Cathkin Park, Kwazulu-Natal",
      price: "USD 121",
      stars: "4",
    },
  ];

  return (
    <div className="hotels">
      {hotelsList.map((hotel) => {
        return <Card key={hotel.index} {...hotel} />;
      })}
    </div>
  );
}

export default Hotels;
