import React from "react";
import "./Category.css";
import CategoryImg1 from "../../Assests/lap.jpg";
import CategoryImg2 from "../../Assests/washer.jpg";
import CategoryImg3 from "../../Assests/mixer.jpg";
import CategoryImg4 from "../../Assests/watch.jpg";
import CategoryImg5 from "../../Assests/speaker.jpg";
import CategoryImg6 from "../../Assests/phone.jpg";

const Category = () => {
  return (
    <section id="category">
      <h2 className="categoryTitle">Category</h2>
      <span className="categoryDec">
        A home appliance, also referred to as a domestic appliance, an electric
        appliance or a household appliance, is a machine which assists in
        household functions such as cooking, cleaning and food preservation.
      </span>
      <div className="categoryImgs">
      <img src={CategoryImg1} alt="" className="categoryImg" />
      <img src={CategoryImg2} alt="" className="categoryImg" />
      <img src={CategoryImg3} alt="" className="categoryImg" />
      <img src={CategoryImg4} alt="" className="categoryImg" />
      <img src={CategoryImg5} alt="" className="categoryImg" />
      <img src={CategoryImg6} alt="" className="categoryImg" />
      </div>
      <button className="categorybtn">See More</button>
    </section>
  );
};

export default Category;
