import React from "react";
import "./Home.css";
import {
  Hero,
  BookBike,
  PlanTrip,
  PickBike,
  Banner,
  ChooseUs,
  Testimonals,
  Faq,
  Download,
  Footer,
} from "../../components/index";

const Home = () => {
  return (
    <>
      <Hero />
      <BookBike />
      <PlanTrip />
      <PickBike />
      <Banner />
      <ChooseUs />
      <Testimonals />
      <Faq />
      <Download />
      <Footer />
    </>
  );
};

export default Home;
