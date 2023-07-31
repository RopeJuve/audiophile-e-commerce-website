import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import "./_CartZX7.scss";
import { useNavigate } from "react-router-dom";

const CartZX7 = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: "(max-width: 48em)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 48em) and (max-width: 62em)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 62.5em)",
  });
  return (
    <div className="cartZX7__container-speaker-zx7">
      {isDesktop && (
        <img src="./assets/home/desktop/image-speaker-zx7.jpg" alt=""></img>
      )}
      {isTablet && (
        <img src="./assets/home/tablet/image-speaker-zx7.jpg" alt=""></img>
      )}
      {isMobile && (
        <img src="./assets/home/mobile/image-speaker-zx7.jpg" alt=""></img>
      )}
      <h4>ZX7 SPEAKER</h4>
      <Button variant="transparent"  onClick={() => navigate('/zx7-speaker')}>see product</Button>
    </div>
  );
};

export default CartZX7;
