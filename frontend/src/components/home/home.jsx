import React from "react";
import Sidebar from "../common/sidebar";
import Main from "./main";
import Suggestion from "./suggestion";

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Sidebar />
      </div>

      <div>
        <Main />
      </div>

      <div>
        <Suggestion />
      </div>
    </div>
  );
};

export default Home;
