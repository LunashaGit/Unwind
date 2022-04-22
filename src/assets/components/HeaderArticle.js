import React from "react";
import { postData } from "../data/post";

const HeaderArticle = ({ nbr }) => {
  return (
    <div className="header__article">
      <div className="header__article--title">
      <h1>Soin énerétique au bols tibétains</h1>
      <h2>Matching {postData[nbr].match}%</h2>
      </div>
      <div className="header__article--city">
      <h2>Bruxelles, Belgique</h2>
      <h2>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
        (16 Avis)
        </h2>
      <h3>Ajouter aux favoris <i className="fa-regular fa-heart"></i></h3>
      </div>
      <img src="./images/AdobeStock_375686554_Preview.jpeg" />
    </div>
  );
};

export default HeaderArticle;
