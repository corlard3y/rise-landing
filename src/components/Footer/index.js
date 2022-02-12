import React, { Fragment } from "react";
import Image from "../../assets/img/rise.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { BsArrowUpRight } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer-card">
        <div className="footer-tab">
          <div>
            <img src={Image} alt="" className="" />
          </div>
          <div className="sans-font">
            <p>About us</p>
            <p>Careers</p>
            <p>FAQs</p>
            <p>Contact Info</p>
            <p>Press</p>
            <p>Rise Impact</p>
          </div>
        </div>
        <div className="footer-tab">
          <b className="bold-font">Explore</b>
          <div className="sans-font">
            <p className="foot">
              Investment Club <BsArrowUpRight className="ml-1" />
            </p>
            <p className="foot">
              Blog <BsArrowUpRight className="ml-1" />
            </p>
          </div>
        </div>
        <div className="footer-tab">
          <b className="bold-font">Products</b>
          <div className="sans-font">
            <p>Rise App</p>
            <p>Wallets</p>
            <p>Assets Classes</p>
          </div>
        </div>
        <div className="footer-tab">
          <b className="bold-font">Contact Us</b>
          <div className="sans-font">
            <p className="foot">
              0818 714 7405 <BsArrowUpRight className="ml-1" />
            </p>
            <p className="foot">
              hello@rise.capital <BsArrowUpRight className="ml-1" />
            </p>
            <p className="foot">
              Newsletter <BsArrowUpRight className="ml-1" />
            </p>
            <p className="foot">
              Instagram <BsArrowUpRight className="ml-1" />
            </p>
            <p className="foot">
              Twitter <BsArrowUpRight className="ml-1" />
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
