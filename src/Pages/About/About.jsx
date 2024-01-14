import { IconPhone } from "@tabler/icons-react";
import AboutMain from "../../assets/about/about-main.jpg";
import Icon1 from "../../assets/about/icon1.png";
import Icon2 from "../../assets/about/icon2.png";
import Icon3 from "../../assets/about/icon3.png";
import "./About.css";
import { Footer, HeroPages, PlanTrip } from "../../components";

const About = () => {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="bike-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Icon1} alt="bike-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Bike Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Icon2} alt="bike-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Icon3} alt="bike-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a bike by getting in touch with us</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
