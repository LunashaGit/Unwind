import React, { useState } from "react";
import FooterFour from "../components/FooterFour";
import FooterOne from "../components/FooterOne";
import Navigation from "../components/Navigation";
import FooterThree from "../components/FooterThree";
import PostDeploy from "../components/PostDeploy";
import User from "../components/User";
import FooterGoogle from "../components/FooterGoogle";

const Profil = () => {
  const [changerNavi, setChangerNavi] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? setChangerNavi(true) : setChangerNavi(false);
  });
  return (
    <div className="home">
      {/* {changerNavi ? <NavigationOnScroll /> : <Navigation />} */}
      <Navigation hide={true} />
      <User />
      <PostDeploy nbr={8} hide={true} />
      <FooterOne />
      <FooterGoogle />
      <FooterThree />
      <FooterFour />
    </div>
  );
};

export default Profil;
