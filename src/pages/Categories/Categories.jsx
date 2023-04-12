import Layout from "../Layout/Layout";
import { productData } from "../../data";
import ProductCard from "../../components/ProductCard/ProductCard";
import Carts from "../../components/Carts/Carts";

const Categories = ({category}) => {
  const products = productData
    .filter((prod) => prod.category === category)
    .reverse();

  return (
    <Layout>
      {products.map(prod => (
        <ProductCard
          key={prod.id}
          imgUrl={prod.image.mobile}
          isNew={prod.new}
          name={prod.name}
          description={prod.description}
        />
      ))}
      <Carts />
    </Layout>
  );
};

export default Categories;
