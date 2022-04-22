import React from "react";

const Decision = () => {
  return (
    <div className="decision">
      <h4>Au quotidien, comment prenez-vous vos décisions?</h4>
      <div className="decision__box">
        <div className="decision__card">
          <div className="decision__img decision__img--one"></div>
          <p>Je sais, au fond de moi, ce que j'ai à faire</p>
        </div>

        <div className="decision__card">
          <div className="decision__img decision__img--two"></div>
          <p>Je laisse mon coeur guider</p>
        </div>

        <div className="decision__card">
          <div className="decision__img decision__img--three"></div>
          <p>Je prends mes décisions par la logique</p>
        </div>
      </div>
    </div>
  );
};

export default Decision;
