import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="nav">
      <Logo />
      <ul className="nav__links">
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav__active" : "")}
        >
          <li className="nav__link">Je suis thérapeuthe/coach</li>
        </NavLink>
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav__active" : "")}
        >
          <li className="nav__link">S'incrire</li>
        </NavLink>
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav__active" : "")}
        >
          <li className="nav__link">Se connecter</li>
        </NavLink>
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav__active" : "")}
        >
          <li className="nav__link">
            Belgique (Fr) <i class="fa-solid fa-caret-down"></i>
          </li>
        </NavLink>
      </ul>
      <div className="nav__search">
        <label htmlFor="where">Où cherchez-vous?</label>
        <input type="text" id="where" placeholder="Où cherchez-vous ?" />
        <label htmlFor="when">Quand ?</label>
        <input type="text" id="when" placeholder="Quand ?" />
      </div>
    </div>
  );
};

export default Navigation;
