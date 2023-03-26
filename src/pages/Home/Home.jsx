import "./_Home.scss";
import NavBar from "../../components/NavBar/NavBar";
import LayoutHome from "../Layouts/LayoutHome";
import Hero from "../../components/Hero/Hero";
import Carts from "../../components/Carts/Carts";

const Home = () => {
  return (
    <div>
      <NavBar />
      <LayoutHome>
        <Hero />
        <Carts />
      </LayoutHome>
    </div>
  );
};

export default Home;
