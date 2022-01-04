import React from "react";
import Galary from "../Galary/Galary";
import Simpleslider from "../Plants/Trees/Simpleslider";
import TreeCount from "./TreeCount/TreeCount";
import TreeRemove1 from "./TreeRemove1/TreeRemove1";
import TreeRemove2 from "./TreeRemove2/TreeRemove2";

const Home = () => {
  return (
    <div className="pt-5">
      <h2>Tree Plantation</h2>
      <TreeCount></TreeCount>

      <TreeRemove1></TreeRemove1>
      <TreeRemove2></TreeRemove2>
      <Simpleslider></Simpleslider>
    </div>
  );
};

export default Home;
