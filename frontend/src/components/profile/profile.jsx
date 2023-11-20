import React from "react";
import Sidebar from "../common/sidebar";
import Header from "./header";
import {myinfo} from "../data/myinfo";
import Mypost from "./mypost";

const Profile = ()=>{
  return (
    <div style={{display:'flex',gap:'15vw'}}>
<Sidebar />
       
       <div>
       <Header myinfo={myinfo}/> 
        <Mypost post={myinfo.posts}/> 
       </div>
    </div>
  )
}

export default Profile;
