import "./_CartYX1.scss";
import earphone from '../../assets/home/mobile/image-earphones-yx1.jpg'

const CartYX1 = () => {
  return (
    <div className="cartYX1__container">
      <img src={earphone} alt="" />
      <div className="cartYX1__wrapper">
        <h4>yx1 earphones</h4>
        <button>see product</button>
      </div>
    </div>
  );
};

export default CartYX1;
