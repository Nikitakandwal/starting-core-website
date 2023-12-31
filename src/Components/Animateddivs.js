import React from "react";
// import { CSSTransition } from 'react-transition-group';
import "./AnimatedDivs.css";

function AnimatedDivs() {
  return (
    <>
      <div className="field1">
        <div className="animated-divs-container">
          <div className="field">
            <div className="TEXT">
              <div>
                <h1 className="frameText">Web Developers </h1>
                <p className=" textdes">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="buttons">
                <button className="btnOur" type="Submit">
                  Our Projects
                </button>
                <button className="btnUs" type="Submit">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="frames" data-aos="fade-up">
              <img className="frame" src="./images/grafikstash.png" alt="#" />
            </div>
          </div>
          <h3 className="show animated">SCROLL DOWN</h3>
          <img className="down animated" src="./images/down.png" alt="#" />
        </div>
      </div>

      <div className="field1">
        <div className="animated-divs-container">
          <div className="field">
            <div className="TEXT" data-aos="zoom-in">
              <div>
                <h1 className="frameText app-text">App Developers </h1>
                <p className=" textdes app-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="buttons app-btns">
                <button className="btnOur" type="Submit">
                  Our Projects
                </button>
                <button className="btnUs" type="Submit">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="frames" data-aos="fade-up">
              <img className="frame" src="./images/app-dev.png" alt="#" />
            </div>
          </div>
          <h3 className="show animated">SCROLL DOWN</h3>
          <img className="down animated" src="./images/down.png" alt="#" />
        </div>
      </div>

      <div className="field1">
        <div className="animated-divs-container">
          <div className="field">
            <div className="TEXT animated-div div2 " data-aos="zoom-in">
              <div>
                <h1 className="frameText">Ui/Ux Developers </h1>
                <p className=" textdes">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="buttons">
                <button className="btnOur" type="Submit">
                  Our Projects
                </button>
                <button className="btnUs" type="Submit">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="frames" data-aos="fade-up">
              <img className="frame" src="./images/uiux 1.png" alt="#" />
            </div>
          </div>
          <h3 className="show animated">SCROLL DOWN</h3>
          <img className="down animated" src="./images/down.png" alt="#" />
        </div>
      </div>
      <div className="field1">
        <div className="animated-divs-container">
          <div className="field">
            <div className="TEXT animated-div div2 " data-aos="zoom-in">
              <div>
                <h1 className="frameText">Graphic Designer </h1>
                <p className=" textdes">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="buttons">
                <button className="btnOur" type="Submit">
                  Our Projects
                </button>
                <button className="btnUs" type="Submit">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="frames" data-aos="fade-up">
              <img className="frame" src="./images/graphic-img.png" alt="#" />
            </div>
          </div>
          <h3 className="show animated">SCROLL DOWN</h3>
          <img className="down animated" src="./images/down.png" alt="#" />
        </div>
      </div>
    </>
  );
}

export default AnimatedDivs;
