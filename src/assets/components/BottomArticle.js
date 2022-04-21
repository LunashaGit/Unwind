import React from "react";
import { postData } from "../data/post";

const BottomArticle = () => {
  return (
    <div>
      <img src={postData[0].image} />
      <p>{postData[0].tags[0]}</p>
      <p>{postData[0].tags[1]}</p>
      <p>{postData[0].tags[2]}</p>
      <p>{postData[0].textDescription}</p>
    </div>
  );
};

export default BottomArticle;
