import React, { useState, useEffect } from "react";
import FooterFour from "../components/FooterFour";
import FooterOne from "../components/FooterOne";
import FooterTwo from "../components/FooterTwo";
import Navigation from "../components/Navigation";
import FooterThree from "../components/FooterThree";
import PostDeploy from "../components/PostDeploy";
import Navigation from "../components/Navigation";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import User from "../components/User";
import FooterGoogle from "../components/FooterGoogle";
import FooterFour from "../components/FooterFour";
import NavigationMob from "../components/mobile/NavigationMob";
const Profil = () => {
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
  return (
<<<<<<< HEAD
    <div className="home">
      <Navigation hide={true} />
      <User />
      <PostDeploy nbr={8} hide={true} />
      <FooterOne />
      <FooterGoogle />
      <FooterThree />
      <FooterFour />
=======
    <div className="profil">
      {window.innerWidth <= 1439 ? (
        <div className="profilMob">
          <NavigationMob />
          <User />
          <PostDeploy nbr={2} hide={true} width={"mob"} />
        </div>
      ) : (
        <div>
          <Navigation hide={true} />
          <User />
          <PostDeploy nbr={8} hide={true} />
          <FooterOne />
          <FooterTwo />
          <FooterThree />
          <FooterFour />
        </div>
      )}
>>>>>>> bast
    </div>
  );
};

export default Profil;
