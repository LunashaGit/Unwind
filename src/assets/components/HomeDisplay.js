import React from "react";

const HomeDisplay = () => {
  return (
    <div className="homeDisplay">
      <div className="homeDisplay__box">
        <h3>Sono-thérapie</h3>
        <button className="button">Découvrir</button>
      </div>
      <div className="homeDisplay__littleBox homeDisplay__littleBox--one">
        <h4>Découvrez l'hippothérapie</h4>
      </div>
      <div className="homeDisplay__littleBox homeDisplay__littleBox--two">
        <h4>Consultations psy en ligne</h4>
      </div>
      <div className="homeDisplay__littleBox homeDisplay__littleBox--three">
        <h4>Gestion des traumas par le corps</h4>
      </div>
    </div>
  );
};

export default HomeDisplay;
