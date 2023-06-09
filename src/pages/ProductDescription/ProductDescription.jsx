import { useLocation } from "react-router-dom";
import "./_ProductDescription.scss";
import Carts from "../../components/Carts/Carts";
import Features from "../../components/Features/Features";
import Gallery from "../../components/Gallery/Gallery";
import InBox from "../../components/InBox/InBox";
import OderProductsList from "../../components/OderProducts/OderProductsList";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productData } from "../../data";
import Layout from "../Layout/Layout";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/cart/cartSlice";

const ProductDescription = () => {
  const dispatch = useDispatch();

  const addCartItem = (quantity) => {
    const newProd = {
      imgUrl: product.image.mobile,
      name: product.name,
      price: product.price,
      quantity,
    };
    dispatch(addToCart(newProd));
  };

  const { pathname } = useLocation();
  const [product] = productData.filter((prod) => `/${prod.slug}` === pathname);
  const isTablet = useMediaQuery({
    query: "(min-width: 48em) and (max-width: 62em)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 62.5rem)",
  });
  return (
    <Layout>
      <ProductCard
        variant="description"
        imgUrl={
          isDesktop
            ? product.image.desktop
            : isTablet
            ? product.image.tablet
            : product.image.mobile
        }
        name={product.name}
        isNew={product.new}
        description={product.description}
        price={product.price}
        addCartItem={addCartItem}
      />
      <div className="product-features">
        <Features features={product.features} />
        <InBox box={product.includes} />
      </div>
      <Gallery
        first={product.gallery.first.mobile}
        second={product.gallery.second.mobile}
        third={product.gallery.third.mobile}
      />
      <OderProductsList others={product.others} />
      <Carts />
    </Layout>
  );
};

export default ProductDescription;
