import React from "react";
import hotel1 from "../assets/img/hotel1.jpg";
import hotel2 from "../assets/img/hotel2.jpg";
import hotel3 from "../assets/img/hotel3.jpg";
import hotel4 from "../assets/img/hotel4.jpg";

const hotels = [
  { id: 1, name: "Hotel 1", image: hotel1 },
  { id: 2, name: "Hotel 2", image: hotel2 },
  { id: 3, name: "Hotel 3", image: hotel3 },
  { id: 4, name: "Hotel 4", image: hotel4 },
  { id: 5, name: "Hotel 5", image: hotel1 },
  { id: 6, name: "Hotel 6", image: hotel2 },
  { id: 7, name: "Hotel 7", image: hotel3 },
  { id: 8, name: "Hotel 8", image: hotel4 },
];

export default function Hotels() {
  return (
    <>
      {/* Header */}
      <div className="container-fluid w-100 p-0 shadow border bg-white">
        <div className="row p-0 align-items-center">
          <div className="col-md-6 d-flex align-items-center">
            <h3 className="p-2 mb-0">Hotels</h3>
            <span>{hotels.length}</span>
          </div>

          <div className="col-md-6 d-flex justify-content-md-end">
            <button className="btn btn-transparent border">
              Créer un nouveau hôtel
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="container p-0 mt-4">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {hotels.map((hotel) => (
            <div className="col" key={hotel.id}>
              <div className="card h-100 shadow">
                <img
                  src={hotel.image}
                  className="card-img-top hotel-img"
                  alt={hotel.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{hotel.name}</h5>
                  <p className="card-text">Description de l’hôtel.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
