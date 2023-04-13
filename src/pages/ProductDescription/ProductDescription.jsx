import { useLocation } from "react-router-dom";
import Carts from "../../components/Carts/Carts";
import Features from "../../components/Features/Features";
import InBox from "../../components/InBox/InBox";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productData } from "../../data";
import Layout from "../Layout/Layout";

const ProductDescription = () => {
  const { pathname } = useLocation();
  const [product] = productData.filter((prod) => `/${prod.slug}` === pathname);
  console.log(product.includes);
  return (
    <Layout>
      <ProductCard
        variant="description"
        imgUrl={product.image.mobile}
        name={product.name}
        isNew={product.new}
        description={product.description}
      />
      <Features features={product.features} />
      <InBox box={product.includes} />
      <Carts />
    </Layout>
  );
};

export default ProductDescription;
