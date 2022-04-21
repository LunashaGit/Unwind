import React from "react";
import { postData } from "../data/post";

const Image = () => {
    console.log(postData)
    return (
        <div>
            <h2>L'expérience en image</h2>
            <img src={postData[0].image} />
            <img src={postData[0].image} />
            <img src={postData[0].image} />
            <img src={postData[0].image} />
            <img src={postData[0].image} />
            <img src={postData[0].image} />
        </div>
    );
};

export default Image;
            