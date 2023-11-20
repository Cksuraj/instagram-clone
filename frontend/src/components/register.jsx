import React from "react";
import "../styles/register.css";

const Register =()=>{
return(
   <div className="registerbox">
       <h2> Register </h2>
      <div>
        <input type="email" name="email" placeholder="Enter your Emial" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Enter your Password" />
      </div>
    <button> Register </button>
    <button className="link"> Want to Register ?</button>
      </div>
)
}

export default Register;