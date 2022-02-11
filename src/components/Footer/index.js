import React, { Fragment } from "react";
import Image from "../../assets/img/rise.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { BsArrowUpRight } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      <footer className="mt-28 w-11/12 lg:w-8/12 xl:px-0 mx-auto mb-20 flex flex-row flex-wrap justify-between items-start">
        <div>
          <div>
            <img src={Image} alt="" className="w-16" />
          </div>
          <ul className="mt-6 sans-font text-gray-600">
            <li className="mt-4">About us</li>
            <li className="mt-4">Careers</li>
            <li className="mt-4">FAQs</li>
            <li className="mt-4">Contact Info</li>
            <li className="mt-4">Press</li>
            <li className="mt-4">Rise Impact</li>
          </ul>
        </div>
        <div>
          <h3 className="bold-font text-md">Explore</h3>
          <ul className="mt-6 sans-font text-gray-600">
            <li className="mt-4 flex flex-row items-center">
              Investment Club <BsArrowUpRight className="ml-1" />
            </li>
            <li className="mt-4 flex flex-row items-center">
              Blog <BsArrowUpRight className="ml-1" />
            </li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="bold-font text-md">Products</h3>
          <ul className="mt-6 sans-font text-gray-600">
            <li className="mt-4">Rise App</li>
            <li className="mt-4">Wallets</li>
            <li className="mt-4">Assets Classes</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="bold-font text-md">Contact Us</h3>
          <ul className="mt-6 sans-font text-gray-600">
            <li className="mt-4 flex flex-row items-center">
              0818 714 7405 <BsArrowUpRight className="ml-1" />
            </li>
            <li className="mt-4 flex flex-row items-center">
              hello@rise.capital <BsArrowUpRight className="ml-1" />
            </li>
            <li className="mt-4 flex flex-row items-center">
              Newsletter <BsArrowUpRight className="ml-1" />
            </li>
            <li className="mt-4 flex flex-row items-center">
              Instagram <BsArrowUpRight className="ml-1" />
            </li>
            <li className="mt-4 flex flex-row items-center">
              Twitter <BsArrowUpRight className="ml-1" />
            </li>
          </ul>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
