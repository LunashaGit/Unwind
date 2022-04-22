import React, { useState } from "react";
import FooterFour from "../components/FooterFour";
import FooterOne from "../components/FooterOne";
import FooterTwo from "../components/FooterTwo";
import Navigation from "../components/Navigation";
import FooterThree from "../components/FooterThree";
import PostDeploy from "../components/PostDeploy";
import User from "../components/User";
const Profil = () => {
  const [changerNavi, setChangerNavi] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? setChangerNavi(true) : setChangerNavi(false);
  });
  return (
    <div className="home">
      {/* {changerNavi ? <NavigationOnScroll /> : <Navigation />} */}
        <Navigation />
        <User />
        <PostDeploy nbr={8} />
        <FooterOne />
        <FooterTwo />
        <FooterThree />
        <FooterFour />
    </div>
  );
};

export default Profil;
