import React, { useState } from "react";
import Header from "../components/Header";
import HomeDisplay from "../components/HomeDisplay";
import Navigation from "../components/Navigation";
import NavigationOnScroll from "../components/NavigationOnScroll";

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
    </div>
  );
};

export default Home;
