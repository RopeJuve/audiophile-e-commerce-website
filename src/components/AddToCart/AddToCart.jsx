import "./_AddToCart.scss";
import  classNames from 'classnames'
import Button from "../Button/Button";

const AddToCart = ({ price, variant }) => {

  const inputClasses = classNames({
    'inputs': variant === 'description',
    'inputs cart-inputs': variant === 'cart'
  })
  return (
    <>
      {variant === 'description' && <div className="price">$ {price}</div>}
      <div className="add-to-cart-btn">
        <div className={inputClasses}>
          <Button variant='minusPlus'>-</Button>
          <p className="op-1">1</p>
          <Button variant='minusPlus'>+</Button>
        </div>
        {variant === 'description' && <Button variant="addToCart">Add To Cart</Button>}
      </div>
    </>
  );
};

export default AddToCart;
