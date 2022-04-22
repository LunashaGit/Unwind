import React, { useState } from "react";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import FooterFour from "../components/FooterFour";
import FooterGoogle from "../components/FooterGoogle";
import HeaderCategorie from "../components/HeaderCategorie";
import Navigation from "../components/Navigation";
import CarouselCategorie from "../components/CarouselCategorie";
import PostDeploy from "../components/PostDeploy";
const Categorie = () => {
  const [changerNavi, setChangerNavi] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? setChangerNavi(true) : setChangerNavi(false);
  });
  return (
    <div className="home">
        <Navigation />
        <HeaderCategorie />
        <PostDeploy nbr={8} CatHide={true}/>
        <CarouselCategorie />
        <FooterOne />
        <FooterGoogle />
        <FooterThree />
        <FooterFour />
    </div>
  );
};

export default Categorie;
