import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/components/Header/Header";
import Button from "./components/micro/Button/Button";
import Footer from "./components/components/Footer/Footer";
import Image from "./components/micro/img/Image";
import About from "./components/micro/About/About";


import {useRef} from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';




function App() {
  const ref = useRef<null | HTMLDivElement>(null); 

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="App">
      <GlobalStyle />

      <section className="header-section">
        <Header />
        <div className="inner-header">
          <h1 className="inner-h1">Clean and Flexible Template</h1>
          <h3 className="inner-h3">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat.{" "}
          </h3>

          <div className="button-div">
            <Button className="default" text="download now" />
            <Button className="transparent" text="view features" />
          </div>

          
        </div>
        <BsChevronCompactDown color="white" fontSize="2.5em" onClick={handleClick}/>
      </section>

      <section className="about-section" ref={ref} >
          <About
            smallText="Setibulum rutrum quam vitae fringilla tincidunt"
            bigText="About us"
          />
          <div className="section-content" >
            <div className="section-content-p">
            <p>
              Lorem ipsum dolor sitamet, consectetur adipisicing elit, seddo
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quisus nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <p >
              Excepteur sint occaecat cupidatat none proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum voluptate dolor.
            </p>
            </div>

            <Image file="../public/glasses.jpg" Id="glasses" />
          </div>
      </section >
      

      <Footer />
    </div>
  );
}

export default App;
