import "./_ProductCard.scss";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Button from "../Button/Button";
import AddToCart from "../AddToCart/AddToCart";




const ProductCard = ({
  variant,
  imgUrl,
  isNew,
  name,
  description,
  slug,
  price,
  desktop,
  addCartItem
}) => {
  const navigate = useNavigate();


  const contentClass = classNames({
    "card-content": variant === "category",
    "card-content description": variant === "description",
  });

  const wrapperClass = classNames({
    "product-card__wrapper": variant === "category",
    "product-card__wrapper description-wrapper": variant === "description",
    "product-card__wrapper v-1": desktop === "1",
    "product-card__wrapper v-2": desktop === "2"
  });
  /*  variant === "category" ? "card-content" : "card-content description"; */
 
  return (
    <div className="product-card__container">
      <div className={wrapperClass}>
        <img src={imgUrl} alt="" />
        <div className={contentClass}>
          {isNew ? <h6>NEW PRODUCT</h6> : ""}
          <h4>{name}</h4>
          <p>{description}</p>
          {variant === "category" ? (
            <Button variant="primary" onClick={() => navigate(`/${slug}`)}>
              SEE Product
            </Button>
          ) : (
            <AddToCart price={price} variant='description' addCartItem={addCartItem} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
