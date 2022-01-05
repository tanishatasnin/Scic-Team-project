import React from "react";
import "./SortingPlants.css";

const SortingPlants = () => {
  return (
    <>
      <h1 className="text-center my-4">
        {" "}
        <span style={{ color: "#A1DA46" }}>Sorting</span> Plants
      </h1>
      <div className="container my-5  ">
        <div className="row  ">
          <div className="image col">
            <img
              className="image__img"
              src="https://i.ibb.co/3z9NZDQ/banner1.jpg"
              alt=""
            />
            <div className=" image__overlay">
              <div className="image__title"> Indoor</div>
              <p className="image__description">LOW LIGHT PLANT</p>
            </div>
          </div>
          <div className="image col">
            <img
              className="image__img  "
              src="https://i.ibb.co/RHHNjsH/banner2.jpg"
              alt=""
            />
            <div className=" image__overlay">
              <div className="image__title"> Indoor</div>
              <p className="image__description">LOW LIGHT PLANT</p>
            </div>
          </div>
        </div>
        <div className="tree__info">
          <div>
            <h2 style={{ color: "#A1DA46" }}>Checkout Plants</h2>
            <p>
              Trees nowadays Lorem ipsum dolor sit amet, <br /> consectetur
              adipiscing elit nam mattis sapien
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingPlants;
