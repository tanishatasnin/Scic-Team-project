import React from "react";
import "./TreeRemove1.css";

const TreeRemove1 = () => {
  return (
    <div className="container mb-5">
      <div className="row tree1-section">
        <div className="col-lg-6 col-md-12 col-sm-12  tree1">
          <img src="https://i.ibb.co/74PJGWc/Tree-Remove-1.jpg" alt="" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 tree1-info mt-5">
          <p className="mt-5 mb-4">Professional Land & Tree Maintenance</p>
          <hr style={{ width: "5%", color: "black", fontWeight: "bold" }} />
          <h1 style={{ fontWeight: 360, fontSize: "60px" }}>
            Tree Plantation <br />
            <span style={{ color: "#94da46" }}>
              Is An Bad <br />
              Task
            </span>
          </h1>
          <div className="my-4" style={{ width: "" }}>
            <p>
              Higuera's tree service is proud to serve the comunity work at
              competitive prices.
            </p>
            <p>
              Since the start of our company we have strived to obtain the best
              quality tools so that the jobs are done to the highest standards.
            </p>
          </div>
          <a style={{ textDecoration: "none", color: "#94da46" }} href="#">
            Booking Now{" "}
            <i
              className=" fas fa-chevron-circle-right"
              style={{ color: "#94da46" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TreeRemove1;
