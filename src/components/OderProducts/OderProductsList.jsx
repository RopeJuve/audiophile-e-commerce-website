import "./_OderProductsList.scss";
import { useNavigate } from "react-router-dom";

const ProductCart = ({ imgUrl, title, slug }) => {
  const navigate = useNavigate();
  return (
    <div className="product-cart__container">
      <img src={imgUrl} alt={slug} />
      <h6>{title}</h6>
      <button onClick={() => navigate(`/${slug}`)}>See Product</button>
    </div>
  );
};

const OderProductsList = ({ others }) => {
  return (
    <div className="others__container">
      <h6>you may also like</h6>
      {others.map((product, index) => (
        <ProductCart
          key={index}
          imgUrl={product.image.mobile}
          title={product.name}
          slug={product.slug}
        />
      ))}
    </div>
  );
};

export default OderProductsList;
