import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import "./_CartYX1.scss";

const CartYX1 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 47em)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 48em)",
  });
  return (
    <div className="cartYX1__container">
      {isTablet && (
        <img src="./assets/home/tablet/image-earphones-yx1.jpg" alt="" />
      )}
      {isMobile && (
        <img src="./assets/home/mobile/image-earphones-yx1.jpg" alt="" />
      )}
      <div className="cartYX1__wrapper">
        <h4>yx1 earphones</h4>
        <Button variant="transparent">see product</Button>
      </div>
    </div>
  );
};

export default CartYX1;
