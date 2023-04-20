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
    query: "(min-width: 48em) and (max-width: 62em)",
  });

  const isDesktop = useMediaQuery({
    query: '(min-width: 62.5rem)'
  })

  return (
    <Layout>
      <div className="heading">
        <h4>{category}</h4>
      </div>
      {products.map((prod, i) => (
        <ProductCard
          key={prod.id}
          variant='category'
          imgUrl={
            isDesktop ? prod.categoryImage.desktop : isTablet ? prod.categoryImage.tablet : prod.categoryImage.mobile
          }
          isNew={prod.new}
          name={prod.name}
          description={prod.description}
          slug={prod.slug}
          desktop={(i + 1) % 2 === 0 ? '2' : '1'}
        />
      ))}
      <Carts />
    </Layout>
  );
};

export default Categories;
