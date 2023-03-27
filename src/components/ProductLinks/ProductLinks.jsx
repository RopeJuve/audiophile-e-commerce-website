import "./_ProductLinks.scss";

import speakerZx7 from "../../assets/home/mobile/image-speaker-zx7.jpg";
import CartZX9 from "../Carts/CartZX9";

const ProductLinks = () => {
  return (
    <div className="productLinks__container">
      <CartZX9 />
      <div className="productLinks__container-speaker-zx7">
        <img src={speakerZx7} alt=""></img>
        <h4>ZX7 SPEAKER</h4>
        <button>see product</button>
      </div>
      <div className="productLinks__container-earphones-yx1"></div>
    </div>
  );
};

export default ProductLinks;
