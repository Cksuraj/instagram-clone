import React from "react";
import "../../styles/sidebar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

const Sidebar =()=>{
    return(
      <div className="sidebar">
        <div className="sidebar-list">
           <ul>
            <li style={{marginBottom:"20px"}}> <img width="200px" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png" alt="" /> </li>
               <li style={{alignItems:'center' , display:'flex' , gap:"2px"}}> < HomeOutlinedIcon />  Home </li>
               <li style={{alignItems:'center' , display:'flex' , gap:"2px"}}> < SearchOutlinedIcon /> Search</li>
               <li>  Explore</li>
               <li>  Reels</li>
               <li style={{alignItems:'center' , display:'flex' , gap:"2px"}}> <SmsOutlinedIcon /> Messages</li>
               <li>  Notefication</li>
               <li>  Create</li>
               <li>  Profile</li>
           </ul>
        </div>

      </div>
    )
}

export default Sidebar;