import "./_Home.scss";
import NavBar from "../../components/NavBar/NavBar";
import LayoutHome from "../Layouts/LayoutHome";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <NavBar />
      <LayoutHome>
        <Hero />
      </LayoutHome>
    </div>
  );
};

export default Home;
