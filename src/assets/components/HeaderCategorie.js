import React from "react";

const HeaderCategorie = () => {
  return (
    <div className="header__categorie">
      <h1>Sono-Thérapie</h1>
      <h3>Découvrez nos thérapies liées à cette spécialité</h3>
      <div>
          <select className="header__categorie__select header__categorie__select--one">
              <option>Date | Indifférente</option>
              <option>Date | Indifférente</option>
              <option>Date | Indifférente</option>
          </select>
          <select className="header__categorie__select header__categorie__select--two">
              <option>Lieu | Non-défini</option>
              <option>Lieu | Non-défini</option>
              <option>Lieu | Non-défini</option>
          </select>
          <select className="header__categorie__select header__categorie__select--three">
              <option>Trier par | Matching</option>
              <option>Trier par | Matching</option>
              <option>Trier par | Matching</option>
          </select>
      </div>
    </div>
  );
};

export default HeaderCategorie;
