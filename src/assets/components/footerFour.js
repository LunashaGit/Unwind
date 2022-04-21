import React from "react";
const FooterFour = () => {
  return (
    <div className="footerFour">
      <div className="footerFour__box">
        <i className="fa-solid fa-globe"></i>
        <select className="footerFour__select">
          <option value="">Français</option>
          <option value="">Allemand</option>
          <option value="">Anglais</option>
          <option value="">Arabe</option>
          <option value="">Espagnol</option>
          <option value="">Hongrois</option>
          <option value="">Italien</option>
          <option value="">Luxembourgeois</option>
          <option value="">Néerlandais</option>
          <option value="">Polonais</option>
          <option value="">Portugais</option>
        </select>
      </div>
      <p>Inspired by Vicky Rousseau</p>
      <p>Conditions d'utilisation</p>
      <p>Conditions de vente</p>
      <p>Protection des données</p>
      <p>Aide</p>
    </div>
  );
};

export default FooterFour;
