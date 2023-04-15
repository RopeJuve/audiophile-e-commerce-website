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
}) => {
  const navigate = useNavigate();

  const contentClass = classNames({
    "card-content": variant === "category",
    "card-content description": variant === "description",
  });
  /*  variant === "category" ? "card-content" : "card-content description"; */
  return (
    <div className="product-card__container">
      <div className="product-card__wrapper">
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
            <AddToCart price={price} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
