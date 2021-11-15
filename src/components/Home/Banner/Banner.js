import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import carouselImage1 from "../../../images/home-bg-1.png";
import carouselImage2 from "../../../images/home-bg-2.png";
import carouselImage3 from "../../../images/home-bg-3.png";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "40em",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `calc(100vw + 48px)`,
    margin: "-24px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    boxShadow: "none",
  },
  banner1: {
    backgroundImage: `url(${carouselImage1})`,
  },
  carouselContent: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(3),
  },
  btn: {
    padding: theme.spacing(1.5, 4),
    marginRight: theme.spacing(4),
    color: "contained",
    border: "1px solid #fff ",
    borderRadius: "0",
    fontWeight: "600",
    "&:hover": {
      background: "#fff",
      transition: "all .2s ease",
    },
  },
  bannerTitle: {
    fontSize: "65px",
    margin: "1rem 0 1rem",
    textAlign: "left",
  },
  bannerText: {
    fontSize: "28px",
    width: "35rem",
    margin: "1rem 0 4rem",
  },
}));

const Banner = (props) => {
  const classes = useStyles();
  return (
    <Carousel>
      <Paper className={clsx(classes.carousel, classes.banner1)}>
        <Slide
          direction="right"
          in={true}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.carouselContent}>
            <h2 className={classes.bannerTitle}>Special Offer</h2>
            <h4 className={classes.bannerText}>Upto 50% Off</h4>
            <div style={{ textAlign: "left" }}>
              <Button className={classes.btn}>Find out more</Button>
              <Button className={classes.btn}>Explore</Button>
            </div>
          </div>
        </Slide>
      </Paper>
    </Carousel>
  );
};

export default Banner;
