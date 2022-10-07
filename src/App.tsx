import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/components/Header/Header";
import Button from "./components/micro/Button/Button";
import Footer from "./components/components/Footer/Footer";
import Image from "./components/micro/img/Image";
import About from "./components/micro/About/About";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <section className="header-section">
        <Header />
        
      </section>

      <div className="a"><section className="about-section">
        <About
          smallText="Setibulum rutrum quam vitae fringilla tincidunt"
          bigText="About us"
        />
        <div className="section-content">
          <p>
            Lorem ipsum dolor sitamet, consectetur adipisicing elit, seddo
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quisus nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            
            Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. <br/><br/>Excepteur
            sint occaecat cupidatat none proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum voluptate dolor.
          </p>

          <Image file="../public/glasses.jpg" Id="glasses" />
        </div>
      </section></div>

      <Footer />
    </div>
  );
}

export default App;
