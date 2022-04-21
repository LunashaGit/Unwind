import React, { useState } from "react";
import Carousel from "../components/Carousel";
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
      <Carousel />
    </div>
  );
};

export default Home;
