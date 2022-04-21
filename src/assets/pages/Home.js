import React, { useState } from "react";
import Navigation from "../components/Navigation";
import NavigationOnScroll from "../components/NavigationOnScroll";
const Home = () => {
  const [changerNavi, setChangerNavi] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? setChangerNavi(true) : setChangerNavi(false);
  });
  return (
    <div>
      {changerNavi ? <NavigationOnScroll /> : <Navigation />}
      <div></div>
    </div>
  );
};

export default Home;
