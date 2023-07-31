import Button from "../Button/Button";
import "./_CartZX9.scss";
import { useNavigate } from "react-router-dom";

const CartZX9 = () => {
  const navigate = useNavigate();
  return (
    <div className="cartZX9__container-speaker-zx9">
      <div className="cartZX9__container-img-wrapper">
        <img src="./assets/home/mobile/image-speaker-zx9.png" alt="" />
      </div>
      <h2>ZX9 SPEAKER</h2>
      <p>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <Button variant="secondary" onClick={() => navigate('/zx9-speaker')}>see product</Button>
    </div>
  );
};

export default CartZX9;
