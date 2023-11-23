import React from "react";
import "./Home.css";
import bg from "../../Assests/home.jpg";
import btnImg from "../../Assests/shopping-cart.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home">
      <div className="homecontent">
        <span className="content">Home Applainces</span>
        <span className="offer">
          Minimum <span className="offerPer">13% </span>Offer
        </span>
        <p className="homePara">The Best Deal</p>

        <Link>
          <button className="btn">
            <img src={btnImg} alt="shopping bag" className="btnImg" />
            Order Now
          </button>
        </Link>
        <img src={bg} alt=" home applainces" className="bg" />
      </div>
    </section>
  );
};

export default Home;
