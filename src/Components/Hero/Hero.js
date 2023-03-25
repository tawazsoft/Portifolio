import React from "react";
import"./Hero.css";
import hero2 from'../images/hero2.png';
import ana from "../images/4.png";
import ex from"../images/Ex.png";
import setting from"../images/icon1.jpg";
import mode from"../images/3.png";


const Hero = () => {

    return (

      <>
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
        
      
      </section>
      {/* About */}
      <section className="About">
      <h2>What I do.</h2>
      <div className="About-inner">
        <div className="A-text">
          <img className="img-3" src={ex} alt="ux" />
          <h3>My Expertise</h3>
          <div className="my_ex">
            <h4>
              <img src={setting} alt="ux" />
              UI/UX Design
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut.
            </p>
            <hr />
          </div>
          <div className="my_ex">
            <h4>
              <img src={mode} alt="ux" />
              Web Development
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat.
            </p>
            <hr />
          </div>
          <div className="my_ex">
            <h4>
              <img src={ana} alt="ux" />
              Digital Marketing
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat.
            </p>
            <hr />
          </div>
        </div>
        <div className="A-text">
          <h3>My Skills</h3>
          <img className="img-4" src={ex} alt="ux" />

          <div className="skill-box">
            <span className="title">HTML</span>
            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">CSS</span>
            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">JavaScript</span>
            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">60%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">NodeJS</span>
            <div className="skill-bar">
              <span className="skill-per nodejs">
                <span className="tooltip">40%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">ReactJS</span>
            <div className="skill-bar">
              <span className="skill-per reactjs">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">ExpressJS</span>
            <div className="skill-bar">
              <span className="skill-per expressjs">
                <span className="tooltip">75%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="My-Work">
      <h2>Some Of My Best Work.</h2>

      




      </section>

    </>
    );
}

export default Hero;

