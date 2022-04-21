import React from "react";
const Carousel = () => {
  return (
    <div >
      <h2 className="carouselTitle">Comment gérer les situations de crises ?</h2>
      <div className="carouselDisplay">
        <div className="carouselDisplay__Box carouselDisplay__Box--one">
            <h4>Se prendre en main face à la dépression</h4>
        </div>
        <div className="carouselDisplay__Box carouselDisplay__Box--one">
            <h4>Gérer les conflits au travail</h4>
        </div>
        <div className="carouselDisplay__Box carouselDisplay__Box--one">
            <h4>Comment retrouver la communication</h4>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
