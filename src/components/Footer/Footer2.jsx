import { useMediaQuery } from "react-responsive";
import NavLinks from "../NavBar/NavLinks";
import "./_Footer2.scss";

const Footer2 = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 48em)",
  });
  return (
    <div className="footer2__container">
      <h6>audiophile</h6>
      <NavLinks variant={isTablet ? "nav" : "footer"} />
      <p className="footer-text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="social__wrapper">
        <p>Copyright 2021. All Rights Reserved</p>
        <div className="social-media">
          <img src="./assets/facebook.svg" alt="" />
          <img src="./assets/tweeter.svg" alt="" />
          <img src="./assets/instagram.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer2;
