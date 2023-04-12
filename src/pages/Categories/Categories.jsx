import "./_Categories.scss";
import Layout from "../Layout/Layout";
import { productData } from "../../data";
import ProductCard from "../../components/ProductCard/ProductCard";
import Carts from "../../components/Carts/Carts";

const Categories = ({ category }) => {
  const products = productData
    .filter((prod) => prod.category === category)
    .reverse();

  return (
    <Layout>
      <div className="heading">
        <h4>{category}</h4>
      </div>
      {products.map((prod) => (
        <ProductCard
          key={prod.id}
          variant="category"
          imgUrl={prod.image.mobile}
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
