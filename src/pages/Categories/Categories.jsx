import "./_Categories.scss";
import Layout from "../Layout/Layout";
import { productData } from "../../data";
import ProductCard from "../../components/ProductCard/ProductCard";
import Carts from "../../components/Carts/Carts";
import { useMediaQuery } from "react-responsive";

const Categories = ({ category }) => {
  const products = productData
    .filter((prod) => prod.category === category)
    .reverse();

  const isTablet = useMediaQuery({
    query: "(min-width: 48em)",
  });

  return (
    <Layout>
      <div className="heading">
        <h4>{category}</h4>
      </div>
      {products.map((prod) => (
        <ProductCard
          key={prod.id}
          variant="category"
          imgUrl={
            isTablet ? prod.categoryImage.tablet : prod.categoryImage.mobile
          }
          isNew={prod.new}
          name={prod.name}
          description={prod.description}
          slug={prod.slug}
        />
      ))}
      <Carts />
    </Layout>
  );
};

export default Categories;
