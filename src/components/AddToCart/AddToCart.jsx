import './_AddToCart.scss'
import Button from "../Button/Button";

const AddToCart = ({ price }) => {
  return (
    <>
      <div className="price">$ {price}</div>
      <div className="add-to-cart-btn">
        <div className='inputs'>
            <p>-</p>
            <p>1</p>
            <p>+</p>
        </div>
        <Button variant='primary'>Add To Cart</Button>
      </div>
    </>
  );
};

export default AddToCart;
