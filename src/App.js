import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/index";
import { About, Contact, Home, Models, Team, Testimonals } from "./Pages/index";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<Testimonals />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
