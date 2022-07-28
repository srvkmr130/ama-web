import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import "./styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="top-space"></div>
      <div className="header">
        <div className="carousel">
          <HomeCarousel autoPlay />
        </div>
        <div className="header-info">
          <div className="text-box">
            <div>
              <h1>Agri Mart Annapurna</h1>
            </div>
            <div className="mid-para">
              <p>
                Established in 2008, We are the most dedicated and disciplined
                organisation. We are agricultural equipments manufacturer like
                cultivators, rotary tillers, leveller, MB Plough, Cagewheel etc.
                are some of our varied range of products that we deal in, What
                makes us unique from others is the variety and quality products
                we offer to our much deserved customers. Our highly talented and
                dedicated workforce work under the direct supervision of our
                efficient and skilled management. <br />
                Way, and today we have no hesitation in stating that we the
                unbeatable leaders in the realm of our activity. We also have
                many other agricultural equipment used for farmers.
              </p>
            </div>
            <div>
              <Link to={""} className="hero-btn">
                Visit us to know more
                <FontAwesomeIcon icon="arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="service">
        <h1>Services We Offer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          voluptate.
        </p>
        <div className="row">
          <div className="service-col" data-aos="fade-down-right">
            <h3>Sale</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ad consequuntur asperiores laborum inventore voluptates veniam
              mollitia hic dignissimos id.
            </p>
          </div>
          <div className="service-col" data-aos="zoom-in">
            <h3>Servicing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ad consequuntur asperiores laborum inventore voluptates veniam
              mollitia hic dignissimos id.
            </p>
          </div>
          <div className="service-col" data-aos="fade-down-left">
            <h3>Customer support</h3>
            <p>
              Contact our technical team for support.
              <br />
              06782 - 244881
            </p>
          </div>
        </div>
      </section>

      <section className="products">
        <h1>Our Products</h1>
        <p>Top rated products by our customers</p>

        <div className="products-row">
          <div className="products-col">
            <img
              src={require("../../resources/Rotavator.png")}
              alt="Rotavator"
            />
            <div className="layer">
              <h3>ROTAVATOR</h3>
            </div>
          </div>
          <div className="products-col">
            <img
              src={require("../../resources/THRESHER PADDY.png")}
              alt="THRESHER PADDY"
            />
            <div className="layer">
              <h3>THRESHER PADDY</h3>
            </div>
          </div>
          <div className="products-col">
            <img
              src={require("../../resources/SEED CUM FERTILIZER.png")}
              alt="SEED CUM FERTILIZER"
            />
            <div className="layer">
              <h3>SEED CUM FERTILIZER</h3>
            </div>
          </div>
          <div className="products-col">
            <img
              src={require("../../resources/MINI RICE MILL.png")}
              alt="MINI RICE MILL"
            />
            <div className="layer">
              <h3>MINI RICE MILL</h3>
            </div>
          </div>
          <div className="products-col">
            <img
              src={require("../../resources/SPRING CLUTIVATOR.png")}
              alt="SPRING CLUTIVATOR"
            />
            <div className="layer">
              <h3>SPRING CLUTIVATOR</h3>
            </div>
          </div>
          <div className="products-col">
            <img
              src={require("../../resources/HEAVY DUTY LAND.png")}
              alt="HEAVY DUTY LAND"
            />
            <div className="layer">
              <h3>HEAVY DUTY LAND</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
