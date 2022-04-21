import React from "react";
const Carousel = () => {
  return (
    <div className="carousel">
      <h2>Comment gérer les situations de crises ?</h2>
      <p>
        A la recherche d'une solution pour les problèmes familiaux, pour vous ou
        pour vos proches?
      </p>
      <div className="carousel__box">
        <span className=" carousel__arrow carousel__arrow--left">
          <i className="fa-solid fa-angle-left"></i>
        </span>
        <span className=" carousel__arrow carousel__arrow--right">
          <i className="fa-solid fa-angle-right"></i>
        </span>
        <div className="carousel__card carousel__card--one">
          <h4>Se prendre en main face à la dépression</h4>
        </div>
        <div className="carousel__card carousel__card--two">
          <h4>Gérer les conflits au travail</h4>
        </div>
        <div className="carousel__card carousel__card--three">
          <h4>Comment retrouver la communication</h4>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
