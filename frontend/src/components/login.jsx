import React from "react";
import "../styles/login.css";


const Login =()=>{
return(
   <div className="loginbox">
       <h2 > Login </h2>
      <div>
        <input type="email" name="email" placeholder="Enter your Emial" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Enter your Password" />
      </div>
       <button> Login </button>
       <button className="link"> Want to Register ? </button>
      </div>
)
}

export default Login;