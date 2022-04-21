import React from "react";
import { postData } from "../data/post";

const HeaderArticle = ({ nbr }) => {
  return (
    <div>
      <h1>{postData[nbr].title}</h1>
      <h2>Matching {postData[nbr].match}%</h2>
      <h2>{postData[nbr].city}, Belgique</h2>
      <h3>({postData[nbr].notice} avis)</h3>
      <img src={postData[nbr].background} />
    </div>
  );
};

export default HeaderArticle;
