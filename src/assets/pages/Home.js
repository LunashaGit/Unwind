import React, { useState, useEffect } from "react";
import FooterThree from "../components/FooterThree";
import FooterTwo from "../components/FooterTwo";
import FooterFour from "../components/FooterFour";
import Header from "../components/Header";
import HomeDisplay from "../components/HomeDisplay";
import Navigation from "../components/Navigation";
import PostDeploy from "../components/PostDeploy";
import FooterOne from "../components/FooterOne";
import Carousel from "../components/Carousel";
import NavigationMob from "../components/mobile/NavigationMob";
import HeaderMob from "../components/mobile/HeaderMob";

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
  console.log(useWindowDimensions);
  return (
    <div className="home">
      {window.innerWidth <= 1439 ? (
        <div>
          <NavigationMob hide={true} />
          <HeaderMob />
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
