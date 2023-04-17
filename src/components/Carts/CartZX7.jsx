import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import "./_CartZX7.scss";

const CartZX7 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 47em)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 48em)",
  });
  return (
    <div className="cartZX7__container-speaker-zx7">
      {isTablet && (
        <img src="./assets/home/tablet/image-speaker-zx7.jpg" alt=""></img>
      )}
      {isMobile && (
        <img src="./assets/home/mobile/image-speaker-zx7.jpg" alt=""></img>
      )}
      <h4>ZX7 SPEAKER</h4>
      <Button variant="transparent">see product</Button>
    </div>
  );
};

export default CartZX7;
