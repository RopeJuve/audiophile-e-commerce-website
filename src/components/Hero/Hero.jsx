import Button from "../Button/Button";
import "./_Hero.scss";
import { useMediaQuery } from 'react-responsive'


const Hero = () => {
  const isTablet = useMediaQuery({
    query: '(min-width: 48em)'
  })
  return (
    <div className="hero__container">
      {isTablet && <img src='./assets/home/tablet/image-header.jpg' alt="hero img" />}
      {/* <img src='./assets/home/mobile/image-header.jpg' alt="hero img" /> */}
      <div className="hero__container-prod-content">
        <div className="overline">new Product</div>
        <h2>xx99 mark ii headphones</h2>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button variant='primary'>See Product</Button>
      </div>
    </div>
  );
};

export default Hero;
