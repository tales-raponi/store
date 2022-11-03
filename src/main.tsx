import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import House from "./components/house/House";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="houses" element={<House />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
