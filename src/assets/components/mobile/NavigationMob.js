import React from "react";
import Logo from "../Logo";

const NavigationMob = (props) => {
  return (
    <div className="navMob">
      <Logo width={"mob"} />
      {props.hide ? (
        <i className="fa-solid fa-bars"></i>
      ) : (
        <div className="navMob__miniBox">
          <span></span>

          <p>Cody Fisher</p>
          <i className="fa-solid fa-bars"></i>
        </div>
      )}
    </div>
  );
};

export default NavigationMob;
