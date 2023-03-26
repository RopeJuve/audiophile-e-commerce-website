import "./_Carts.scss";
import headphone from "../../assets/home/mobile/image-headphone-link.png";
import speaker from "../../assets/home/mobile/image-speaker-link.png";
import earphones from "../../assets/home/mobile/image-earphones-link.png";
import Cart from "./Cart";

const Carts = () => {
  return (
    <div className="carts__container">
      <Cart src={headphone} title="headphones" />
      <Cart src={speaker} title="speaker" />
      <Cart src={earphones} title="earphones" />
    </div>
  );
};

export default Carts;
