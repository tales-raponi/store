import React from "react";
import House from "./components/house/House";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="body">
      <Link to={"/houses"}>Link to Houses</Link>
    </div>
  );
};

export default App;
