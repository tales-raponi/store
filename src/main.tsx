import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import House from "./components/house/House";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Castle from "./components/castle/Castle";
import Farm from "./components/farm/Farm";
import Flat from "./components/flat/Flat";
import Hotel from "./components/hotel/Hotel";

import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="houses" element={<House />} />
        <Route path="castles" element={<Castle />} />
        <Route path="farms" element={<Farm />} />
        <Route path="flats" element={<Flat />} />
        <Route path="hotels" element={<Hotel />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>,
  rootElement
);
