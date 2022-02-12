import React, { Fragment } from "react";
import Logo from "../../assets/img/Group.png";
import Apple from "../../assets/img/apple.svg";
import Playstore from "../../assets/img/playstore.svg";
import Phone from "../../assets/img/Phone.png";
import "../../assets/fonts/TomatoGrotesk-Regular.otf";
import { AiOutlineArrowDown, AiOutlineAlignRight } from "react-icons/ai";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="factos">
          <div>
            <img src={Logo} alt="" className="logo" />
          </div>

          <ul className="links regular-font">
            <li>
              <a href="#!" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#!">
                Products
                <AiOutlineArrowDown className="links-icon" />
              </a>
            </li>
            <li>
              <a href="#!">Investment Club</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">About Us</a>
            </li>
            <li>
              <a href="#!">FAQs</a>
            </li>
          </ul>

          <i>
            <AiOutlineAlignRight size={25} color="#06969E" />
          </i>
        </div>

        <section className="header-section">
          <div className="header-text">
            <h1 className="regular-font header-title">
              Dollar investments <br></br> that help you grow
            </h1>

            <p className="sans-font header-line">
              We put your money in high quality assets that help you build{" "}
              <br></br>
              wealth and achieve your financial goals.
            </p>

            <div className="sans-font header-fit">
              Your personal wealth manager. Get started with a minimum of $10
            </div>

            <div className="header-dis">
              <button className="sans-font">
                <div>
                  <img src={Apple} alt="" />
                  <div className="header-info">
                    <p>
                      Download on the <b>App Store</b>
                    </p>
                  </div>
                </div>
              </button>

              <button className="sans-font">
                <div className="">
                  <img src={Playstore} alt="" />
                  <div className="header-info">
                    <p>
                      Download on the <b>Play Store</b>
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="">
            <img src={Phone} alt="" className="image-check" />
          </div>
        </section>
      </header>
    </Fragment>
  );
};

export default Header;
