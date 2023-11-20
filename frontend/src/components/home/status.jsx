import React from "react";
import { obj as Statusobj } from "../data/statusdata";
import "../../styles/status.css";

const Status = () => {
  return (
    <div className="statusbox">
      {
        // looping the img object using map
        Statusobj.map((obj) => {
          return (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px",alignItems:'center' }}
            >
              <img
                style={{ borderRadius: "50%", border: "4px solid green" }}
                width="50px"
                height="50px"
                src={`${obj.profilepic}`}
                alt="profilephoto"
              />
              <span> {obj.username}</span>
            </div>
          );
        })
      }
    </div>
  );
};

export default Status;
