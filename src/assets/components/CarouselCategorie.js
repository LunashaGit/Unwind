import React from "react";
const Carousel = () => {
  return (
    <div className="carousel">
      <h2>Nous vous suggérons aussi</h2>
      <p>
        Les personnes ayant aimant la sonothérapie ont appréciés ces thérapies !
      </p>
      <div className="carousel__box">
        <span className=" carousel__arrow carousel__arrow--left">
          <i className="fa-solid fa-angle-left"></i>
        </span>
        <span className=" carousel__arrow carousel__arrow--right">
          <i className="fa-solid fa-angle-right"></i>
        </span>
        <div className="carousel__card carousel__card--one">
          <h4>Découvrez l'hippothérapie</h4>
        </div>
        <div className="carousel__card carousel__card--two">
          <h4>Consultations de psys en ligne</h4>
        </div>
        <div className="carousel__card carousel__card--three">
          <h4>Gestion des traumas par le corps</h4>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
