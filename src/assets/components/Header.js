import React from "react";
import { Parallax, Background } from "react-parallax";

const Header = () => {
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
          <button className="button">Faites le test</button>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </Parallax>
    </div>
  );
};

export default Header;
