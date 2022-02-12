import React, { Fragment } from "react";
import V from "../../assets/img/v.png";
import Techstars from "../../assets/img/techstars.png";
import Western from "../../assets/img/westernunion.png";
import Section1 from "../../assets/img/section1.png";
import Section2 from "../../assets/img/section2.png";
import Section2p from "../../assets/img/section2.webp";
import Section3 from "../../assets/img/section3.png";
import Section4 from "../../assets/img/section4.png";
import Arm from "../../assets/img/arm.png";
import Stocks from "../../assets/img/stocks.png";
import Estate from "../../assets/img/estate.png";
import Income from "../../assets/img/income.png";
import Page from "../../assets/img/Page.png";
import Pagep from "../../assets/img/Page.webp";
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
      color: "#fff4f0",
      image: Stocks,
      title: "Stocks",
      body: "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
      footer: "Learn how Stocks works",
    },
    {
      color: "#f7f2ff",
      image: Estate,
      title: "Real Estate",
      body: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
      footer: "Learn how Real Estate works",
    },
    {
      color: "#ecfefe",
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
          <img src={Arm} alt="" className="arm" />
        </div>

        <div>
          <img src={Western} alt="" className="western" />
        </div>

        <div>
          <img src={Techstars} alt="" className="stars" />
        </div>

        <div>
          <img src={V} alt="" className="arm" />
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
          <ImgNextGen
            srcWebp={Section2p}
            fallback={Section2}
            className="image-section"
          />

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
            <h2 className="tile-head bold-font">Choose what's best for you</h2>
            <p className="sans-font">
              Our Auto-invest feature makes it easy to stay consistent, even{" "}
              <br></br>
              when you forget. Set a funding amount, frequency and payment
              <br></br>
              method and Rise will automatically fund your investment, on
              <br></br>
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
          <div
            key={i}
            className={`cards card-after`}
            style={{ backgroundColor: `${item?.color}` }}
          >
            <div className="card-top"></div>
            <div className="card-image">
              <img src={item?.image} alt="" className="" />
            </div>

            <div className="card-body">
              <h1 className="medium-font">{item?.title}</h1>

              <p className="sans-font">{item?.body}</p>

              <div className="card-content">
                <div className="sans-font">
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
          <ImgNextGen
            srcWebp={Pagep}
            fallback={Page}
            alt={""}
            className="image-section"
          />

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

      <div className="rise-cap">
        <h1 className="bold-font">From The People Who Use Rise</h1>
        <p className="sans-font">
          Our mission at Risevest is to empower more people just like you to{" "}
          <br></br> achieve your personal financial goals.
        </p>
      </div>

      <div className="race-cap">
        <h1 className="bold-font text-4xl text-rise-land text-center">
          What our customers are saying
        </h1>
        <p className="sans-font mt-4 text-md text-gray-600 text-center">
          We serve over 80,000 amazing users.
        </p>
      </div>

      <section className="carding">
        {userCards?.map((item, i) => (
          <div key={i} className="cards-user">
            <p className="sans-font">{item?.body}</p>

            <div className="">
              <img src={item?.image} alt="" className="" />
              <span className="bold-font">{item?.name}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="sectionize commute">
        <div className="comma">
          <div className="commas">
            <h2 className="bold-font">Join The Rise Community</h2>
            <p className="sans-font comma-text">
              If you want to go far, go together. Our Telegram community
              surrounds you with others who can help you along your financial
              journey with tips, support, advice and learning. It's completely
              free and open to new and seasoned investors.
            </p>

            <p className="comma-facts">If you want to go far, go together.</p>

            <button className="comma-button bold-font">
              Join our Community
            </button>
          </div>

          <div>
            <ImgNextGen
              srcWebp={Communityp}
              fallback={Community}
              className="image-sect"
              alt={""}
            />
          </div>
        </div>
      </section>

      <section className="last-card">
        <div className="last-flex">
          <div className="last-flow">
            <p className="last-flowp sans-font">Download The Rise App</p>

            <h2 className="last-cap bold-font">
              Join our 100,000 users investing and setting long term goals!
            </h2>

            <p className="sans-font last-flowpp">
              Dollar investments that help you grow
            </p>

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

          <div className="phone">
            <img src={Phone} alt="" className="" />
          </div>
        </div>
      </section>

      <section className="mt-20"></section>
    </Fragment>
  );
};

export default Content;
