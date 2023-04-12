import "./_Cart.scss";


const Cart = ({ src, title }) => {
  return (
    <div className="cart__container">
      <div className="cart__container-wrapper">
        <img src={src} alt="Cart"></img>
        <div className="shadow"></div>
        <h6>{title}</h6>
        <div className="shop-btn">
          <a href={`/${title}`}>shop</a>
          <img src='./assets/icon-path.png' alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
