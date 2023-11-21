import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import "../../styles/header.css";
import Savedstatus from "./savedstatus";

const Header = ({ myinfo }) => {
  return (
    <div style={{ display: "flex", flexDirection:'column', width:'100%'}}>
      <div
        style={{display: "flex",gap: "10vh", justifyContent:'flex-start',marginTop: "10vh",width: "100%"
       }}
      >
        <img
          style={{ height:'25vh', width: "25vh", borderRadius: "50%", objectFit: "cover" }}
          src={`${myinfo.profilpic}`}
          alt=""
        />

        <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <span style={{ fontSize: "30px" }}>{myinfo.username} </span>
            <span className="buttons_profile">Edit Profile</span>
            <span className="buttons_profile">View Archive </span>
            <span>
              <SettingsIcon />
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-around", marginTop:'20px' }}> 
            <span> {myinfo.post} Post </span>
            <span>{myinfo.followers} Followers </span>
            <span> {myinfo.following} Following </span>
          </div>

          <div style={{ marginTop: "20px" }}>
            {myinfo.name}
          </div>
          <p >
            {myinfo.bio}
          </p>
        </div>
      </div>
      <Savedstatus savedstatus={myinfo.savedstatus}/>
    </div>
  );
};

export default Header;
