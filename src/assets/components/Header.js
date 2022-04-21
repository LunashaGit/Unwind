import React, { useEffect, useState } from "react";
import { Parallax, Background } from "react-parallax";
import Affirmation from "./Affirmation";
import Avis from "./Avis";
import SignUp from "./SignUp";
import Therapie from "./Therapie";
import Decision from "./Decision";
import Decompress from "./Decompress";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [buttonNumber, setButtonNumber] = React.useState(0);
  const toggle = () => setIsOpen(!isOpen);
  const test = () => {
    switch (buttonNumber) {
      case 0:
        return <Therapie />;
      case 1:
        return <Decision />;
      case 2:
        return <Decompress />;
      case 3:
        return <Affirmation />;
      case 4:
        return <Avis />;
      case 5:
        return <SignUp />;
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
    <div className="header">
      <Parallax strength={300}>
        <Background>
          <div className="header__parallax" />
        </Background>
        <div className="header__box">
          <h2 className="header__title">Détendez-vous...</h2>
          <p className="header__content">
            Nous trouvons la thérapie qui vous correspond!
          </p>
          <button onClick={(e) => setIsOpen(toggle)} className="button">
            Faites le test
          </button>
          <i class="fa-solid fa-angle-down"></i>
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
                  C'est parti !
                </button>
              </div>
            </div>
          )}
        </div>
      </Parallax>
    </div>
  );
};

export default Header;
