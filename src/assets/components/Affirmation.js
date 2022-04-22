import React from "react";

const Affirmation = () => {
  return (
    <div className="affirmation">
      <h4>En ce moment, je me sens plutôt:</h4>
      <div className="affirmation__box">
        <div className="affirmation__img affirmation__img--one"></div>
        <div className="affirmation__img affirmation__img--two"></div>
        <div className="affirmation__img affirmation__img--three"></div>
        <div className="affirmation__img affirmation__img--four"></div>
        <div className="affirmation__img affirmation__img--five"></div>
      </div>
    </div>
  );
};

export default Affirmation;
