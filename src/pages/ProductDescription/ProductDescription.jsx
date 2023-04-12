import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productData } from "../../data";
import Layout from "../Layout/Layout";

const ProductDescription = () => {
  const { pathname } = useLocation();
  const [product] = productData.filter((prod) => `/${prod.slug}` === pathname);
  const slugs = productData.map((prod) => prod.slug);
  console.log(slugs);
  return (
    <Layout>
      <ProductCard
        variant="description"
        imgUrl={product.image.mobile}
        name={product.name}
        isNew={product.new}
        description={product.description}
      />
    </Layout>
  );
};

export default ProductDescription;
