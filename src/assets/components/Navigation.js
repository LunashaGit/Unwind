import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = (props) => {
  return (
    <div className="nav">
      <Logo />
      {props.hide ? null : (
        <div className="nav__search">
          <div className="nav__search--box">
            <label htmlFor="what">Type de thérapie</label>
            <input type="text" id="what" placeholder="Que cherchez-vous?" />
          </div>
          <div className="nav__search--box">
            <label htmlFor="when">Quand?</label>
            <input type="text" id="when" placeholder="Quand?" />
          </div>
          <div className="nav__search--box">
            <label htmlFor="when">Où?</label>
            <input type="text" id="when" placeholder="Où?" />
          </div>
          <button className="nav__search--button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      )}
      {props.hide ? (
        <div className="nav__miniBox">
          <span></span>
          <p>Cody Fisher</p>
          <i className="fa-solid fa-bars"></i>
        </div>
      ) : (
        <ul className="nav__links">
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav__active" : "")}
          >
            <li style={{ color: "#a88550" }} className="nav__link">
              Je suis thérapeuthe/coach
            </li>
          </NavLink>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav__active" : "")}
          >
            <li className="nav__link">Connexion</li>
          </NavLink>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav__active" : "")}
          >
            <li className="nav__link">
              Be (Fr) <i className="fa-solid fa-caret-down"></i>
            </li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
