import React from "react";
import { postData } from "../data/post";
const PostDeploy = (props) => {
  return (
    <div
      className="postDeploy"
      style={
        props.hide
          ? { transform: "translateY(0)", paddingTop: "5rem" }
          : { transform: "translateY(-15rem)", paddingTop: "15rem" }
      }
    >
      {props.hide ? (
        <h3 className="postDeploy__h3">
          Sur le Résultat de votre test, nous vous recommandons ces expériences
          :
        </h3>
      ) : (
        <h2>Nos thérapies près de chez vous</h2>
      )}
      {props.hide ? null : (
        <div className="postDeploy__boxButton">
          <button className="postDeploy__button postDeploy__button--select">
            Bruxelles
          </button>
          <button className="postDeploy__button">Paris</button>
          <button className="postDeploy__button">Anvers</button>
          <button className="postDeploy__button">Lille</button>
          <button className="postDeploy__button">Mons</button>
          <button className="postDeploy__button">Charleroi</button>
          <button className="postDeploy__button">Lyon</button>
          <button className="postDeploy__button">Bordeaux</button>
        </div>
      )}

      <div className="postDeploy__box">
        {postData &&
          postData.slice(0, props.nbr).map((post) => (
            <div className="postDeploy__card" key={post.id}>
              <div
                className="postDeploy__img"
                style={{
                  background: `url(${post.background})no-repeat center/cover`,
                }}
              >
                <i className="fa-regular fa-heart"></i>
                <h3>{post.title}</h3>
                <h4>{post.city}</h4>
                <p>{post.match}%</p>
              </div>
              <div className="postDeploy__info">
                <img src={post.image} alt="" />
                <h3>{post.name}</h3>
                <h4>{post.description}</h4>
                <p>
                  {post.starParagraphe === 4 ? (
                    <>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
      </div>
      <button className="button button--hover">
        Montrez-moi en plus <i className="fa-solid fa-caret-right"></i>
      </button>
    </div>
  );
};

export default PostDeploy;
