import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Cars from "./components/Cars";
import Car from "./components/Car";

import imgGolf from "./assets/golf-7-r-line.jpg";
import imgSeat from "./assets/seat-leon-cupra.jpg";
import imgKia from "./assets/kia-rio-5p.jpg";
import imgHyundai from "./assets/hyundai-i20.jpg";
import imgMercedes from "./assets/mercedes-benz-a-180.jpg";
import imgBmw from "./assets/bmw-serie-3.jpg";
import imgRangeRover from "./assets/range-rover-sport.jpg";
import Footer from "./components/Footer";

function App() {
  const handleName = (Name, Price) =>
    alert(`“ You have to pay ${Price} to buy ${Name} !`);
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
  return (
    <div className="App">
      <NavBar />
      <Cars />
      <h2 className="title"> Cars description</h2>
      {cars.map((car, i) => (
        <div className="car-card" key={i}>
          <Car name={car.name} price={car.price} handleName={handleName}>
            <img src={car.imgSrc} alt="car" />
          </Car>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default App;
