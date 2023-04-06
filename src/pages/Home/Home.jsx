import "./_Home.scss";
import NavBar from "../../components/NavBar/NavBar";
import LayoutHome from "../Layouts/LayoutHome";
import Hero from "../../components/Hero/Hero";
import Carts from "../../components/Carts/Carts";
import ProductLinks from "../../components/ProductLinks/ProductLinks";
import Footer1 from "../../components/Footer/Footer1";
import Footer2 from "../../components/Footer/Footer2";

const Home = () => {
  return (
    <div>
      <NavBar />
      <LayoutHome>
        <Hero />
        <Carts />
        <ProductLinks />
      </LayoutHome>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Home;
