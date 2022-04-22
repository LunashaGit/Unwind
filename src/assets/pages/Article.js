import React, { useState } from "react";
import Navigation from "../components/Navigation";
import HeaderArticle from "../components/HeaderArticle";
import Reservation from "../components/Reservation";
import BottomArticle from "../components/BottomArticle";
import Experience from "../components/Experience";
import Video from "../components/Video";
import Image from "../components/Image";
import PostDeploy from "../components/PostDeploy";
import FooterOne from "../components/FooterOne";
import FooterGoogle from "../components/FooterGoogle";
import FooterThree from "../components/FooterThree";
import FooterFour from "../components/FooterFour";
const Article = () => {
  const [changerNavi, setChangerNavi] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? setChangerNavi(true) : setChangerNavi(false);
  });
  return (
    <div className="home">
      {/* {changerNavi ? <NavigationOnScroll /> : <Navigation />} */}
      <Navigation />
        <HeaderArticle nbr={1} />
        <Reservation />
        <BottomArticle />
        <Image />
        <Video />
        <Experience />        
        <PostDeploy nbr={4} />
        <FooterOne />
        <FooterGoogle />
        <FooterThree />
        <FooterFour />
    </div>
  );
};

export default Article;
