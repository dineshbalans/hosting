import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";

const Header = () => {
  
  return (
    <section className="sticky top-0 z-50">
      {/* <TopBar / */}
      <NavBar />
    </section>
  );
};

export default Header;
