import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./_Hero.scss";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: "(max-width: 48em)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 48em) and (max-width: 62em)",
  });

  const isDesktop = useMediaQuery({
    query: '(min-width: 62.5rem)'
  })
  return (
    <div className="hero__container">
      {isDesktop && (
        <img src="./assets/home/desktop/image-hero.jpg" alt="hero img" />
      )}
      {isTablet && (
        <img src="./assets/home/tablet/image-header.jpg" alt="hero img" />
      )}
      {isMobile && (
        <img src="./assets/home/mobile/image-header.jpg" alt="hero img" />
      )}
      <div className="hero__container-prod-content">
        <div className="overline">new Product</div>
        <h2>xx99 mark ii headphones</h2>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button variant={isDesktop ? 'addToCart' : 'primary'} onClick={() => navigate('/xx99-mark-two-headphones')
        }>See Product</Button>
      </div>
    </div>
  );
};

export default Hero;
