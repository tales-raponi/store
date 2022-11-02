import React from "react";
import Home from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="body">
      <Home />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
