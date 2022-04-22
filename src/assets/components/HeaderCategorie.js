import React from "react";
import { postData } from "../data/post";

const HeaderArticle = ({ nbr }) => {
  return (
    <div>
      <h1>{postData[nbr].title}</h1>
      <h2>Découvrez nos thérapies liées à cette spécialité</h2>
    </div>
  );
};

export default HeaderArticle;
