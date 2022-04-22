import React, { useState, useEffect } from "react";
import FooterFour from "../components/FooterFour";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import FooterTwo from "../components/FooterTwo";
import Header from "../components/Header";
import HomeDisplay from "../components/HomeDisplay";
import Navigation from "../components/Navigation";
import NavigationOnScroll from "../components/NavigationOnScroll";
import PostDeploy from "../components/PostDeploy";
import Avis from "../components/Avis";
import Carousel from "../components/Carousel";
import NavigationMob from "../components/mobile/NavigationMob";

const Home = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  };
  const [changerNavi, setChangerNavi] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? setChangerNavi(true) : setChangerNavi(false);
  });
  return (
    <div className="home">
      {/* {changerNavi ? <NavigationOnScroll /> : <Navigation />} */}
      {window.innerWidth <= 1440 ? (
        <div>
          <NavigationMob hide={true} />
          <Header />
        </div>
      ) : (
        <div>
          <Navigation />
          <Header />
          <HomeDisplay />
          <PostDeploy nbr={4} />
          <Carousel />
          <FooterOne />
          <FooterTwo />
          <FooterThree />
          <FooterFour />
        </div>
      )}
    </div>
  );
};

export default Home;
