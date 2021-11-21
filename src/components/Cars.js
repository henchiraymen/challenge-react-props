import React from "react";
import imgGolf from "../assets/golf-7-r-line.jpg";
import imgSeat from "../assets/seat-leon-cupra.jpg";
import imgKia from "../assets/kia-rio-5p.jpg";
import imgHyundai from "../assets/hyundai-i20.jpg";
import imgMercedes from "../assets/mercedes-benz-a-180.jpg";
import imgBmw from "../assets/bmw-serie-3.jpg";
import imgRangeRover from "../assets/range-rover-sport.jpg";
import "./Cars.css";

const cars = [
  {
    name: "Golf 7 R-Line",
    price: "110 000 DT",
    imgSrc: imgGolf,
  },
  {
    name: "Seat Leon Cupra",
    price: "90 000 DT",
    imgSrc: imgSeat,
  },
  {
    name: "Kia Rio 5p",
    price: "65 000 DT",
    imgSrc: imgKia,
  },
  {
    name: "Hyundai i20",
    price: "60 000 DT",
    imgSrc: imgHyundai,
  },
  {
    name: "Mercedes Benz A 180",
    price: "120 000 DT",
    imgSrc: imgMercedes,
  },
  {
    name: "BMW Serie 3",
    price: "130 000 DT",
    imgSrc: imgBmw,
  },
  {
    name: "Range Rover Sport",
    price: "450 000 DT",
    imgSrc: imgRangeRover,
  },
];
const Cars = () => {
  return (
    <div className="cars-list">
      <h3 className="title"> Cars list </h3>
      <div className="car-name">
        {cars.map((car, i) => (
          <div  key={i}>
            <h5 className="name">{car.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
