import React from "react";

const FooterOne = () => {
  return (
    <div className="footerOne">
      <div className="footerOne__box">
        <h3>Suivez-Nous</h3>
        <div className="footerOne__links">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
      <div className="footerOne__box">
        <h3>Pour les patients</h3>
        <p>Comment ça marche?</p>
        <p>Les thérapies </p>
      </div>
      <div className="footerOne__box">
        <h3>Pour les professionnels</h3>
        <p>Comment ça marche?</p>
        <p>S'inscrire</p>
      </div>
      <div className="footerOne__box">
        <h3>Actualités</h3>
        <p>Articles</p>
        <p>Newsletter</p>
      </div>
      <div className="footerOne__box">
        <h3>Aide</h3>
        <p>Centre d'aide</p>
        <p>Contactez-nous</p>
        <p>Protection des données</p>
      </div>
    </div>
  );
};

export default FooterOne;
