import React from "react";
import "./PlanTrip.css";
import SelectBike from "../../assets/plan/icon-1.png";
import Contact from "../../assets/plan/icon-2.png";
import Drive from "../../assets/plan/icon-3.png";

const PlanTrip = () => {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy bike rental</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectBike} alt="icon_img" />
                <h3>Select Bike</h3>
                <p>
                  We offers bikes for all your driving needs. We have the
                  perfect bike to meet your needs.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Let's Drive</h3>
                <p>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of bikes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanTrip;
