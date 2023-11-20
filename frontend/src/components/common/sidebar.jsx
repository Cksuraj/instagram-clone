import React from "react";
import "../../styles/sidebar.css";
// import "../../styles/sidebar.css";

const Sidebar =()=>{
    return(
      <div className="sidebar">
        <div className="sidebar-list">
           <ul>
            <li style={{marginBottom:"20px"}}> <img width="200px" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png" alt="" /> </li>
               <li>Home </li>
               <li>Search</li>
               <li>Explore</li>
               <li>Reels</li>
               <li>Messages</li>
               <li>Notefication</li>
               <li>Create</li>
               <li>Profile</li>
           </ul>
        </div>

      </div>
    )
}

export default Sidebar;