import React from "react";
import Popup from "./Popup";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__title">Détendez-vous...</h2>
      <p className="header__content">
        Nous trouvons la thérapie qui vous correspond!
      </p>
      <button className="button" onClick={<Popup />}>Faites le test</button>
      <i class="fa-solid fa-angle-down"></i>
    </div>
  );
};

export default Header;
