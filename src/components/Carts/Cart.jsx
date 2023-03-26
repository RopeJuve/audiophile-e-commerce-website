import "./_Cart.scss";
import path from "../../assets/icon-path.png";

const Cart = ({ src, title }) => {
  return (
    <div className="cart__container">
      <div className="cart__container-wrapper">
        <img src={src} alt="Cart"></img>
        <div className="shadow"></div>
        <h6>{title}</h6>
        <div className="shop-btn">
          <a href="/">shop</a>
          <img src={path} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
