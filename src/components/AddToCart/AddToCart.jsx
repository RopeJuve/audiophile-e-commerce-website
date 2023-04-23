import "./_AddToCart.scss";
import  classNames from 'classnames'
import Button from "../Button/Button";
import { useState } from "react";

const AddToCart = ({ price, variant, addCartItem}) => {
  const [value, setValue] = useState(1)

  const inputClasses = classNames({
    'inputs': variant === 'description',
    'inputs cart-inputs': variant === 'cart'
  })
  return (
    <>
      {variant === 'description' && <div className="price">$ {price}</div>}
      <div className="add-to-cart-btn">
        <div className={inputClasses}>
          <Button variant='minusPlus' onClick={() => setValue(value - 1)}>-</Button>
          <p className="op-1">{value}</p>
          <Button variant='minusPlus' onClick={() => setValue(value + 1)}>+</Button>
        </div>
        {variant === 'description' && <Button variant="addToCart" onClick = {() => addCartItem(value)}>Add To Cart</Button>}
      </div>
    </>
  );
};

export default AddToCart;
