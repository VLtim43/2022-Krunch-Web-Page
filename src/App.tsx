import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/components/Header/Header";
import Button from "./components/micro/Button/Button";
import Footer from "./components/components/Footer/Footer";
import Image from "./components/micro/img/Image";
import About from "./components/micro/About/About";
import { Design } from "./components/components/Design/Design";

import { useRef } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

import glassesImg from "../public/glasses.jpg";

function App() {
  //button scroll
  const ref = useRef<null | HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  //
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 505);
    });
  }, []);

  return (
    <div className="App">
      <GlobalStyle />

      <section className="header-section">
        <Header test={scroll ? "a" : "b"} />

        <div className="inner-header" id={scroll ? "a" : "b"}>
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

        <BsChevronCompactDown
          color="white"
          fontSize="2.5em"
          onClick={handleClick}
          className="pageDown"
        />
      </section>

      <section className="about-section">
        <span ref={ref}></span>
        <About
          bigText="About us"
          smallText="Setibulum rutrum quam vitae fringilla tincidunt"
        />
        <div className="section-content">
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

            <p>
              Excepteur sint occaecat cupidatat none proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum voluptate dolor.
            </p>
          </div>

          <Image file={glassesImg} id="glasses" />
        </div>
      </section>

      <section className="section-portfolio">
        <About
          bigText="Portfolio"
          smallText="An eye for detail makes our work beautiful"
        />

        <div className="image-grid">
          <Image file="../public/glasses.jpg" id="grid" text="graphic design" />
          <Image file="../public/glasses.jpg" id="grid" text="print design" />
          <Image file="../public/glasses.jpg" id="grid" text="mobile design" />
          <Image file="../public/glasses.jpg" id="grid" text="3d design" />
          <Image
            file="../public/glasses.jpg"
            id="grid"
            text="interior design"
          />
          <Image file="../public/glasses.jpg" id="grid" text="web design" />
          <Image file="../public/glasses.jpg" id="grid" text="graphic design" />
          <Image file="../public/glasses.jpg" id="grid" text="home design" />
        </div>

        <p>Have a Project in Mind?</p>
        <Button className="transparent-b" text="contact now" id="contact" />
      </section>

      <section className="section-testimonials"></section>

      <section className="section-services">
        <About
          bigText="Services"
          smallText="Scope of our featured premium services"
        />

        <div className="service-grid">
          <Design
            bigText={"web design"}
            smallText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
            }
            icon={"monitor"}
          />
          <Design
            bigText={"web design"}
            smallText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
            }
            icon={"web"}
          />
          <Design
            bigText={"apps design"}
            smallText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
            }
            icon={"android"}
          />
          <Design
            bigText={"PHOTOGRAPHY"}
            smallText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
            }
            icon={"camera"}
          />
          <Design
            bigText={"branding"}
            smallText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
            }
            icon={"wand"}
          />
          <Design
            bigText={"hosting"}
            smallText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae."
            }
            icon={"globe"}
          />
        </div>
      </section>

      <section className="section-team">
        <About
          bigText="awsome team"
          smallText="Setibulum rutrum quam vitae fringilla tincidunt"
        />

        <div className="team-grid">
          <Image
            file="../public/guy1.jpg"
            id={"grid-2"}
            text={"MICHAEL THOMAS"}
            text2={"Creative Director"}
          />
          <Image
            file="../public/guy2.jpg"
            id={"grid-2"}
            text={"ALEXA MEYER"}
            text2={"Creative Director"}
          />
          <Image
            file="../public/guy3.jpg"
            id={"grid-2"}
            text={"JEFFREY STEWARD"}
            text2={"Web Developer"}
          />
          <Image
            file="../public/guy4.jpg"
            id={"grid-2"}
            text={"BRUCE MOORE"}
            text2={"Web Designer"}
          />
        </div>
      </section>

      <section className="section-fake-video">
        <Image file="../public/play.svg" id={"play"} />
        <h3>
          Aenean commodo ligula eget dolor sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus consectetur muse.
        </h3>

        <Button className="default" text="download now" />

      </section>

      <section className="section-news">
        <About
          bigText="latest news"
          smallText="Check out our latest news and activities"
        />

        <Button className="transparent-b" text="read our blog" />
      </section>

      <section className="section-contact">
        <About
          bigText="keep in touch"
          smallText="Setibulum rutrum quam vitae fringilla tincidunt"
        />

        <Button className="default" text="send message" />
      </section>

      <Footer />
    </div>
  );
}

export default App;
