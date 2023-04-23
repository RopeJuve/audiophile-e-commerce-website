import classNames from 'classnames';
import { useState } from "react";
import Button from "../Button/Button";
import "./_AddToCart.scss";

const AddToCart = ({ price, variant, addCartItem, quantity }) => {
  const [value, setValue] = useState(quantity * 1)

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
        {variant === 'description' && <Button variant="addToCart" onClick={() => addCartItem(value)}>Add To Cart</Button>}
      </div>
    </>
  );
};

export default AddToCart;
