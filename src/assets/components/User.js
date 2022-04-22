import React from "react";

const User = () => {
  return (
    <div className="user">
      <h3>
        Découvrez votre profil, la thérapie et les thérapeutes faits pour vous !
        ✨
      </h3>
      <span className="user__profil"></span>
      <button className="user__button user__button--select">INFJ</button>
      <div className="user__box">
        <button className="user__button">Animaux</button>
        <button className="user__button">Nature</button>
        <button className="user__button">Sport</button>
        <button className="user__button">Coaching</button>
        <button className="user__button">Thérapie Brève</button>
        <button className="user__button">Yoga</button>
        <button className="user__button">Méditation</button>
      </div>
    </div>
  );
};

export default User;
