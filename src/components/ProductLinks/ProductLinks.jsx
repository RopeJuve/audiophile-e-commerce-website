import "./_ProductLinks.scss";
import CartZX9 from "../Carts/CartZX9";
import CartZX7 from "../Carts/CartZX7";
import CartYX1 from "../Carts/CartYX1";

const ProductLinks = () => {
  return (
    <div className="productLinks__container">
      <CartZX9 />
      <CartZX7 />
      <CartYX1 />
    </div>
  );
};

export default ProductLinks;
