import { useState } from "react";
import Card from "./Card";

function Hotels() {
  const hotels = [
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

  const [hotelsList, setHotelsList] = useState(hotels);

  function deleteHotel(hotelIndex) {
    const newHotels = hotelsList.filter((hotel, index) => {
      return index !== hotelIndex;
    });

    return newHotels;
  }

  function handleDelete(index) {
    console.log(index);
    //setHotelsList(hotelsList.filter((hotel) => hotel.index !== index)); //-> More succint but can't wrap my head around it yet.
    const newHotels = deleteHotel(index);
    setHotelsList(newHotels);
  }

  return (
    <div className="hotels">
      {hotelsList.map((hotel) => {
        return (
          <Card key={hotel.index} {...hotel} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default Hotels;
