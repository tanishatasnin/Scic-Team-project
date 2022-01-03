import React from "react";
import Galary from "../Galary/Galary";
import Plants from "../Plants/Plants";

import TreeRemove1 from "./TreeRemove1/TreeRemove1";
import TreeRemove2 from "./TreeRemove2/TreeRemove2";

const Home = () => {
  return (
    <div id="home">
      <Plants></Plants>
      <Galary></Galary>
      {/* <TreeRemove1></TreeRemove1>
      <TreeRemove2></TreeRemove2> */}
    </div>
  );
};

export default Home;
