import { useLocation } from "react-router-dom";

import Carts from "../../components/Carts/Carts";
import Features from "../../components/Features/Features";
import Gallery from "../../components/Gallery/Gallery";
import InBox from "../../components/InBox/InBox";
import OderProductsList from "../../components/OderProducts/OderProductsList";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productData } from "../../data";
import Layout from "../Layout/Layout";

const ProductDescription = () => {
  const { pathname } = useLocation();
  const [product] = productData.filter((prod) => `/${prod.slug}` === pathname);

  return (
    <Layout>
      <ProductCard
        variant="description"
        imgUrl={product.image.mobile}
        name={product.name}
        isNew={product.new}
        description={product.description}
        price={product.price}
      />
      <Features features={product.features} />
      <InBox box={product.includes} />
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
