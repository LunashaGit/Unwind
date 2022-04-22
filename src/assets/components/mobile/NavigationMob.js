import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const NavigationMob = (props) => {
  return (
    <div className="navMob">
      <NavLink
        to={"/"}
        className={(nav) => (nav.isActive ? "nav__active" : "")}
      >
        <Logo width={"mob"} />
      </NavLink>

      <i className="fa-solid fa-bars"></i>
    </div>
  );
};

export default NavigationMob;
