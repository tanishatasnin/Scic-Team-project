import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Blogs from "../Blog/Blogs";
import Plants from "../Plants/Plants";
import Simpleslider from "../Plants/Trees/Simpleslider";
import Header from "./Banner/Header";
import PlaceToVisit from "./Banner/PlaceToVisit";
import TreeCount from "./TreeCount/TreeCount";
import TreeRemove1 from "./TreeRemove1/TreeRemove1";
import TreeRemove2 from "./TreeRemove2/TreeRemove2";

const Home = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '80vh',
      backgroundImage: `url(https://i.ibb.co/qrqSTD6/angele-kamp-ONKFh-JGLv9k-unsplash.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));
  const classes = useStyles();


  return (
    <div className="">

      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <PlaceToVisit />
      </div>
      <TreeCount></TreeCount>
      <TreeRemove1></TreeRemove1>
      <TreeRemove2></TreeRemove2>
      <Plants></Plants>
      <Blogs></Blogs>
      <Simpleslider></Simpleslider>

    </div>
  );
};

export default Home;
