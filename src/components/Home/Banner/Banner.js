import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";

const bannerData = [
  {
    id: 1,
    image: "https://i.ibb.co/hB5z41f/home-bg-1.png",
  },
  {
    id: 2,
    image: "https://i.ibb.co/1ZLtyFR/home-bg-2.png",
  },
  {
    id: 3,
    image: "https://i.ibb.co/LnBsRRv/home-bg-3.png",
  },
];

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "450px",
  },
  carousel: {
    marginTop: "50",
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Carousel
      autoplay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#4949494D",
          color: "#494949",
          borderRadius: 0,
          margin: 0,
        },
      }}
      className={classes.carousel}
    >
      {bannerData.map((item) => (
        <img src={item.image} alt="" key={item.id} className={classes.image} />
      ))}
    </Carousel>
  );
};

export default Banner;
