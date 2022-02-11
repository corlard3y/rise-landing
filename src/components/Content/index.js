import React, { Fragment } from "react";
import V from "../../assets/img/v.png";
import Techstars from "../../assets/img/techstars.png";
import Western from "../../assets/img/westernunion.png";
import Section1 from "../../assets/img/section1.png";
import Section2 from "../../assets/img/section2.png";
import Section3 from "../../assets/img/section3.png";
import Section4 from "../../assets/img/section4.png";
import Arm from "../../assets/img/arm.png";
import Stocks from "../../assets/img/stocks.png";
import Estate from "../../assets/img/estate.png";
import Income from "../../assets/img/income.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = () => {
  return (
    <Fragment>
      <section className="mt-12 w-4/12 mx-auto flex flex-row justify-between items-center">
        <div>
          <img src={Arm} alt="" className="w-16" />
        </div>

        <div>
          <img src={Western} alt="" className="w-44" />
        </div>

        <div>
          <img src={Techstars} alt="" className="w-36" />
        </div>

        <div>
          <img src={V} alt="" className="w-16" />
        </div>
      </section>

      <section className="mt-20 w-8/12 xl:px-8 mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="font-bold bold-font text-3xl">
              Invest your money in dollars
            </h2>
            <p className="sans-font text-md mt-3 text-gray-700">
              By holding your investments in a stable <br></br>currency, your
              money grows more over <br></br> time and retains its value better.
            </p>

            <p className="regular-font text-md mt-6 text-rise-land">
              Start investing now{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </p>
          </div>
          <img src={Section1} alt="" className="w-96" />
        </div>

        <div className="mt-32 flex flex-row justify-between items-center">
          <img src={Section2} alt="" className="w-96" />

          <div>
            <h2 className="font-bold bold-font text-3xl">
              Choose what's best for you
            </h2>
            <p className="sans-font text-md mt-3 text-gray-700">
              Unlike other platforms, Rise lets you pick between <br></br>{" "}
              stocks, US real estate and fixed income, according to <br></br>{" "}
              your risk appetite. That way you can spread your risk and{" "}
              <br></br> tap into different investments all in one place.
            </p>

            <p className="regular-font text-md mt-6 text-rise-land">
              Start investing now{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </p>
          </div>
        </div>

        <div className="mt-32 flex flex-row justify-between items-center">
          <div>
            <h2 className="font-bold bold-font text-3xl">
              Set goals and reach them
            </h2>
            <p className="sans-font text-md mt-3 text-gray-700">
              You can invest towards a goal on Rise--retirement, higher{" "}
              <br></br>
              education, save for your home or travel budgets. Or create a goal
              <br></br>
              of your own and invest periodically to achieve them.
            </p>

            <p className="regular-font text-md mt-6 text-rise-land">
              Start investing now{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </p>
          </div>

          <img src={Section3} alt="" className="w-96" />
        </div>

        <div className="mt-32 flex flex-row justify-between items-center">
          <img src={Section4} alt="" className="w-96" />

          <div>
            <h2 className="font-bold bold-font text-3xl">
              We remember so you dont have to
            </h2>
            <p className="sans-font text-md mt-3 text-gray-700">
              Our Auto-invest feature makes it easy to stay consistent, even
              <br></br>
              when you forget. Set a funding amount, frequency and payment
              <br></br>
              method and Rise will automatically fund your investment, on
              <br></br>
              schedule.
            </p>

            <p className="regular-font text-md mt-6 text-rise-land">
              Start investing now{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </p>
          </div>
        </div>
      </section>

      <div className="mt-24 w-8/12 xl:px-8 mx-auto">
        <h1 className="bold-font text-4xl text-center">Asset Classes</h1>
        <p className="sans-font mt-4 text-md text-center">
          It’s your money, choose where you invest it
        </p>
      </div>

      <section className="mt-12 w-8/12 xl:px-8 mx-auto grid lg:grid-cols-3 gap-4">
        <div className="cards w-full border border-gray-100 rounded-lg bg-stock flex-col">
          <div className="h-8 rounded-t-lg"></div>
          <div className="w-full ">
            <img
              src={Stocks}
              alt=""
              className="w-24 relative top-12 mx-auto border-8 border-white rounded-full"
            />
          </div>

          <div className="p-6 rounded-t-2xl bg-white flex-1">
            <h1 className="mt-12 medium-font text-xl text-center">Stocks</h1>

            <p className="sans-font text-gray-600 mt-6">
              We help you invest and manage your money by investing in our
              portfolio of 30 high-growth stocks across the US market with our
              equity portfolio of power stocks.
            </p>

            <div className="mt-8 text-center">
              <span className="text-gray-400 regular-font">
                Historical Returns:
              </span>
              <span className="sans-font ml-2">14% Per Annum</span>
            </div>

            <div className="mt-0 text-center">
              <span className="text-gray-400 regular-font">Risk Level:</span>
              <span className="sans-font ml-2">High</span>
            </div>

            <p className="mt-12 regular-font text-rise-land text-center">
              Learn how Stocks works{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </p>
          </div>
        </div>

        <div className="cards w-full border border-gray-100 rounded-lg bg-estate flex-col">
          <div className="h-8 rounded-t-lg"></div>
          <div className="w-full ">
            <img
              src={Estate}
              alt=""
              className="w-24 relative top-12 mx-auto border-8 border-white rounded-full"
            />
          </div>

          <div className="p-6 rounded-t-2xl bg-white flex-1">
            <h1 className="mt-12 regular-font text-xl text-center">
              Real Estate
            </h1>

            <p className="sans-font text-gray-600 mt-6">
              Our Real Estate plan is the sweet middle. Best for those who want
              a balance of good returns and medium risk. This plan invests in
              rented buildings in the US
            </p>

            <div className="mt-8 text-center">
              <span className="text-gray-400 regular-font">
                Historical Returns:
              </span>
              <span className="sans-font ml-2">14% Per Annum</span>
            </div>

            <div className="mt-0 text-center">
              <span className="text-gray-400 regular-font">Risk Level:</span>
              <span className="sans-font ml-2">Medium</span>
            </div>

            <p className="mt-12 regular-font text-rise-land text-center">
              Learn how Real Estate works{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </p>
          </div>
        </div>

        <div className="cards w-full border border-gray-100 rounded-lg bg-income flex-col">
          <div className="h-8 rounded-t-lg"></div>
          <div className="w-full ">
            <img
              src={Income}
              alt=""
              className="w-24 relative top-12 mx-auto border-8 border-white rounded-full"
            />
          </div>

          <div className="p-6 rounded-t-2xl bg-white flex-1">
            <h1 className="mt-12 regular-font text-xl text-center">
              Fixed Income
            </h1>

            <p className="sans-font text-gray-600 mt-6">
              A low-risk asset perfect for anyone who wants to protect their
              money in a secure, appreciating currency, i.e. the dollar. For
              people who want to protect their hard-earned money from inflation
              while earning steady returns.
            </p>

            <div className="mt-8 text-center">
              <span className="text-gray-400 regular-font">
                Historical Returns:
              </span>
              <span className="sans-font ml-2">14% Per Annum</span>
            </div>

            <div className="mt-0 text-center">
              <span className="text-gray-400 regular-font">Risk Level:</span>
              <span className="sans-font ml-2">Medium</span>
            </div>

            <p className="mt-6 regular-font text-rise-land text-center">
              Learn how Fixed Income works{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20"></section>
    </Fragment>
  );
};

export default Content;
