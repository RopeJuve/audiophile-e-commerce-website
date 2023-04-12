import "./_ProductCard.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ variant, imgUrl, isNew, name, description, slug }) => {
  const navigate = useNavigate();

  const contentClass =
    variant === "category" ? "card-content" : "card-content description";
  return (
    <div className="product-card__container">
      <div className="product-card__wrapper">
        <img src={imgUrl} alt="" />
        <div className={contentClass}>
          {isNew ? <h6>NEW PRODUCT</h6> : ""}
          <h4>{name}</h4>
          <p>{description}</p>
          {variant === "category" ? (
            <button onClick={() => navigate(`/${slug}`)}>SEE Product</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
