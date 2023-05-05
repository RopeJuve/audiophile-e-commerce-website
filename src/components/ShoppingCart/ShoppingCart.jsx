import "./_ShoppingCart.scss";
import Button from "../Button/Button";
import AddToCart from "../AddToCart/AddToCart";
import { useSelector } from "react-redux";

const ShoppingCartItem = ({ item }) => {
  return (
    <div className="f-row items">
      <img src={item.imgUrl} alt="" />
      <div className="f-col">
        <h6 className="h-cart">{item.name}</h6>
        <p className="cl-black">$ {item.price * item.quantity}</p>
      </div>
      <AddToCart price="" variant="cart" quantity={item.quantity} />
    </div>
  );
};

const ShoppingCart = ({ cartItems }) => {
  const totalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);

  return (
    <div className="shoppingCart__container">
      <div className="shoppingCart__wrapper">
        <div className="f-row">
          <h6>{`Cart (${totalQuantity})`}</h6>
          <Button
            variant="delete"
            onClick={() => window.localStorage.setItem("cartItems", "[]")}
          >
            Remove all
          </Button>
        </div>
        {cartItems?.map((item, index) => (
          <ShoppingCartItem key={index} item={item} />
        ))}
        <div className="checkout__container">
          <div className="f-row">
            <p className="cl-black">Total</p>
            <strong>$ {totalAmount}</strong>
          </div>
          <Button variant="checkout">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
