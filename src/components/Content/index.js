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
import Page from "../../assets/img/Page.png";
import Person from "../../assets/img/persons.png";
import People from "../../assets/img/people.png";
import Community from "../../assets/img/Community.png";
import Communityp from "../../assets/img/Community.webp";
import Apple from "../../assets/img/apple.svg";
import Playstore from "../../assets/img/playstore.svg";
import Phone from "../../assets/img/Phone.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgNextGen from "../utils";

const Content = () => {
  const cardItem = [
    {
      color: "bg-stock",
      image: Stocks,
      title: "Stocks",
      body: "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
      footer: "Learn how Stocks works",
    },
    {
      color: "bg-estate",
      image: Estate,
      title: "Real Estate",
      body: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
      footer: "Learn how Real Estate works",
    },
    {
      color: "bg-income",
      image: Income,
      title: "Fixed Income",
      body: "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
      footer: "Learn how Fixed Income works",
    },
  ];

  const userCards = [
    {
      body: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      name: "Lade",
      image: People,
    },
    {
      body: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      name: "Jesse",
      image: People,
    },
    {
      body: "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      name: "Raye",
      image: Person,
    },
  ];
  return (
    <Fragment>
      <p className="bold-font section-first">We are supported by</p>
      <section className="icons-first">
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

      <section className="sectionize">
        <div className="first-tile">
          <div className="inner-tile">
            <h2 className="bold-font tile-head">
              Invest your money in dollars
            </h2>
            <p className="sans-font">
              By holding your investments in a stable <br></br>currency, your
              money grows more over <br></br> time and retains its value better.
            </p>

            <div className="regular-font tile-direct">
              Start investing now{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </div>
          </div>
          <img src={Section1} alt="" className="image-section" />
        </div>

        <div className="section-tile">
          <h1 className="title-cover bold-font">Superior Performance</h1>
          <p className="sans-font tile-body">
            Rise outperforms your other alternatives in two ways. The first is
            through our expert, algorithm driven investment approach that picks
            through over 3,000 data sets to find the perfect investment for you.
          </p>
        </div>

        <div className="first-tile">
          <img src={Section2} alt="" className="image-section" />

          <div className="inner-tile">
            <h2 className="tile-head bold-font">Choose what's best for you</h2>
            <p className="sans-font">
              Unlike other platforms, Rise lets you pick between <br></br>{" "}
              stocks, US real estate and fixed income, according to <br></br>{" "}
              your risk appetite. That way you can spread your risk and{" "}
              <br></br> tap into different investments all in one place.
            </p>
            <div className="regular-font tile-direct">
              Start investing now{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </div>
          </div>
        </div>

        <div className="section-tile">
          <h1 className="title-cover bold-font">Personalization</h1>
          <p className="sans-font tile-body">
            No two people are the same, and everyone’s financial goals are
            different. Rise understands this, which is why we tailor your
            journey to financial freedom to fit you.
          </p>
        </div>

        <div className="first-tile">
          <div className="inner-tile">
            <h2 className="tile-head bold-font">Set goals and reach them</h2>
            <p className="sans-font">
              You can invest towards a goal on Rise--retirement, higher{" "}
              <br></br>
              education, save for your home or travel budgets. Or create a goal
              <br></br>
              of your own and invest periodically to achieve them.
            </p>
            <div className="regular-font tile-direct">
              Start investing now{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </div>
          </div>

          <img src={Section3} alt="" className="image-section" />
        </div>

        <div className="section-tile">
          <h1 className="bold-font title-cover">Diversification</h1>
          <p className="sans-font tile-body">
            Rise offers a choice of three asset classes: US equities, US real
            estate and fixed income assets to provide stability to your
            investments and protection from market declines. You can pick one
            asset class or
          </p>
        </div>

        <div className="first-tile hidden">
          <img src={Section4} alt="" className="image-section" />

          <div className="inner-tile">
            <h2 className="tile-head bold-font">
              We remember so you dont have to
            </h2>
            <p className="sans-font">
              Our Auto-invest feature makes it easy to stay consistent, even
              when you forget. Set a funding amount, frequency and payment
              method and Rise will automatically fund your investment, on
              schedule.
            </p>

            <div className="regular-font tile-direct">
              Start investing now{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </div>
          </div>
        </div>
      </section>

      <div className="sectionize">
        <h1 className="bold-font head-title">Asset Classes</h1>
        <p className="sans-font head-body">
          It’s your money, choose where you invest it
        </p>
      </div>

      <section className="sectionize grid-card">
        {cardItem?.map((item, i) => (
          <div key={i} className={`cards card-after ${item?.color}`}>
            <div className="card-top"></div>
            <div className="card-image">
              <img src={item?.image} alt="" className="" />
            </div>

            <div className="card-body">
              <h1 className="medium-font">{item?.title}</h1>

              <p className="sans-font">{item?.body}</p>

              <div className="card-content">
                <div className="">
                  <span className="">Historical Returns:</span>
                  <span className="sans-font ml-2">14% Per Annum</span>
                </div>

                <div className="">
                  <span className="">Risk Level:</span>
                  <span className="sans-font ml-2">High</span>
                </div>
              </div>

              <div className="regular-font card-link">
                {item?.footer}
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="sectionize idea">
        <div className="ideal">
          <img src={Page} alt="" className="image-section" />

          <div className="idea-page">
            <p className="regular-font">The rise app</p>
            <h2 className="bold-font">
              Save for your <b> future</b>
            </h2>
            <p className="sans-font">
              With Rise, you achieve your financial goals faster.<br></br> Save
              for school, your home, vacations, your<br></br> children’s future
              and more.
            </p>

            <button className="bold-font">Start Saving</button>
          </div>
        </div>
      </section>

      <section className="section">
        <h1 className="bold-font">How we are Regulated</h1>
        <p className="sans-font">
          Rise is registered and regulated both in the US and in Nigeria. The
          founder is registered as an investment adviser with the US SEC. The
          Nigerian SEC regulates Rise's Nigerian investments through a
          trusteeship agreement with ARM Trustees, who oversees investments on
          behalf of the users. And a registered investment subsidiary holds all
          users' assets regulated in the US
        </p>
      </section>

      <div className="hidden lg:block mt-40 w-8/12 xl:px-8 mx-auto">
        <h1 className="bold-font text-4xl text-rise-land text-center">
          From The People Who Use Rise
        </h1>
        <p className="sans-font mt-4 text-md text-gray-600 text-center">
          Our mission at Risevest is to empower more people just like you to{" "}
          <br></br> achieve your personal financial goals.
        </p>
      </div>

      <div className="mt-12 lg:mt-40 px-8 md:hidden mx-auto">
        <h1 className="bold-font text-4xl text-rise-land text-center">
          What our customers are saying
        </h1>
        <p className="sans-font mt-4 text-md text-gray-600 text-center">
          We serve over 80,000 amazing users.
        </p>
      </div>

      <section className="mt-12 w-10/12 xl:px-8 mx-auto grid lg:grid-cols-3 gap-8">
        {userCards?.map((item, i) => (
          <div key={i} className="cards-user p-8 flex flex-col justify-between">
            <p className="sans-font text-gray-600 text-sm">{item?.body}</p>

            <div className="mt-8 flex flex-row items-center">
              <img src={item?.image} alt="" className="w-12 h-12" />
              <span className="ml-4">{item?.name}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-20 lg:mt-40 w-8/12 xl:px-8 mx-auto">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="w-full flex flex-col justify-center md:block">
            <h2 className="mt-4 font-bold bold-font text-center lg:text-left text-4xl flex flex-row">
              Join The Rise Community
            </h2>
            <p className="hidden lg:block sans-font text-md mt-3 text-gray-700">
              If you want to go far, go together. Our Telegram community{" "}
              <br></br>
              surrounds you with others who can help you along your financial
              <br></br>
              journey with tips, support, advice and learning. It's completely
              <br></br>
              free and open to new and seasoned investors.
            </p>

            <p className="block lg:hidden text-center text-gray-600 mt-4">
              If you want to go far, go together.
            </p>

            <button className="bold-font bg-new-green p-4 px-4 text-md mt-6 text-dark-color rounded-md">
              Join our Community
            </button>
          </div>

          <ImgNextGen
            srcWebp={Communityp}
            fallback={Community}
            className="w-96"
          />
        </div>
      </section>

      <section className="mt-40 w-11/12 lg:w-8/12 xl:px-8 mx-auto bg-another-green h-96 pt-8 px-0 lg:p-0 lg:h-96 rounded-lg">
        <div className="flex flex-col justify-evenly lg:flex-row lg:justify-between lg:items-center h-full mx-auto px-4 lg:px-12">
          <div className="flex flex-col justify-between text-center lg:text-left">
            <p className="capitalize sans-font text-rise-land">
              Download The Rise App
            </p>

            <h2 className="mt-4 font-bold bold-font text-2xl lg:text-4xl flex flex-row">
              Join our 100,000 users investing and <br></br> setting long term
              goals!
            </h2>

            <p className="sans-font mt-8">
              Dollar investments that help you grow
            </p>

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

          <div className="mx-auto lg:mx-0 side-crop max-h-80 overflow-hidden mt-2 lg:mt-auto">
            <img src={Phone} alt="" className="w-52 p-4" />
          </div>
        </div>
      </section>

      <section className="mt-20"></section>
    </Fragment>
  );
};

export default Content;
