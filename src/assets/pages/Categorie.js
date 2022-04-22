import React, { useState } from "react";
import Navigation from "../components/Navigation";
import HeaderArticle from "../components/HeaderArticle";
import Reservation from "../components/Reservation";
import BottomArticle from "../components/BottomArticle";
import Experience from "../components/Experience";
import Video from "../components/Video";
import Image from "../components/Image";
import PostDeploy from "../components/PostDeploy";
const Home = () => {
  const [changerNavi, setChangerNavi] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? setChangerNavi(true) : setChangerNavi(false);
  });
  return (
    <div className="home">
      {/* {changerNavi ? <NavigationOnScroll /> : <Navigation />} */}
        <Navigation />
        <PostDeploy nbr={8} />
    </div>
  );
};

export default Home;
