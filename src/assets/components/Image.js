import React from "react";
import { postData } from "../data/post";

const Image = () => {
  return (
    <div>
      <h2>L'expérience en image</h2>
      <img src={postData[0].image} alt="img" />
      <img src={postData[0].image} alt="img" />
      <img src={postData[0].image} alt="img" />
      <img src={postData[0].image} alt="img" />
      <img src={postData[0].image} alt="img" />
      <img src={postData[0].image} alt="img" />
    </div>
  );
};

export default Image;
