import React, { useState, useEffect } from "react";
import FooterFour from "../components/FooterFour";
import FooterOne from "../components/FooterOne";
import FooterTwo from "../components/FooterTwo";
import Navigation from "../components/Navigation";
import FooterThree from "../components/FooterThree";
import PostDeploy from "../components/PostDeploy";
import User from "../components/User";
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
    </div>
  );
};

export default Profil;
