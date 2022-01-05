import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Blogs from "../Blog/Blogs";
import Plants from "../Plants/Plants";
import Simpleslider from "../Plants/Trees/Simpleslider";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";
import Header from "./Banner/Header";
import PlaceToVisit from "./Banner/PlaceToVisit";
import SortingPlants from "./SortingPlants/SortingPlants";
import TreeCount from "./TreeCount/TreeCount";
import TreeRemove1 from "./TreeRemove1/TreeRemove1";
import TreeRemove2 from "./TreeRemove2/TreeRemove2";

function Home() {
  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "80vh",
      backgroundImage: `url(https://i.ibb.co/qrqSTD6/angele-kamp-ONKFh-JGLv9k-unsplash.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <PlaceToVisit />
      </div>
      <TreeCount></TreeCount>
      <div className="py-3"> <Plants></Plants></div>
      <TreeRemove1></TreeRemove1>
      <TreeRemove2></TreeRemove2>

      <Blogs></Blogs>
      <SortingPlants />
      <Simpleslider></Simpleslider>

      {/* footer add  */}

      <Footer></Footer>
    </div>
  );
}

export default Home;
