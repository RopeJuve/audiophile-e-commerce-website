import "./_Carts.scss";

import Cart from "./Cart";

const Carts = () => {
  return (
    <div className="carts__container">
      <Cart src='./assets/home/mobile/image-headphone-link.png' title="headphones" />
      <Cart src='./assets/home/mobile/image-speaker-link.png' title="speakers" />
      <Cart src='./assets/home/mobile/image-earphones-link.png' title="earphones" />
    </div>
  );
};

export default Carts;
