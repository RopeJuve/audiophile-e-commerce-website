import { useMediaQuery } from "react-responsive";
import "./_Footer1.scss";

const Footer1 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 47em)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 48em)(max-width: 62em)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 62.5em)",
  });
  return (
    <div className="footer1__container">
      {isDesktop && (
        <img src="./assets/shared/desktop/image-best-gear.jpg" alt="" />
      )}
      {isTablet && (
        <img src="./assets/shared/tablet/image-best-gear.jpg" alt="" />
      )}
      {isMobile && <img src="./assets/shared/mobile/image-best-gear.jpg" alt="" />}
      <div className="footer1__description">
        <h4>
          Bringing you the <span>best</span> audio gear
        </h4>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default Footer1;
