import React from "react";
// doute full suggestion
import Suggestiondata from "../data/suggestion";

import "../../styles/suggestion.css";

const Suggestion = () => {
  return (
    <div style={{ width: "15vw", marginTop: "5vh", marginRight: "5vh"}}>
      {Suggestiondata.map((user) => {
        return (
          <div
            style={{
              border: "1px solid white",
              borderRadius:'4px',
              paddingLeft: "1vw",
              marginTop: "1vh",
              height: "100px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",borderRadius:'4px'
              }}
            >
              <span> {user.username} </span>
              <img
                width="40px"
                height="40px"
                style={{ borderRadius: "50%" }}
                src={`${user.profilepic}`}
                alt=""
              />
            </div>
            <span className="followlink">Follow</span>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestion;
