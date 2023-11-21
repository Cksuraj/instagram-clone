
import React from "react";
// import Login from "./components/login";
// import Register from "./components/register";
import "./styles/app.css"
import Home from "./components/home/home";
// import Profile from "./components/profile/profile";

function App() {
  return (
    <div className="app">

      {/* <Profile /> */}
       
       <Home />

   {/* {<div style={{display:"flex",alignItems:'center', height:'100vh'}}> 
      <Login />
      </div> } */}


{/* 
      {<div style={{display:"flex",alignItems:'center', height:'100vh'}}> 
      <Register />
      </div> }  */}

      </div>
  
  );
}

export default App;
