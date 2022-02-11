import React, { Fragment } from "react";
import Logo from "../../assets/img/Group.png";
import Apple from "../../assets/img/apple.svg";
import Playstore from "../../assets/img/playstore.svg";
import Phone from "../../assets/img/Phone.png";
import "../../assets/fonts/TomatoGrotesk-Regular.otf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Fragment>
      <header className="w-screen lg:h-screen header">
        <div className="sm:10/12 xl:w-8/12 mx-auto flex flex-row justify-between items-center p-8 xl:px-8">
          <div>
            <img src={Logo} alt="" className="w-16" />
          </div>

          <ul className="hidden sm:w-2/3 xl:w-3/5 sm:flex flex-row justify-between regular-font text-md links">
            <li>
              <a href="#!" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#!">
                Products <FontAwesomeIcon icon={faArrowDown} className="ml-1" />
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
        </div>

        <div className="sm:10/12 xl:w-8/12 mx-auto mt-36 px-8 xl:px-8">
          <section className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col">
              <div className="medium-font text-center lg:text-left text-rise-dark text-4xl font-bold lg:text-normal lg:text-6xl flex flex-col">
                <span className="">Dollar investments</span>
                <span className="mt-4 ">that help you grow</span>
              </div>

              <div className="hidden mt-8 lg:flex flex-col text-gray-600 sans-font">
                <p>
                  We put your money in high quality assets that help you build{" "}
                </p>
                <p>wealth and achieve your financial goals.</p>
              </div>

              <div className="flex mt-8 lg:hidden text-center lg:text-left flex-col text-gray-600 sans-font">
                <p>Your personal wealth manager.</p>
                <p> Get started with a minimum of $10 and</p>
              </div>

              <div className="flex flex-row">
                <div className="mt-8 sans-font">
                  <div className="bg-dark-color rounded-lg w-40 h-12 p-2 flex flex-row items-center justify-evenly">
                    <img src={Apple} alt="" className="" />
                    <div className="text-white text-xs">
                      <span>Download on the</span>
                      <p className="font-bold">App Store</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sans-font ml-6">
                  <div className="bg-dark-color rounded-lg w-40 h-12 p-2 flex flex-row items-center justify-evenly">
                    <img src={Playstore} alt="" className="" />
                    <div className="text-white text-xs">
                      <span>Download on the</span>
                      <p className="font-bold">Play Store</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 xl:mt-0">
              <img src={Phone} alt="" className="w-64" />
            </div>
          </section>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
