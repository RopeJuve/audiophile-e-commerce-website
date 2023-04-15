import Button from "../Button/Button";
import "./_Cart.scss";
import { useNavigate } from "react-router-dom";

const Cart = ({ src, title }) => {
  const navigate = useNavigate();
  return (
    <div className="cart__container">
      <div className="cart__container-wrapper">
        <img src={src} alt="Cart"></img>
        <div className="shadow"></div>
        <h6>{title}</h6>
        <div className="shop-btn">
          <Button variant="outline" onClick={() => navigate(`/${title}`)}>
            shop <img src="./assets/icon-path.png" alt="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
