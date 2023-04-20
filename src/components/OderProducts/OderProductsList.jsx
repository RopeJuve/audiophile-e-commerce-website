import "./_OderProductsList.scss";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useMediaQuery } from "react-responsive";

const ProductCart = ({ imgUrl, title, slug }) => {
  const navigate = useNavigate();
  return (
    <div className="product-cart__container">
      <img src={imgUrl} alt={slug} />
      <h6>{title}</h6>
      <Button variant="primary" onClick={() => navigate(`/${slug}`)}>
        See Product
      </Button>
    </div>
  );
};

const OderProductsList = ({ others }) => {

  const isTablet = useMediaQuery({
    query: "(min-width: 48em) and (max-width: 62em)",
  });

  const isDesktop = useMediaQuery({
    query: '(min-width: 62.5rem)'
  })
  return (
    <div className="others__container">
      <h6>you may also like</h6>
      {others.map((product, index) => (
        <ProductCart
          key={index}
          imgUrl={isDesktop ? product.image.desktop : isTablet ? product.image.tablet : product.image.mobile}
          title={product.name}
          slug={product.slug}
        />
      ))}
    </div>
  );
};

export default OderProductsList;
