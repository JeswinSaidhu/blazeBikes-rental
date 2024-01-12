import { useState } from "react";
import BikeBox from "../BikeBox/BikeBox";
import { BIKE_DATA } from "../BikeData/BikeData";
import "./PickBike.css";

function PickBike() {
  const [active, setActive] = useState("SecondBike");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure trip
              </p>
            </div>
            <div className="pick-container__bike-content">
              {/* pick bike */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondBike");
                    btnID("btn1");
                  }}
                >
                  Royal Enfield Himalayan
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstBike");
                    btnID("btn2");
                  }}
                >
                  Royal Enfield Classic 350
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdBike");
                    btnID("btn3");
                  }}
                >
                  Royal Enfield Continental 650
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthBike");
                    btnID("btn4");
                  }}
                >
                  Royal Enfield Meteor 350
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthBike");
                    btnID("btn5");
                  }}
                >
                  Royal Enfield Scram
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthBike");
                    btnID("btn6");
                  }}
                >
                  Royal Enfield Hunter
                </button>
                <button
                  className={`${coloringButton("btn7")}`}
                  id="btn7"
                  onClick={() => {
                    setActive("SeventhBike");
                    btnID("btn7");
                  }}
                >
                  Activa 6G
                </button>
                <button
                  className={`${coloringButton("btn8")}`}
                  id="btn8"
                  onClick={() => {
                    setActive("EighthBike");
                    btnID("btn8");
                  }}
                >
                  Activa 125
                </button>
                <button
                  className={`${coloringButton("btn9")}`}
                  id="btn9"
                  onClick={() => {
                    setActive("NinthBike");
                    btnID("btn9");
                  }}
                >
                  TVS Jupiter
                </button>
              </div>

              {active === "FirstBike" && (
                <BikeBox data={BIKE_DATA} bikeID={0} />
              )}
              {active === "SecondBike" && (
                <BikeBox data={BIKE_DATA} bikeID={1} />
              )}
              {active === "ThirdBike" && (
                <BikeBox data={BIKE_DATA} bikeID={2} />
              )}
              {active === "FourthBike" && (
                <BikeBox data={BIKE_DATA} bikeID={3} />
              )}
              {active === "FifthBike" && (
                <BikeBox data={BIKE_DATA} bikeID={4} />
              )}
              {active === "SixthBike" && (
                <BikeBox data={BIKE_DATA} bikeID={5} />
              )}
              {active === "SeventhBike" && (
                <BikeBox data={BIKE_DATA} bikeID={6} />
              )}
              {active === "EighthBike" && (
                <BikeBox data={BIKE_DATA} bikeID={7} />
              )}
              {active === "NinthBike" && (
                <BikeBox data={BIKE_DATA} bikeID={8} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickBike;
