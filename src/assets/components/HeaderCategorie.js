import React from "react";

const HeaderCategorie = () => {
  return (
    <div>
      <h1>Sono-Thérapie</h1>
      <h3>Découvrez nos thérapies liées à cette spécialité</h3>
      <div>
          <select>
              <option>Date | Indifférente</option>
              <option>Date | Indifférente</option>
              <option>Date | Indifférente</option>
          </select>
          <select>
              <option>Lieu | Non-défini</option>
              <option>Lieu | Non-défini</option>
              <option>Lieu | Non-défini</option>
          </select>
          <select>
              <option>Trier par | Matching</option>
              <option>Trier par | Matching</option>
              <option>Trier par | Matching</option>
          </select>
      </div>
    </div>
  );
};

export default HeaderCategorie;
