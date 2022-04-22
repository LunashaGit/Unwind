import React, { useState } from "react";
import FooterFour from "../components/FooterFour";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import FooterTwo from "../components/FooterTwo";
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
      {/* {changerNavi ? <NavigationOnScroll /> : <Navigation />} */}
        <Navigation />
        <HeaderCategorie />
        <PostDeploy nbr={8} />
        <CarouselCategorie />
        <FooterOne />
        <FooterTwo />
        <FooterThree />
        <FooterFour />
    </div>
  );
};

export default Categorie;
