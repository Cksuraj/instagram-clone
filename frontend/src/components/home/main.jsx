import React from "react";
import Status from "./status";
import Post from "./post";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContentc: "center",
        alignItems: "center",
      }}
    >
      <Status />

      <Post />
    </div>
  );
};

export default Main;
