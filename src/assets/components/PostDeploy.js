import React from "react";
import {postData} from "../data/post";
const PostDeploy = ({min, max}) => {
    return (
        <div>
             {
                postData.slice(min, max).map(post => {
                    return (
                        <div key={post.id}>
                            <h1>{post.name}</h1>
                            <p>{post.description}</p>
                            <img src={post.star} alt="star" />
                            <p>{post.starParagraphe}</p>
                            <p>{post.match}%</p>
                            <img src={post.image} alt="image" />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PostDeploy;
