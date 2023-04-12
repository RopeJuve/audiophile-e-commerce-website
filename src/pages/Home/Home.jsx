import "./_Home.scss";

import Layout from "../Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Carts from "../../components/Carts/Carts";
import ProductLinks from "../../components/ProductLinks/ProductLinks";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Carts />
        <ProductLinks />
      </Layout>
    </div>
  );
};

export default Home;
