import React from "react";
import "../styles/register.css";

const Register =()=>{
return(
   <div className="registerbox">
       <h2> Register </h2>
       <div>
        <input type="name" name="name" placeholder="Enter your Name" />
      </div>
      <div>
        <input type="Username" name="Username" placeholder="Enter your Username" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Enter your Emial" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Enter your Password" />
      </div>
    <button > Register </button>
    <button className="link"> Want to Register ?</button>
      </div>
)
}

export default Register;