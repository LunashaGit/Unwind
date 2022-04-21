import React, { useState } from "react";
import FooterFour from "../components/FooterFour";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import FooterTwo from "../components/FooterTwo";
import Header from "../components/Header";
import HomeDisplay from "../components/HomeDisplay";
import Navigation from "../components/Navigation";
import NavigationOnScroll from "../components/NavigationOnScroll";
import Popup from "../components/Popup";
import PostDeploy from "../components/PostDeploy";
import Avis from "../components/Avis";

const Home = () => {
  const [changerNavi, setChangerNavi] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? setChangerNavi(true) : setChangerNavi(false);
  });
  return (
    <div className="home">
      {/* {changerNavi ? <NavigationOnScroll /> : <Navigation />} */}
      <Navigation />
      <Header />
      <HomeDisplay />
      <PostDeploy nbr={4} />
      <FooterOne />
      <FooterTwo />
      <FooterThree />
      <FooterFour />
    </div>
  );
};

export default Home;
