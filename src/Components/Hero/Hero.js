import React from "react";
import"./Hero.css";
import hero2 from'../images/hero2.png';
// import { Link } from "react-router-dom";

const Hero = () => {

    return (
      <section className="hero">
        <div className="h-text">
          <h1>
            Hello, my name is
            <span>Tawanda Mashanda</span>
          </h1>

          <h2>I' m a Front-End Web-Developer</h2>

          <p>
            A Front-End Web Developer who creates amazing website experiences
            tailored to a pleasing UI.
          </p>
        </div>
        
          <div className="h-image">
            <img src={hero2} alt="hero" className="img-fluid" />
          </div>
        
        {/* <Link to="/">
          tawanda
        </Link> */}
      </section>
    );
}

export default Hero;

