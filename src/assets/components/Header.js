import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__title">Détendez-vous...</h2>
      <p className="header__content">
        Nous trouvons la thérapie qui vous correspond!
      </p>
      <button className="button">Faites le test</button>
      <i class="fa-solid fa-angle-down"></i>
    </div>
  );
};

export default Header;
