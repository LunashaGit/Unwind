import React from "react";

const Logo = (props) => {
  return (
    <div>
      <img
        src="./images/Unwind.png"
        alt="logo"
        style={
          props.width
            ? { margin: "0rem", height: "1rem" }
            : { margin: "0 5rem 0 2rem", height: "2rem" }
        }
      />
    </div>
  );
};

export default Logo;
