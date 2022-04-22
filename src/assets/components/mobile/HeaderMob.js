import React, { useState } from "react";
import Affirmation from "./../Affirmation";
import SignUp from "./../SignUp";
import Therapie from "./../Therapie";
import Decision from "./../Decision";
import Decompress from "./../Decompress";

const HeaderMob = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonNumber, setButtonNumber] = useState(0);
  const toggle = () => setIsOpen(!isOpen);
  const test = () => {
    switch (buttonNumber) {
      case 0:
        return <Therapie width={"mob"} />;
      case 1:
        return <Decision width={"mob"} />;
      case 2:
        return <Decompress width={"mob"} />;
      case 3:
        return <Affirmation width={"mob"} />;
      case 4:
        return <SignUp width={"mob"} />;
      case 5:
        window.location.href = "/profil";
        break;
      default:
        setIsOpen(!isOpen);
        setButtonNumber(0);
    }
  };

  if (isOpen) {
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="headerMob">
      <h2 className="headerMob__title">Détendez-vous...</h2>
      <p className="headerMob__content">
        Nous trouvons la thérapie qui vous correspond!
      </p>
      <button onClick={(e) => setIsOpen(toggle)} className="button">
        Faites le test
      </button>
      {isOpen && (
        <div className="modal">
          <input
            type="button"
            className="close-modal"
            value="x"
            onClick={toggle}
          />
          <div className="modal-content">
            {test()}
            <button
              className="button button--hover"
              onClick={() => setButtonNumber(buttonNumber + 1)}
            >
              {buttonNumber === 0 ? "C'est parti !" : ""}
              {buttonNumber === 1 || buttonNumber === 2 || buttonNumber === 3
                ? "Suivant"
                : ""}
              {buttonNumber === 4 ? "S'inscrire" : ""}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMob;
