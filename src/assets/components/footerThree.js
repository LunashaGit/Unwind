import React from "react";
import { dataFooter } from "../data/dataFooter";
const FooterThree = () => {
  console.log(dataFooter);
  return (
    <div className="footerThree">
      <h3>Professions</h3>
      {dataFooter[0].Professions.map((footer) => {
        return <p>{footer}</p>;
      })}
      <h3>Techniques</h3>
      {dataFooter[1].Technique.map((footer) => {
        return <p>{footer}</p>;
      })}
      <h3>Types</h3>
      {dataFooter[2].Types.map((footer) => {
        return <p>{footer}</p>;
      })}
      <h3>Thèmes</h3>
      {dataFooter[3].Thèmes.map((footer) => {
        return <p>{footer}</p>;
      })}
      <h3>Villes</h3>
      {dataFooter[4].Villes.map((footer) => {
        return <p>{footer}</p>;
      })}
      <h3>Langues</h3>
      {dataFooter[5].Langues.map((footer) => {
        return <p>{footer}</p>;
      })}
    </div>
  );
};

export default FooterThree;
