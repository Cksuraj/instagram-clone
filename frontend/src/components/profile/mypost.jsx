import React from "react";

const Mypost = ({post}) => {
  return (
    <div>
        <div style={{borderTop:'1px solid ',marginTop:'5vh', padding:'2vh 0vh', textTransform:'uppercase', display:'flex',justifyContent:'center',gap:'5vh'}}>
            <span> Post </span>
            <span> Reels </span>
            <span> Saved </span>
            <span> Tagged </span>
        </div>

      <div style={{width: "auto",display: "grid",gridTemplateColumns: "auto auto auto",columnGap: "10px",rowGap: "1vh"}}>

        {post.map((ele) => {
          return <img style={{ width: "250px", height: "30vh", objectFit: "cover", borderRadius:'4px' }} 
          src= {`${ele.postimg[0]}`}  alt=" "/> 
            })}
      </div>
    </div>
  );
};

export default Mypost;
